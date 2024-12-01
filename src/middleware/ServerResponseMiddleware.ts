import statuses from 'statuses'
import { IBlueprint } from '@stone-js/core'
import { NextPipe } from '@stone-js/pipeline'
import { NodeHttpAdapterContext } from '../declarations'
import { ServerResponseWrapper } from '../ServerResponseWrapper'
import { BinaryFileResponse, streamFile } from '@stone-js/http-core'
import { NodeHttpAdapterError } from '../errors/NodeHttpAdapterError'

/**
 * Middleware for handling server responses and transforming them into the appropriate HTTP responses.
 *
 * This middleware processes outgoing responses and attaches the necessary headers, status codes,
 * and body content to the HTTP response.
 */
export class ServerResponseMiddleware {
  /**
   * The blueprint for resolving configuration and dependencies.
   */
  private readonly blueprint: IBlueprint

  /**
   * Create a ServerResponseMiddleware.
   *
   * @param {blueprint} options - Options for creating the ServerResponseMiddleware.
   */
  constructor ({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint
  }

  /**
   * Handles the outgoing response, processes it, and invokes the next middleware in the pipeline.
   *
   * @param context - The adapter context containing the raw event, execution context, and other data.
   * @param next - The next middleware to be invoked in the pipeline.
   * @returns A promise resolving to the processed context.
   * @throws {NodeHttpAdapterError} If required components are missing in the context.
   */
  async handle (context: NodeHttpAdapterContext, next: NextPipe<NodeHttpAdapterContext, ServerResponseWrapper>): Promise<ServerResponseWrapper> {
    if (context.rawEvent === undefined || context.incomingEvent === undefined || context.outgoingResponse === undefined || context.rawResponseBuilder?.add === undefined) {
      throw new NodeHttpAdapterError('The context is missing required components.')
    }

    context
      .rawResponseBuilder
      .add('headers', context.outgoingResponse.headers)
      .add('statusCode', context.outgoingResponse.statusCode ?? 500)
      .add('statusMessage', context.outgoingResponse.statusMessage ?? statuses.message[context.outgoingResponse.statusCode ?? 500])

    if (!context.incomingEvent.isMethod('HEAD')) {
      if (context.outgoingResponse instanceof BinaryFileResponse) {
        const rawEvent = context.rawEvent
        const file = context.outgoingResponse.file
        const options = this.blueprint.get<unknown>('stone.http.files.download', {})
        context
          .rawResponseBuilder
          .add('streamFile', async () => await streamFile(rawEvent, context.rawResponse, file, options))
      } else {
        context
          .rawResponseBuilder
          .add('body', context.outgoingResponse.content)
          .add('charset', context.outgoingResponse.charset)
      }
    }

    return await next(context)
  }
}

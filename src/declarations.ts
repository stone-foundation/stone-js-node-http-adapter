import { ServerResponseWrapper } from './ServerResponseWrapper'
import { IncomingMessage, ServerResponse, ServerOptions, Server } from 'node:http'
import { ServerOptions as HttpsServerOptions, Server as HttpsServer } from 'node:https'
import { AdapterContext, IAdapterEventBuilder, RawResponseOptions } from '@stone-js/core'
import { IncomingHttpEvent, IncomingHttpEventOptions, OutgoingHttpResponse } from '@stone-js/http-core'

/**
 * Represents options for configuring a Node.js HTTP or HTTPS server.
 */
export type NodeServerOptions = NodeHttpServerOptions | NodeHttpsServerOptions

/**
 * Represents options for configuring a Node.js HTTP server.
 *
 * Extends the `ServerOptions` type from Node.js to support strongly typed
 * `IncomingMessage` and `ServerResponse` instances.
 */
export type NodeHttpServerOptions = ServerOptions<
  typeof IncomingMessage,
  typeof ServerResponse<InstanceType<typeof IncomingMessage>>
>

/**
 * Represents options for configuring a Node.js HTTPS server.
 *
 * Extends the `HttpsServerOptions` type from Node.js to support strongly typed
 * `IncomingMessage` and `ServerResponse` instances.
 */
export type NodeHttpsServerOptions = HttpsServerOptions<
  typeof IncomingMessage,
  typeof ServerResponse<InstanceType<typeof IncomingMessage>>
>

/**
 * Represents a Node.js HTTP or HTTPS server.
 *
 * Combines both HTTP and HTTPS server types to allow flexibility in choosing the server type.
 */
export type NodeHttpServer =
  | HttpsServer<typeof IncomingMessage, typeof ServerResponse>
  | Server<typeof IncomingMessage, typeof ServerResponse>

/**
 * Extends the `AdapterContext` interface to provide additional properties for the Node.js HTTP adapter.
 *
 * This context includes the raw HTTP response (`ServerResponse`) in addition to the standard
 * Stone.js adapter context properties.
 */
export interface NodeHttpAdapterContext extends AdapterContext<
IncomingMessage,
ServerResponse,
NodeHttpServer,
IncomingHttpEvent,
IncomingHttpEventOptions,
OutgoingHttpResponse
> {
  /**
   * The raw HTTP response object associated with the current request.
   */
  rawResponse: ServerResponse
}

/**
 * Represents the response builder for the Node http Adapter.
 */
export type NodeHttpAdapterResponseBuilder = IAdapterEventBuilder<RawHttpResponseOptions, ServerResponseWrapper>

/**
 * Represents options for configuring a raw HTTP response.
 *
 * Extends the `RawResponseOptions` interface to include additional properties
 * for managing response content, headers, status codes, and streaming files.
 */
export interface RawHttpResponseOptions extends RawResponseOptions {
  /**
   * The body of the HTTP response. Can be of any type, including strings, objects, or buffers.
   */
  body: unknown

  /**
   * The character set used for encoding the response body. Defaults to `utf-8` if not specified.
   */
  charset?: string

  /**
   * The HTTP status code of the response (e.g., `200`, `404`).
   */
  statusCode: number

  /**
   * The status message accompanying the HTTP status code (e.g., `OK`, `Not Found`).
   */
  statusMessage: string

  /**
   * Headers to include in the HTTP response.
   * Can be provided as a `Map<string, string>` or `Headers` object.
   */
  headers: Map<string, string> | Headers

  /**
   * A function to stream a file as the HTTP response.
   * Can be synchronous or asynchronous.
   */
  streamFile: () => void | Promise<void>
}

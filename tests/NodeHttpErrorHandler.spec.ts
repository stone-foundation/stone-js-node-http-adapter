import mime from 'mime/lite'
import { Mock } from 'vitest'
import { HTTP_INTERNAL_SERVER_ERROR } from '@stone-js/http-core'
import { NodeHttpErrorHandler } from '../src/NodeHttpErrorHandler'
import { AdapterErrorContext, ILogger, IBlueprint } from '@stone-js/core'

const MockAcceptsType: any = vi.fn(() => 'json')

vi.mock('accepts', () => ({
  type: vi.fn(() => 'json'),
  default: () => ({ type: MockAcceptsType })
}))

vi.mock('mime/lite', () => ({
  getType: vi.fn(() => 'application/json'),
  default: { getType: vi.fn(() => 'application/json') }
}))

vi.mock('statuses', () => ({
  default: { message: { [HTTP_INTERNAL_SERVER_ERROR]: 'Internal Server Error' } }
}))

describe('NodeHttpErrorHandler', () => {
  let mockLogger: ILogger
  let mockBlueprint: IBlueprint
  let handler: NodeHttpErrorHandler
  let mockContext: AdapterErrorContext<any, any, any>

  beforeEach(() => {
    mockLogger = {
      error: vi.fn()
    } as unknown as ILogger

    mockBlueprint = {
      get: () => () => mockLogger
    } as unknown as IBlueprint

    mockContext = {
      rawEvent: {
        headers: {
          'content-type': 'application/json'
        }
      } as any,
      rawResponseBuilder: {
        add: vi.fn().mockReturnThis(),
        build: vi.fn().mockReturnValue({
          respond: vi.fn().mockReturnValue('response')
        })
      }
    } as unknown as AdapterErrorContext<any, any, any>

    handler = new NodeHttpErrorHandler({ blueprint: mockBlueprint })
  })

  test('should handle an error and return a response with correct headers', () => {
    const error = new Error('Something went wrong')

    const response = handler.handle(error, mockContext)

    expect(mockContext.rawResponseBuilder.add).toHaveBeenCalledWith(
      'headers',
      expect.any(Headers)
    )
    expect(mockContext.rawResponseBuilder.add).toHaveBeenCalledWith(
      'statusCode',
      HTTP_INTERNAL_SERVER_ERROR
    )
    expect(mockContext.rawResponseBuilder.add).toHaveBeenCalledWith(
      'statusMessage',
      'Internal Server Error'
    )
    expect(mockLogger.error).toHaveBeenCalledWith('Something went wrong', { error })
    expect(response.build().respond()).toBe('response')
  })

  test('should default to text/plain if mime.getType returns undefined', () => {
    (mime.getType as unknown as Mock).mockReturnValueOnce(undefined)

    const error = new Error('Fallback mime type')
    error.cause = { status: HTTP_INTERNAL_SERVER_ERROR }
    mockContext.rawEvent.headers['content-type'] = undefined

    const response = handler.handle(error, mockContext)

    expect(mockContext.rawResponseBuilder.add).toHaveBeenCalledWith(
      'headers',
      expect.any(Headers)
    )
    expect(mockLogger.error).toHaveBeenCalledWith('Fallback mime type', { error })
    expect(response.build().respond()).toBe('response')
  })

  test('should handle false return from accepts.type', () => {
    MockAcceptsType.mockReturnValueOnce(false)

    const error = new Error('Accepts returned false')

    const response = handler.handle(error, mockContext)

    expect(mockContext.rawResponseBuilder.add).toHaveBeenCalledWith(
      'headers',
      expect.any(Headers)
    )
    expect(mockLogger.error).toHaveBeenCalledWith('Accepts returned false', { error })
    expect(response.build().respond()).toBe('response')
  })
})

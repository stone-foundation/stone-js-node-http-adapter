[**Node Adapter Documentation**](../../README.md)

***

[Node Adapter Documentation](../../README.md) / [declarations](../README.md) / ServerMiddleware

# Type Alias: ServerMiddleware()

> **ServerMiddleware** = (`req`, `res`, `next`) => `void`

Defined in: [node-http-adapter/src/declarations.ts:79](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/declarations.ts#L79)

Represents a platform server middleware function that processes HTTP requests and responses.

Middleware functions are called with the HTTP request, response objects, and a `next` function
to pass control to the next middleware in the stack. Middleware can modify the request and
response objects, or handle them completely.

## Parameters

### req

`IncomingMessage` & `Record`\<`string`, `any`\>

The HTTP request object, extended with custom properties.

### res

`ServerResponse` & `Record`\<`string`, `any`\>

The HTTP response object, extended with custom properties.

### next

(`err?`) => `void`

A callback to pass control to the next middleware. If called with an error, it invokes the error-handling middleware.

## Returns

`void`

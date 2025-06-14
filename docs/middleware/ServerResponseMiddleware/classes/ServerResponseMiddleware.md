[**Node Adapter Documentation**](../../../README.md)

***

[Node Adapter Documentation](../../../README.md) / [middleware/ServerResponseMiddleware](../README.md) / ServerResponseMiddleware

# Class: ServerResponseMiddleware

Defined in: [node-http-adapter/src/middleware/ServerResponseMiddleware.ts:14](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/middleware/ServerResponseMiddleware.ts#L14)

Middleware for handling server responses and transforming them into the appropriate HTTP responses.

This middleware processes outgoing responses and attaches the necessary headers, status codes,
and body content to the HTTP response.

## Constructors

### Constructor

> **new ServerResponseMiddleware**(`options`): `ServerResponseMiddleware`

Defined in: [node-http-adapter/src/middleware/ServerResponseMiddleware.ts:25](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/middleware/ServerResponseMiddleware.ts#L25)

Create a ServerResponseMiddleware.

#### Parameters

##### options

Options for creating the ServerResponseMiddleware.

###### blueprint

`IBlueprint`

#### Returns

`ServerResponseMiddleware`

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

Defined in: [node-http-adapter/src/middleware/ServerResponseMiddleware.ts:37](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/middleware/ServerResponseMiddleware.ts#L37)

Handles the outgoing response, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md), [`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

A promise resolving to the processed context.

#### Throws

If required components are missing in the context.

[**Node Adapter Documentation**](../../../README.md)

***

[Node Adapter Documentation](../../../README.md) / [middleware/FilesEventMiddleware](../README.md) / FilesEventMiddleware

# Class: FilesEventMiddleware

Defined in: [node-http-adapter/src/middleware/FilesEventMiddleware.ts:12](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/middleware/FilesEventMiddleware.ts#L12)

Class representing a FilesEventMiddleware.

## Author

Mr. Stone <evensstone@gmail.com>

## Constructors

### Constructor

> **new FilesEventMiddleware**(`options`): `FilesEventMiddleware`

Defined in: [node-http-adapter/src/middleware/FilesEventMiddleware.ts:23](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/middleware/FilesEventMiddleware.ts#L23)

Create a FilesEventMiddleware.

#### Parameters

##### options

Options for creating the FilesEventMiddleware.

###### blueprint

`IBlueprint`

#### Returns

`FilesEventMiddleware`

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

Defined in: [node-http-adapter/src/middleware/FilesEventMiddleware.ts:36](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/middleware/FilesEventMiddleware.ts#L36)

Handles the incoming event, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md), [`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

A promise that resolves to the destination type after processing.

#### Throws

If required components such as the rawEvent or IncomingEventBuilder are not provided.

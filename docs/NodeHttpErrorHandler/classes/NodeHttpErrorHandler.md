[**Node Adapter Documentation**](../../README.md)

***

[Node Adapter Documentation](../../README.md) / [NodeHttpErrorHandler](../README.md) / NodeHttpErrorHandler

# Class: NodeHttpErrorHandler

Defined in: [node-http-adapter/src/NodeHttpErrorHandler.ts:27](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/NodeHttpErrorHandler.ts#L27)

Class representing an NodeHttpErrorHandler.

## Implements

- `IAdapterErrorHandler`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

## Constructors

### Constructor

> **new NodeHttpErrorHandler**(`options`): `NodeHttpErrorHandler`

Defined in: [node-http-adapter/src/NodeHttpErrorHandler.ts:35](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/NodeHttpErrorHandler.ts#L35)

Create an NodeHttpErrorHandler.

#### Parameters

##### options

[`NodeHttpErrorHandlerOptions`](../interfaces/NodeHttpErrorHandlerOptions.md)

NodeHttpErrorHandler options.

#### Returns

`NodeHttpErrorHandler`

## Methods

### handle()

> **handle**(`error`, `context`): `AdapterEventBuilderType`\<`ServerResponse`\<`IncomingMessage`\>\>

Defined in: [node-http-adapter/src/NodeHttpErrorHandler.ts:46](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/NodeHttpErrorHandler.ts#L46)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<`IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

The context of the adapter.

#### Returns

`AdapterEventBuilderType`\<`ServerResponse`\<`IncomingMessage`\>\>

The raw response builder.

#### Implementation of

`IAdapterErrorHandler.handle`

[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [NodeHttpErrorHandler](../README.md) / NodeHttpErrorHandler

# Class: NodeHttpErrorHandler

Defined in: [node-http-adapter/src/NodeHttpErrorHandler.ts:27](https://github.com/stonemjs/node-http-adapter/blob/88c1ec7a02e567d3a955b5e02ef59e5d8858f965/src/NodeHttpErrorHandler.ts#L27)

Class representing an NodeHttpErrorHandler.

## Implements

- `IAdapterErrorHandler`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

## Constructors

### new NodeHttpErrorHandler()

> **new NodeHttpErrorHandler**(`options`): [`NodeHttpErrorHandler`](NodeHttpErrorHandler.md)

Defined in: [node-http-adapter/src/NodeHttpErrorHandler.ts:35](https://github.com/stonemjs/node-http-adapter/blob/88c1ec7a02e567d3a955b5e02ef59e5d8858f965/src/NodeHttpErrorHandler.ts#L35)

Create an NodeHttpErrorHandler.

#### Parameters

##### options

[`NodeHttpErrorHandlerOptions`](../interfaces/NodeHttpErrorHandlerOptions.md)

NodeHttpErrorHandler options.

#### Returns

[`NodeHttpErrorHandler`](NodeHttpErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `AdapterEventBuilderType`\<`ServerResponse`\>

Defined in: [node-http-adapter/src/NodeHttpErrorHandler.ts:46](https://github.com/stonemjs/node-http-adapter/blob/88c1ec7a02e567d3a955b5e02ef59e5d8858f965/src/NodeHttpErrorHandler.ts#L46)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

The context of the adapter.

#### Returns

`AdapterEventBuilderType`\<`ServerResponse`\>

The raw response builder.

#### Implementation of

`IAdapterErrorHandler.handle`

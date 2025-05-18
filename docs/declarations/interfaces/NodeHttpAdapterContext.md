[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeHttpAdapterContext

# Interface: NodeHttpAdapterContext

Defined in: [node-http-adapter/src/declarations.ts:49](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/declarations.ts#L49)

Extends the `AdapterContext` interface to provide additional properties for the Node.js HTTP adapter.

This context includes the raw HTTP response (`ServerResponse`) in addition to the standard
Stone.js adapter context properties.

## Extends

- `AdapterContext`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../type-aliases/NodeHttpServer.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>

## Properties

### executionContext

> `readonly` **executionContext**: [`NodeHttpServer`](../type-aliases/NodeHttpServer.md)

Defined in: core/dist/index.d.ts:1863

The executionContext of type ExecutionContextType.

#### Inherited from

`AdapterContext.executionContext`

***

### incomingEvent?

> `optional` **incomingEvent**: `IncomingHttpEvent`

Defined in: core/dist/index.d.ts:1867

The incomingEvent associated with the executionContext.

#### Inherited from

`AdapterContext.incomingEvent`

***

### incomingEventBuilder

> `readonly` **incomingEventBuilder**: `IAdapterEventBuilder`\<`IncomingHttpEventOptions`, `IncomingHttpEvent`\>

Defined in: core/dist/index.d.ts:1875

The incomingEventBuilder.

#### Inherited from

`AdapterContext.incomingEventBuilder`

***

### outgoingResponse?

> `optional` **outgoingResponse**: `OutgoingHttpResponse`

Defined in: core/dist/index.d.ts:1871

The outgoingResponse associated with the executionContext.

#### Inherited from

`AdapterContext.outgoingResponse`

***

### rawEvent

> `readonly` **rawEvent**: `IncomingMessage`

Defined in: core/dist/index.d.ts:1855

The rawEvent of type RawEventType.

#### Inherited from

`AdapterContext.rawEvent`

***

### rawResponse

> **rawResponse**: `ServerResponse`

Defined in: [node-http-adapter/src/declarations.ts:60](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/declarations.ts#L60)

The raw HTTP response object associated with the current request.

#### Overrides

`AdapterContext.rawResponse`

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`ServerResponse`\>\>

Defined in: core/dist/index.d.ts:1879

The rawResponseBuilder.

#### Inherited from

`AdapterContext.rawResponseBuilder`

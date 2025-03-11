[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [NodeHttpAdapter](../README.md) / NodeHttpAdapter

# Class: NodeHttpAdapter

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:51](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L51)

Node.js HTTP Adapter for the Stone.js framework.

The `NodeHTTPAdapter` is responsible for integrating a Node.js HTTP/HTTPS server
with the Stone.js framework, converting incoming HTTP requests into `IncomingHttpEvent`
instances, and processing outgoing responses into the `OutgoingHttpResponse` format.

It provides lifecycle hooks for initialization, termination, and error handling,
ensuring seamless integration with Stone.js.

## Template

The raw HTTP event type (e.g., `IncomingMessage`).

## Template

The raw HTTP response type (e.g., `ServerResponse`).

## Template

The server instance type (e.g., `NodeHttpServer`).

## Template

The Stone.js incoming event type (e.g., `IncomingHttpEvent`).

## Template

Options for creating an incoming event.

## Template

The outgoing response type (e.g., `OutgoingHttpResponse`).

## Template

The adapter context type (e.g., `NodeHttpAdapterContext`).

## Extends

- `Adapter`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`, [`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)\>

## Constructors

### new NodeHttpAdapter()

> `protected` **new NodeHttpAdapter**(`blueprint`): [`NodeHttpAdapter`](NodeHttpAdapter.md)

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:87](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L87)

Constructs a `NodeHTTPAdapter` instance.

This constructor is protected and is intended to be used via the static `create` method.

#### Parameters

##### blueprint

`IBlueprint`

The application blueprint for dependency resolution.

#### Returns

[`NodeHttpAdapter`](NodeHttpAdapter.md)

#### Overrides

`Adapter< IncomingMessage, ServerResponse, NodeHttpServer, IncomingHttpEvent, IncomingHttpEventOptions, OutgoingHttpResponse, NodeHttpAdapterContext >.constructor`

## Properties

### blueprint

> `protected` `readonly` **blueprint**: `IBlueprint`\<`any`\>

Defined in: core/dist/index.d.ts:2722

#### Inherited from

`Adapter.blueprint`

***

### hooks

> `protected` `readonly` **hooks**: `AdapterHookType`\<[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md), `ServerResponse`\>

Defined in: core/dist/index.d.ts:2723

#### Inherited from

`Adapter.hooks`

***

### logger

> `protected` `readonly` **logger**: `ILogger`

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:61](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L61)

***

### middleware

> `protected` `readonly` **middleware**: `AdapterMixedPipeType`\<[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md), `ServerResponse`\>[]

Defined in: core/dist/index.d.ts:2724

#### Inherited from

`Adapter.middleware`

***

### resolvedErrorHandlers

> `protected` `readonly` **resolvedErrorHandlers**: `Record`\<`string`, `IAdapterErrorHandler`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>\>

Defined in: core/dist/index.d.ts:2725

#### Inherited from

`Adapter.resolvedErrorHandlers`

***

### server

> `protected` `readonly` **server**: [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:62](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L62)

***

### url

> `protected` `readonly` **url**: `URL`

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:60](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L60)

## Methods

### buildRawResponse()

> `protected` **buildRawResponse**(`context`, `eventHandler`?): `Promise`\<`ServerResponse`\>

Defined in: core/dist/index.d.ts:2785

Build the raw response.

#### Parameters

##### context

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The event context.

##### eventHandler?

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`ServerResponse`\>

The raw response wrapper.

#### Inherited from

`Adapter.buildRawResponse`

***

### createServer()

> `protected` **createServer**(): [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:195](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L195)

Creates the HTTP or HTTPS server based on the adapter's configuration.

#### Returns

[`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

A `NodeHttpServer` instance.

***

### eventListener()

> `protected` **eventListener**(`rawEvent`, `rawResponse`): `Promise`\<`ServerResponse`\>

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:152](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L152)

Handles incoming HTTP requests and sends them through the adapter's event pipeline.

#### Parameters

##### rawEvent

`IncomingMessage`

The raw HTTP request object.

##### rawResponse

`ServerResponse`

The raw HTTP response object.

#### Returns

`Promise`\<`ServerResponse`\>

A promise resolving to a ServerResponse (e.g., `ServerResponse`).

***

### executeEventHandlerHooks()

> `protected` **executeEventHandlerHooks**(`hook`, `eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2813

Execute the event handler lifecycle hooks.

#### Parameters

##### hook

`KernelHookName`

The hook to execute.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeEventHandlerHooks`

***

### executeHooks()

> `protected` **executeHooks**(`name`, `context`?, `error`?): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2821

Execute adapter lifecycle hooks.

#### Parameters

##### name

`AdapterHookName`

The hook's name.

##### context?

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The event context.

##### error?

`any`

The error to handle.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeHooks`

***

### handleError()

> `protected` **handleError**(`error`, `context`): `Promise`\<`AdapterEventBuilderType`\<`ServerResponse`\>\>

Defined in: core/dist/index.d.ts:2777

Handle error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<`AdapterEventBuilderType`\<`ServerResponse`\>\>

The raw response.

#### Inherited from

`Adapter.handleError`

***

### handleEvent()

> `protected` **handleEvent**(`context`, `eventHandler`): `Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`ServerResponse`\>\>\>

Defined in: core/dist/index.d.ts:2769

Handle the event.

#### Parameters

##### context

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The event context.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`ServerResponse`\>\>\>

The raw response wrapper.

#### Inherited from

`Adapter.handleEvent`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md), `AdapterEventBuilderType`\<`ServerResponse`\>\>

Defined in: core/dist/index.d.ts:2791

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md), `AdapterEventBuilderType`\<`ServerResponse`\>\>

The pipeline options for transforming the event.

#### Inherited from

`Adapter.makePipelineOptions`

***

### onStart()

> `protected` **onStart**(): `Promise`\<`void`\>

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:130](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L130)

Lifecycle hook for adapter initialization.

This method is called during the adapter's startup process and performs tasks
such as setting up exception listeners and verifying the runtime environment.

#### Returns

`Promise`\<`void`\>

#### Throws

If the adapter is used outside a Node.js context.

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): `IAdapterErrorHandler`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

Defined in: core/dist/index.d.ts:2806

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

`IAdapterErrorHandler`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

The error handler.

#### Throws

IntegrationError

#### Inherited from

`Adapter.resolveErrorHandler`

***

### resolveEventHandler()

> `protected` **resolveEventHandler**(): `AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:2798

Get the event handler for the adapter.

#### Returns

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler for the adapter.

#### Throws

If the event handler is missing.

#### Inherited from

`Adapter.resolveEventHandler`

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:109](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L109)

Starts the HTTP/HTTPS server and listens for incoming requests.

#### Type Parameters

• **ExecutionResultType** = [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

#### Returns

`Promise`\<`ExecutionResultType`\>

A promise that resolves to an ExecutionResultType (usually `NodeHttpServer`) when the server starts successfully.

#### Throws

If the server encounters an error during initialization.

#### Example

```typescript
const adapter = NodeHTTPAdapter.create(options);
await adapter.run();
console.log('Server is running');
```

#### Overrides

`Adapter.run`

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`context`, `eventHandler`): `Promise`\<`ServerResponse`\>

Defined in: core/dist/index.d.ts:2761

Send the raw event through the destination.

#### Parameters

##### context

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The event context.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`ServerResponse`\>

Platform-specific response.

#### Throws

IntegrationError

#### Inherited from

`Adapter.sendEventThroughDestination`

***

### setupGlobalErrorHandlers()

> `protected` **setupGlobalErrorHandlers**(): `void`

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:221](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L221)

Sets up global error handlers for uncaught exceptions and unhandled rejections.
Ensures critical errors are logged and the process exits safely.

#### Returns

`void`

***

### setupShutdownHook()

> `protected` **setupShutdownHook**(): `void`

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:242](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L242)

Sets up a shutdown listener to gracefully stop the server on SIGINT.

#### Returns

`void`

***

### validateContextAndEventHandler()

> `protected` **validateContextAndEventHandler**(`context`, `eventHandler`): `void`

Defined in: core/dist/index.d.ts:2829

Validate the context and event handler.

#### Parameters

##### context

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The context to validate.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to validate.

#### Returns

`void`

#### Throws

IntegrationError

#### Inherited from

`Adapter.validateContextAndEventHandler`

***

### create()

> `static` **create**(`blueprint`): [`NodeHttpAdapter`](NodeHttpAdapter.md)

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:76](https://github.com/stonemjs/node-http-adapter/blob/a82d44fdef9d2985fec1e632575aee7065c1c3af/src/NodeHttpAdapter.ts#L76)

Creates a new `NodeHTTPAdapter` instance.

#### Parameters

##### blueprint

`IBlueprint`

The application blueprint.

#### Returns

[`NodeHttpAdapter`](NodeHttpAdapter.md)

A new instance of `NodeHTTPAdapter`.

#### Example

```typescript
const adapter = NodeHTTPAdapter.create(blueprint);
await adapter.run();
```

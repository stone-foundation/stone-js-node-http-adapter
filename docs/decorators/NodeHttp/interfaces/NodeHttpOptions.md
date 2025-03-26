[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [decorators/NodeHttp](../README.md) / NodeHttpOptions

# Interface: NodeHttpOptions

Defined in: [node-http-adapter/src/decorators/NodeHttp.ts:11](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/decorators/NodeHttp.ts#L11)

Interface for configuring the `NodeHttp` decorator.

This interface extends `NodeHttpAdapterConfig` and allows partial customization
of the Node.js HTTP adapter blueprint configuration.

## Extends

- `Partial`\<[`NodeHttpAdapterAdapterConfig`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md)\>

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:447

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`Partial.alias`

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:453

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`Partial.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:458

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`Partial.default`

***

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../../declarations/type-aliases/NodeHttpServer.md)\>\>

Defined in: core/dist/index.d.ts:441

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`Partial.errorHandlers`

***

### eventHandlerResolver?

> `optional` **eventHandlerResolver**: `AdapterEventHandlerResolver`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:436

The event handler resolver used to create instances of the event handler.

#### Inherited from

`Partial.eventHandlerResolver`

***

### isSsl?

> `optional` **isSsl**: `boolean`

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:35](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/options/NodeHttpAdapterBlueprint.ts#L35)

Determines if the server should use SSL.

#### Inherited from

`Partial.isSsl`

***

### middleware?

> `optional` **middleware**: `AdapterMixedPipeType`\<`AdapterContext`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../../declarations/type-aliases/NodeHttpServer.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>, `ServerResponse`\>[]

Defined in: core/dist/index.d.ts:432

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`Partial.middleware`

***

### platform?

> `optional` **platform**: `string`

Defined in: core/dist/index.d.ts:423

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`Partial.platform`

***

### printUrls?

> `optional` **printUrls**: `boolean`

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:45](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/options/NodeHttpAdapterBlueprint.ts#L45)

Determines if the server should print the URL when starting.

#### Inherited from

`Partial.printUrls`

***

### resolver?

> `optional` **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:427

The class type resolver used to create instances of the adapter.

#### Inherited from

`Partial.resolver`

***

### server?

> `optional` **server**: [`NodeServerOptions`](../../../declarations/type-aliases/NodeServerOptions.md)

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:40](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/options/NodeHttpAdapterBlueprint.ts#L40)

Additional server configurations for the Node HTTP server.

#### Inherited from

`Partial.server`

***

### serverMiddleware?

> `optional` **serverMiddleware**: [`ServerMiddleware`](../../../declarations/type-aliases/ServerMiddleware.md)[]

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:53](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/options/NodeHttpAdapterBlueprint.ts#L53)

The platform middleware used for processing platform node HTTP requests and responses.
This middleware is executed before the adapter middleware.
This middleware is lower-level and should be used for platform-specific processing.
You can connect or express like middleware here to process request just before the Stone adapter middleware.

#### Inherited from

`Partial.serverMiddleware`

***

### url?

> `optional` **url**: `string`

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:30](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/options/NodeHttpAdapterBlueprint.ts#L30)

The base URL used by the node http to run the application.

#### Inherited from

`Partial.url`

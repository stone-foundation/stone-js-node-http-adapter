[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterAdapterConfig

# Interface: NodeHttpAdapterAdapterConfig

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:19](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/options/NodeHttpAdapterBlueprint.ts#L19)

NodeHttpAdapterAdapterConfig Interface.

This interface defines the configuration options for the Node HTTP adapter
within the Stone.js framework. It includes settings such as the adapter's alias,
resolver, middleware, hooks, and server configurations.

## Extends

- `AdapterConfig`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../../declarations/type-aliases/NodeHttpServer.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:460

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`AdapterConfig.alias`

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:466

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`AdapterConfig.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:471

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`AdapterConfig.default`

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../../declarations/type-aliases/NodeHttpServer.md)\>\>

Defined in: core/dist/index.d.ts:454

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`AdapterConfig.errorHandlers`

***

### eventHandlerResolver

> **eventHandlerResolver**: `AdapterEventHandlerResolver`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:449

The event handler resolver used to create instances of the event handler.

#### Inherited from

`AdapterConfig.eventHandlerResolver`

***

### isSsl?

> `optional` **isSsl**: `boolean`

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:35](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/options/NodeHttpAdapterBlueprint.ts#L35)

Determines if the server should use SSL.

***

### middleware

> **middleware**: `AdapterMixedPipeType`\<`AdapterContext`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../../declarations/type-aliases/NodeHttpServer.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>, `ServerResponse`\>[]

Defined in: core/dist/index.d.ts:445

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`AdapterConfig.middleware`

***

### platform

> **platform**: `string`

Defined in: core/dist/index.d.ts:431

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`AdapterConfig.platform`

***

### printUrls?

> `optional` **printUrls**: `boolean`

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:45](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/options/NodeHttpAdapterBlueprint.ts#L45)

Determines if the server should print the URL when starting.

***

### resolver

> **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:440

The class type resolver used to create instances of the adapter.

#### Inherited from

`AdapterConfig.resolver`

***

### server

> **server**: [`NodeServerOptions`](../../../declarations/type-aliases/NodeServerOptions.md)

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:40](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/options/NodeHttpAdapterBlueprint.ts#L40)

Additional server configurations for the Node HTTP server.

***

### serverMiddleware

> **serverMiddleware**: [`ServerMiddleware`](../../../declarations/type-aliases/ServerMiddleware.md)[]

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:53](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/options/NodeHttpAdapterBlueprint.ts#L53)

The platform middleware used for processing platform node HTTP requests and responses.
This middleware is executed before the adapter middleware.
This middleware is lower-level and should be used for platform-specific processing.
You can connect or express like middleware here to process request just before the Stone adapter middleware.

***

### url

> **url**: `string`

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:30](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/options/NodeHttpAdapterBlueprint.ts#L30)

The base URL used by the node http to run the application.

***

### variant

> **variant**: `"server"` \| `"browser"` \| `"console"`

Defined in: core/dist/index.d.ts:436

The class type of the adapter.
This is used to identify the category of the adapter.

#### Inherited from

`AdapterConfig.variant`

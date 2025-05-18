[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeHttpServerOptions

# Type Alias: NodeHttpServerOptions

> **NodeHttpServerOptions**: `ServerOptions`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

Defined in: [node-http-adapter/src/declarations.ts:18](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/declarations.ts#L18)

Represents options for configuring a Node.js HTTP server.

Extends the `ServerOptions` type from Node.js to support strongly typed
`IncomingMessage` and `ServerResponse` instances.

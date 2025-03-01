[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeHttpsServerOptions

# Type Alias: NodeHttpsServerOptions

> **NodeHttpsServerOptions**: `HttpsServerOptions`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

Defined in: [node-http-adapter/src/declarations.ts:29](https://github.com/stonemjs/node-http-adapter/blob/88c1ec7a02e567d3a955b5e02ef59e5d8858f965/src/declarations.ts#L29)

Represents options for configuring a Node.js HTTPS server.

Extends the `HttpsServerOptions` type from Node.js to support strongly typed
`IncomingMessage` and `ServerResponse` instances.

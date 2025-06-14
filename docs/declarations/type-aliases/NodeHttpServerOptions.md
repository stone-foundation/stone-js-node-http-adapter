[**Node Adapter Documentation**](../../README.md)

***

[Node Adapter Documentation](../../README.md) / [declarations](../README.md) / NodeHttpServerOptions

# Type Alias: NodeHttpServerOptions

> **NodeHttpServerOptions** = `ServerOptions`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

Defined in: [node-http-adapter/src/declarations.ts:18](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/declarations.ts#L18)

Represents options for configuring a Node.js HTTP server.

Extends the `ServerOptions` type from Node.js to support strongly typed
`IncomingMessage` and `ServerResponse` instances.

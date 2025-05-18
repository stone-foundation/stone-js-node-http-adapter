[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [resolvers](../README.md) / nodeHttpAdapterResolver

# Function: nodeHttpAdapterResolver()

> **nodeHttpAdapterResolver**(`blueprint`): `IAdapter`

Defined in: [node-http-adapter/src/resolvers.ts:12](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/resolvers.ts#L12)

Resolver function for the HTTP adapter.

This function creates a `NodeHTTPAdapter` instance, which acts as the bridge between the HTTP server and the Stone.js framework.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The application blueprint for dependency resolution.

## Returns

`IAdapter`

An `AdapterResolver` instance for managing HTTP interactions.

[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / metaAdapterConfigMiddlewares

# Variable: metaAdapterConfigMiddlewares

> `const` **metaAdapterConfigMiddlewares**: `MetaPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: [node-http-adapter/src/middleware/configMiddleware.ts:43](https://github.com/stonemjs/node-http-adapter/blob/88c1ec7a02e567d3a955b5e02ef59e5d8858f965/src/middleware/configMiddleware.ts#L43)

Configuration for adapter processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.

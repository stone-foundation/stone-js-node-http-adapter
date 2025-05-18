[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / metaAdapterBlueprintMiddleware

# Variable: metaAdapterBlueprintMiddleware

> `const` **metaAdapterBlueprintMiddleware**: `MetaPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: [node-http-adapter/src/middleware/BlueprintMiddleware.ts:71](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/middleware/BlueprintMiddleware.ts#L71)

Configuration for adapter processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.

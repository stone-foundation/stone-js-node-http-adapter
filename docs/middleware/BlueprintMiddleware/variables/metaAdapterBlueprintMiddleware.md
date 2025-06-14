[**Node Adapter Documentation**](../../../README.md)

***

[Node Adapter Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / metaAdapterBlueprintMiddleware

# Variable: metaAdapterBlueprintMiddleware

> `const` **metaAdapterBlueprintMiddleware**: `MetaPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: [node-http-adapter/src/middleware/BlueprintMiddleware.ts:71](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/middleware/BlueprintMiddleware.ts#L71)

Configuration for adapter processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.

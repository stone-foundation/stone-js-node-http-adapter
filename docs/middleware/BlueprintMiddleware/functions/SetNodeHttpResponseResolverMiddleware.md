[**Node Adapter Documentation**](../../../README.md)

***

[Node Adapter Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / SetNodeHttpResponseResolverMiddleware

# Function: SetNodeHttpResponseResolverMiddleware()

> **SetNodeHttpResponseResolverMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [node-http-adapter/src/middleware/BlueprintMiddleware.ts:19](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/middleware/BlueprintMiddleware.ts#L19)

Middleware to dynamically set response resolver for adapter.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
SetNodeHttpResponseResolverMiddleware(context, next)
```

[**Node Adapter Documentation**](../../../README.md)

***

[Node Adapter Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / SetNodeHttpDefaultAdapterMiddleware

# Function: SetNodeHttpDefaultAdapterMiddleware()

> **SetNodeHttpDefaultAdapterMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [node-http-adapter/src/middleware/BlueprintMiddleware.ts:49](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/middleware/BlueprintMiddleware.ts#L49)

Middleware to dynamically set node http adapter as the default adapter.

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
SetNodeHttpDefaultAdapterMiddleware(context, next)
```

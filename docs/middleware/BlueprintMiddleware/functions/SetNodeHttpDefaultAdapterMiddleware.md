[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetNodeHttpDefaultAdapterMiddleware

# Function: SetNodeHttpDefaultAdapterMiddleware()

> **SetNodeHttpDefaultAdapterMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [node-http-adapter/src/middleware/BlueprintMiddleware.ts:49](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/middleware/BlueprintMiddleware.ts#L49)

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

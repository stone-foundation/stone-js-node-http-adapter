[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetNodeHttpResponseResolverMiddleware

# Function: SetNodeHttpResponseResolverMiddleware()

> **SetNodeHttpResponseResolverMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: node-http-adapter/src/middleware/BlueprintMiddleware.ts:19

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

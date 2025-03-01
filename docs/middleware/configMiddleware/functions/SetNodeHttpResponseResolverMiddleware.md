[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / SetNodeHttpResponseResolverMiddleware

# Function: SetNodeHttpResponseResolverMiddleware()

> **SetNodeHttpResponseResolverMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [node-http-adapter/src/middleware/configMiddleware.ts:19](https://github.com/stonemjs/node-http-adapter/blob/88c1ec7a02e567d3a955b5e02ef59e5d8858f965/src/middleware/configMiddleware.ts#L19)

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

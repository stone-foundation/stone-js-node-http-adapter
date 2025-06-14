[**Node Adapter Documentation**](../../../README.md)

***

[Node Adapter Documentation](../../../README.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterBlueprint

# Interface: NodeHttpAdapterBlueprint

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:71](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/options/NodeHttpAdapterBlueprint.ts#L71)

Stone blueprint.

This interface defines the main configuration options for the Stone.js framework.
It includes settings for the builder, adapters, and the main application,
while allowing additional custom options to be added.

## Extends

- `StoneBlueprint`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

## Indexable

\[`key`: `string`\]: `unknown`

Allow adding any additional custom properties.
The value of the custom properties can be of any type, depending on user requirements.

## Properties

### stone

> **stone**: [`NodeHttpAdapterConfig`](NodeHttpAdapterConfig.md)

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:75](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/options/NodeHttpAdapterBlueprint.ts#L75)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`

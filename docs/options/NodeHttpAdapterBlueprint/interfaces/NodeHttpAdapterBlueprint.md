[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterBlueprint

# Interface: NodeHttpAdapterBlueprint

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:71](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/options/NodeHttpAdapterBlueprint.ts#L71)

Stone blueprint.

This interface defines the main configuration options for the Stone.js framework.
It includes settings for the builder, adapters, and the main application,
while allowing additional custom options to be added.

## Extends

- `StoneBlueprint`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: [`NodeHttpAdapterConfig`](NodeHttpAdapterConfig.md)

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:75](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/options/NodeHttpAdapterBlueprint.ts#L75)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`

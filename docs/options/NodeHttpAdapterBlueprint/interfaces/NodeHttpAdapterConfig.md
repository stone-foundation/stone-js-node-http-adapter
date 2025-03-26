[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterConfig

# Interface: NodeHttpAdapterConfig

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:59](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/options/NodeHttpAdapterBlueprint.ts#L59)

Represents the NodeHttpAdapter configuration options for the application.

## Extends

- `Partial`\<`AppConfig`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>\>

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<`AdapterConfig`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>\>

Defined in: core/dist/index.d.ts:549

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

#### Inherited from

`Partial.adapter`

***

### adapters

> **adapters**: [`NodeHttpAdapterAdapterConfig`](NodeHttpAdapterAdapterConfig.md)[]

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:61](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/options/NodeHttpAdapterBlueprint.ts#L61)

Adapter configurations for the application.
List of all adapters used in the application.

#### Overrides

`Partial.adapters`

***

### aliases?

> `optional` **aliases**: `Record`\<`string`, `any`\>

Defined in: core/dist/index.d.ts:585

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Inherited from

`Partial.aliases`

***

### blueprint?

> `optional` **blueprint**: `BlueprintConfig`\<`any`\>

Defined in: core/dist/index.d.ts:544

Configuration options for building the application blueprint, including middleware and pipe priorities.

#### Inherited from

`Partial.blueprint`

***

### debug?

> `optional` **debug**: `boolean`

Defined in: core/dist/index.d.ts:523

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Inherited from

`Partial.debug`

***

### env?

> `optional` **env**: `Environment`

Defined in: core/dist/index.d.ts:518

The current environment in which the application is running.
Possible values are development, production, and test.

#### Inherited from

`Partial.env`

***

### fallback\_locale?

> `optional` **fallback\_locale**: `string`

Defined in: core/dist/index.d.ts:535

The fallback locale used when a translation for the default locale is unavailable.

#### Inherited from

`Partial.fallback_locale`

***

### http

> **http**: `Partial`\<`HttpConfig`\>

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:60](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/options/NodeHttpAdapterBlueprint.ts#L60)

***

### kernel?

> `optional` **kernel**: `KernelConfig`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:558

Kernel configurations for the application.

#### Inherited from

`Partial.kernel`

***

### lifecycleHooks?

> `optional` **lifecycleHooks**: `LifecycleHookType`\<`IBlueprint`\<`any`\>, `any`, `any`, `IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:590

Lifecycle hooks for the application.
These hooks allow you to run custom code at different stages of the application lifecycle.

#### Inherited from

`Partial.lifecycleHooks`

***

### listeners?

> `optional` **listeners**: `MetaEventListener`[]

Defined in: core/dist/index.d.ts:571

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Inherited from

`Partial.listeners`

***

### liveConfigurations?

> `optional` **liveConfigurations**: `MixedConfiguration`\<`any`\>[]

Defined in: core/dist/index.d.ts:596

Live configurations are loaded at each request.
By default, configurations are loaded once when the application starts.
This is useful for defining dynamic configurations that do not require a restart to apply changes.

#### Inherited from

`Partial.liveConfigurations`

***

### locale?

> `optional` **locale**: `string`

Defined in: core/dist/index.d.ts:531

The default locale for the application.

#### Inherited from

`Partial.locale`

***

### logger?

> `optional` **logger**: `LoggerConfig`

Defined in: core/dist/index.d.ts:562

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.logger`

***

### name?

> `optional` **name**: `string`

Defined in: core/dist/index.d.ts:513

The name of the application.

#### Inherited from

`Partial.name`

***

### providers?

> `optional` **providers**: `MixedServiceProvider`[]

Defined in: core/dist/index.d.ts:580

Service providers to be automatically loaded for each request to the application.

#### Inherited from

`Partial.providers`

***

### secret?

> `optional` **secret**: `string`

Defined in: core/dist/index.d.ts:540

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Inherited from

`Partial.secret`

***

### services?

> `optional` **services**: `MetaService`[]

Defined in: core/dist/index.d.ts:566

Services to be automatically registered when the application starts.

#### Inherited from

`Partial.services`

***

### subscribers?

> `optional` **subscribers**: `MixedEventSubscriber`[]

Defined in: core/dist/index.d.ts:576

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Inherited from

`Partial.subscribers`

***

### timezone?

> `optional` **timezone**: `string`

Defined in: core/dist/index.d.ts:527

The default timezone for the application.

#### Inherited from

`Partial.timezone`

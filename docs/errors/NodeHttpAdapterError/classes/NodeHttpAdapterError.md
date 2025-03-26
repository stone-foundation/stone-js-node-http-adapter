[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [errors/NodeHttpAdapterError](../README.md) / NodeHttpAdapterError

# Class: NodeHttpAdapterError

Defined in: [node-http-adapter/src/errors/NodeHttpAdapterError.ts:6](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/errors/NodeHttpAdapterError.ts#L6)

Custom error for node http adapter operations.

## Extends

- `IntegrationError`

## Constructors

### new NodeHttpAdapterError()

> **new NodeHttpAdapterError**(`message`, `options`?): [`NodeHttpAdapterError`](NodeHttpAdapterError.md)

Defined in: [node-http-adapter/src/errors/NodeHttpAdapterError.ts:7](https://github.com/stonemjs/node-http-adapter/blob/5be13a78fd98c615af1c99836e662ccd61afb0e8/src/errors/NodeHttpAdapterError.ts#L7)

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

#### Returns

[`NodeHttpAdapterError`](NodeHttpAdapterError.md)

#### Overrides

`IntegrationError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:3556

#### Inherited from

`IntegrationError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:3555

#### Inherited from

`IntegrationError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:3557

#### Inherited from

`IntegrationError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:3578

Converts the error to a formatted string representation.

#### Parameters

##### multiline?

`boolean`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

#### Inherited from

`IntegrationError.toString`

***

### create()

> `static` **create**\<`T`\>(`message`, `options`?): `T`

Defined in: core/dist/index.d.ts:3564

Create a RuntimeError.

#### Type Parameters

• **T** *extends* `RuntimeError` = `RuntimeError`

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Inherited from

`IntegrationError.create`

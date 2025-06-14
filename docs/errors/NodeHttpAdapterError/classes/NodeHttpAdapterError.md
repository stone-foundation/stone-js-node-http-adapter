[**Node Adapter Documentation**](../../../README.md)

***

[Node Adapter Documentation](../../../README.md) / [errors/NodeHttpAdapterError](../README.md) / NodeHttpAdapterError

# Class: NodeHttpAdapterError

Defined in: [node-http-adapter/src/errors/NodeHttpAdapterError.ts:6](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/errors/NodeHttpAdapterError.ts#L6)

Custom error for node http adapter operations.

## Extends

- `IntegrationError`

## Constructors

### Constructor

> **new NodeHttpAdapterError**(`message`, `options?`): `NodeHttpAdapterError`

Defined in: [node-http-adapter/src/errors/NodeHttpAdapterError.ts:7](https://github.com/stonemjs/node-http-adapter/blob/2d4cdca7f2d56ee189e6562c361aeaf96b9f1db2/src/errors/NodeHttpAdapterError.ts#L7)

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

#### Returns

`NodeHttpAdapterError`

#### Overrides

`IntegrationError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:3555

#### Inherited from

`IntegrationError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:3554

#### Inherited from

`IntegrationError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:3556

#### Inherited from

`IntegrationError.metadata`

## Methods

### toString()

> **toString**(`multiline?`): `string`

Defined in: core/dist/index.d.ts:3577

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

> `static` **create**\<`T`\>(`message`, `options?`): `T`

Defined in: core/dist/index.d.ts:3563

Create a RuntimeError.

#### Type Parameters

##### T

`T` *extends* `RuntimeError` = `RuntimeError`

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

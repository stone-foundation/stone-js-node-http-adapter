[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / RawHttpResponseOptions

# Interface: RawHttpResponseOptions

Defined in: [node-http-adapter/src/declarations.ts:91](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/declarations.ts#L91)

Represents options for configuring a raw HTTP response.

Extends the `RawResponseOptions` interface to include additional properties
for managing response content, headers, status codes, and streaming files.

## Extends

- `RawResponseOptions`

## Indexable

\[`k`: `string` \| `number` \| `symbol`\]: `unknown`

## Properties

### body

> **body**: `unknown`

Defined in: [node-http-adapter/src/declarations.ts:95](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/declarations.ts#L95)

The body of the HTTP response. Can be of any type, including strings, objects, or buffers.

***

### charset?

> `optional` **charset**: `string`

Defined in: [node-http-adapter/src/declarations.ts:100](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/declarations.ts#L100)

The character set used for encoding the response body. Defaults to `utf-8` if not specified.

***

### headers

> **headers**: `Map`\<`string`, `string`\> \| `Headers`

Defined in: [node-http-adapter/src/declarations.ts:116](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/declarations.ts#L116)

Headers to include in the HTTP response.
Can be provided as a `Map<string, string>` or `Headers` object.

***

### statusCode

> **statusCode**: `number`

Defined in: [node-http-adapter/src/declarations.ts:105](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/declarations.ts#L105)

The HTTP status code of the response (e.g., `200`, `404`).

***

### statusMessage

> **statusMessage**: `string`

Defined in: [node-http-adapter/src/declarations.ts:110](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/declarations.ts#L110)

The status message accompanying the HTTP status code (e.g., `OK`, `Not Found`).

***

### streamFile()

> **streamFile**: () => `void` \| `Promise`\<`void`\>

Defined in: [node-http-adapter/src/declarations.ts:122](https://github.com/stonemjs/node-http-adapter/blob/500ec3a560895d12bcb5ee96646928549d5bf6fb/src/declarations.ts#L122)

A function to stream a file as the HTTP response.
Can be synchronous or asynchronous.

#### Returns

`void` \| `Promise`\<`void`\>

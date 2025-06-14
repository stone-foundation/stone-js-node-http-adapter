
# Stone.js - Node HTTP Adapter

[![npm](https://img.shields.io/npm/l/@stone-js/node-http-adapter)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/@stone-js/node-http-adapter)](https://www.npmjs.com/package/@stone-js/node-http-adapter)
[![npm](https://img.shields.io/npm/dm/@stone-js/node-http-adapter)](https://www.npmjs.com/package/@stone-js/node-http-adapter)
![Maintenance](https://img.shields.io/maintenance/yes/2025)
[![Build Status](https://github.com/stone-foundation/stone-js-node-http-adapter/actions/workflows/main.yml/badge.svg)](https://github.com/stone-foundation/stone-js-node-http-adapter/actions/workflows/main.yml)
[![Publish Package to npmjs](https://github.com/stone-foundation/stone-js-node-http-adapter/actions/workflows/release.yml/badge.svg)](https://github.com/stone-foundation/stone-js-node-http-adapter/actions/workflows/release.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=stone-foundation_stone-js-node-http-adapter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=stone-foundation_stone-js-node-http-adapter)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=stone-foundation_stone-js-node-http-adapter&metric=coverage)](https://sonarcloud.io/summary/new_code?id=stone-foundation_stone-js-node-http-adapter)
[![Security Policy](https://img.shields.io/badge/Security-Policy-blue.svg)](./SECURITY.md)
[![CodeQL](https://github.com/stone-foundation/stone-js-node-http-adapter/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/stone-foundation/stone-js-node-http-adapter/security/code-scanning)
[![Dependabot Status](https://img.shields.io/badge/Dependabot-enabled-brightgreen.svg)](https://github.com/stone-foundation/stone-js-node-http-adapter/network/updates)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

The **Node HTTP Adapter** enables your Stone.js application to run on any Node.js HTTP server. It provides full runtime integration for traditional web environments while staying consistent with the Continuum Architecture.

---

## Introduction

In the Continuum Architecture, adapters are responsible for translating raw platform input into standardized `IncomingEvent` objects. The Node HTTP Adapter does this for Node.js environments using the built-in HTTP server module.

It transforms HTTP requests into `IncomingEvent` instances and converts your system’s `OutgoingResponse` into proper Node.js HTTP responses, with support for custom middleware, cookies, headers, and status codes.

## Installation

```bash
npm install @stone-js/node-http-adapter
```

> This package is **pure ESM**. Make sure your project uses ESM (`"type": "module"`) or configure your tooling accordingly.

## Usage

You can register the adapter using either the declarative or imperative API.

### Declarative API

```ts
import { NodeHttp } from '@stone-js/node-http-adapter'
import { StoneApp, IncomingEvent, IEventHandler } from '@stone-js/core'

@StoneApp()
@NodeHttp({ url: 'http://localhost:3000' })
export class Application implements IEventHandler<IncomingEvent> {
  handle(event: IncomingEvent) {
    const name = event.get<string>('name', 'World')
    return { message: `Hello ${name}` }
  }
}
```

### Imperative API

```ts
import { defineStoneApp, IncomingEvent, defineConfig, IBlueprint } from '@stone-js/core'
import { nodeHttpAdapterBlueprint, NODE_HTTP_PLATFORM } from '@stone-js/node-http-adapter'

const handler = (event: IncomingEvent) => {
  const name = event.get<string>('name', 'World')
  return { message: `Hi ${name}` }
}

export const App = defineStoneApp(handler, {}, [nodeHttpAdapterBlueprint])

export const AppConfig = defineConfig({
  afterConfigure(blueprint: IBlueprint) {
    if (blueprint.is('stone.adapter.platform', NODE_HTTP_PLATFORM)) {
      blueprint.set('stone.adapter.url', 'http://localhost:3000')
    }
  }
})
```

## What It Enables

* **HTTP Runtime for Node.js**
  Run your Stone.js app directly on top of Node’s native HTTP server (no Express needed).
* **Flexible Middleware Support**
  Add platform-level `serverMiddleware` before Stone.js middleware kicks in, great for logging, compression, etc.
  Connect-style middleware is supported, allowing you to use existing Node.js middleware libraries.
* **Full Lifecycle Integration**
  Supports integration hooks (`onStart`, `onStop`, `onHandlingAdapterError`, etc.) and Stone.js adapter middleware.
* **Universal Event Format**
  All HTTP requests are converted into `IncomingEvent` objects and handled by your system logic.
  And all `OutgoingResponse` objects are converted back to Node.js HTTP responses.
* **Customizable Server Options**
  Configure server options like port, host, and SSL through the adapter options.
  You can also set an alias for easy reference in your application.
* **Deep Platform Integration**
  Access the raw Node.js request and response objects, allowing for advanced use cases like streaming, file uploads, and more.
  The adapter provides a clean context object with all necessary information about the incoming request and outgoing response.
* **Built-in Event Builders**
  Use the provided event builders to create `IncomingHttpEvent` and `RawHttpResponse` objects, making it easy to work with HTTP events in a type-safe manner.
* **TypeScript Support**
  Fully typed with TypeScript, providing strong type safety for your HTTP events and responses.
* **Cookie and Header Management**
  Built-in support for cookies and headers, allowing you to easily manage request and response metadata.
* **File Uploads**
  Supports file uploads with automatic parsing of multipart/form-data requests, making it easy to handle file uploads in your application.
* **Error Handling**
  Provides a robust error handling mechanism, allowing you to catch and handle errors at the adapter level.
* **Performance Optimizations**
  Designed for high performance, leveraging Node.js's non-blocking I/O model to handle concurrent requests efficiently.
* **Alias and Default Configuration**
  Allows you to set an alias for the adapter and mark it as the default adapter, making it easy to reference in your application.
* **Current Adapter Tracking**
  Supports marking the adapter as the current active adapter, allowing you to manage multiple adapters in your application.

## Configuration Options

You can configure the adapter through the decorator or blueprint. Here are the available options:

| Option               | Type                                      | Description                                                              |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------------------ |
| `url`                | `string`                                  | The base server URL (e.g., `http://localhost:3000`).                     |
| `isSsl`              | `boolean`                                 | Whether to use HTTPS.                                                    |
| `server`             | `NodeServerOptions`                       | Raw HTTP server options (e.g., port, host).                              |
| `printUrls`          | `boolean`                                 | If `true`, logs server URL(s) at startup.                                |
| `serverMiddleware[]` | `Array<(req, res, next) => void>`         | Optional connect-style middleware (executes before Stone.js middleware). |
| `alias`              | `string`                                  | Optional alias for adapter reference.                                    |
| `default`            | `boolean`                                 | Whether this is the fallback/default adapter.                            |
| `current`            | `boolean`                                 | Whether this is the current active adapter at runtime.                   |
| `middleware`         | `AdapterMixedPipeType[]`                  | Array of Stone.js's middleware to apply to the adapter.                  |
| `errorHandlers`      | `Record<string, MetaAdapterErrorHandler>` | Error handlers for specific error types.                                 |

## Adapter Context Shape

When middleware or integration hooks execute, they receive the following context object:

```ts
interface NodeHttpAdapterContext {
  rawEvent: IncomingMessage;
  rawResponse?: ServerResponse;
  executionContext: NodeHttpServer;
  incomingEvent?: IncomingHttpEvent;
  outgoingResponse?: OutgoingHttpResponse;
  incomingEventBuilder: IAdapterEventBuilder<IncomingHttpEventOptions, IncomingHttpEvent>;
  rawResponseBuilder: IAdapterEventBuilder<RawHttpResponseOptions, IRawResponseWrapper<ServerResponse>>;
}
```

These values expose the full HTTP lifecycle and provide access to Stone.js event builders.

### Incoming HTTP Event Options

```ts
interface IncomingHttpEventOptions {
  url: URL;
  ip: string;
  ips?: string[];
  protocol?: string;
  method?: HttpMethods;
  queryString?: string;
  cookies?: CookieCollection;
  body?: Record<string, unknown>;
  files?: Record<string, UploadedFile[]>;
  headers?: Record<string, string> | Headers;
}
```

### Raw HTTP Response Options

```ts
interface RawHttpResponseOptions {
  body: unknown;
  charset?: string;
  statusCode: number;
  statusMessage: string;
  headers: Map<string, string> | Headers;
  streamFile?: () => void | Promise<void>;
}
```

## Summary

The `@stone-js/node-http-adapter` allows you to run Stone.js on any Node.js HTTP server with full control over requests and responses, clean lifecycle management, and deep platform integration. Whether you’re building a modern API, a full-stack SSR app, or a microservice, this adapter bridges the external HTTP world with your internal Stone.js system.

## Learn More

This package is part of the Stone.js ecosystem, a modern JavaScript framework built around the Continuum Architecture.

Explore the full documentation: https://stonejs.dev

## API documentation

* [API](https://github.com/stone-foundation/stone-js-node-http-adapter/blob/main/docs)

## Contributing

See [Contributing Guide](https://github.com/stone-foundation/stone-js-node-http-adapter/blob/main/CONTRIBUTING.md)

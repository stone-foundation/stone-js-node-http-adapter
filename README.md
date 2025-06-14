# Stone.js: Node HTTP Adapter

[![npm](https://img.shields.io/npm/l/@stone-js/node-http-adapter)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/@stone-js/node-http-adapter)](https://www.npmjs.com/package/@stone-js/node-http-adapter)
[![npm](https://img.shields.io/npm/dm/@stone-js/node-http-adapter)](https://www.npmjs.com/package/@stone-js/node-http-adapter)
![Maintenance](https://img.shields.io/maintenance/yes/2025)
[![Publish Package](https://github.com/stonemjs/node-http-adapter/actions/workflows/release.yml/badge.svg)](https://github.com/stonemjs/node-http-adapter/actions/workflows/release.yml)
[![Dependabot Status](https://img.shields.io/badge/Dependabot-enabled-brightgreen.svg?logo=dependabot)](https://github.com/stonemjs/node-http-adapter/network/updates)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

The **Node HTTP Adapter** bridges your Stone.js application with the native Node.js `http`/`https` server. It supports REST APIs, SSR rendering, and universal services, **without** needing Express, Fastify, or other web frameworks.

> [!NOTE]
> To understand the full adapter lifecycle and architecture, refer to the [Adapter Architecture Guide](https://stonejs.com/docs/architecture/adapter.html).

---

Use this adapter when you want to:

- Serve HTTP(S) requests using only the Node core API
- Run an API server or SSR web app
- Add custom platform middleware (e.g. logger, compression)

## Usage

You can use the adapter declaratively or imperatively:

### Declarative (with `@NodeHttp`)

```ts
import { NodeHttp } from '@stone-js/node-http-adapter'

@NodeHttp({
  url: 'http://localhost:3000',
  server: { port: 3000 },
  printUrls: true
})
class App {}
````

### Imperative (via `defineStoneApp`)

```ts
import { defineStoneApp, defineConfig } from '@stone-js/core'
import { nodeHttpAdapterBlueprint } from '@stone-js/node-http-adapter'

export const App = () => {}

export const MyStoneApp = defineStoneApp(App, {}, [nodeHttpAdapterBlueprint])

export const AppConfig = defineConfig({
  afterConfigure(blueprint) {
    blueprint.set('stone.adapter.url', 'http://localhost:3000')
    blueprint.set('stone.adapter.server', { port: 3000 })
  }
})
```

## Adapter Options

The `NodeHttpAdapter` accepts the following options via the decorator or config:

| Option               | Type                              | Description                                                            |
| -------------------- | --------------------------------- | ---------------------------------------------------------------------- |
| `url`                | `string`                          | The base server URL (e.g., `http://localhost:3000`).                   |
| `isSsl?`             | `boolean`                         | Whether to start an HTTPS server.                                      |
| `server`             | `NodeServerOptions`               | Options passed to `http.createServer()` (e.g., `port`, `host`).        |
| `printUrls?`         | `boolean`                         | Whether to print URLs at startup.                                      |
| `serverMiddleware[]` | `Array<(req, res, next) => void>` | Optional Connect-style middleware. Runs **before** Stone.js lifecycle. |

> [!TIP]
> You can plug in logging, security headers, or even Express-compatible middleware here.

## Adapter Context Shape

When processing a request, your middleware or hook listener receives the following context:

```ts
interface NodeHttpAdapterContext {
  readonly rawEvent: IncomingMessage
  rawResponse?: ServerResponse
  readonly executionContext: NodeHttpServer
  incomingEvent?: IncomingHttpEvent
  outgoingResponse?: OutgoingHttpResponse
  readonly incomingEventBuilder: IAdapterEventBuilder<IncomingHttpEventOptions, IncomingHttpEvent>
  readonly rawResponseBuilder: IAdapterEventBuilder<RawHttpResponseOptions, IRawResponseWrapper<ServerResponse>>
}
```

### ✅ Key Fields

* `rawEvent`: Node.js `IncomingMessage`
* `rawResponse`: Node.js `ServerResponse`
* `executionContext`: The `http.Server` instance
* `incomingEvent`: The normalized `IncomingHttpEvent`
* `outgoingResponse`: The resulting `OutgoingHttpResponse`
* `incomingEventBuilder` and `rawResponseBuilder`: Builders for internal usage

## Event Data Shapes

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

### Outgoing HTTP Response Options

```ts
interface RawHttpResponseOptions {
  body: unknown
  charset?: string
  statusCode: number
  statusMessage: string
  headers: Map<string, string> | Headers
  streamFile?: () => void | Promise<void>
}
```

## 📚 Learn More

* [🧠 Adapter Architecture](https://stonejs.com/docs/architecture/adapter.html)
* [📨 Incoming Events](https://stonejs.com/docs/essentials/incoming-event.html)
* [📤 Outgoing Responses](https://stonejs.com/docs/essentials/outgoing-response.html)

## 🤝 Contributing

See [Contributing Guide](https://github.com/stonemjs/node-http-adapter/blob/main/CONTRIBUTING.md).

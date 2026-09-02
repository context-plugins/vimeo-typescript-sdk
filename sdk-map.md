<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Vimeo API (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Vimeo API |
| Package | `vimeo-api` |
| Package version | `3.4.9` |
| API spec version | `3.4.9` |
| Import specifier | `vimeo-api` — the package root is the **only** entry. Deep imports (`vimeo-api/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/vimeo-api/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { PkceMethod, ServerEnvironment, VimeoApiClient } from "vimeo-api";

const client = new VimeoApiClient({
  serverEnvironment: ServerEnvironment.Production,
  bearer: "YOUR_BEARER_TOKEN",
  oauth2AuthorizationCode: {
    clientId: "YOUR_CLIENT_ID",
    redirectUri: "YOUR_REDIRECT_URI",
    pkce: PkceMethod.S256,
    promptForAuthorizationCode: (authorizationUrl, signal) => Promise.resolve("YOUR_AUTHORIZATION_CODE"),
  },
  oauth2ClientCredentials: { clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" },
});
```

The only constructor is `new VimeoApiClient(clientOptions: Partial<ClientOptions> = {})`, so `new VimeoApiClient()` is valid. Resources are memoized lazy getters on the client — `client.apiAppsWebhooks`, `client.apiInformationEssentials`, `client.authenticationExtrasAuthenticate`, `client.authenticationExtrasConvert`, `client.authenticationExtrasEssentials`, `client.authenticationExtrasExchange`, `client.categoriesChannels`, `client.categoriesEssentials`, `client.categoriesGroups`, `client.categoriesUsers`, `client.categoriesVideos`, `client.channelsCategories`, `client.channelsEssentials`, `client.channelsModerators`, `client.channelsPrivateChannelMembers`, `client.channelsSubscriptionsAndSubscribers`, `client.channelsTags`, `client.channelsVideos`, `client.embedPresetsCustomLogos`, `client.embedPresetsEssentials`, `client.embedPresetsFolders`, `client.embedPresetsTimelineEvents`, `client.embedPresetsVideos`, `client.foldersEssentials`, `client.foldersItems`, `client.foldersVideos`, `client.groupsEssentials`, `client.groupsSubscriptions`, `client.groupsUsers`, `client.groupsVideos`, `client.likesEssentials`, `client.liveAnalytics`, `client.liveAudioTracks`, `client.liveEmbedPrivacy`, `client.liveEssentials`, `client.liveEventM3U8Playback`, `client.liveEventActivation`, `client.liveEventAutomatedClosedCaptions`, `client.liveEventDestinations`, `client.liveEventEnd`, `client.liveEventLowLatency`, `client.liveEventSessions`, `client.liveEventThumbnails`, `client.liveEventVideos`, `client.liveGraphics`, `client.liveScenes`, `client.onDemandBackgrounds`, `client.onDemandEssentials`, `client.onDemandGenres`, `client.onDemandPosters`, `client.onDemandPromotions`, `client.onDemandPurchasesAndRentals`, `client.onDemandRegions`, `client.onDemandSeasons`, `client.onDemandVideos`, `client.paymentsEssentials`, `client.portfoliosEssentials`, `client.portfoliosVideos`, `client.searchFederated`, `client.showcasesCustomShowcaseLogos`, `client.showcasesCustomShowcaseThumbnails`, `client.showcasesEssentials`, `client.showcasesShowcaseVideos`, `client.subscriptionPlansEssentials`, `client.tagsEssentials`, `client.teamsEssentials`, `client.teamsMembers`, `client.tutorialEssentials`, `client.usersAnalytics`, `client.usersEssentials`, `client.usersFeeds`, `client.usersFollowers`, `client.usersLms`, `client.usersPictures`, `client.usersSearch`, `client.usersWatchHistory`, `client.videosAi`, `client.videosAnimatedThumbnails`, `client.videosChapters`, `client.videosContentRatings`, `client.videosCreativeCommons`, `client.videosCredits`, `client.videosEmbedPrivacy`, `client.videosEssentials`, `client.videosFragments`, `client.videosLanguages`, `client.videosLiveM3U8Playback`, `client.videosModeration`, `client.videosNondestructiveTrimming`, `client.videosRecommendations`, `client.videosShowcases`, `client.videosTags`, `client.videosTextTracks`, `client.videosThumbnails`, `client.videosTranscripts`, `client.videosUnlistedVideos`, `client.videosUploads`, `client.videosVersions`, `client.videosVideoComments`, `client.watchLaterQueueEssentials` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `bearer` | `TokenProvider \| undefined` | unset |
| `oauth2AuthorizationCode` | `OAuth2AuthorizationCodeCredentials \| undefined` | unset |
| `oauth2AuthorizationCodeStrategy` | `OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> \| undefined` | the built-in grant |
| `oauth2ClientCredentials` | `OAuth2ClientCredentials \| undefined` | unset |
| `oauth2ClientCredentialsStrategy` | `OAuth2TokenStrategy<OAuth2ClientCredentials> \| undefined` | the built-in grant |

The 5 auth fields are all optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `VimeoApiError` set. `VimeoApiError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `VimeoApiError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.apiAppsWebhooks.addWebhook({ appId });
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof VimeoApiError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **520 operations**, **415** declare typed error bodies and **105** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (100 groups, 520 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `apiAppsWebhooks` | 5 | [map/operations/api-apps-webhooks.md](map/operations/api-apps-webhooks.md) |
| `apiInformationEssentials` | 1 | [map/operations/api-information-essentials.md](map/operations/api-information-essentials.md) |
| `authenticationExtrasAuthenticate` | 1 | [map/operations/authentication-extras-authenticate.md](map/operations/authentication-extras-authenticate.md) |
| `authenticationExtrasConvert` | 1 | [map/operations/authentication-extras-convert.md](map/operations/authentication-extras-convert.md) |
| `authenticationExtrasEssentials` | 2 | [map/operations/authentication-extras-essentials.md](map/operations/authentication-extras-essentials.md) |
| `authenticationExtrasExchange` | 1 | [map/operations/authentication-extras-exchange.md](map/operations/authentication-extras-exchange.md) |
| `categoriesChannels` | 1 | [map/operations/categories-channels.md](map/operations/categories-channels.md) |
| `categoriesEssentials` | 2 | [map/operations/categories-essentials.md](map/operations/categories-essentials.md) |
| `categoriesGroups` | 1 | [map/operations/categories-groups.md](map/operations/categories-groups.md) |
| `categoriesUsers` | 8 | [map/operations/categories-users.md](map/operations/categories-users.md) |
| `categoriesVideos` | 4 | [map/operations/categories-videos.md](map/operations/categories-videos.md) |
| `channelsCategories` | 4 | [map/operations/channels-categories.md](map/operations/channels-categories.md) |
| `channelsEssentials` | 7 | [map/operations/channels-essentials.md](map/operations/channels-essentials.md) |
| `channelsModerators` | 7 | [map/operations/channels-moderators.md](map/operations/channels-moderators.md) |
| `channelsPrivateChannelMembers` | 4 | [map/operations/channels-private-channel-members.md](map/operations/channels-private-channel-members.md) |
| `channelsSubscriptionsAndSubscribers` | 7 | [map/operations/channels-subscriptions-and-subscribers.md](map/operations/channels-subscriptions-and-subscribers.md) |
| `channelsTags` | 5 | [map/operations/channels-tags.md](map/operations/channels-tags.md) |
| `channelsVideos` | 7 | [map/operations/channels-videos.md](map/operations/channels-videos.md) |
| `embedPresetsCustomLogos` | 8 | [map/operations/embed-presets-custom-logos.md](map/operations/embed-presets-custom-logos.md) |
| `embedPresetsEssentials` | 10 | [map/operations/embed-presets-essentials.md](map/operations/embed-presets-essentials.md) |
| `embedPresetsFolders` | 1 | [map/operations/embed-presets-folders.md](map/operations/embed-presets-folders.md) |
| `embedPresetsTimelineEvents` | 2 | [map/operations/embed-presets-timeline-events.md](map/operations/embed-presets-timeline-events.md) |
| `embedPresetsVideos` | 5 | [map/operations/embed-presets-videos.md](map/operations/embed-presets-videos.md) |
| `foldersEssentials` | 11 | [map/operations/folders-essentials.md](map/operations/folders-essentials.md) |
| `foldersItems` | 3 | [map/operations/folders-items.md](map/operations/folders-items.md) |
| `foldersVideos` | 10 | [map/operations/folders-videos.md](map/operations/folders-videos.md) |
| `groupsEssentials` | 4 | [map/operations/groups-essentials.md](map/operations/groups-essentials.md) |
| `groupsSubscriptions` | 4 | [map/operations/groups-subscriptions.md](map/operations/groups-subscriptions.md) |
| `groupsUsers` | 5 | [map/operations/groups-users.md](map/operations/groups-users.md) |
| `groupsVideos` | 5 | [map/operations/groups-videos.md](map/operations/groups-videos.md) |
| `likesEssentials` | 11 | [map/operations/likes-essentials.md](map/operations/likes-essentials.md) |
| `liveAnalytics` | 1 | [map/operations/live-analytics.md](map/operations/live-analytics.md) |
| `liveAudioTracks` | 2 | [map/operations/live-audio-tracks.md](map/operations/live-audio-tracks.md) |
| `liveEmbedPrivacy` | 6 | [map/operations/live-embed-privacy.md](map/operations/live-embed-privacy.md) |
| `liveEssentials` | 19 | [map/operations/live-essentials.md](map/operations/live-essentials.md) |
| `liveEventM3U8Playback` | 2 | [map/operations/live-event-m3-u8-playback.md](map/operations/live-event-m3-u8-playback.md) |
| `liveEventActivation` | 3 | [map/operations/live-event-activation.md](map/operations/live-event-activation.md) |
| `liveEventAutomatedClosedCaptions` | 3 | [map/operations/live-event-automated-closed-captions.md](map/operations/live-event-automated-closed-captions.md) |
| `liveEventDestinations` | 12 | [map/operations/live-event-destinations.md](map/operations/live-event-destinations.md) |
| `liveEventEnd` | 3 | [map/operations/live-event-end.md](map/operations/live-event-end.md) |
| `liveEventLowLatency` | 3 | [map/operations/live-event-low-latency.md](map/operations/live-event-low-latency.md) |
| `liveEventSessions` | 2 | [map/operations/live-event-sessions.md](map/operations/live-event-sessions.md) |
| `liveEventThumbnails` | 15 | [map/operations/live-event-thumbnails.md](map/operations/live-event-thumbnails.md) |
| `liveEventVideos` | 12 | [map/operations/live-event-videos.md](map/operations/live-event-videos.md) |
| `liveGraphics` | 3 | [map/operations/live-graphics.md](map/operations/live-graphics.md) |
| `liveScenes` | 5 | [map/operations/live-scenes.md](map/operations/live-scenes.md) |
| `onDemandBackgrounds` | 5 | [map/operations/on-demand-backgrounds.md](map/operations/on-demand-backgrounds.md) |
| `onDemandEssentials` | 7 | [map/operations/on-demand-essentials.md](map/operations/on-demand-essentials.md) |
| `onDemandGenres` | 8 | [map/operations/on-demand-genres.md](map/operations/on-demand-genres.md) |
| `onDemandPosters` | 4 | [map/operations/on-demand-posters.md](map/operations/on-demand-posters.md) |
| `onDemandPromotions` | 5 | [map/operations/on-demand-promotions.md](map/operations/on-demand-promotions.md) |
| `onDemandPurchasesAndRentals` | 3 | [map/operations/on-demand-purchases-and-rentals.md](map/operations/on-demand-purchases-and-rentals.md) |
| `onDemandRegions` | 8 | [map/operations/on-demand-regions.md](map/operations/on-demand-regions.md) |
| `onDemandSeasons` | 3 | [map/operations/on-demand-seasons.md](map/operations/on-demand-seasons.md) |
| `onDemandVideos` | 4 | [map/operations/on-demand-videos.md](map/operations/on-demand-videos.md) |
| `paymentsEssentials` | 4 | [map/operations/payments-essentials.md](map/operations/payments-essentials.md) |
| `portfoliosEssentials` | 4 | [map/operations/portfolios-essentials.md](map/operations/portfolios-essentials.md) |
| `portfoliosVideos` | 8 | [map/operations/portfolios-videos.md](map/operations/portfolios-videos.md) |
| `searchFederated` | 2 | [map/operations/search-federated.md](map/operations/search-federated.md) |
| `showcasesCustomShowcaseLogos` | 5 | [map/operations/showcases-custom-showcase-logos.md](map/operations/showcases-custom-showcase-logos.md) |
| `showcasesCustomShowcaseThumbnails` | 5 | [map/operations/showcases-custom-showcase-thumbnails.md](map/operations/showcases-custom-showcase-thumbnails.md) |
| `showcasesEssentials` | 14 | [map/operations/showcases-essentials.md](map/operations/showcases-essentials.md) |
| `showcasesShowcaseVideos` | 16 | [map/operations/showcases-showcase-videos.md](map/operations/showcases-showcase-videos.md) |
| `subscriptionPlansEssentials` | 1 | [map/operations/subscription-plans-essentials.md](map/operations/subscription-plans-essentials.md) |
| `tagsEssentials` | 1 | [map/operations/tags-essentials.md](map/operations/tags-essentials.md) |
| `teamsEssentials` | 5 | [map/operations/teams-essentials.md](map/operations/teams-essentials.md) |
| `teamsMembers` | 3 | [map/operations/teams-members.md](map/operations/teams-members.md) |
| `tutorialEssentials` | 1 | [map/operations/tutorial-essentials.md](map/operations/tutorial-essentials.md) |
| `usersAnalytics` | 2 | [map/operations/users-analytics.md](map/operations/users-analytics.md) |
| `usersEssentials` | 4 | [map/operations/users-essentials.md](map/operations/users-essentials.md) |
| `usersFeeds` | 2 | [map/operations/users-feeds.md](map/operations/users-feeds.md) |
| `usersFollowers` | 12 | [map/operations/users-followers.md](map/operations/users-followers.md) |
| `usersLms` | 1 | [map/operations/users-lms.md](map/operations/users-lms.md) |
| `usersPictures` | 10 | [map/operations/users-pictures.md](map/operations/users-pictures.md) |
| `usersSearch` | 1 | [map/operations/users-search.md](map/operations/users-search.md) |
| `usersWatchHistory` | 3 | [map/operations/users-watch-history.md](map/operations/users-watch-history.md) |
| `videosAi` | 11 | [map/operations/videos-ai.md](map/operations/videos-ai.md) |
| `videosAnimatedThumbnails` | 5 | [map/operations/videos-animated-thumbnails.md](map/operations/videos-animated-thumbnails.md) |
| `videosChapters` | 12 | [map/operations/videos-chapters.md](map/operations/videos-chapters.md) |
| `videosContentRatings` | 1 | [map/operations/videos-content-ratings.md](map/operations/videos-content-ratings.md) |
| `videosCreativeCommons` | 1 | [map/operations/videos-creative-commons.md](map/operations/videos-creative-commons.md) |
| `videosCredits` | 8 | [map/operations/videos-credits.md](map/operations/videos-credits.md) |
| `videosEmbedPrivacy` | 3 | [map/operations/videos-embed-privacy.md](map/operations/videos-embed-privacy.md) |
| `videosEssentials` | 15 | [map/operations/videos-essentials.md](map/operations/videos-essentials.md) |
| `videosFragments` | 3 | [map/operations/videos-fragments.md](map/operations/videos-fragments.md) |
| `videosLanguages` | 1 | [map/operations/videos-languages.md](map/operations/videos-languages.md) |
| `videosLiveM3U8Playback` | 2 | [map/operations/videos-live-m3-u8-playback.md](map/operations/videos-live-m3-u8-playback.md) |
| `videosModeration` | 1 | [map/operations/videos-moderation.md](map/operations/videos-moderation.md) |
| `videosNondestructiveTrimming` | 1 | [map/operations/videos-nondestructive-trimming.md](map/operations/videos-nondestructive-trimming.md) |
| `videosRecommendations` | 1 | [map/operations/videos-recommendations.md](map/operations/videos-recommendations.md) |
| `videosShowcases` | 2 | [map/operations/videos-showcases.md](map/operations/videos-showcases.md) |
| `videosTags` | 6 | [map/operations/videos-tags.md](map/operations/videos-tags.md) |
| `videosTextTracks` | 9 | [map/operations/videos-text-tracks.md](map/operations/videos-text-tracks.md) |
| `videosThumbnails` | 7 | [map/operations/videos-thumbnails.md](map/operations/videos-thumbnails.md) |
| `videosTranscripts` | 2 | [map/operations/videos-transcripts.md](map/operations/videos-transcripts.md) |
| `videosUnlistedVideos` | 6 | [map/operations/videos-unlisted-videos.md](map/operations/videos-unlisted-videos.md) |
| `videosUploads` | 4 | [map/operations/videos-uploads.md](map/operations/videos-uploads.md) |
| `videosVersions` | 13 | [map/operations/videos-versions.md](map/operations/videos-versions.md) |
| `videosVideoComments` | 9 | [map/operations/videos-video-comments.md](map/operations/videos-video-comments.md) |
| `watchLaterQueueEssentials` | 8 | [map/operations/watch-later-queue-essentials.md](map/operations/watch-later-queue-essentials.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type ApiApp, apiAppSchema } from "vimeo-api";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 784 | `src/models/` |
| Enums (open; const companion plus schema) | 281 | `src/models/` |
| Unions without a discriminant | 1 | `src/models/unions/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `AcceptedCurrencies` | `Aud` to `"AUD"` · `Cad` to `"CAD"` · `Chf` to `"CHF"` · `Dkk` to `"DKK"` · `Eur` to `"EUR"` · `Gbp` to `"GBP"` · `Jpy` to `"JPY"` · `Krw` to `"KRW"` · `Nok` to `"NOK"` · `Pln` to `"PLN"` · `Sek` to `"SEK"` · `Usd` to `"USD"` | `acceptedCurrenciesSchema` |
| `AccessType` | `Default` to `"default"` · `Vip` to `"vip"` | `accessTypeSchema` |
| `AccessType1` | `Default` to `"default"` · `Vip` to `"vip"` | `accessType1Schema` |
| `Action` | `AddedTo` to `"Added to"` · `AppearanceBy` to `"Appearance by"` · `LikedBy` to `"Liked by"` · `UploadedBy` to `"Uploaded by"` | `actionSchema` |
| `AgeVerificationStatus` | `Failed` to `"failed"` · `Passed` to `"passed"` · `Pending` to `"pending"` | `ageVerificationStatusSchema` |
| `Approach` | `Post` to `"post"` · `Pull` to `"pull"` · `Tus` to `"tus"` | `approachSchema` |
| `Approach2` | `Post` to `"post"` · `Pull` to `"pull"` · `Tus` to `"tus"` | `approach2Schema` |
| `Approach4` | `Post` to `"post"` · `Pull` to `"pull"` · `Tus` to `"tus"` | `approach4Schema` |
| `Approach5` | `Post` to `"post"` · `Pull` to `"pull"` · `Tus` to `"tus"` | `approach5Schema` |
| `AutoCcLang` | `DeDe` to `"de-DE"` · `EnUs` to `"en-US"` · `EsEs` to `"es-ES"` · `FrFr` to `"fr-FR"` · `PtBr` to `"pt-BR"` | `autoCcLangSchema` |
| `AutoCcLang1` | `Af` to `"af"` · `Am` to `"am"` · `Ar` to `"ar"` · `As` to `"as"` · `Ast` to `"ast"` · `Az` to `"az"` · `Be` to `"be"` · `Bg` to `"bg"` · `Bn` to `"bn"` · `Bs` to `"bs"` · `Ca` to `"ca"` · `Ceb` to `"ceb"` · `Cs` to `"cs"` · `Cy` to `"cy"` · `Da` to `"da"` · `De` to `"de"` · `El` to `"el"` · `En` to `"en"` · `Es` to `"es"` · `Et` to `"et"` · `Fa` to `"fa"` · `Ff` to `"ff"` · `Fi` to `"fi"` · `Fil` to `"fil"` · `Fr` to `"fr"` · `Ga` to `"ga"` · `Gl` to `"gl"` · `Gu` to `"gu"` · `Ha` to `"ha"` · `He` to `"he"` · `Hi` to `"hi"` · `Hr` to `"hr"` · `Hu` to `"hu"` · `Hy` to `"hy"` · `Id` to `"id"` · `Ig` to `"ig"` · `Is` to `"is"` · `It` to `"it"` · `Ja` to `"ja"` · `Jv` to `"jv"` · `Ka` to `"ka"` · `Kea` to `"kea"` · `Kk` to `"kk"` · `Km` to `"km"` · `Kn` to `"kn"` · `Ko` to `"ko"` · `Ku` to `"ku"` · `Ky` to `"ky"` · `Lb` to `"lb"` · `Lg` to `"lg"` · `Ln` to `"ln"` · `Lo` to `"lo"` · `Lt` to `"lt"` · `Luo` to `"luo"` · `Lv` to `"lv"` · `Mi` to `"mi"` · `Mk` to `"mk"` · `Ml` to `"ml"` · `Mn` to `"mn"` · `Mr` to `"mr"` · `Ms` to `"ms"` · `Mt` to `"mt"` · `My` to `"my"` · `Ne` to `"ne"` · `Nl` to `"nl"` · `No` to `"no"` · `Nso` to `"nso"` · `Ny` to `"ny"` · `Oc` to `"oc"` · `Or` to `"or"` · `Pa` to `"pa"` · `Pl` to `"pl"` · `Ps` to `"ps"` · `Pt` to `"pt"` · `Ro` to `"ro"` · `Ru` to `"ru"` · `Sd` to `"sd"` · `Sk` to `"sk"` · `Sl` to `"sl"` · `Sn` to `"sn"` · `So` to `"so"` · `Sr` to `"sr"` · `Sv` to `"sv"` · `Sw` to `"sw"` · `Ta` to `"ta"` · `Te` to `"te"` · `Tg` to `"tg"` · `Th` to `"th"` · `Tr` to `"tr"` · `Uk` to `"uk"` · `Umb` to `"umb"` · `Ur` to `"ur"` · `Uz` to `"uz"` · `Vi` to `"vi"` · `Wo` to `"wo"` · `Xh` to `"xh"` · `Zh` to `"zh"` · `ZhHk` to `"zh-HK"` · `Zu` to `"zu"` | `autoCcLang1Schema` |
| `AutoCcLanguage` | `Af` to `"af"` · `Am` to `"am"` · `Ar` to `"ar"` · `As` to `"as"` · `Ast` to `"ast"` · `Az` to `"az"` · `Be` to `"be"` · `Bg` to `"bg"` · `Bn` to `"bn"` · `Bs` to `"bs"` · `Ca` to `"ca"` · `Ceb` to `"ceb"` · `Cs` to `"cs"` · `Cy` to `"cy"` · `Da` to `"da"` · `De` to `"de"` · `El` to `"el"` · `En` to `"en"` · `Es` to `"es"` · `Et` to `"et"` · `Fa` to `"fa"` · `Ff` to `"ff"` · `Fi` to `"fi"` · `Fil` to `"fil"` · `Fr` to `"fr"` · `Ga` to `"ga"` · `Gl` to `"gl"` · `Gu` to `"gu"` · `Ha` to `"ha"` · `He` to `"he"` · `Hi` to `"hi"` · `Hr` to `"hr"` · `Hu` to `"hu"` · `Hy` to `"hy"` · `Id` to `"id"` · `Ig` to `"ig"` · `Is` to `"is"` · `It` to `"it"` · `Ja` to `"ja"` · `Jv` to `"jv"` · `Ka` to `"ka"` · `Kea` to `"kea"` · `Kk` to `"kk"` · `Km` to `"km"` · `Kn` to `"kn"` · `Ko` to `"ko"` · `Ku` to `"ku"` · `Ky` to `"ky"` · `Lb` to `"lb"` · `Lg` to `"lg"` · `Ln` to `"ln"` · `Lo` to `"lo"` · `Lt` to `"lt"` · `Luo` to `"luo"` · `Lv` to `"lv"` · `Mi` to `"mi"` · `Mk` to `"mk"` · `Ml` to `"ml"` · `Mn` to `"mn"` · `Mr` to `"mr"` · `Ms` to `"ms"` · `Mt` to `"mt"` · `My` to `"my"` · `Ne` to `"ne"` · `Nl` to `"nl"` · `No` to `"no"` · `Nso` to `"nso"` · `Ny` to `"ny"` · `Oc` to `"oc"` · `Or` to `"or"` · `Pa` to `"pa"` · `Pl` to `"pl"` · `Ps` to `"ps"` · `Pt` to `"pt"` · `Ro` to `"ro"` · `Ru` to `"ru"` · `Sd` to `"sd"` · `Sk` to `"sk"` · `Sl` to `"sl"` · `Sn` to `"sn"` · `So` to `"so"` · `Sr` to `"sr"` · `Sv` to `"sv"` · `Sw` to `"sw"` · `Ta` to `"ta"` · `Te` to `"te"` · `Tg` to `"tg"` · `Th` to `"th"` · `Tr` to `"tr"` · `Uk` to `"uk"` · `Umb` to `"umb"` · `Ur` to `"ur"` · `Uz` to `"uz"` · `Vi` to `"vi"` · `Wo` to `"wo"` · `Xh` to `"xh"` · `Zh` to `"zh"` · `ZhHk` to `"zh-HK"` · `Zu` to `"zu"` | `autoCcLanguageSchema` |
| `AutoCcLanguage2` | `DeDe` to `"de-DE"` · `EnUs` to `"en-US"` · `EsEs` to `"es-ES"` · `FrFr` to `"fr-FR"` · `PtBr` to `"pt-BR"` | `autoCcLanguage2Schema` |
| `Brand` | `CardBrandAmericanExpress` to `"CARD_BRAND_AMERICAN_EXPRESS"` · `CardBrandDiscover` to `"CARD_BRAND_DISCOVER"` · `CardBrandJcb` to `"CARD_BRAND_JCB"` · `CardBrandMasterCard` to `"CARD_BRAND_MASTER_CARD"` · `CardBrandUnionPay` to `"CARD_BRAND_UNION_PAY"` · `CardBrandUnspecified` to `"CARD_BRAND_UNSPECIFIED"` · `CardBrandVisa` to `"CARD_BRAND_VISA"` | `brandSchema` |
| `Byline` | `Hide` to `"hide"` · `Show` to `"show"` · `User` to `"user"` | `bylineSchema` |
| `Code` | `Advertisement` to `"advertisement"` · `Drugs` to `"drugs"` · `Language` to `"language"` · `Nudity` to `"nudity"` · `Safe` to `"safe"` · `Unrated` to `"unrated"` · `Violence` to `"violence"` | `codeSchema` |
| `Code1` | `By` to `"by"` · `ByNc` to `"by-nc"` · `ByNcNd` to `"by-nc-nd"` · `ByNcSa` to `"by-nc-sa"` · `ByNd` to `"by-nd"` · `BySa` to `"by-sa"` · `Cc0` to `"cc0"` | `code1Schema` |
| `Codec` | `Av1` to `"AV1"` · `H264` to `"H264"` · `Hevc` to `"HEVC"` · `Aac` to `"aac"` | `codecSchema` |
| `Codec1` | `Av1` to `"AV1"` · `H264` to `"H264"` · `Hevc` to `"HEVC"` | `codec1Schema` |
| `Comment2` | `All` to `"all"` · `Members` to `"members"` | `comment2Schema` |
| `Comments` | `Anybody` to `"anybody"` · `Contacts` to `"contacts"` · `Nobody` to `"nobody"` | `commentsSchema` |
| `Comments2` | `Anybody` to `"anybody"` · `Contacts` to `"contacts"` · `Nobody` to `"nobody"` | `comments2Schema` |
| `Comments4` | `Anybody` to `"anybody"` · `Contacts` to `"contacts"` · `Nobody` to `"nobody"` | `comments4Schema` |
| `Comments5` | `Anybody` to `"anybody"` · `Contacts` to `"contacts"` · `Nobody` to `"nobody"` | `comments5Schema` |
| `Comments8` | `Anybody` to `"anybody"` · `Contacts` to `"contacts"` · `Nobody` to `"nobody"` | `comments8Schema` |
| `ContentFilter` | `Drugs` to `"drugs"` · `Language` to `"language"` · `Nudity` to `"nudity"` · `Safe` to `"safe"` · `Unrated` to `"unrated"` · `Violence` to `"violence"` | `contentFilterSchema` |
| `ContentRating1` | `Drugs` to `"drugs"` · `Language` to `"language"` · `Nudity` to `"nudity"` · `Safe` to `"safe"` · `Unrated` to `"unrated"` · `Violence` to `"violence"` | `contentRating1Schema` |
| `ContentRating2` | `Advertisement` to `"advertisement"` · `Drugs` to `"drugs"` · `Language` to `"language"` · `Nudity` to `"nudity"` · `Safe` to `"safe"` · `Unrated` to `"unrated"` · `Violence` to `"violence"` | `contentRating2Schema` |
| `ContentRating4` | `Advertisement` to `"advertisement"` · `Drugs` to `"drugs"` · `Language` to `"language"` · `Nudity` to `"nudity"` · `Safe` to `"safe"` · `Unrated` to `"unrated"` · `Violence` to `"violence"` | `contentRating4Schema` |
| `ContentRatingClass` | `Explicit` to `"explicit"` · `Safe` to `"safe"` · `Unrated` to `"unrated"` | `contentRatingClassSchema` |
| `CreditsPeriod` | `Month` to `"month"` · `Week` to `"week"` · `Year` to `"year"` | `creditsPeriodSchema` |
| `DiscountType` | `Dollars` to `"dollars"` · `Free` to `"free"` · `Percent` to `"percent"` | `discountTypeSchema` |
| `DiscountType1` | `Free` to `"free"` · `Percent` to `"percent"` | `discountType1Schema` |
| `Display` | `Advanced` to `"Advanced"` · `Basic` to `"Basic"` · `Business` to `"Business"` · `BusinessLive` to `"Business Live"` · `Creator` to `"Creator"` · `Custom` to `"Custom"` · `Free` to `"Free"` · `OttCustom` to `"Ott Custom"` · `Plus` to `"Plus"` · `Premium` to `"Premium"` · `Pro` to `"Pro"` · `ProLive` to `"Pro Live"` · `ProUnlimited` to `"Pro Unlimited"` · `Producer` to `"Producer"` · `Production` to `"Production"` · `Professional` to `"Professional"` · `Standard` to `"Standard"` · `Starter` to `"Starter"` · `Studio` to `"Studio"` | `displaySchema` |
| `DomainCertificateState` | `_0` to `"0"` · `_1` to `"1"` · `_2` to `"2"` · `_3` to `"3"` · `_4` to `"4"` · `_5` to `"5"` · `_6` to `"6"` · `_7` to `"7"` · `_8` to `"8"` · `Null` to `"null"` | `domainCertificateStateSchema` |
| `Download` | `Available` to `"available"` · `Purchased` to `"purchased"` · `Restricted` to `"restricted"` · `Unavailable` to `"unavailable"` | `downloadSchema` |
| `Embed` | `Private` to `"private"` · `Public` to `"public"` · `Whitelist` to `"whitelist"` | `embedSchema` |
| `Embed1` | `Private` to `"private"` · `Public` to `"public"` · `Whitelist` to `"whitelist"` | `embed1Schema` |
| `Embed11` | `Private` to `"private"` · `Public` to `"public"` · `Whitelist` to `"whitelist"` | `embed11Schema` |
| `Embed19` | `Private` to `"private"` · `Public` to `"public"` · `Whitelist` to `"whitelist"` | `embed19Schema` |
| `Embed4` | `Private` to `"private"` · `Public` to `"public"` · `Whitelist` to `"whitelist"` | `embed4Schema` |
| `Embed8` | `Private` to `"private"` · `Public` to `"public"` · `Whitelist` to `"whitelist"` | `embed8Schema` |
| `EncoderType` | `Dash` to `"dash"` · `Rtmp` to `"rtmp"` · `SimpleLive` to `"simple_live"` · `Srt` to `"srt"` · `StudioCloud` to `"studio_cloud"` · `Unknown` to `"unknown"` · `Webrtc` to `"webrtc"` | `encoderTypeSchema` |
| `Error2` | `AnalysisFailed` to `"analysis_failed"` · `DisallowedAddress` to `"disallowed_address"` · `DisallowedContentType` to `"disallowed_content_type"` · `DurationTooLong` to `"duration_too_long"` · `DurationTooShort` to `"duration_too_short"` · `EmptyUpload` to `"empty_upload"` · `ExceededRetryCount` to `"exceeded_retry_count"` · `Internal` to `"internal"` · `InvalidRedirects` to `"invalid_redirects"` · `MaxFileSizeExceeded` to `"max_file_size_exceeded"` · `MissingVideoStream` to `"missing_video_stream"` · `RemoteBadRequest` to `"remote_bad_request"` · `RemoteForbidden` to `"remote_forbidden"` · `RemoteInternal` to `"remote_internal"` · `RemoteNotFound` to `"remote_not_found"` · `RemoteUnauthorized` to `"remote_unauthorized"` · `ResolutionDimensionTooSmall` to `"resolution_dimension_too_small"` · `UnsupportedVideoProjection` to `"unsupported_video_projection"` | `error2Schema` |
| `EventType` | `Default` to `"default"` · `Venue` to `"venue"` | `eventTypeSchema` |
| `FileSizeType` | `Processing` to `"PROCESSING"` · `QuotaExemptClip` to `"QUOTA_EXEMPT_CLIP"` · `QuotaExemptUser` to `"QUOTA_EXEMPT_USER"` · `Stock` to `"STOCK"` · `Upload` to `"UPLOAD"` · `UploadFailure` to `"UPLOAD_FAILURE"` · `VimeoCreate` to `"VIMEO_CREATE"` · `VimeoRecord` to `"VIMEO_RECORD"` | `fileSizeTypeSchema` |
| `Gender` | `F` to `"f"` · `M` to `"m"` · `N` to `"n"` · `O` to `"o"` | `genderSchema` |
| `GrantType` | `AuthorizationCode` to `"authorization_code"` | `grantTypeSchema` |
| `GrantType1` | `ClientCredentials` to `"client_credentials"` | `grantType1Schema` |
| `GrantType2` | `VimeoOauth1` to `"vimeo_oauth1"` | `grantType2Schema` |
| `Icon` | `Clock` to `"clock"` · `Create` to `"create"` · `Image` to `"image"` · `Theme` to `"theme"` | `iconSchema` |
| `Icon1` | `Clock` to `"clock"` · `Create` to `"create"` · `Image` to `"image"` · `Theme` to `"theme"` | `icon1Schema` |
| `Icon2` | `Clock` to `"clock"` · `Create` to `"create"` · `Image` to `"image"` · `Theme` to `"theme"` | `icon2Schema` |
| `Invite2` | `All` to `"all"` · `Members` to `"members"` | `invite2Schema` |
| `Join1` | `Anybody` to `"anybody"` · `Members` to `"members"` | `join1Schema` |
| `Kind` | `Category` to `"category"` · `External` to `"external"` · `Reason` to `"reason"` | `kindSchema` |
| `Kind1` | `Captions` to `"captions"` · `Subtitles` to `"subtitles"` | `kind1Schema` |
| `Latency` | `FailSafe` to `"fail-safe"` · `Low` to `"low"` · `Standard` to `"standard"` | `latencySchema` |
| `Latency2` | `FailSafe` to `"fail-safe"` · `Low` to `"low"` · `Standard` to `"standard"` | `latency2Schema` |
| `Layout` | `Grid` to `"grid"` · `Player` to `"player"` | `layoutSchema` |
| `Layout1` | `Grid` to `"grid"` · `Player` to `"player"` | `layout1Schema` |
| `License` | `By` to `"by"` · `ByNc` to `"by-nc"` · `ByNcNd` to `"by-nc-nd"` · `ByNcSa` to `"by-nc-sa"` · `ByNd` to `"by-nd"` · `BySa` to `"by-sa"` · `Cc0` to `"cc0"` | `licenseSchema` |
| `License1` | `By` to `"by"` · `ByNc` to `"by-nc"` · `ByNcNd` to `"by-nc-nd"` · `ByNcSa` to `"by-nc-sa"` · `ByNd` to `"by-nd"` · `BySa` to `"by-sa"` · `Cc0` to `"cc0"` | `license1Schema` |
| `License2` | `By` to `"by"` · `ByNc` to `"by-nc"` · `ByNcNd` to `"by-nc-nd"` · `ByNcSa` to `"by-nc-sa"` · `ByNd` to `"by-nd"` · `BySa` to `"by-sa"` · `Cc0` to `"cc0"` | `license2Schema` |
| `License4` | `By` to `"by"` · `ByNc` to `"by-nc"` · `ByNcNd` to `"by-nc-nd"` · `ByNcSa` to `"by-nc-sa"` · `ByNd` to `"by-nd"` · `BySa` to `"by-sa"` · `Cc0` to `"cc0"` | `license4Schema` |
| `Mode` | `AdminAndAuthenticated` to `"admin_and_authenticated"` · `Global` to `"global"` · `PerSeatType` to `"per_seat_type"` | `modeSchema` |
| `Name` | `Hide` to `"hide"` · `Show` to `"show"` · `User` to `"user"` | `nameSchema` |
| `Name1` | `Hide` to `"hide"` · `Show` to `"show"` · `User` to `"user"` | `name1Schema` |
| `Outro1` | `Nothing` to `"nothing"` | `outro1Schema` |
| `OutroType` | `Beginning` to `"beginning"` · `Custom` to `"custom"` · `Email` to `"email"` · `Image` to `"image"` · `Link` to `"link"` · `Loop` to `"loop"` · `Nothing` to `"nothing"` · `Share` to `"share"` · `Text` to `"text"` · `Threevideos` to `"threevideos"` · `Videos` to `"videos"` | `outroTypeSchema` |
| `OutroVideosCollectionType` | `Album` to `"album"` · `AllVideos` to `"all_videos"` · `Channel` to `"channel"` · `Group` to `"group"` · `Likes` to `"likes"` · `UploadedVideos` to `"uploaded_videos"` | `outroVideosCollectionTypeSchema` |
| `Owner` | `Hide` to `"hide"` · `Show` to `"show"` · `User` to `"user"` | `ownerSchema` |
| `Owner2` | `Hide` to `"hide"` · `Show` to `"show"` · `User` to `"user"` | `owner2Schema` |
| `Period` | `Lifetime` to `"lifetime"` · `Month` to `"month"` · `Week` to `"week"` · `Year` to `"year"` | `periodSchema` |
| `Period1` | `CalendarMonth` to `"calendar_month"` · `Year` to `"year"` | `period1Schema` |
| `Period2` | `Lifetime` to `"lifetime"` · `Year` to `"year"` | `period2Schema` |
| `Period3` | `Lifetime` to `"lifetime"` · `Month` to `"month"` · `Week` to `"week"` · `Year` to `"year"` | `period3Schema` |
| `Period4` | `_1Day` to `"1 day"` · `_1Month` to `"1 month"` · `_1Week` to `"1 week"` · `_1Year` to `"1 year"` · `_2Day` to `"2 day"` · `_3Day` to `"3 day"` · `_3Month` to `"3 month"` · `_6Month` to `"6 month"` · `_7Day` to `"7 day"` · `_24Hour` to `"24 hour"` · `_30Day` to `"30 day"` · `_48Hour` to `"48 hour"` · `_60Day` to `"60 day"` · `_72Hour` to `"72 hour"` | `period4Schema` |
| `Period5` | `_1Week` to `"1 week"` · `_1Year` to `"1 year"` · `_3Month` to `"3 month"` · `_6Month` to `"6 month"` · `_24Hour` to `"24 hour"` · `_30Day` to `"30 day"` · `_48Hour` to `"48 hour"` · `_72Hour` to `"72 hour"` | `period5Schema` |
| `Period6` | `_1Week` to `"1 week"` · `_1Year` to `"1 year"` · `_3Month` to `"3 month"` · `_6Month` to `"6 month"` · `_24Hour` to `"24 hour"` · `_30Day` to `"30 day"` · `_48Hour` to `"48 hour"` · `_72Hour` to `"72 hour"` | `period6Schema` |
| `PermissionLevel` | `Admin` to `"Admin"` · `Contributor` to `"Contributor"` · `ContributorPlus` to `"Contributor Plus"` · `Owner` to `"Owner"` · `Uploader` to `"Uploader"` · `Viewer` to `"Viewer"` | `permissionLevelSchema` |
| `PermissionLevel1` | `Admin` to `"Admin"` · `Contributor` to `"Contributor"` · `ContributorPlus` to `"Contributor Plus"` · `Owner` to `"Owner"` · `Uploader` to `"Uploader"` · `Viewer` to `"Viewer"` | `permissionLevel1Schema` |
| `PlayButtonPosition` | `_0` to `"0"` · `_1` to `"1"` · `_2` to `"2"` | `playButtonPositionSchema` |
| `PlaylistSort` | `AddedFirst` to `"added_first"` · `AddedLast` to `"added_last"` · `Alphabetical` to `"alphabetical"` · `Arranged` to `"arranged"` · `Comments` to `"comments"` · `Duration` to `"duration"` · `Likes` to `"likes"` · `Newest` to `"newest"` · `Oldest` to `"oldest"` · `Plays` to `"plays"` | `playlistSortSchema` |
| `PlaylistSort2` | `AddedFirst` to `"added_first"` · `AddedLast` to `"added_last"` · `Alphabetical` to `"alphabetical"` · `Arranged` to `"arranged"` · `Comments` to `"comments"` · `Duration` to `"duration"` · `Likes` to `"likes"` · `Newest` to `"newest"` · `Oldest` to `"oldest"` · `Plays` to `"plays"` | `playlistSort2Schema` |
| `Portrait` | `Hide` to `"hide"` · `Show` to `"show"` · `User` to `"user"` | `portraitSchema` |
| `Portrait1` | `Hide` to `"hide"` · `Show` to `"show"` · `User` to `"user"` | `portrait1Schema` |
| `Portrait2` | `Hide` to `"hide"` · `Show` to `"show"` · `User` to `"user"` | `portrait2Schema` |
| `Position` | `Auto` to `"auto"` · `Bottom` to `"bottom"` · `Center` to `"center"` | `positionSchema` |
| `Position1` | `Left` to `"left"` · `Right` to `"right"` | `position1Schema` |
| `Position2` | `Auto` to `"auto"` · `Bottom` to `"bottom"` · `Center` to `"center"` | `position2Schema` |
| `PreferredStreamMethod` | `Browser` to `"browser"` · `Encoder` to `"encoder"` | `preferredStreamMethodSchema` |
| `Privacy11` | `Anybody` to `"anybody"` · `EmbedOnly` to `"embed_only"` · `Nobody` to `"nobody"` · `Password` to `"password"` · `Team` to `"team"` · `Unlisted` to `"unlisted"` | `privacy11Schema` |
| `Privacy12` | `Anybody` to `"anybody"` · `EmbedOnly` to `"embed_only"` · `Nobody` to `"nobody"` · `Password` to `"password"` · `Team` to `"team"` · `Unlisted` to `"unlisted"` | `privacy12Schema` |
| `Privacy6` | `Connections` to `"CONNECTIONS"` · `Public` to `"PUBLIC"` · `AllFriends` to `"all_friends"` · `Everyone` to `"everyone"` · `Private` to `"private"` · `Public2` to `"public"` · `Self` to `"self"` · `Unlisted` to `"unlisted"` | `privacy6Schema` |
| `Privacy7` | `Anybody` to `"anybody"` · `Moderators` to `"moderators"` · `User` to `"user"` | `privacy7Schema` |
| `Privacy8` | `Anybody` to `"anybody"` · `Moderators` to `"moderators"` · `Users` to `"users"` | `privacy8Schema` |
| `Privacy9` | `Connections` to `"CONNECTIONS"` · `Public` to `"PUBLIC"` · `AllFriends` to `"all_friends"` · `Everyone` to `"everyone"` · `Private` to `"private"` · `Public2` to `"public"` · `Self` to `"self"` · `Unlisted` to `"unlisted"` | `privacy9Schema` |
| `ProductType` | `Any` to `"any"` · `Buy` to `"buy"` · `BuyEpisode` to `"buy_episode"` · `Rent` to `"rent"` · `RentEpisode` to `"rent_episode"` · `Subscribe` to `"subscribe"` | `productTypeSchema` |
| `ProductType1` | `Any` to `"any"` · `Buy` to `"buy"` · `BuyEpisode` to `"buy_episode"` · `Rent` to `"rent"` · `RentEpisode` to `"rent_episode"` · `Subscribe` to `"subscribe"` | `productType1Schema` |
| `Projection` | `Cubical` to `"cubical"` · `Cylindrical` to `"cylindrical"` · `Dome` to `"dome"` · `Equirectangular` to `"equirectangular"` · `Pyramid` to `"pyramid"` | `projectionSchema` |
| `Projection1` | `Cubical` to `"cubical"` · `Cylindrical` to `"cylindrical"` · `Dome` to `"dome"` · `Equirectangular` to `"equirectangular"` · `Pyramid` to `"pyramid"` | `projection1Schema` |
| `Provenance` | `AiGenerated` to `"ai_generated"` · `UserUploaded` to `"user_uploaded"` · `UserUploadedAndAiGenerated` to `"user_uploaded_and_ai_generated"` | `provenanceSchema` |
| `Provenance1` | `AutogenAlternateAudio` to `"autogen_alternate_audio"` · `AutogenDubbed` to `"autogen_dubbed"` · `AutogenLiveAudio` to `"autogen_live_audio"` · `AutogenSourceAudio` to `"autogen_source_audio"` · `AutogenTranslated` to `"autogen_translated"` · `UserUploaded` to `"user_uploaded"` | `provenance1Schema` |
| `Provenance2` | `AiGenerated` to `"ai_generated"` · `UserUploaded` to `"user_uploaded"` · `UserUploadedAndAiGenerated` to `"user_uploaded_and_ai_generated"` | `provenance2Schema` |
| `Quality` | `Audio` to `"audio"` · `Hd` to `"hd"` · `Hls` to `"hls"` · `Mobile` to `"mobile"` · `Sd` to `"sd"` · `Source` to `"source"` · `Uhd` to `"uhd"` | `qualitySchema` |
| `QuotaPeriod` | `Month` to `"month"` · `Week` to `"week"` · `Year` to `"year"` | `quotaPeriodSchema` |
| `QuotaPeriod1` | `Lifetime` to `"lifetime"` · `Month` to `"month"` · `Week` to `"week"` · `Year` to `"year"` | `quotaPeriod1Schema` |
| `QuotaUnit` | `VideoCount` to `"video_count"` · `VideoSize` to `"video_size"` | `quotaUnitSchema` |
| `Rating` | `Drugs` to `"drugs"` · `Language` to `"language"` · `Nudity` to `"nudity"` · `Safe` to `"safe"` · `Unrated` to `"unrated"` · `Violence` to `"violence"` | `ratingSchema` |
| `Rating1` | `Drugs` to `"drugs"` · `Language` to `"language"` · `Nudity` to `"nudity"` · `Safe` to `"safe"` · `Unrated` to `"unrated"` · `Violence` to `"violence"` | `rating1Schema` |
| `Reason3` | `TranscriptReadyButNotEnglish` to `"transcript_ready_but_not_english"` · `TranscriptStatusDoesNotExist` to `"transcript_status_does_not_exist"` · `TranscriptStatusExceedsMaximumDuration` to `"transcript_status_exceeds_maximum_duration"` · `TranscriptStatusFailed` to `"transcript_status_failed"` · `TranscriptStatusInProgress` to `"transcript_status_in_progress"` · `TranscriptStatusLanguageNotSupported` to `"transcript_status_language_not_supported"` · `TranscriptStatusNoSpeech` to `"transcript_status_no_speech"` · `TranscriptStatusNotStarted` to `"transcript_status_not_started"` · `TranscriptStatusUnknown` to `"transcript_status_unknown"` · `VideoNotReady` to `"video_not_ready"` · `VideoTooShort` to `"video_too_short"` · `VideoTranscriptTooShort` to `"video_transcript_too_short"` | `reason3Schema` |
| `Reason4` | `TranscriptStatusDoesNotExist` to `"transcript_status_does_not_exist"` · `TranscriptStatusExceedsMaximumDuration` to `"transcript_status_exceeds_maximum_duration"` · `TranscriptStatusFailed` to `"transcript_status_failed"` · `TranscriptStatusInProgress` to `"transcript_status_in_progress"` · `TranscriptStatusLanguageNotSupported` to `"transcript_status_language_not_supported"` · `TranscriptStatusNoSpeech` to `"transcript_status_no_speech"` · `TranscriptStatusNotStarted` to `"transcript_status_not_started"` · `TranscriptStatusUnknown` to `"transcript_status_unknown"` · `VideoNotReady` to `"video_not_ready"` · `VideoTooShort` to `"video_too_short"` · `VideoTranscriptTooShort` to `"video_transcript_too_short"` | `reason4Schema` |
| `Reason5` | `OwnerDisabledFeatureGroup` to `"owner_disabled_feature_group"` · `TranscriptStatusDoesNotExist` to `"transcript_status_does_not_exist"` · `TranscriptStatusFailed` to `"transcript_status_failed"` · `TranscriptStatusInProgress` to `"transcript_status_in_progress"` · `TranscriptStatusNoSpeech` to `"transcript_status_no_speech"` · `TranscriptStatusNotStarted` to `"transcript_status_not_started"` · `TranscriptStatusUnknown` to `"transcript_status_unknown"` · `VideoNotReady` to `"video_not_ready"` · `VideoResolutionTooLow` to `"video_resolution_too_low"` · `VideoTooShort` to `"video_too_short"` · `VideoTranscriptTooShort` to `"video_transcript_too_short"` | `reason5Schema` |
| `Reason6` | `OwnerDisabledFeatureGroup` to `"owner_disabled_feature_group"` · `TranscriptStatusDoesNotExist` to `"transcript_status_does_not_exist"` · `TranscriptStatusExceedsMaximumDuration` to `"transcript_status_exceeds_maximum_duration"` · `TranscriptStatusFailed` to `"transcript_status_failed"` · `TranscriptStatusInProgress` to `"transcript_status_in_progress"` · `TranscriptStatusLanguageNotSupported` to `"transcript_status_language_not_supported"` · `TranscriptStatusNoSpeech` to `"transcript_status_no_speech"` · `TranscriptStatusNotStarted` to `"transcript_status_not_started"` · `TranscriptStatusUnknown` to `"transcript_status_unknown"` · `VideoNotReady` to `"video_not_ready"` · `VideoTooShort` to `"video_too_short"` · `VideoTranscriptTooShort` to `"video_transcript_too_short"` | `reason6Schema` |
| `Reason7` | `OwnerAccountBlocked` to `"owner_account_blocked"` · `OwnerDisabledFeatureGroup` to `"owner_disabled_feature_group"` · `OwnerPaymentDisabled` to `"owner_payment_disabled"` · `TranscriptStatusDoesNotExist` to `"transcript_status_does_not_exist"` | `reason7Schema` |
| `Reason8` | `LanguageNotSupported` to `"language_not_supported"` · `OwnerAccountBlocked` to `"owner_account_blocked"` · `OwnerDisabledFeatureGroup` to `"owner_disabled_feature_group"` · `VideoTooLong` to `"video_too_long"` | `reason8Schema` |
| `Rendition` | `_2K` to `"2k"` · `_4K` to `"4k"` · `_5K` to `"5k"` · `_6K` to `"6k"` · `_7K` to `"7k"` · `_8K` to `"8k"` · `_240P` to `"240p"` · `_360P` to `"360p"` · `_480P` to `"480p"` · `_540P` to `"540p"` · `_720P` to `"720p"` · `_1080P` to `"1080p"` · `Adaptive` to `"adaptive"` · `Audio` to `"audio"` · `Source` to `"source"` | `renditionSchema` |
| `Rendition1` | `_2K` to `"2k"` · `_4K` to `"4k"` · `_5K` to `"5k"` · `_6K` to `"6k"` · `_7K` to `"7k"` · `_8K` to `"8k"` · `_240P` to `"240p"` · `_360P` to `"360p"` · `_480P` to `"480p"` · `_540P` to `"540p"` · `_720P` to `"720p"` · `_1080P` to `"1080p"` | `rendition1Schema` |
| `Rendition2` | `Source` to `"source"` | `rendition2Schema` |
| `ReviewStatus` | `Approved` to `"approved"` · `InProgress` to `"in_progress"` · `NeedsReview` to `"needs_review"` | `reviewStatusSchema` |
| `Role` | `Admin` to `"Admin"` · `Contributor` to `"Contributor"` · `ContributorPlus` to `"Contributor Plus"` · `Owner` to `"Owner"` · `Uploader` to `"Uploader"` · `Viewer` to `"Viewer"` | `roleSchema` |
| `ServiceName` | `CustomRtmp` to `"custom_rtmp"` · `Facebook` to `"facebook"` · `Linkedin` to `"linkedin"` · `Youtube` to `"youtube"` | `serviceNameSchema` |
| `ServiceName1` | `CustomRtmp` to `"custom_rtmp"` · `Facebook` to `"facebook"` · `Linkedin` to `"linkedin"` · `Youtube` to `"youtube"` | `serviceName1Schema` |
| `Showing` | `Lifetime` to `"lifetime"` · `Periodic` to `"periodic"` | `showingSchema` |
| `Sort` | `AddedFirst` to `"added_first"` · `AddedLast` to `"added_last"` · `Alphabetical` to `"alphabetical"` · `Arranged` to `"arranged"` · `Comments` to `"comments"` · `Likes` to `"likes"` · `Newest` to `"newest"` · `Oldest` to `"oldest"` · `Plays` to `"plays"` | `sortSchema` |
| `Sort1` | `Alphabetical` to `"alphabetical"` · `Clips` to `"clips"` · `Modified` to `"modified"` · `Recent` to `"recent"` | `sort1Schema` |
| `Sort19` | `AddedFirst` to `"added_first"` · `AddedLast` to `"added_last"` · `Alphabetical` to `"alphabetical"` · `AlphabeticalDesc` to `"alphabetical_desc"` · `Arranged` to `"arranged"` · `Comments` to `"comments"` · `Likes` to `"likes"` · `ModifiedTimeAsc` to `"modified_time_asc"` · `ModifiedTimeDesc` to `"modified_time_desc"` · `Newest` to `"newest"` · `Oldest` to `"oldest"` · `Plays` to `"plays"` | `sort19Schema` |
| `State` | `_0` to `"0"` · `_1` to `"1"` | `stateSchema` |
| `Status` | `Active` to `"active"` · `Cancelled` to `"cancelled"` · `GracePeriod` to `"grace_period"` · `None` to `"none"` · `OnHold` to `"on_hold"` · `Pending` to `"pending"` | `statusSchema` |
| `Status1` | `FreeTrial` to `"free_trial"` | `status1Schema` |
| `Status10` | `Cancelled` to `"cancelled"` · `Completed` to `"completed"` · `Failed` to `"failed"` · `Started` to `"started"` | `status10Schema` |
| `Status11` | `Streaming` to `"streaming"` | `status11Schema` |
| `Status12` | `Pending` to `"pending"` · `Ready` to `"ready"` · `Streaming` to `"streaming"` · `Unavailable` to `"unavailable"` | `status12Schema` |
| `Status13` | `Ended` to `"ended"` · `Started` to `"started"` | `status13Schema` |
| `Status14` | `_0` to `0` · `_1` to `1` · `_2` to `2` · `_3` to `3` · `_4` to `4` · `_5` to `5` | `status14Schema` |
| `Status15` | `Ended` to `"ended"` · `Started` to `"started"` | `status15Schema` |
| `Status19` | `SubscriptionStatusActive` to `"SUBSCRIPTION_STATUS_ACTIVE"` · `SubscriptionStatusCancelled` to `"SUBSCRIPTION_STATUS_CANCELLED"` · `SubscriptionStatusDraft` to `"SUBSCRIPTION_STATUS_DRAFT"` · `SubscriptionStatusExpired` to `"SUBSCRIPTION_STATUS_EXPIRED"` · `SubscriptionStatusPaused` to `"SUBSCRIPTION_STATUS_PAUSED"` · `SubscriptionStatusPendingAcceptance` to `"SUBSCRIPTION_STATUS_PENDING_ACCEPTANCE"` · `SubscriptionStatusPendingActivation` to `"SUBSCRIPTION_STATUS_PENDING_ACTIVATION"` · `SubscriptionStatusUnspecified` to `"SUBSCRIPTION_STATUS_UNSPECIFIED"` | `status19Schema` |
| `Status2` | `Done` to `"done"` · `Failed` to `"failed"` · `Processing` to `"processing"` | `status2Schema` |
| `Status20` | `Available` to `"available"` · `Purchased` to `"purchased"` · `Unavailable` to `"unavailable"` | `status20Schema` |
| `Status21` | `Accepted` to `"accepted"` · `Pending` to `"pending"` | `status21Schema` |
| `Status22` | `Done` to `"done"` · `Failed` to `"failed"` · `Processing` to `"processing"` | `status22Schema` |
| `Status23` | `Complete` to `"complete"` · `Error` to `"error"` · `InProgress` to `"in_progress"` | `status23Schema` |
| `Status4` | `DrmPlaysExceeded` to `"drm_plays_exceeded"` · `Playable` to `"playable"` · `PurchaseRequired` to `"purchase_required"` · `Restricted` to `"restricted"` · `Unavailable` to `"unavailable"` | `status4Schema` |
| `Status5` | `Available` to `"available"` · `Failed` to `"failed"` · `Processing` to `"processing"` · `QuotaExceeded` to `"quota_exceeded"` · `TotalCapExceeded` to `"total_cap_exceeded"` · `TranscodeStarting` to `"transcode_starting"` · `Transcoding` to `"transcoding"` · `TranscodingError` to `"transcoding_error"` · `Unavailable` to `"unavailable"` · `Uploading` to `"uploading"` · `UploadingError` to `"uploading_error"` | `status5Schema` |
| `Status6` | `Complete` to `"complete"` · `Error` to `"error"` · `InProgress` to `"in_progress"` | `status6Schema` |
| `Status7` | `Blocked` to `"blocked"` · `Completed` to `"completed"` · `ExceedsMaximumDuration` to `"exceeds_maximum_duration"` · `Failed` to `"failed"` · `InProgress` to `"in_progress"` · `LanguageNotSupported` to `"language_not_supported"` · `NoSpeech` to `"no_speech"` · `NotStarted` to `"not_started"` · `Unknown` to `"unknown"` | `status7Schema` |
| `Status8` | `Canceled` to `"canceled"` · `Complete` to `"complete"` · `Error` to `"error"` · `InProgress` to `"in_progress"` | `status8Schema` |
| `Status9` | `Complete` to `"complete"` · `Error` to `"error"` · `InProgress` to `"in_progress"` | `status9Schema` |
| `StereoFormat` | `LeftRight` to `"left-right"` · `Mono` to `"mono"` · `TopBottom` to `"top-bottom"` | `stereoFormatSchema` |
| `StereoFormat1` | `LeftRight` to `"left-right"` · `Mono` to `"mono"` · `TopBottom` to `"top-bottom"` | `stereoFormat1Schema` |
| `Stream` | `Available` to `"available"` · `Purchased` to `"purchased"` · `Restricted` to `"restricted"` · `Unavailable` to `"unavailable"` | `streamSchema` |
| `Stream1` | `Available` to `"available"` · `Purchased` to `"purchased"` · `Restricted` to `"restricted"` · `Unavailable` to `"unavailable"` | `stream1Schema` |
| `Stream2` | `Available` to `"available"` · `Purchased` to `"purchased"` · `Restricted` to `"restricted"` · `Unavailable` to `"unavailable"` | `stream2Schema` |
| `StreamMode` | `Live` to `"live"` · `Record` to `"record"` · `Simulive` to `"simulive"` | `streamModeSchema` |
| `StreamPeriod` | `_1Week` to `"1_week"` · `_1Year` to `"1_year"` · `_3Month` to `"3_month"` · `_6Month` to `"6_month"` · `_24Hour` to `"24_hour"` · `_30Days` to `"30_days"` · `_48Hour` to `"48_hour"` · `_72Hour` to `"72_hour"` | `streamPeriodSchema` |
| `StreamPeriod1` | `_1Week` to `"1_week"` · `_1Year` to `"1_year"` · `_3Month` to `"3_month"` · `_6Month` to `"6_month"` · `_24Hour` to `"24_hour"` · `_30Day` to `"30_day"` · `_48Hour` to `"48_hour"` · `_72Hour` to `"72_hour"` | `streamPeriod1Schema` |
| `StreamingType` | `Live` to `"live"` · `NonLive` to `"non-live"` | `streamingTypeSchema` |
| `Theme` | `Dark` to `"dark"` · `Standard` to `"standard"` | `themeSchema` |
| `Tier` | `Advanced` to `"advanced"` · `Basic` to `"basic"` · `Business` to `"business"` · `Core` to `"core"` · `Creator` to `"creator"` · `CustomSelfServe` to `"customSelfServe"` · `Enterprise` to `"enterprise"` · `Free` to `"free"` · `LivePremium` to `"livePremium"` · `Ott` to `"ott"` · `Plus` to `"plus"` · `Pro` to `"pro"` · `ProSolution` to `"proSolution"` · `ProUnlimited` to `"proUnlimited"` · `Production` to `"production"` · `Professional` to `"professional"` · `Standard` to `"standard"` · `Starter` to `"starter"` · `Studio` to `"studio"` · `Team` to `"team"` · `TeamLive` to `"teamLive"` | `tierSchema` |
| `Title1` | `Hide` to `"hide"` · `Show` to `"show"` · `User` to `"user"` | `title1Schema` |
| `TitleFontFamily` | `Anton` to `"anton"` · `ArchivoBlack` to `"archivo_black"` · `BebasNeue` to `"bebas_neue"` · `BricolageGrotesque` to `"bricolage_grotesque"` · `Caveat` to `"caveat"` · `DmSans` to `"dm_sans"` · `DmSerifDisplay` to `"dm_serif_display"` · `Fraunces` to `"fraunces"` · `HankenGrotesk` to `"hanken_grotesk"` · `IbmPlexSerif` to `"ibm_plex_serif"` · `InstrumentSerif` to `"instrument_serif"` · `Inter` to `"inter"` · `JetbrainsMono` to `"jetbrains_mono"` · `Lora` to `"lora"` · `Montserrat` to `"montserrat"` · `Outfit` to `"outfit"` · `PlayfairDisplay` to `"playfair_display"` · `Poppins` to `"poppins"` · `Roboto` to `"roboto"` · `SpaceGrotesk` to `"space_grotesk"` | `titleFontFamilySchema` |
| `TitleFontWeight` | `_300` to `300` · `_400` to `400` · `_500` to `500` · `_700` to `700` | `titleFontWeightSchema` |
| `TokenType` | `Bearer` to `"bearer"` | `tokenTypeSchema` |
| `Type` | `Caution` to `"caution"` · `Custom` to `"custom"` · `Default` to `"default"` | `typeSchema` |
| `Type1` | `Moderator` to `"moderator"` · `Subscriber` to `"subscriber"` | `type1Schema` |
| `Type10` | `Appearance` to `"appearance"` · `Category` to `"category"` · `Channel` to `"channel"` · `FacebookFeed` to `"facebook_feed"` · `Group` to `"group"` · `Like` to `"like"` · `Ondemand` to `"ondemand"` · `Share` to `"share"` · `Tag` to `"tag"` · `TwitterTimeline` to `"twitter_timeline"` · `Upload` to `"upload"` | `type10Schema` |
| `Type11` | `Commentary` to `"commentary"` · `Descriptive` to `"descriptive"` · `Main` to `"main"` · `Unknown` to `"unknown"` | `type11Schema` |
| `Type12` | `Url` to `"url"` | `type12Schema` |
| `Type13` | `Video` to `"video"` | `type13Schema` |
| `Type15` | `Video` to `"video"` | `type15Schema` |
| `Type16` | `AgoraMedia` to `"agoraMedia"` · `AgoraScreen` to `"agoraScreen"` · `AgoraStream` to `"agoraStream"` · `BroadcasterLowerthird` to `"broadcasterLowerthird"` · `Fullscreen` to `"fullscreen"` · `GuestLowerthird` to `"guestLowerthird"` · `Logo` to `"logo"` · `Lowerthird` to `"lowerthird"` · `Poll` to `"poll"` · `Qna` to `"qna"` · `Slides` to `"slides"` | `type16Schema` |
| `Type17` | `Bool` to `"bool"` · `Date` to `"date"` · `Int` to `"int"` · `MultiSelect` to `"multi-select"` · `Select` to `"select"` · `Str` to `"str"` | `type17Schema` |
| `Type18` | `Custom` to `"custom"` · `None` to `"none"` · `Vimeo` to `"vimeo"` | `type18Schema` |
| `Type19` | `Channel` to `"channel"` · `Custom` to `"custom"` · `Organization` to `"organization"` · `Page` to `"page"` · `Profile` to `"profile"` | `type19Schema` |
| `Type2` | `Advanced` to `"advanced"` · `Basic` to `"basic"` · `Business` to `"business"` · `Creator` to `"creator"` · `Custom` to `"custom"` · `Enterprise` to `"enterprise"` · `Free` to `"free"` · `LiveBusiness` to `"live_business"` · `LivePremium` to `"live_premium"` · `LivePro` to `"live_pro"` · `OttCustom` to `"ott_custom"` · `Plus` to `"plus"` · `Pro` to `"pro"` · `ProUnlimited` to `"pro_unlimited"` · `Producer` to `"producer"` · `Production` to `"production"` · `Professional` to `"professional"` · `Standard` to `"standard"` · `Starter` to `"starter"` · `Studio` to `"studio"` | `type2Schema` |
| `Type21` | `Folder` to `"folder"` · `LiveEvent` to `"live_event"` · `Showcase` to `"showcase"` · `Video` to `"video"` | `type21Schema` |
| `Type22` | `Batch` to `"batch"` · `BatchPrefix` to `"batch_prefix"` · `Single` to `"single"` | `type22Schema` |
| `Type23` | `Extra` to `"extra"` · `Main` to `"main"` · `Trailer` to `"trailer"` | `type23Schema` |
| `Type24` | `PaymentMethodTypesApplepay` to `"PAYMENT_METHOD_TYPES_APPLEPAY"` · `PaymentMethodTypesBankAccount` to `"PAYMENT_METHOD_TYPES_BANK_ACCOUNT"` · `PaymentMethodTypesCard` to `"PAYMENT_METHOD_TYPES_CARD"` · `PaymentMethodTypesCcRef` to `"PAYMENT_METHOD_TYPES_CC_REF"` · `PaymentMethodTypesGooglepay` to `"PAYMENT_METHOD_TYPES_GOOGLEPAY"` · `PaymentMethodTypesPaypal` to `"PAYMENT_METHOD_TYPES_PAYPAL"` · `PaymentMethodTypesTypesUnspecified` to `"PAYMENT_METHOD_TYPES_TYPES_UNSPECIFIED"` | `type24Schema` |
| `Type25` | `Beginning` to `"beginning"` · `Custom` to `"custom"` · `Email` to `"email"` · `Image` to `"image"` · `Link` to `"link"` · `Loop` to `"loop"` · `Nothing` to `"nothing"` · `Share` to `"share"` · `Text` to `"text"` · `Threevideos` to `"threevideos"` · `Videos` to `"videos"` | `type25Schema` |
| `Type26` | `Link` to `"link"` · `NoIdea` to `"no idea"` · `Text` to `"text"` · `UploadedClips` to `"uploaded_clips"` · `UploadedVideos` to `"uploaded_videos"` | `type26Schema` |
| `Type28` | `Captions` to `"captions"` · `Subtitles` to `"subtitles"` | `type28Schema` |
| `Type29` | `Captions` to `"captions"` · `Chapters` to `"chapters"` · `Descriptions` to `"descriptions"` · `Metadata` to `"metadata"` · `Subtitles` to `"subtitles"` | `type29Schema` |
| `Type3` | `AudioMp4` to `"audio/mp4"` · `Source` to `"source"` · `VideoMp4` to `"video/mp4"` · `VideoWebm` to `"video/webm"` · `Vp6XVideo` to `"vp6/x-video"` | `type3Schema` |
| `Type32` | `Custom` to `"custom"` · `None` to `"none"` · `Vimeo` to `"vimeo"` | `type32Schema` |
| `Type37` | `Film` to `"film"` · `Series` to `"series"` | `type37Schema` |
| `Type38` | `Beginning` to `"beginning"` · `Custom` to `"custom"` · `Email` to `"email"` · `Image` to `"image"` · `Link` to `"link"` · `Loop` to `"loop"` · `Nothing` to `"nothing"` · `Share` to `"share"` · `Text` to `"text"` · `Threevideos` to `"threevideos"` · `Videos` to `"videos"` | `type38Schema` |
| `Type4` | `Empty` to `"empty"` · `Loop` to `"loop"` · `Share` to `"share"` · `Thumbnail` to `"thumbnail"` | `type4Schema` |
| `Type40` | `Empty` to `"empty"` · `Loop` to `"loop"` · `Share` to `"share"` · `Thumbnail` to `"thumbnail"` | `type40Schema` |
| `Type41` | `Batch` to `"batch"` · `Single` to `"single"` | `type41Schema` |
| `Type42` | `Extra` to `"extra"` · `Main` to `"main"` · `Trailer` to `"trailer"` | `type42Schema` |
| `Type43` | `Bool` to `"bool"` · `Date` to `"date"` · `Int` to `"int"` · `MultiSelect` to `"multi-select"` · `Select` to `"select"` · `Str` to `"str"` | `type43Schema` |
| `Type5` | `Ranking` to `"ranking"` · `Thumbs` to `"thumbs"` | `type5Schema` |
| `Type54` | `Ranking` to `"ranking"` · `Thumbs` to `"thumbs"` | `type54Schema` |
| `Type57` | `Commentary` to `"commentary"` · `Descriptive` to `"descriptive"` · `Main` to `"main"` | `type57Schema` |
| `Type6` | `Source` to `"source"` · `VideoMp4` to `"video/mp4"` · `VideoWebm` to `"video/webm"` · `Vp6XVideo` to `"vp6/x-video"` | `type6Schema` |
| `Type7` | `Live` to `"live"` · `Stock` to `"stock"` · `Video` to `"video"` | `type7Schema` |
| `Type8` | `Member` to `"member"` · `Moderator` to `"moderator"` | `type8Schema` |
| `Type9` | `Film` to `"film"` · `Series` to `"series"` | `type9Schema` |
| `Unit` | `VideoCount` to `"video_count"` · `VideoSize` to `"video_size"` | `unitSchema` |
| `Unit2` | `VideoSize` to `"video_size"` | `unit2Schema` |
| `VersionTranscodeStatus1` | `Complete` to `"complete"` · `Error` to `"error"` · `InProgress` to `"in_progress"` | `versionTranscodeStatus1Schema` |
| `VersionType` | `Regular` to `"regular"` · `ScreenRecording` to `"screen-recording"` · `VimeoCreate` to `"vimeo-create"` | `versionTypeSchema` |
| `VideoStorageQuotaPeriod` | `Lifetime` to `"lifetime"` · `Month` to `"month"` · `Week` to `"week"` · `Year` to `"year"` | `videoStorageQuotaPeriodSchema` |
| `VideoStorageQuotaUnit` | `VideoCount` to `"video_count"` · `VideoSize` to `"video_size"` | `videoStorageQuotaUnitSchema` |
| `Videos7` | `All` to `"all"` · `Members` to `"members"` | `videos7Schema` |
| `View` | `Anybody` to `"anybody"` · `Moderators` to `"moderators"` · `Users` to `"users"` | `viewSchema` |
| `View1` | `Anybody` to `"anybody"` · `Contacts` to `"contacts"` · `Disable` to `"disable"` · `Nobody` to `"nobody"` · `Password` to `"password"` · `Unlisted` to `"unlisted"` · `Users` to `"users"` | `view1Schema` |
| `View11` | `Anybody` to `"anybody"` · `Contacts` to `"contacts"` · `Disable` to `"disable"` · `Nobody` to `"nobody"` · `Password` to `"password"` · `Unlisted` to `"unlisted"` · `Users` to `"users"` | `view11Schema` |
| `View14` | `Anybody` to `"anybody"` · `Contacts` to `"contacts"` · `Disable` to `"disable"` · `Nobody` to `"nobody"` · `Password` to `"password"` · `Team` to `"team"` · `Unlisted` to `"unlisted"` · `Users` to `"users"` | `view14Schema` |
| `View3` | `Anybody` to `"anybody"` · `Nobody` to `"nobody"` · `Team` to `"team"` | `view3Schema` |
| `View4` | `Anybody` to `"anybody"` · `ColdStorage` to `"cold_storage"` · `Contacts` to `"contacts"` · `Disable` to `"disable"` · `Nobody` to `"nobody"` · `Password` to `"password"` · `Ptv` to `"ptv"` · `Ptvhide` to `"ptvhide"` · `Stock` to `"stock"` · `StockPurchased` to `"stock_purchased"` · `Team` to `"team"` · `Unlisted` to `"unlisted"` · `Users` to `"users"` | `view4Schema` |
| `View5` | `Anybody` to `"anybody"` · `Members` to `"members"` | `view5Schema` |
| `View6` | `Anybody` to `"anybody"` · `EmbedOnly` to `"embed_only"` · `Nobody` to `"nobody"` · `Password` to `"password"` · `Team` to `"team"` · `Unlisted` to `"unlisted"` | `view6Schema` |
| `View7` | `Anybody` to `"anybody"` · `EmbedOnly` to `"embed_only"` · `Nobody` to `"nobody"` · `Password` to `"password"` · `Team` to `"team"` · `Unlisted` to `"unlisted"` | `view7Schema` |
| `View9` | `Anybody` to `"anybody"` · `EmbedOnly` to `"embed_only"` · `Nobody` to `"nobody"` · `Password` to `"password"` · `Team` to `"team"` · `Unlisted` to `"unlisted"` | `view9Schema` |
| `WebhookType` | `AutomaticThumbnailAvailable` to `"automatic-thumbnail-available"` · `LiveEventArchiveAvailable` to `"live-event-archive-available"` · `LiveEventClipCreated` to `"live-event-clip-created"` · `LiveEventDeleted` to `"live-event-deleted"` · `LiveEventEnded` to `"live-event-ended"` · `LiveEventStarted` to `"live-event-started"` · `LiveEventUpdated` to `"live-event-updated"` · `TranscriptStatusComplete` to `"transcript-status-complete"` · `TranscriptStatusUpdated` to `"transcript-status-updated"` · `VideoCreated` to `"video-created"` · `VideoDeleted` to `"video-deleted"` · `VideoTranscodeComplete` to `"video-transcode-complete"` · `VideoTranscodeFullyPlayable` to `"video-transcode-fully-playable"` · `VideoTranscodePlayable` to `"video-transcode-playable"` · `VideoUpdated` to `"video-updated"` · `VideoUploadFailed` to `"video-upload-failed"` | `webhookTypeSchema` |
| `WebhookType1` | `AutomaticThumbnailAvailable` to `"automatic-thumbnail-available"` · `ContentScanCompleted` to `"content-scan-completed"` · `LiveEventArchiveAvailable` to `"live-event-archive-available"` · `LiveEventClipCreated` to `"live-event-clip-created"` · `LiveEventDeleted` to `"live-event-deleted"` · `LiveEventEnded` to `"live-event-ended"` · `LiveEventStarted` to `"live-event-started"` · `LiveEventUpdated` to `"live-event-updated"` · `TranscriptStatusComplete` to `"transcript-status-complete"` · `TranscriptStatusUpdated` to `"transcript-status-updated"` · `VideoCreated` to `"video-created"` · `VideoDeleted` to `"video-deleted"` · `VideoTranscodeComplete` to `"video-transcode-complete"` · `VideoTranscodeFullyPlayable` to `"video-transcode-fully-playable"` · `VideoTranscodePlayable` to `"video-transcode-playable"` · `VideoUpdated` to `"video-updated"` · `VideoUploadFailed` to `"video-upload-failed"` | `webhookType1Schema` |
| `Dimension` | `Browser` to `"browser"` · `City` to `"city"` · `Country` to `"country"` · `DeviceType` to `"device_type"` · `EmbedDomain` to `"embed_domain"` · `EmbedDomainPath` to `"embed_domain_path"` · `Os` to `"os"` · `Region` to `"region"` · `StreamingType` to `"streaming_type"` · `Total` to `"total"` · `Video` to `"video"` | `dimensionSchema` |
| `Direction` | `Asc` to `"asc"` · `Desc` to `"desc"` | `directionSchema` |
| `Filter` | `ConditionalFeatured` to `"conditional_featured"` · `Embeddable` to `"embeddable"` | `filterSchema` |
| `Filter1` | `Featured` to `"featured"` | `filter1Schema` |
| `Filter10` | `Embeddable` to `"embeddable"` · `Playable` to `"playable"` | `filter10Schema` |
| `Filter12` | `Moderated` to `"moderated"` | `filter12Schema` |
| `Filter13` | `Online` to `"online"` | `filter13Schema` |
| `Filter18` | `Film` to `"film"` · `Series` to `"series"` | `filter18Schema` |
| `Filter19` | `All` to `"all"` · `ExpiringSoon` to `"expiring_soon"` · `Film` to `"film"` · `Important` to `"important"` · `Purchased` to `"purchased"` · `Rented` to `"rented"` · `Series` to `"series"` · `Subscription` to `"subscription"` · `Unwatched` to `"unwatched"` · `Watched` to `"watched"` | `filter19Schema` |
| `Filter2` | `Moderators` to `"moderators"` | `filter2Schema` |
| `Filter21` | `Folder` to `"folder"` · `LiveEvent` to `"live_event"` · `Video` to `"video"` | `filter21Schema` |
| `Filter22` | `AppOnly` to `"app_only"` · `ColdPrivacy` to `"cold_privacy"` · `ColdStorage` to `"cold_storage"` · `Embeddable` to `"embeddable"` · `Featured` to `"featured"` · `Live` to `"live"` · `NoPlaceholder` to `"no_placeholder"` · `Nolive` to `"nolive"` · `Playable` to `"playable"` · `ScreenRecorded` to `"screen_recorded"` | `filter22Schema` |
| `Filter24` | `Country` to `"country"` · `MyRegion` to `"my_region"` | `filter24Schema` |
| `Filter25` | `Extra` to `"extra"` · `Main` to `"main"` · `Trailer` to `"trailer"` | `filter25Schema` |
| `Filter26` | `Batch` to `"batch"` · `Default` to `"default"` · `Single` to `"single"` · `Vip` to `"vip"` | `filter26Schema` |
| `Filter27` | `Viewable` to `"viewable"` | `filter27Schema` |
| `Filter29` | `All` to `"all"` · `Buy` to `"buy"` · `ExpiringSoon` to `"expiring_soon"` · `Extra` to `"extra"` · `Main` to `"main"` · `MainViewable` to `"main.viewable"` · `Rent` to `"rent"` · `Trailer` to `"trailer"` · `Unwatched` to `"unwatched"` · `Viewable` to `"viewable"` · `Watched` to `"watched"` | `filter29Schema` |
| `Filter3` | `Embeddable` to `"embeddable"` | `filter3Schema` |
| `Filter30` | `Video` to `"video"` | `filter30Schema` |
| `Filter45` | `Cc` to `"CC"` · `CcBy` to `"CC-BY"` · `CcByNc` to `"CC-BY-NC"` · `CcByNcNd` to `"CC-BY-NC-ND"` · `CcByNcSa` to `"CC-BY-NC-SA"` · `CcByNd` to `"CC-BY-ND"` · `CcBySa` to `"CC-BY-SA"` · `Cc0` to `"CC0"` · `Categories` to `"categories"` · `Duration` to `"duration"` · `InProgress` to `"in-progress"` · `MinimumLikes` to `"minimum_likes"` · `Trending` to `"trending"` · `UploadDate` to `"upload_date"` | `filter45Schema` |
| `Filter46` | `Related` to `"related"` | `filter46Schema` |
| `Filter7` | `Audiotracks` to `"audiotracks"` · `Texttracks` to `"texttracks"` | `filter7Schema` |
| `Filter8` | `NotInFolder` to `"not_in_folder"` · `NotInShowcase` to `"not_in_showcase"` | `filter8Schema` |
| `QueryFields` | `Chapters` to `"chapters"` · `Description` to `"description"` · `Tags` to `"tags"` · `Title` to `"title"` | `queryFieldsSchema` |
| `ScoringAlgorithm` | `Passfail` to `"passfail"` · `Percentage` to `"percentage"` · `Quiz` to `"quiz"` | `scoringAlgorithmSchema` |
| `Sort10` | `Added` to `"added"` · `Alphabetical` to `"alphabetical"` · `Comments` to `"comments"` · `Date` to `"date"` · `Default` to `"default"` · `Duration` to `"duration"` · `Likes` to `"likes"` · `Manual` to `"manual"` · `ModifiedTime` to `"modified_time"` · `Plays` to `"plays"` | `sort10Schema` |
| `Sort13` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Followers` to `"followers"` · `Relevant` to `"relevant"` · `Videos` to `"videos"` | `sort13Schema` |
| `Sort15` | `Alphabetical` to `"alphabetical"` · `Comments` to `"comments"` · `Date` to `"date"` · `Duration` to `"duration"` · `Likes` to `"likes"` · `Plays` to `"plays"` | `sort15Schema` |
| `Sort17` | `Added` to `"added"` · `Alphabetical` to `"alphabetical"` · `Arranged` to `"arranged"` · `Comments` to `"comments"` · `Date` to `"date"` · `Duration` to `"duration"` · `Likes` to `"likes"` · `Plays` to `"plays"` | `sort17Schema` |
| `Sort18` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Duration` to `"duration"` · `LastModified` to `"last_modified"` · `Videos` to `"videos"` | `sort18Schema` |
| `Sort2` | `Alphabetical` to `"alphabetical"` · `Comments` to `"comments"` · `Date` to `"date"` · `Default` to `"default"` · `Duration` to `"duration"` · `LastUserActionEventDate` to `"last_user_action_event_date"` · `Likes` to `"likes"` · `ModifiedTime` to `"modified_time"` · `Plays` to `"plays"` | `sort2Schema` |
| `Sort21` | `Alphabetical` to `"alphabetical"` · `Comments` to `"comments"` · `Date` to `"date"` · `Default` to `"default"` · `Duration` to `"duration"` · `Likes` to `"likes"` · `Manual` to `"manual"` · `ModifiedTime` to `"modified_time"` · `Plays` to `"plays"` | `sort21Schema` |
| `Sort22` | `Comments` to `"comments"` · `Completions` to `"completions"` · `Country` to `"country"` · `Default` to `"default"` · `DeviceType` to `"device_type"` · `Downloads` to `"downloads"` · `DrmLicensesUsed` to `"drm_licenses_used"` · `EmbedDomain` to `"embed_domain"` · `Finishes` to `"finishes"` · `FiveStarClicks` to `"five_star_clicks"` · `FourStarClicks` to `"four_star_clicks"` · `Impressions` to `"impressions"` · `Like` to `"like"` · `MeanPercentWatched` to `"mean_percent_watched"` · `MeanSecondsWatched` to `"mean_seconds_watched"` · `OneStarClicks` to `"one_star_clicks"` · `RankingWidgetAverageRating` to `"ranking_widget_average_rating"` · `RankingWidgetClicks` to `"ranking_widget_clicks"` · `ThirdPartyImpressions` to `"third_party_impressions"` · `ThreeStarClicks` to `"three_star_clicks"` · `ThumbsDownClicks` to `"thumbs_down_clicks"` · `ThumbsUpClicks` to `"thumbs_up_clicks"` · `ThumbsWidgetAverageRating` to `"thumbs_widget_average_rating"` · `ThumbsWidgetClicks` to `"thumbs_widget_clicks"` · `Time` to `"time"` · `TotalSecondsWatched` to `"total_seconds_watched"` · `TwoStarClicks` to `"two_star_clicks"` · `UniqueImpressions` to `"unique_impressions"` · `UniqueViewers` to `"unique_viewers"` · `Video` to `"video"` · `Views` to `"views"` | `sort22Schema` |
| `Sort24` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Name` to `"name"` | `sort24Schema` |
| `Sort3` | `LastVideoFeaturedTime` to `"last_video_featured_time"` · `Name` to `"name"` | `sort3Schema` |
| `Sort32` | `Added` to `"added"` · `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `ModifiedTime` to `"modified_time"` · `Name` to `"name"` · `PublishTime` to `"publish.time"` · `Rating` to `"rating"` | `sort32Schema` |
| `Sort33` | `Added` to `"added"` · `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Name` to `"name"` · `PurchaseTime` to `"purchase_time"` · `Rating` to `"rating"` · `ReleaseDate` to `"release_date"` | `sort33Schema` |
| `Sort35` | `Alphabetical` to `"alphabetical"` · `Comments` to `"comments"` · `Date` to `"date"` · `Default` to `"default"` · `Likes` to `"likes"` · `Manual` to `"manual"` · `Plays` to `"plays"` | `sort35Schema` |
| `Sort36` | `Date` to `"date"` · `Default` to `"default"` · `ModifiedTime` to `"modified_time"` · `Name` to `"name"` · `PinnedOn` to `"pinned_on"` | `sort36Schema` |
| `Sort37` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Default` to `"default"` · `Duration` to `"duration"` · `LastUserActionEventDate` to `"last_user_action_event_date"` | `sort37Schema` |
| `Sort39` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Default` to `"default"` · `Duration` to `"duration"` · `LastUserActionEventDate` to `"last_user_action_event_date"` · `Likes` to `"likes"` · `ModifiedTime` to `"modified_time"` · `Plays` to `"plays"` | `sort39Schema` |
| `Sort4` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Followers` to `"followers"` · `Videos` to `"videos"` | `sort4Schema` |
| `Sort41` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Name` to `"name"` · `PublishTime` to `"publish.time"` · `Videos` to `"videos"` | `sort41Schema` |
| `Sort43` | `Date` to `"date"` · `Manual` to `"manual"` | `sort43Schema` |
| `Sort44` | `Date` to `"date"` · `Default` to `"default"` · `Manual` to `"manual"` · `Name` to `"name"` · `PurchaseTime` to `"purchase_time"` · `ReleaseDate` to `"release_date"` | `sort44Schema` |
| `Sort45` | `Date` to `"date"` · `Default` to `"default"` · `Episode` to `"episode"` · `Manual` to `"manual"` · `Name` to `"name"` · `PurchaseTime` to `"purchase_time"` · `ReleaseDate` to `"release_date"` | `sort45Schema` |
| `Sort46` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Default` to `"default"` · `Duration` to `"duration"` · `FolderPath` to `"folder_path"` · `LastUserActionEventDate` to `"last_user_action_event_date"` | `sort46Schema` |
| `Sort47` | `CreatedTime` to `"created_time"` · `Duration` to `"duration"` · `Name` to `"name"` | `sort47Schema` |
| `Sort48` | `ModifiedAsc` to `"modified_asc"` · `ModifiedDesc` to `"modified_desc"` · `TitleAsc` to `"title_asc"` · `TitleDesc` to `"title_desc"` | `sort48Schema` |
| `Sort5` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Members` to `"members"` · `Videos` to `"videos"` | `sort5Schema` |
| `Sort6` | `Alphabetical` to `"alphabetical"` · `Comments` to `"comments"` · `Date` to `"date"` · `Duration` to `"duration"` · `Featured` to `"featured"` · `Likes` to `"likes"` · `Plays` to `"plays"` · `Relevant` to `"relevant"` | `sort6Schema` |
| `Sort7` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Default` to `"default"` · `Followers` to `"followers"` · `Relevant` to `"relevant"` · `Videos` to `"videos"` | `sort7Schema` |
| `Sort73` | `Alphabetical` to `"alphabetical"` · `Comments` to `"comments"` · `Date` to `"date"` · `Duration` to `"duration"` · `Likes` to `"likes"` · `Plays` to `"plays"` · `Relevant` to `"relevant"` | `sort73Schema` |
| `Sort74` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` · `Duration` to `"duration"` · `Videos` to `"videos"` | `sort74Schema` |
| `Sort78` | `Default` to `"default"` | `sort78Schema` |
| `Sort8` | `Alphabetical` to `"alphabetical"` · `Date` to `"date"` | `sort8Schema` |
| `Standard` | `Aicc` to `"aicc"` · `Cmi5` to `"cmi5"` · `Scorm12` to `"scorm12"` · `Scorm20043Rd` to `"scorm2004_3rd"` · `Tincan` to `"tincan"` | `standardSchema` |
| `Tier1` | `Advanced` to `"advanced"` · `Business` to `"business"` · `Free` to `"free"` · `LivePremium` to `"live_premium"` · `Plus` to `"plus"` · `Pro` to `"pro"` · `ProUnlimited` to `"pro_unlimited"` · `Standard` to `"standard"` · `Starter` to `"starter"` | `tier1Schema` |
| `TimeInterval` | `Day` to `"day"` · `Month` to `"month"` · `None` to `"none"` · `Week` to `"week"` · `Year` to `"year"` | `timeIntervalSchema` |
| `Type31` | `All` to `"all"` · `OneTime` to `"one_time"` · `Recurring` to `"recurring"` | `type31Schema` |
| `Type33` | `Appears` to `"appears"` · `CategoryFeatured` to `"category_featured"` · `Channel` to `"channel"` · `FacebookFeed` to `"facebook_feed"` · `Following` to `"following"` · `Group` to `"group"` · `Likes` to `"likes"` · `OndemandPublish` to `"ondemand_publish"` · `Share` to `"share"` · `TaggedWith` to `"tagged_with"` · `TwitterTimeline` to `"twitter_timeline"` · `Uploads` to `"uploads"` | `type33Schema` |
| `Type52` | `Dubbing` to `"dubbing"` · `Subtitling` to `"subtitling"` · `Transcription` to `"transcription"` | `type52Schema` |

**Unions.** A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import. One without a discriminant is narrowed on the shape of its arms.

| Union | Variants | Narrow with | Source |
| --- | --- | --- | --- |
| `EndScreen3` | no discriminant | `typeof`, or an `in` check | `src/models/unions/end-screen3.ts` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `ApiAppWebhook` | `appUri` | `app_uri` |
| `ApiAppWebhook` | `createdOn` | `created_on` |
| `ApiAppWebhook` | `disabledOn` | `disabled_on` |
| `ApiAppWebhook` | `enabledOn` | `enabled_on` |
| `ApiAppWebhook` | `failureRateBeforeDisabling` | `failure_rate_before_disabling` |
| `ApiAppWebhook` | `isEnabled` | `is_enabled` |
| `ApiAppWebhook` | `lastRequestTimeBeforeDisabling` | `last_request_time_before_disabling` |
| `ApiAppWebhook` | `modifiedOn` | `modified_on` |
| `ApiAppWebhook` | `requestsExecutedBeforeDisabling` | `requests_executed_before_disabling` |
| `ApiAppWebhook` | `requestsFailedBeforeDisabling` | `requests_failed_before_disabling` |
| `ApiAppWebhook` | `timePeriodFailureRate` | `time_period_failure_rate` |
| `ApiAppWebhook` | `webhookType` | `webhook_type` |
| `ApiAppWebhook` | `webhookUrl` | `webhook_url` |
| `AccountDictionaryQuota` | `glossaryTerms` | `glossary_terms` |
| `AccountDictionaryQuota` | `languageReplacementTerms` | `language_replacement_terms` |
| `Activity31` | `ondemandPage` | `ondemand_page` |
| `AddSubfolder` | `canAddSubfolders` | `can_add_subfolders` |
| `AddSubfolder` | `contentType` | `content_type` |
| `AddSubfolder` | `subfolderDepthLimitReached` | `subfolder_depth_limit_reached` |
| `Ai` | `creditsPeriod` | `credits_period` |
| `Ai` | `periodicCredits` | `periodic_credits` |
| `AiContent` | `audioAuto` | `audio_auto` |
| `AiContent` | `visualAuto` | `visual_auto` |
| `AiCreditsQuota` | `resetDate` | `reset_date` |
| `Album` | `allowContinuousPlay` | `allow_continuous_play` |
| `Album` | `allowDownloads` | `allow_downloads` |
| `Album` | `allowShare` | `allow_share` |
| `Album` | `allowedPrivacies` | `allowed_privacies` |
| `Album` | `brandColor` | `brand_color` |
| `Album` | `createdTime` | `created_time` |
| `Album` | `customLogo` | `custom_logo` |
| `Album` | `customThumbnail` | `custom_thumbnail` |
| `Album` | `domainCertificateState` | `domain_certificate_state` |
| `Album` | `embedBrandColor` | `embed_brand_color` |
| `Album` | `embedCustomLogo` | `embed_custom_logo` |
| `Album` | `hasChosenThumbnail` | `has_chosen_thumbnail` |
| `Album` | `hasFeaturedContent` | `has_featured_content` |
| `Album` | `hideFromVimeo` | `hide_from_vimeo` |
| `Album` | `hideNav` | `hide_nav` |
| `Album` | `hideUpcoming` | `hide_upcoming` |
| `Album` | `hideVimeoLogo` | `hide_vimeo_logo` |
| `Album` | `modifiedTime` | `modified_time` |
| `Album` | `resourceKey` | `resource_key` |
| `Album` | `reviewMode` | `review_mode` |
| `Album` | `seoAllowIndexed` | `seo_allow_indexed` |
| `Album` | `seoDescription` | `seo_description` |
| `Album` | `seoKeywords` | `seo_keywords` |
| `Album` | `seoTitle` | `seo_title` |
| `Album` | `shareLink` | `share_link` |
| `Album` | `thumbnailType` | `thumbnail_type` |
| `Album` | `totalClips` | `total_clips` |
| `Album` | `unlistedHash` | `unlisted_hash` |
| `Album` | `useCustomDomain` | `use_custom_domain` |
| `Album` | `webBrandColor` | `web_brand_color` |
| `Album` | `webCustomLogo` | `web_custom_logo` |
| `Album2` | `embedCode` | `embed_code` |
| `Analytics` | `audioTrackLanguage` | `audio_track_language` |
| `Analytics` | `audioTrackProvenance` | `audio_track_provenance` |
| `Analytics` | `audioTrackType` | `audio_track_type` |
| `Analytics` | `averagePercentWatched` | `average_percent_watched` |
| `Analytics` | `averageTimeWatched` | `average_time_watched` |
| `Analytics` | `browserName` | `browser_name` |
| `Analytics` | `cityName` | `city_name` |
| `Analytics` | `countryCode` | `country_code` |
| `Analytics` | `countryName` | `country_name` |
| `Analytics` | `deviceType` | `device_type` |
| `Analytics` | `drmLicensesUsed` | `drm_licenses_used` |
| `Analytics` | `embedDomain` | `embed_domain` |
| `Analytics` | `embedDomainPath` | `embed_domain_path` |
| `Analytics` | `endDate` | `end_date` |
| `Analytics` | `fiveStarClicks` | `five_star_clicks` |
| `Analytics` | `fourStarClicks` | `four_star_clicks` |
| `Analytics` | `meanPercentWatched` | `mean_percent_watched` |
| `Analytics` | `meanSecondsWatched` | `mean_seconds_watched` |
| `Analytics` | `oneStarClicks` | `one_star_clicks` |
| `Analytics` | `osName` | `os_name` |
| `Analytics` | `rankingWidgetAverageRating` | `ranking_widget_average_rating` |
| `Analytics` | `rankingWidgetClicks` | `ranking_widget_clicks` |
| `Analytics` | `regionCode` | `region_code` |
| `Analytics` | `regionName` | `region_name` |
| `Analytics` | `startDate` | `start_date` |
| `Analytics` | `streamingType` | `streaming_type` |
| `Analytics` | `textTrackLanguage` | `text_track_language` |
| `Analytics` | `textTrackProvenance` | `text_track_provenance` |
| `Analytics` | `textTrackType` | `text_track_type` |
| `Analytics` | `thirdPartyImpressions` | `third_party_impressions` |
| `Analytics` | `threeStarClicks` | `three_star_clicks` |
| `Analytics` | `thumbsDownClicks` | `thumbs_down_clicks` |
| `Analytics` | `thumbsUpClicks` | `thumbs_up_clicks` |
| `Analytics` | `thumbsWidgetAverageRating` | `thumbs_widget_average_rating` |
| `Analytics` | `thumbsWidgetClicks` | `thumbs_widget_clicks` |
| `Analytics` | `totalSecondsWatched` | `total_seconds_watched` |
| `Analytics` | `totalSecondsWatchedIncludingRepeats` | `total_seconds_watched_including_repeats` |
| `Analytics` | `totalTimeWatched` | `total_time_watched` |
| `Analytics` | `twoStarClicks` | `two_star_clicks` |
| `Analytics` | `uniqueImpressions` | `unique_impressions` |
| `Analytics` | `uniqueViewers` | `unique_viewers` |
| `Analytics` | `uniqueViews` | `unique_views` |
| `AncestorPath1` | `canUpload` | `can_upload` |
| `AnimatedThumbnail` | `fileFormat` | `file_format` |
| `AnimatedThumbnail` | `fileSize` | `file_size` |
| `AnimatedThumbnail` | `isDownloadable` | `is_downloadable` |
| `AnimatedThumbnail` | `linkWithPlayButton` | `link_with_play_button` |
| `AnimatedThumbnail` | `profileId` | `profile_id` |
| `AnimatedThumbnail` | `startTime` | `start_time` |
| `AnimatedThumbset` | `clipUri` | `clip_uri` |
| `AnimatedThumbset` | `createdOn` | `created_on` |
| `ApplicablePermissionPolicies` | `regionalDelivery` | `regional_delivery` |
| `ApplicablePermissionPolicies1` | `regionalDelivery` | `regional_delivery` |
| `AppsWebhooksRequest` | `isEnabled` | `is_enabled` |
| `AppsWebhooksRequest` | `webhookType` | `webhook_type` |
| `AppsWebhooksRequest` | `webhookUrl` | `webhook_url` |
| `AppsWebhooksRequest1` | `isEnabled` | `is_enabled` |
| `AppsWebhooksRequest1` | `webhookType` | `webhook_type` |
| `AppsWebhooksRequest1` | `webhookUrl` | `webhook_url` |
| `Archive` | `clipId` | `clip_id` |
| `Audio` | `displayCodec` | `display_codec` |
| `AudioTrackQuota` | `hasReachedQuota` | `has_reached_quota` |
| `Auth` | `accessToken` | `access_token` |
| `Auth` | `expiresOn` | `expires_on` |
| `Auth` | `refreshToken` | `refresh_token` |
| `Auth` | `tokenType` | `token_type` |
| `AuthErrorModel` | `errorDescription` | `error_description` |
| `AuthErrorError` | `errorDescription` | `error_description` |
| `Badges` | `dolbyVision` | `dolby_vision` |
| `Badges` | `hdr10` | `hdr_10` |
| `Badges` | `hdr10Plus` | `hdr_10_plus` |
| `Badges` | `ott4K` | `ott_4k` |
| `Badges` | `ott51Audio` | `ott_5_1_audio` |
| `Badges` | `ottHevc` | `ott_hevc` |
| `Badges` | `staffPick` | `staff_pick` |
| `Badges` | `stereoSpatial` | `stereo_spatial` |
| `Badges` | `weekendChallenge` | `weekend_challenge` |
| `Balance` | `expirationDate` | `expiration_date` |
| `Bandwidth1` | `periodicQuota` | `periodic_quota` |
| `Bandwidth1` | `quotaPeriod` | `quota_period` |
| `BannerConfig` | `showBanner` | `show_banner` |
| `BannerConfig` | `showBannerDescription` | `show_banner_description` |
| `BannerConfig` | `showBannerHeader` | `show_banner_header` |
| `BannerConfig` | `showBannerTitle` | `show_banner_title` |
| `BannerConfig` | `showShowcaseOwnerAvatar` | `show_showcase_owner_avatar` |
| `BannerConfig` | `showStartWatchingButton` | `show_start_watching_button` |
| `BillingAddress` | `postalCode` | `postal_code` |
| `Block1` | `addedTime` | `added_time` |
| `Buy` | `displayPrice` | `display_price` |
| `Buy` | `purchaseTime` | `purchase_time` |
| `Card` | `displayTime` | `display_time` |
| `Card` | `imageUrl` | `image_url` |
| `Card1` | `billingAddress` | `billing_address` |
| `Card1` | `cardholderName` | `cardholder_name` |
| `Card1` | `expirationMonth` | `expiration_month` |
| `Card1` | `expirationYear` | `expiration_year` |
| `Card1` | `lastFourDigits` | `last_four_digits` |
| `Card2` | `displayTime` | `display_time` |
| `Card2` | `imageUrl` | `image_url` |
| `Category` | `isDeprecated` | `is_deprecated` |
| `Category` | `lastVideoFeaturedTime` | `last_video_featured_time` |
| `Category` | `resourceKey` | `resource_key` |
| `Category` | `topLevel` | `top_level` |
| `Channel` | `createdTime` | `created_time` |
| `Channel` | `modifiedTime` | `modified_time` |
| `Channel` | `resourceKey` | `resource_key` |
| `ChannelsModeratorsRequest` | `userUri` | `user_uri` |
| `ChannelsModeratorsRequest1` | `userUri` | `user_uri` |
| `ChannelsVideosCreditsRequest` | `userUri` | `user_uri` |
| `ChannelsVideosRequest` | `videoUri` | `video_uri` |
| `ChannelsVideosRequest1` | `videoUri` | `video_uri` |
| `ChannelsVideosTexttracksRequest` | `isAutoGenerated` | `is_auto_generated` |
| `ChannelsVideosTexttracksRequest` | `isEdited` | `is_edited` |
| `Chapter` | `activeThumbnailUri` | `active_thumbnail_uri` |
| `Colors` | `colorFour` | `color_four` |
| `Colors` | `colorOne` | `color_one` |
| `Colors` | `colorThree` | `color_three` |
| `Colors` | `colorTwo` | `color_two` |
| `Colors1` | `colorFour` | `color_four` |
| `Colors1` | `colorOne` | `color_one` |
| `Colors1` | `colorThree` | `color_three` |
| `Colors1` | `colorTwo` | `color_two` |
| `Colors5` | `colorFour` | `color_four` |
| `Colors5` | `colorOne` | `color_one` |
| `Colors5` | `colorThree` | `color_three` |
| `Colors5` | `colorTwo` | `color_two` |
| `Colors6` | `colorFour` | `color_four` |
| `Colors6` | `colorOne` | `color_one` |
| `Colors6` | `colorThree` | `color_three` |
| `Colors6` | `colorTwo` | `color_two` |
| `Comment` | `createdOn` | `created_on` |
| `Comment` | `deletedOn` | `deleted_on` |
| `Comment` | `lastEditedOn` | `last_edited_on` |
| `Comment` | `resourceKey` | `resource_key` |
| `Comment` | `textDecorations` | `text_decorations` |
| `ConnectedApps1` | `allScopes` | `all_scopes` |
| `ConnectedApps1` | `isConnected` | `is_connected` |
| `ConnectedApps1` | `neededScopes` | `needed_scopes` |
| `Connections1` | `privacyUsers` | `privacy_users` |
| `Connections1` | `requestedClip` | `requested_clip` |
| `Connections11` | `availableVideos` | `available_videos` |
| `Connections11` | `requestedClip` | `requested_clip` |
| `Connections13` | `guestUser` | `guest_user` |
| `Connections14` | `guestUser` | `guest_user` |
| `Connections15` | `liveVideo` | `live_video` |
| `Connections15` | `preLiveVideo` | `pre_live_video` |
| `Connections15` | `teamMember` | `team_member` |
| `Connections23` | `sharedTeam` | `shared_team` |
| `Connections23` | `sharedUser` | `shared_user` |
| `Connections24` | `personalTeamFolder` | `personal_team_folder` |
| `Connections25` | `childTextTracks` | `child_text_tracks` |
| `Connections25` | `parentTextTrack` | `parent_text_track` |
| `Connections26` | `createdVersion` | `created_version` |
| `Connections26` | `rootVersion` | `root_version` |
| `Connections3` | `connectedApps` | `connected_apps` |
| `Connections3` | `foldersRoot` | `folders_root` |
| `Connections3` | `importApps` | `import_apps` |
| `Connections3` | `leadCaptureForm` | `lead_capture_form` |
| `Connections3` | `moderatedChannels` | `moderated_channels` |
| `Connections3` | `msTeamsTeamFolderId` | `ms_teams_team_folder_id` |
| `Connections3` | `msTeamsTenantTokenId` | `ms_teams_tenant_token_id` |
| `Connections3` | `recommendedChannels` | `recommended_channels` |
| `Connections3` | `recommendedUsers` | `recommended_users` |
| `Connections3` | `viewProfile` | `view_profile` |
| `Connections3` | `watchedVideos` | `watched_videos` |
| `Connections4` | `ancestorPath` | `ancestor_path` |
| `Connections4` | `availableAlbums` | `available_albums` |
| `Connections4` | `availableChannels` | `available_channels` |
| `Connections4` | `publishToSocial` | `publish_to_social` |
| `Connections4` | `resourceCreatorTeamUser` | `resource_creator_team_user` |
| `Connections4` | `teamPermissions` | `team_permissions` |
| `Connections4` | `usersWithAccess` | `users_with_access` |
| `Connections5` | `ancestorPath` | `ancestor_path` |
| `Connections5` | `dataRetention` | `data_retention` |
| `Connections5` | `groupFolderGrants` | `group_folder_grants` |
| `Connections5` | `parentFolder` | `parent_folder` |
| `Connections5` | `personalTeamFolderOwner` | `personal_team_folder_owner` |
| `Connections5` | `resourceCreatorTeamUser` | `resource_creator_team_user` |
| `Connections5` | `teamPermissions` | `team_permissions` |
| `Connections5` | `userFolderAccessGrants` | `user_folder_access_grants` |
| `Connections6` | `requestedClip` | `requested_clip` |
| `Context` | `resourceType` | `resource_type` |
| `Currency` | `currencyCode` | `currency_code` |
| `Custom` | `useLink` | `use_link` |
| `CustomMetadataValues` | `fieldId` | `field_id` |
| `CustomMetadataValues` | `fieldValue` | `field_value` |
| `Custom1` | `useLink` | `use_link` |
| `Custom2` | `useLink` | `use_link` |
| `CustomMetadatum` | `fieldId` | `field_id` |
| `CustomMetadatum` | `fieldValue` | `field_value` |
| `Customization` | `ambientBacklight` | `ambient_backlight` |
| `Customization` | `backgroundColor` | `background_color` |
| `Customization` | `hideVimeoHeader` | `hide_vimeo_header` |
| `Customization` | `titleFontFamily` | `title_font_family` |
| `Customization` | `titleFontWeight` | `title_font_weight` |
| `DestinationRequest` | `displayName` | `display_name` |
| `DestinationRequest` | `isEnabled` | `is_enabled` |
| `DestinationRequest` | `providerDestinationId` | `provider_destination_id` |
| `DestinationRequest` | `serviceName` | `service_name` |
| `DestinationRequest` | `streamKey` | `stream_key` |
| `DestinationRequest` | `streamUrl` | `stream_url` |
| `DirectorTimeline` | `timeCode` | `time_code` |
| `DirectorTimeline1` | `timeCode` | `time_code` |
| `DirectorTimeline3` | `timeCode` | `time_code` |
| `Disabled1` | `enableLink` | `enable_link` |
| `Disabled2` | `enableLink` | `enable_link` |
| `Disabled3` | `enableLink` | `enable_link` |
| `Domain` | `allowHd` | `allow_hd` |
| `DrmLicensesQuota` | `resetDate` | `reset_date` |
| `Edit` | `blockedFields` | `blocked_fields` |
| `EditPrivacy` | `contentRating` | `content_rating` |
| `EditingSession` | `hasWatermark` | `has_watermark` |
| `EditingSession` | `isEditedByTve` | `is_edited_by_tve` |
| `EditingSession` | `isMaxResolution` | `is_max_resolution` |
| `EditingSession` | `isMusicLicensed` | `is_music_licensed` |
| `EditingSession` | `isRated` | `is_rated` |
| `EditingSession` | `minTierForMovie` | `min_tier_for_movie` |
| `EditingSession` | `resultVideoHash` | `result_video_hash` |
| `EditingSession` | `uploadAttemptIdVersionUri` | `upload_attempt_id_version_uri` |
| `EditingSession` | `versionUri` | `version_uri` |
| `EmbedSettings` | `askAi` | `ask_ai` |
| `EmbedSettings` | `audioTracks` | `audio_tracks` |
| `EmbedSettings` | `ccTrackMenu` | `cc_track_menu` |
| `EmbedSettings` | `closedCaptions` | `closed_captions` |
| `EmbedSettings` | `contextMenu` | `context_menu` |
| `EmbedSettings` | `emailCaptureForm` | `email_capture_form` |
| `EmbedSettings` | `endScreen` | `end_screen` |
| `EmbedSettings` | `eventSchedule` | `event_schedule` |
| `EmbedSettings` | `hasCards` | `has_cards` |
| `EmbedSettings` | `outroType` | `outro_type` |
| `EmbedSettings` | `playButton` | `play_button` |
| `EmbedSettings` | `qualitySelector` | `quality_selector` |
| `EmbedSettings` | `sentimentWidgets` | `sentiment_widgets` |
| `EmbedSettings` | `showTimezone` | `show_timezone` |
| `EmbedSettings` | `skippingForward` | `skipping_forward` |
| `Embed16` | `audioTracks` | `audio_tracks` |
| `Embed16` | `ccTrackMenu` | `cc_track_menu` |
| `Embed16` | `closedCaptions` | `closed_captions` |
| `Embed16` | `endScreen` | `end_screen` |
| `Embed16` | `playButton` | `play_button` |
| `Embed16` | `qualitySelector` | `quality_selector` |
| `Embed16` | `skippingForward` | `skipping_forward` |
| `Embed17` | `audioTracks` | `audio_tracks` |
| `Embed17` | `ccTrackMenu` | `cc_track_menu` |
| `Embed17` | `closedCaptions` | `closed_captions` |
| `Embed17` | `endScreen` | `end_screen` |
| `Embed17` | `playButton` | `play_button` |
| `Embed17` | `qualitySelector` | `quality_selector` |
| `Embed17` | `skippingForward` | `skipping_forward` |
| `Embed18` | `endScreen` | `end_screen` |
| `Embed29` | `audioTracks` | `audio_tracks` |
| `Embed29` | `ccTrackMenu` | `cc_track_menu` |
| `Embed29` | `closedCaptions` | `closed_captions` |
| `Embed29` | `contextMenu` | `context_menu` |
| `Embed29` | `endScreen` | `end_screen` |
| `Embed29` | `playButton` | `play_button` |
| `Embed29` | `qualitySelector` | `quality_selector` |
| `Embed29` | `sentimentWidgets` | `sentiment_widgets` |
| `Embed29` | `skippingForward` | `skipping_forward` |
| `Embed3` | `availablePlayerLogos` | `available_player_logos` |
| `Embed3` | `chatEmbedSource` | `chat_embed_source` |
| `Embed3` | `closedCaptions` | `closed_captions` |
| `Embed3` | `embedChat` | `embed_chat` |
| `Embed3` | `embedProperties` | `embed_properties` |
| `Embed3` | `eventSchedule` | `event_schedule` |
| `Embed3` | `fullscreenButton` | `fullscreen_button` |
| `Embed3` | `hideLiveLabel` | `hide_live_label` |
| `Embed3` | `hideViewerCount` | `hide_viewer_count` |
| `Embed3` | `likeButton` | `like_button` |
| `Embed3` | `playButtonPosition` | `play_button_position` |
| `Embed3` | `responsiveHtml` | `responsive_html` |
| `Embed3` | `showLatestArchivedClip` | `show_latest_archived_clip` |
| `Embed3` | `showTimezone` | `show_timezone` |
| `Embed3` | `useColor` | `use_color` |
| `Embed7` | `showLatestArchivedClip` | `show_latest_archived_clip` |
| `Embed7` | `useColor` | `use_color` |
| `Embed9` | `useColor` | `use_color` |
| `EmbedProperties` | `sourceUrl` | `source_url` |
| `EnableAskAi` | `isUpgrade` | `is_upgrade` |
| `EnableComments` | `isUpgrade` | `is_upgrade` |
| `EnableDownload` | `isUpgrade` | `is_upgrade` |
| `EnableLike` | `isUpgrade` | `is_upgrade` |
| `EnableShare` | `isUpgrade` | `is_upgrade` |
| `Error` | `developerMessage` | `developer_message` |
| `Error` | `errorCode` | `error_code` |
| `ErrorError` | `developerMessage` | `developer_message` |
| `ErrorError` | `errorCode` | `error_code` |
| `Event` | `allowShareLink` | `allow_share_link` |
| `Event` | `allowedPrivacies` | `allowed_privacies` |
| `Event` | `autoCcEnabled` | `auto_cc_enabled` |
| `Event` | `autoCcKeywords` | `auto_cc_keywords` |
| `Event` | `autoCcLanguage` | `auto_cc_language` |
| `Event` | `autoCcLimit` | `auto_cc_limit` |
| `Event` | `autoCcRemaining` | `auto_cc_remaining` |
| `Event` | `autoCcTranslationEnabled` | `auto_cc_translation_enabled` |
| `Event` | `autoCcTranslationLanguages` | `auto_cc_translation_languages` |
| `Event` | `automaticallyTitleStream` | `automatically_title_stream` |
| `Event` | `backupStreamKey` | `backup_stream_key` |
| `Event` | `chatEnabled` | `chat_enabled` |
| `Event` | `completedOn` | `completed_on` |
| `Event` | `contentRating` | `content_rating` |
| `Event` | `createdTime` | `created_time` |
| `Event` | `disableAutoArchiving` | `disable_auto_archiving` |
| `Event` | `emailQuota` | `email_quota` |
| `Event` | `eventType` | `event_type` |
| `Event` | `fromShowcase` | `from_showcase` |
| `Event` | `fromWebinar` | `from_webinar` |
| `Event` | `hasForcedLeadCaptureForm` | `has_forced_lead_capture_form` |
| `Event` | `headClip` | `head_clip` |
| `Event` | `interactionToolsSettings` | `interaction_tools_settings` |
| `Event` | `isStarredByCurUser` | `is_starred_by_cur_user` |
| `Event` | `landingPageLogo` | `landing_page_logo` |
| `Event` | `leadUuid` | `lead_uuid` |
| `Event` | `liveClips` | `live_clips` |
| `Event` | `liveDestinations` | `live_destinations` |
| `Event` | `nextOccurrenceTime` | `next_occurrence_time` |
| `Event` | `parentFolder` | `parent_folder` |
| `Event` | `playlistSort` | `playlist_sort` |
| `Event` | `preferredStreamMethod` | `preferred_stream_method` |
| `Event` | `rtmpLink` | `rtmp_link` |
| `Event` | `rtmpPreview` | `rtmp_preview` |
| `Event` | `rtmpsLink` | `rtmps_link` |
| `Event` | `scheduledPlayback` | `scheduled_playback` |
| `Event` | `settingsLink` | `settings_link` |
| `Event` | `srtEncryptionEnabled` | `srt_encryption_enabled` |
| `Event` | `srtLink` | `srt_link` |
| `Event` | `srtPassphrase` | `srt_passphrase` |
| `Event` | `streamDescription` | `stream_description` |
| `Event` | `streamKey` | `stream_key` |
| `Event` | `streamMode` | `stream_mode` |
| `Event` | `streamPassword` | `stream_password` |
| `Event` | `streamPrivacy` | `stream_privacy` |
| `Event` | `streamTitle` | `stream_title` |
| `Event` | `streamableClip` | `streamable_clip` |
| `Event` | `streamingAutoStop` | `streaming_auto_stop` |
| `Event` | `timeZone` | `time_zone` |
| `Event` | `unlimitedAutoCc` | `unlimited_auto_cc` |
| `Event` | `unlimitedDuration` | `unlimited_duration` |
| `Event` | `venueUuid` | `venue_uuid` |
| `Event` | `viewLink` | `view_link` |
| `Event` | `whitelistedDomains` | `whitelisted_domains` |
| `EventAudioTracks` | `audioTracks` | `audio_tracks` |
| `EventAudioTracks` | `primaryAudioTrack` | `primary_audio_track` |
| `EventAutomatedClosedCaptions` | `autoCcCanBeEnabled` | `auto_cc_can_be_enabled` |
| `EventAutomatedClosedCaptions` | `autoCcCreditsPerMinute` | `auto_cc_credits_per_minute` |
| `EventAutomatedClosedCaptions` | `autoCcEnabled` | `auto_cc_enabled` |
| `EventAutomatedClosedCaptions` | `autoCcIsUnlimited` | `auto_cc_is_unlimited` |
| `EventAutomatedClosedCaptions` | `autoCcKeywords` | `auto_cc_keywords` |
| `EventAutomatedClosedCaptions` | `autoCcLanguage` | `auto_cc_language` |
| `EventAutomatedClosedCaptions` | `autoCcLimit` | `auto_cc_limit` |
| `EventAutomatedClosedCaptions` | `autoCcRemaining` | `auto_cc_remaining` |
| `EventAutomatedClosedCaptions` | `autoCcTranslationCreditsPerMinute` | `auto_cc_translation_credits_per_minute` |
| `EventAutomatedClosedCaptions` | `autoCcTranslationEnabled` | `auto_cc_translation_enabled` |
| `EventAutomatedClosedCaptions` | `autoCcTranslationLanguages` | `auto_cc_translation_languages` |
| `EventAutomatedClosedCaptions` | `eventId` | `event_id` |
| `EventDestination` | `displayName` | `display_name` |
| `EventDestination` | `isEnabled` | `is_enabled` |
| `EventDestination` | `liveClipId` | `live_clip_id` |
| `EventDestination` | `providerBroadcastId` | `provider_broadcast_id` |
| `EventDestination` | `providerDestinationId` | `provider_destination_id` |
| `EventDestination` | `providerUserId` | `provider_user_id` |
| `EventDestination` | `providerVideoId` | `provider_video_id` |
| `EventDestination` | `scheduledAt` | `scheduled_at` |
| `EventDestination` | `serviceName` | `service_name` |
| `EventDestination` | `stateMessage` | `state_message` |
| `EventDestination` | `streamKey` | `stream_key` |
| `EventDestination` | `streamUrl` | `stream_url` |
| `EventDestination` | `userDisplayName` | `user_display_name` |
| `EventDestination` | `userId` | `user_id` |
| `EventSchedule` | `endTime` | `end_time` |
| `EventSchedule` | `startTime` | `start_time` |
| `EventSchedule` | `timeZone` | `time_zone` |
| `EventSessionStatus` | `canManage` | `can_manage` |
| `EventSessionStatus` | `streamMode` | `stream_mode` |
| `ExplicitAccessSummary` | `allTeamCount` | `all_team_count` |
| `ExplicitAccessSummary` | `teamGroupCount` | `team_group_count` |
| `ExplicitAccessSummary` | `teamUserCount` | `team_user_count` |
| `FederatedSearchItems` | `liveEvent` | `live_event` |
| `Field` | `defaultValue` | `default_value` |
| `Field1` | `fieldId` | `field_id` |
| `Field1` | `fieldValue` | `field_value` |
| `Filters` | `parentId` | `parent_id` |
| `Follow` | `addedTime` | `added_time` |
| `Follow1` | `addedTime` | `added_time` |
| `Fragments` | `createdOn` | `created_on` |
| `Fragments` | `modifiedOn` | `modified_on` |
| `GridSize` | `isUpgrade` | `is_upgrade` |
| `Group` | `createdTime` | `created_time` |
| `Group` | `modifiedTime` | `modified_time` |
| `Group` | `resourceKey` | `resource_key` |
| `HlsDashVideoFile` | `linkExpirationTime` | `link_expiration_time` |
| `Image` | `pictureUri` | `picture_uri` |
| `Ingest` | `encoderType` | `encoder_type` |
| `Ingest` | `endTime` | `end_time` |
| `Ingest` | `isRtmpSession` | `is_rtmp_session` |
| `Ingest` | `isScheduledPlayback` | `is_scheduled_playback` |
| `Ingest` | `rtmpExpiresAt` | `rtmp_expires_at` |
| `Ingest` | `rtmpLink` | `rtmp_link` |
| `Ingest` | `rtmpsLink` | `rtmps_link` |
| `Ingest` | `scheduledStartTime` | `scheduled_start_time` |
| `Ingest` | `sessionId` | `session_id` |
| `Ingest` | `startTime` | `start_time` |
| `Ingest` | `streamEndedReason` | `stream_ended_reason` |
| `Ingest` | `streamKey` | `stream_key` |
| `InteractionToolsSetting` | `isAnonymousQuestionsDisabled` | `is_anonymous_questions_disabled` |
| `InteractionToolsSetting` | `isQnaModerated` | `is_qna_moderated` |
| `InteractionToolsSettings` | `isAnonymousQuestionsDisabled` | `is_anonymous_questions_disabled` |
| `InteractionToolsSettings` | `isQnaModerated` | `is_qna_moderated` |
| `Interactions1` | `addModerators` | `add_moderators` |
| `Interactions1` | `addTo` | `add_to` |
| `Interactions1` | `moderateVideos` | `moderate_videos` |
| `Interactions2` | `addPrivacyUser` | `add_privacy_user` |
| `Interactions2` | `connectedApps` | `connected_apps` |
| `Interactions3` | `askAi` | `ask_ai` |
| `Interactions3` | `askAiManager` | `ask_ai_manager` |
| `Interactions3` | `askAiViewer` | `ask_ai_viewer` |
| `Interactions3` | `canComment` | `can_comment` |
| `Interactions3` | `canReactToCollabComments` | `can_react_to_collab_comments` |
| `Interactions3` | `canRequestTeamRoleUpgrade` | `can_request_team_role_upgrade` |
| `Interactions3` | `canUpdatePrivacyToPublic` | `can_update_privacy_to_public` |
| `Interactions3` | `createEditor` | `create_editor` |
| `Interactions3` | `editPrivacy` | `edit_privacy` |
| `Interactions3` | `flagClip` | `flag_clip` |
| `Interactions3` | `hasRestrictedPrivacyOptions` | `has_restricted_privacy_options` |
| `Interactions3` | `legalHold` | `legal_hold` |
| `Interactions3` | `lmsExport` | `lms_export` |
| `Interactions3` | `setContentRating` | `set_content_rating` |
| `Interactions3` | `textTranslations` | `text_translations` |
| `Interactions3` | `transcriptVideoEditor` | `transcript_video_editor` |
| `Interactions3` | `viewPrivacy` | `view_privacy` |
| `Interactions3` | `viewTeamMembers` | `view_team_members` |
| `Interactions4` | `addSubfolder` | `add_subfolder` |
| `Interactions4` | `allowMultipleReviewLinks` | `allow_multiple_review_links` |
| `Interactions4` | `canComment` | `can_comment` |
| `Interactions4` | `deleteVideo` | `delete_video` |
| `Interactions4` | `editSettings` | `edit_settings` |
| `Interactions4` | `moveVideo` | `move_video` |
| `Interactions4` | `reviewRedirectLink` | `review_redirect_link` |
| `Interactions4` | `uploadVideo` | `upload_video` |
| `Interactions7` | `addCustomThumbnails` | `add_custom_thumbnails` |
| `Interactions7` | `addLiveEvents` | `add_live_events` |
| `Interactions7` | `addLogos` | `add_logos` |
| `Interactions7` | `addTo` | `add_to` |
| `Interactions7` | `addVideos` | `add_videos` |
| `Interactions7` | `canUpdatePrivacyToPublic` | `can_update_privacy_to_public` |
| `Interactions7` | `editLiveEvents` | `edit_live_events` |
| `Interactions7` | `viewPrivacy` | `view_privacy` |
| `Items1` | `createdAt` | `created_at` |
| `Items1` | `endDate` | `end_date` |
| `Items1` | `priceId` | `price_id` |
| `Items1` | `startDate` | `start_date` |
| `Items1` | `subscriptionItemId` | `subscription_item_id` |
| `Items1` | `subscriptionItemNumber` | `subscription_item_number` |
| `Items1` | `subscriptionPlanId` | `subscription_plan_id` |
| `Items1` | `syncedAt` | `synced_at` |
| `Items1` | `updatedAt` | `updated_at` |
| `Join` | `addedTime` | `added_time` |
| `LayoutConfig` | `gridSize` | `grid_size` |
| `LayoutConfig` | `showGridProfileImage` | `show_grid_profile_image` |
| `LayoutConfig` | `showGridProfileName` | `show_grid_profile_name` |
| `LayoutConfig` | `showGridSectionName` | `show_grid_section_name` |
| `LayoutConfig` | `showGridVideoCount` | `show_grid_video_count` |
| `LayoutConfig` | `showGridVideoTitles` | `show_grid_video_titles` |
| `Like` | `addedTime` | `added_time` |
| `Like` | `showCount` | `show_count` |
| `Likes3` | `addedTime` | `added_time` |
| `Link` | `pictureUri` | `picture_uri` |
| `Link` | `secondaryLink` | `secondary_link` |
| `LiveEventOccurrence` | `endTime` | `end_time` |
| `LiveEventOccurrence` | `eventTitle` | `event_title` |
| `LiveEventOccurrence` | `eventType` | `event_type` |
| `LiveEventOccurrence` | `eventUri` | `event_uri` |
| `LiveEventOccurrence` | `hasRegistration` | `has_registration` |
| `LiveEventOccurrence` | `settingsLink` | `settings_link` |
| `LiveEventOccurrence` | `startTime` | `start_time` |
| `LiveEventsActivateRequest` | `cloudComposingStreaming` | `cloud_composing_streaming` |
| `LiveEventsActivateRequest` | `streamingStartRequested` | `streaming_start_requested` |
| `LiveEventsAudioTracksRequest` | `audioTracks` | `audio_tracks` |
| `LiveEventsAudioTracksRequest` | `primaryAudioTrack` | `primary_audio_track` |
| `LiveEventsAutoCcRequest` | `autoCcEnabled` | `auto_cc_enabled` |
| `LiveEventsAutoCcRequest` | `autoCcKeywords` | `auto_cc_keywords` |
| `LiveEventsAutoCcRequest` | `autoCcLang` | `auto_cc_lang` |
| `LiveEventsAutoCcRequest` | `autoCcTranslationEnabled` | `auto_cc_translation_enabled` |
| `LiveEventsAutoCcRequest` | `autoCcTranslationLanguages` | `auto_cc_translation_languages` |
| `LiveEventsComposerGraphicsVideosRequest` | `videoId` | `video_id` |
| `LiveEventsComposerScenesRequest` | `sceneType` | `scene_type` |
| `LiveEventsLowLatencyRequest` | `lowLatency` | `low_latency` |
| `LiveEventsPrivacyDomainsRequest` | `allowedDomains` | `allowed_domains` |
| `LiveEventsRequest1` | `allowShareLink` | `allow_share_link` |
| `LiveEventsRequest1` | `autoCcEnabled` | `auto_cc_enabled` |
| `LiveEventsRequest1` | `autoCcKeywords` | `auto_cc_keywords` |
| `LiveEventsRequest1` | `autoCcLang` | `auto_cc_lang` |
| `LiveEventsRequest1` | `automaticallyTitleStream` | `automatically_title_stream` |
| `LiveEventsRequest1` | `chatEnabled` | `chat_enabled` |
| `LiveEventsRequest1` | `contentRating` | `content_rating` |
| `LiveEventsRequest1` | `disableAutoArchiving` | `disable_auto_archiving` |
| `LiveEventsRequest1` | `eventType` | `event_type` |
| `LiveEventsRequest1` | `folderUri` | `folder_uri` |
| `LiveEventsRequest1` | `interactionToolsSettings` | `interaction_tools_settings` |
| `LiveEventsRequest1` | `playlistSort` | `playlist_sort` |
| `LiveEventsRequest1` | `preferredStreamMethod` | `preferred_stream_method` |
| `LiveEventsRequest1` | `rtmpPreview` | `rtmp_preview` |
| `LiveEventsRequest1` | `scheduledPlayback` | `scheduled_playback` |
| `LiveEventsRequest1` | `srtEncryptionEnabled` | `srt_encryption_enabled` |
| `LiveEventsRequest1` | `streamDescription` | `stream_description` |
| `LiveEventsRequest1` | `streamEmbed` | `stream_embed` |
| `LiveEventsRequest1` | `streamPassword` | `stream_password` |
| `LiveEventsRequest1` | `streamPrivacy` | `stream_privacy` |
| `LiveEventsRequest1` | `streamTitle` | `stream_title` |
| `LiveEventsRequest1` | `streamingAutoStop` | `streaming_auto_stop` |
| `LiveEventsRequest1` | `timeZone` | `time_zone` |
| `LiveEventsRequest1` | `unlimitedDuration` | `unlimited_duration` |
| `LiveEventsRequest1` | `venueUuid` | `venue_uuid` |
| `LiveEventsRequest2` | `autoCcEnabled` | `auto_cc_enabled` |
| `LiveEventsRequest2` | `autoCcKeywords` | `auto_cc_keywords` |
| `LiveEventsRequest2` | `autoCcLanguage` | `auto_cc_language` |
| `LiveEventsRequest2` | `automaticallyTitleStream` | `automatically_title_stream` |
| `LiveEventsRequest2` | `chatEnabled` | `chat_enabled` |
| `LiveEventsRequest2` | `contentRating` | `content_rating` |
| `LiveEventsRequest2` | `disableAutoArchiving` | `disable_auto_archiving` |
| `LiveEventsRequest2` | `interactionToolsSettings` | `interaction_tools_settings` |
| `LiveEventsRequest2` | `landingPageLogo` | `landing_page_logo` |
| `LiveEventsRequest2` | `playlistSort` | `playlist_sort` |
| `LiveEventsRequest2` | `preferredStreamMethod` | `preferred_stream_method` |
| `LiveEventsRequest2` | `scheduledPlayback` | `scheduled_playback` |
| `LiveEventsRequest2` | `srtEncryptionEnabled` | `srt_encryption_enabled` |
| `LiveEventsRequest2` | `streamDescription` | `stream_description` |
| `LiveEventsRequest2` | `streamEmbed` | `stream_embed` |
| `LiveEventsRequest2` | `streamMode` | `stream_mode` |
| `LiveEventsRequest2` | `streamPassword` | `stream_password` |
| `LiveEventsRequest2` | `streamPrivacy` | `stream_privacy` |
| `LiveEventsRequest2` | `streamTitle` | `stream_title` |
| `LiveEventsRequest2` | `streamingAutoStop` | `streaming_auto_stop` |
| `LiveEventsRequest2` | `timeZone` | `time_zone` |
| `LiveEventsRequest2` | `unlimitedDuration` | `unlimited_duration` |
| `Live1` | `streamEndTime` | `stream_end_time` |
| `Live1` | `streamStartTime` | `stream_start_time` |
| `Location` | `countryIsoCode` | `country_iso_code` |
| `Location` | `formattedAddress` | `formatted_address` |
| `Location` | `stateIsoCode` | `state_iso_code` |
| `Location` | `subLocality` | `sub_locality` |
| `Logo` | `customLogoUrl` | `custom_logo_url` |
| `MeAlbumsRequest` | `brandColor` | `brand_color` |
| `MeAlbumsRequest` | `hideFromVimeo` | `hide_from_vimeo` |
| `MeAlbumsRequest` | `hideNav` | `hide_nav` |
| `MeAlbumsRequest` | `hideUpcoming` | `hide_upcoming` |
| `MeAlbumsRequest` | `reviewMode` | `review_mode` |
| `MeAlbumsRequest1` | `brandColor` | `brand_color` |
| `MeAlbumsRequest1` | `hideNav` | `hide_nav` |
| `MeAlbumsRequest1` | `hideUpcoming` | `hide_upcoming` |
| `MeAlbumsRequest1` | `reviewMode` | `review_mode` |
| `MeAlbumsRequest1` | `useCustomDomain` | `use_custom_domain` |
| `MeAlbumsVideosSetAlbumThumbnailRequest` | `timeCode` | `time_code` |
| `MeLiveEventsActivateRequest` | `cloudComposingStreaming` | `cloud_composing_streaming` |
| `MeLiveEventsActivateRequest` | `streamingStartRequested` | `streaming_start_requested` |
| `MeLiveEventsAutoCcRequest` | `autoCcEnabled` | `auto_cc_enabled` |
| `MeLiveEventsAutoCcRequest` | `autoCcKeywords` | `auto_cc_keywords` |
| `MeLiveEventsAutoCcRequest` | `autoCcLang` | `auto_cc_lang` |
| `MeLiveEventsAutoCcRequest` | `autoCcTranslationEnabled` | `auto_cc_translation_enabled` |
| `MeLiveEventsAutoCcRequest` | `autoCcTranslationLanguages` | `auto_cc_translation_languages` |
| `MeLiveEventsDestinationsRequest` | `displayName` | `display_name` |
| `MeLiveEventsDestinationsRequest` | `isEnabled` | `is_enabled` |
| `MeLiveEventsDestinationsRequest` | `providerDestinationId` | `provider_destination_id` |
| `MeLiveEventsDestinationsRequest` | `providerVideoId` | `provider_video_id` |
| `MeLiveEventsDestinationsRequest` | `scheduledAt` | `scheduled_at` |
| `MeLiveEventsDestinationsRequest` | `serviceName` | `service_name` |
| `MeLiveEventsDestinationsRequest` | `streamKey` | `stream_key` |
| `MeLiveEventsDestinationsRequest` | `streamUrl` | `stream_url` |
| `MeLiveEventsLowLatencyRequest` | `lowLatency` | `low_latency` |
| `MeLiveEventsPrivacyDomainsRequest` | `allowedDomains` | `allowed_domains` |
| `MeLiveEventsRequest1` | `allowShareLink` | `allow_share_link` |
| `MeLiveEventsRequest1` | `autoCcEnabled` | `auto_cc_enabled` |
| `MeLiveEventsRequest1` | `autoCcKeywords` | `auto_cc_keywords` |
| `MeLiveEventsRequest1` | `autoCcLang` | `auto_cc_lang` |
| `MeLiveEventsRequest1` | `automaticallyTitleStream` | `automatically_title_stream` |
| `MeLiveEventsRequest1` | `chatEnabled` | `chat_enabled` |
| `MeLiveEventsRequest1` | `contentRating` | `content_rating` |
| `MeLiveEventsRequest1` | `disableAutoArchiving` | `disable_auto_archiving` |
| `MeLiveEventsRequest1` | `eventType` | `event_type` |
| `MeLiveEventsRequest1` | `folderUri` | `folder_uri` |
| `MeLiveEventsRequest1` | `interactionToolsSettings` | `interaction_tools_settings` |
| `MeLiveEventsRequest1` | `playlistSort` | `playlist_sort` |
| `MeLiveEventsRequest1` | `preferredStreamMethod` | `preferred_stream_method` |
| `MeLiveEventsRequest1` | `rtmpPreview` | `rtmp_preview` |
| `MeLiveEventsRequest1` | `scheduledPlayback` | `scheduled_playback` |
| `MeLiveEventsRequest1` | `srtEncryptionEnabled` | `srt_encryption_enabled` |
| `MeLiveEventsRequest1` | `streamDescription` | `stream_description` |
| `MeLiveEventsRequest1` | `streamEmbed` | `stream_embed` |
| `MeLiveEventsRequest1` | `streamPassword` | `stream_password` |
| `MeLiveEventsRequest1` | `streamPrivacy` | `stream_privacy` |
| `MeLiveEventsRequest1` | `streamTitle` | `stream_title` |
| `MeLiveEventsRequest1` | `streamingAutoStop` | `streaming_auto_stop` |
| `MeLiveEventsRequest1` | `timeZone` | `time_zone` |
| `MeLiveEventsRequest1` | `unlimitedDuration` | `unlimited_duration` |
| `MeLiveEventsRequest1` | `venueUuid` | `venue_uuid` |
| `MeLiveEventsRequest2` | `autoCcEnabled` | `auto_cc_enabled` |
| `MeLiveEventsRequest2` | `autoCcKeywords` | `auto_cc_keywords` |
| `MeLiveEventsRequest2` | `autoCcLanguage` | `auto_cc_language` |
| `MeLiveEventsRequest2` | `automaticallyTitleStream` | `automatically_title_stream` |
| `MeLiveEventsRequest2` | `chatEnabled` | `chat_enabled` |
| `MeLiveEventsRequest2` | `contentRating` | `content_rating` |
| `MeLiveEventsRequest2` | `disableAutoArchiving` | `disable_auto_archiving` |
| `MeLiveEventsRequest2` | `interactionToolsSettings` | `interaction_tools_settings` |
| `MeLiveEventsRequest2` | `landingPageLogo` | `landing_page_logo` |
| `MeLiveEventsRequest2` | `playlistSort` | `playlist_sort` |
| `MeLiveEventsRequest2` | `preferredStreamMethod` | `preferred_stream_method` |
| `MeLiveEventsRequest2` | `scheduledPlayback` | `scheduled_playback` |
| `MeLiveEventsRequest2` | `srtEncryptionEnabled` | `srt_encryption_enabled` |
| `MeLiveEventsRequest2` | `streamDescription` | `stream_description` |
| `MeLiveEventsRequest2` | `streamEmbed` | `stream_embed` |
| `MeLiveEventsRequest2` | `streamMode` | `stream_mode` |
| `MeLiveEventsRequest2` | `streamPassword` | `stream_password` |
| `MeLiveEventsRequest2` | `streamPrivacy` | `stream_privacy` |
| `MeLiveEventsRequest2` | `streamTitle` | `stream_title` |
| `MeLiveEventsRequest2` | `streamingAutoStop` | `streaming_auto_stop` |
| `MeLiveEventsRequest2` | `timeZone` | `time_zone` |
| `MeLiveEventsRequest2` | `unlimitedDuration` | `unlimited_duration` |
| `MeOndemandPagesRequest` | `acceptedCurrencies` | `accepted_currencies` |
| `MeOndemandPagesRequest` | `contentRating` | `content_rating` |
| `MeOndemandPagesRequest` | `domainLink` | `domain_link` |
| `MePresetsRequest` | `applyToAll` | `apply_to_all` |
| `MeProjectsRequest` | `parentFolderUri` | `parent_folder_uri` |
| `MeProjectsRequest1` | `sendToRecentlyDeleted` | `send_to_recently_deleted` |
| `MeProjectsRequest1` | `shouldDeleteClips` | `should_delete_clips` |
| `MeProjectsVideosRequest` | `sendToRecentlyDeleted` | `send_to_recently_deleted` |
| `MeProjectsVideosRequest` | `shouldDeleteClips` | `should_delete_clips` |
| `MeRequest` | `contentFilter` | `content_filter` |
| `MeVideosRequest` | `sendToRecentlyDeleted` | `send_to_recently_deleted` |
| `MeVideosRequest1` | `contentRating` | `content_rating` |
| `MeVideosRequest1` | `embedDomains` | `embed_domains` |
| `MeVideosRequest1` | `folderUri` | `folder_uri` |
| `MeVideosRequest1` | `hideFromVimeo` | `hide_from_vimeo` |
| `MeVideosRequest1` | `reviewPage` | `review_page` |
| `Meta` | `isScheduled` | `is_scheduled` |
| `Metadata16` | `connectionStatus` | `connection_status` |
| `Metadata25` | `isBandwidthProduct` | `is_bandwidth_product` |
| `Metadata25` | `isPsPlan` | `is_ps_plan` |
| `Metadata25` | `purchasedProduct` | `purchased_product` |
| `Metadata3` | `msTeamsEncryptedTeamId` | `ms_teams_encrypted_team_id` |
| `Metadata3` | `publicVideos` | `public_videos` |
| `Metadata4` | `aiContent` | `ai_content` |
| `Metadata4` | `canBeReplaced` | `can_be_replaced` |
| `Metadata4` | `editSessionVsid` | `edit_session_vsid` |
| `Metadata4` | `hasChapterSuggestions` | `has_chapter_suggestions` |
| `Metadata4` | `hasEmailCapture` | `has_email_capture` |
| `Metadata4` | `hasInteractiveQuiz` | `has_interactive_quiz` |
| `Metadata4` | `hasMandatoryEmailCapture` | `has_mandatory_email_capture` |
| `Metadata4` | `isScreenRecord` | `is_screen_record` |
| `Metadata4` | `isVimeoCreate` | `is_vimeo_create` |
| `Metadata4` | `isZoomUpload` | `is_zoom_upload` |
| `Metering` | `secondsMax` | `seconds_max` |
| `Metering` | `secondsRemaining` | `seconds_remaining` |
| `NavigationConfig` | `showSearchBar` | `show_search_bar` |
| `OttDestination` | `ottChannelId` | `ott_channel_id` |
| `OttDestination` | `ottChannelName` | `ott_channel_name` |
| `OttDestination` | `ottChannelSubdomain` | `ott_channel_subdomain` |
| `OttDestination` | `ottEventId` | `ott_event_id` |
| `OttDestination` | `recurringLiveEventId` | `recurring_live_event_id` |
| `OauthAccessTokenRequest` | `grantType` | `grant_type` |
| `OauthAccessTokenRequest` | `redirectUri` | `redirect_uri` |
| `OauthAuthorizeClientRequest` | `grantType` | `grant_type` |
| `OauthAuthorizeVimeoOauth1Request` | `grantType` | `grant_type` |
| `OauthAuthorizeVimeoOauth1Request` | `tokenSecret` | `token_secret` |
| `OnDemandPage` | `contentRating` | `content_rating` |
| `OnDemandPage` | `createdTime` | `created_time` |
| `OnDemandPage` | `domainLink` | `domain_link` |
| `OnDemandPage` | `modifiedTime` | `modified_time` |
| `OnDemandPage` | `resourceKey` | `resource_key` |
| `OnDemandPromotion` | `accessType` | `access_type` |
| `OnDemandPromotion` | `discountType` | `discount_type` |
| `OnDemandPromotion` | `percentOff` | `percent_off` |
| `OnDemandPromotion` | `productType` | `product_type` |
| `OnDemandPromotion` | `streamPeriod` | `stream_period` |
| `OnDemandPromotionCode` | `maxUses` | `max_uses` |
| `OnDemandRegion` | `countryCode` | `country_code` |
| `OnDemandRegion` | `countryName` | `country_name` |
| `OnDemandSeason` | `resourceKey` | `resource_key` |
| `OnDemandVideo` | `playProgress` | `play_progress` |
| `OnDemandVideo` | `releaseDate` | `release_date` |
| `OnDemandVideo` | `releaseYear` | `release_year` |
| `Ondemand` | `resourceKey` | `resource_key` |
| `OndemandPagesPromotionsRequest` | `accessType` | `access_type` |
| `OndemandPagesPromotionsRequest` | `discountType` | `discount_type` |
| `OndemandPagesPromotionsRequest` | `endTime` | `end_time` |
| `OndemandPagesPromotionsRequest` | `percentOff` | `percent_off` |
| `OndemandPagesPromotionsRequest` | `productType` | `product_type` |
| `OndemandPagesPromotionsRequest` | `startTime` | `start_time` |
| `OndemandPagesPromotionsRequest` | `streamPeriod` | `stream_period` |
| `OndemandPagesRequest` | `publishWhenReady` | `publish_when_ready` |
| `OndemandPagesVideosRequest` | `releaseYear` | `release_year` |
| `Option` | `newValue` | `new_value` |
| `Option` | `oldValue` | `old_value` |
| `Owner1` | `displayName` | `display_name` |
| `Owner1` | `invitesRemaining` | `invites_remaining` |
| `Owner1` | `totalMembers` | `total_members` |
| `Params` | `restrictedVideoStorageLimit` | `restricted_video_storage_limit` |
| `Params` | `teamSeats` | `team_seats` |
| `Params` | `videoStoragePeriodicQuota` | `video_storage_periodic_quota` |
| `Params` | `videoStorageQuotaCap` | `video_storage_quota_cap` |
| `Params` | `videoStorageQuotaPeriod` | `video_storage_quota_period` |
| `Params` | `videoStorageQuotaUnit` | `video_storage_quota_unit` |
| `PaymentMethod` | `accountId` | `account_id` |
| `PaymentMethod` | `createdAt` | `created_at` |
| `PaymentMethod` | `disabledAt` | `disabled_at` |
| `PaymentMethod` | `isDefault` | `is_default` |
| `PaymentMethod` | `updatedAt` | `updated_at` |
| `Periodic` | `resetDate` | `reset_date` |
| `PermissionPolicy` | `createdOn` | `created_on` |
| `PermissionPolicy` | `displayDescription` | `display_description` |
| `PermissionPolicy` | `displayName` | `display_name` |
| `PermissionPolicy` | `modifiedOn` | `modified_on` |
| `PermissionPolicy` | `permissionActions` | `permission_actions` |
| `Picture` | `baseLink` | `base_link` |
| `Picture` | `defaultPicture` | `default_picture` |
| `Picture` | `resourceKey` | `resource_key` |
| `Plan` | `billingPlanId` | `billing_plan_id` |
| `Plan` | `billingPlanProductId` | `billing_plan_product_id` |
| `Plan` | `billingPlanType` | `billing_plan_type` |
| `Plan` | `createdAt` | `created_at` |
| `Plan` | `planId` | `plan_id` |
| `Plan` | `productId` | `product_id` |
| `Plan` | `promoCode` | `promo_code` |
| `Plan` | `promoCodeId` | `promo_code_id` |
| `Plan` | `subscriptionPlanId` | `subscription_plan_id` |
| `Plan` | `subscriptionPlanNumber` | `subscription_plan_number` |
| `Plan` | `subscriptionPlanType` | `subscription_plan_type` |
| `Plan` | `syncedAt` | `synced_at` |
| `Plan` | `updatedAt` | `updated_at` |
| `Play` | `playerFairplayCertificateUrl` | `player_fairplay_certificate_url` |
| `Play` | `playerLicenseUrl` | `player_license_url` |
| `PlaybackConfig` | `enableAskAi` | `enable_ask_ai` |
| `PlaybackConfig` | `enableComments` | `enable_comments` |
| `PlaybackConfig` | `enableDownload` | `enable_download` |
| `PlaybackConfig` | `enableLike` | `enable_like` |
| `PlaybackConfig` | `enableShare` | `enable_share` |
| `PlaybackConfig` | `playbackGridSize` | `playback_grid_size` |
| `PlaybackConfig` | `showPlaybackAddedDate` | `show_playback_added_date` |
| `PlaybackConfig` | `showPlaybackGridProfileImage` | `show_playback_grid_profile_image` |
| `PlaybackConfig` | `showPlaybackGridProfileName` | `show_playback_grid_profile_name` |
| `PlaybackConfig` | `showPlaybackGridVideoCard` | `show_playback_grid_video_card` |
| `PlaybackConfig` | `showPlaybackGridVideoTitle` | `show_playback_grid_video_title` |
| `PlaybackConfig` | `showPlaybackProfileImage` | `show_playback_profile_image` |
| `PlaybackConfig` | `showPlaybackProfileName` | `show_playback_profile_name` |
| `PlaybackConfig` | `showPlaybackUploadedDate` | `show_playback_uploaded_date` |
| `PlaybackConfig` | `showPlaybackVideoCount` | `show_playback_video_count` |
| `PlaybackConfig` | `showPlaybackVideoDescription` | `show_playback_video_description` |
| `PlaybackConfig` | `showPlaybackVideoTitle` | `show_playback_video_title` |
| `PlaybackConfig` | `showPlaybackViews` | `show_playback_views` |
| `PlaybackGridSize` | `isUpgrade` | `is_upgrade` |
| `Player` | `audioTracks` | `audio_tracks` |
| `Player` | `ccTrackMenu` | `cc_track_menu` |
| `Player` | `closedCaptions` | `closed_captions` |
| `Player` | `contextMenu` | `context_menu` |
| `Player` | `playButton` | `play_button` |
| `Player` | `qualitySelector` | `quality_selector` |
| `Player` | `skippingForward` | `skipping_forward` |
| `Portfolio` | `createdTime` | `created_time` |
| `Portfolio` | `modifiedTime` | `modified_time` |
| `Preorder` | `cancelTime` | `cancel_time` |
| `Preorder` | `publishTime` | `publish_time` |
| `Preorder1` | `publishTime` | `publish_time` |
| `Preset` | `createdOn` | `created_on` |
| `Preset` | `modifiedOn` | `modified_on` |
| `Price` | `annualMonthly` | `annual_monthly` |
| `Price1` | `annualMonthly` | `annual_monthly` |
| `Price2` | `aud` | `AUD` |
| `Price2` | `cad` | `CAD` |
| `Price2` | `chf` | `CHF` |
| `Price2` | `dkk` | `DKK` |
| `Price2` | `eur` | `EUR` |
| `Price2` | `gbp` | `GBP` |
| `Price2` | `jpy` | `JPY` |
| `Price2` | `krw` | `KRW` |
| `Price2` | `nok` | `NOK` |
| `Price2` | `pln` | `PLN` |
| `Price2` | `sek` | `SEK` |
| `Price2` | `usd` | `USD` |
| `Price3` | `usd` | `USD` |
| `Price4` | `usd` | `USD` |
| `Price5` | `aud` | `AUD` |
| `Price5` | `cad` | `CAD` |
| `Price5` | `chf` | `CHF` |
| `Price5` | `dkk` | `DKK` |
| `Price5` | `eur` | `EUR` |
| `Price5` | `gbp` | `GBP` |
| `Price5` | `jpy` | `JPY` |
| `Price5` | `krw` | `KRW` |
| `Price5` | `nok` | `NOK` |
| `Price5` | `pln` | `PLN` |
| `Price5` | `sek` | `SEK` |
| `Price5` | `usd` | `USD` |
| `Price6` | `usd` | `USD` |
| `Price7` | `aud` | `AUD` |
| `Price7` | `cad` | `CAD` |
| `Price7` | `chf` | `CHF` |
| `Price7` | `dkk` | `DKK` |
| `Price7` | `eur` | `EUR` |
| `Price7` | `gbp` | `GBP` |
| `Price7` | `jpy` | `JPY` |
| `Price7` | `krw` | `KRW` |
| `Price7` | `nok` | `NOK` |
| `Price7` | `pln` | `PLN` |
| `Price7` | `sek` | `SEK` |
| `Price7` | `usd` | `USD` |
| `Price8` | `aud` | `AUD` |
| `Price8` | `cad` | `CAD` |
| `Price8` | `chf` | `CHF` |
| `Price8` | `dkk` | `DKK` |
| `Price8` | `eur` | `EUR` |
| `Price8` | `gbp` | `GBP` |
| `Price8` | `jpy` | `JPY` |
| `Price8` | `krw` | `KRW` |
| `Price8` | `nok` | `NOK` |
| `Price8` | `pln` | `PLN` |
| `Price8` | `sek` | `SEK` |
| `Price8` | `usd` | `USD` |
| `PriceFormatted` | `annualMonthly` | `annual_monthly` |
| `PriceFormatted1` | `annualMonthly` | `annual_monthly` |
| `Privacy1` | `allowShareLink` | `allow_share_link` |
| `Privacy1` | `clipEmbedAllowedDomains` | `clip_embed_allowed_domains` |
| `Privacy10` | `embedAllowedDomains` | `embed_allowed_domains` |
| `Privacy3` | `allowShareLink` | `allow_share_link` |
| `Privacy3` | `originalView` | `original_view` |
| `Progressive` | `createdTime` | `created_time` |
| `Progressive` | `linkExpirationTime` | `link_expiration_time` |
| `Project` | `accessGrant` | `access_grant` |
| `Project` | `createdTime` | `created_time` |
| `Project` | `creatorUri` | `creator_uri` |
| `Project` | `hasSubfolder` | `has_subfolder` |
| `Project` | `isPinned` | `is_pinned` |
| `Project` | `isPrivateToUser` | `is_private_to_user` |
| `Project` | `isStarredByCurUser` | `is_starred_by_cur_user` |
| `Project` | `lastUserActionEventDate` | `last_user_action_event_date` |
| `Project` | `manageLink` | `manage_link` |
| `Project` | `modifiedTime` | `modified_time` |
| `Project` | `pinnedOn` | `pinned_on` |
| `Project` | `resourceKey` | `resource_key` |
| `Project` | `reviewLinks` | `review_links` |
| `Project` | `shouldShowTeamLibraryNotification` | `should_show_team_library_notification` |
| `ProjectItem` | `liveEvent` | `live_event` |
| `ProjectItem` | `sharedDate` | `shared_date` |
| `Promotion` | `priceFormatted` | `price_formatted` |
| `Properties` | `folderUri` | `folder_uri` |
| `Properties` | `upgradeToRole` | `upgrade_to_role` |
| `PublishToSocial` | `publishBlockers` | `publish_blockers` |
| `PublishToSocial` | `publishConstraints` | `publish_constraints` |
| `PurchasedProduct` | `displayPrice` | `display_price` |
| `PurchasedProduct` | `displayPriceFormatted` | `display_price_formatted` |
| `PurchasedProduct` | `isMonthly` | `is_monthly` |
| `Quota` | `hasReachedQuota` | `has_reached_quota` |
| `Recommendations` | `resourceSignature` | `resource_signature` |
| `Recording` | `streamedOn` | `streamed_on` |
| `RecurringEvent` | `allowShareLink` | `allow_share_link` |
| `RecurringEvent` | `allowedPrivacies` | `allowed_privacies` |
| `RecurringEvent` | `autoCcEnabled` | `auto_cc_enabled` |
| `RecurringEvent` | `autoCcKeywords` | `auto_cc_keywords` |
| `RecurringEvent` | `autoCcLanguage` | `auto_cc_language` |
| `RecurringEvent` | `autoCcLimit` | `auto_cc_limit` |
| `RecurringEvent` | `autoCcRemaining` | `auto_cc_remaining` |
| `RecurringEvent` | `autoCcTranslationEnabled` | `auto_cc_translation_enabled` |
| `RecurringEvent` | `autoCcTranslationLanguages` | `auto_cc_translation_languages` |
| `RecurringEvent` | `automaticallyTitleStream` | `automatically_title_stream` |
| `RecurringEvent` | `backupStreamKey` | `backup_stream_key` |
| `RecurringEvent` | `chatEnabled` | `chat_enabled` |
| `RecurringEvent` | `completedOn` | `completed_on` |
| `RecurringEvent` | `contentRating` | `content_rating` |
| `RecurringEvent` | `createdTime` | `created_time` |
| `RecurringEvent` | `disableAutoArchiving` | `disable_auto_archiving` |
| `RecurringEvent` | `emailQuota` | `email_quota` |
| `RecurringEvent` | `eventType` | `event_type` |
| `RecurringEvent` | `fromShowcase` | `from_showcase` |
| `RecurringEvent` | `fromWebinar` | `from_webinar` |
| `RecurringEvent` | `hasForcedLeadCaptureForm` | `has_forced_lead_capture_form` |
| `RecurringEvent` | `headClip` | `head_clip` |
| `RecurringEvent` | `interactionToolsSettings` | `interaction_tools_settings` |
| `RecurringEvent` | `isStarredByCurUser` | `is_starred_by_cur_user` |
| `RecurringEvent` | `landingPageLogo` | `landing_page_logo` |
| `RecurringEvent` | `leadUuid` | `lead_uuid` |
| `RecurringEvent` | `liveClips` | `live_clips` |
| `RecurringEvent` | `liveDestinations` | `live_destinations` |
| `RecurringEvent` | `nextOccurrenceTime` | `next_occurrence_time` |
| `RecurringEvent` | `parentFolder` | `parent_folder` |
| `RecurringEvent` | `playlistSort` | `playlist_sort` |
| `RecurringEvent` | `preferredStreamMethod` | `preferred_stream_method` |
| `RecurringEvent` | `rtmpLink` | `rtmp_link` |
| `RecurringEvent` | `rtmpPreview` | `rtmp_preview` |
| `RecurringEvent` | `rtmpsLink` | `rtmps_link` |
| `RecurringEvent` | `scheduledPlayback` | `scheduled_playback` |
| `RecurringEvent` | `settingsLink` | `settings_link` |
| `RecurringEvent` | `srtEncryptionEnabled` | `srt_encryption_enabled` |
| `RecurringEvent` | `srtLink` | `srt_link` |
| `RecurringEvent` | `srtPassphrase` | `srt_passphrase` |
| `RecurringEvent` | `streamDescription` | `stream_description` |
| `RecurringEvent` | `streamKey` | `stream_key` |
| `RecurringEvent` | `streamMode` | `stream_mode` |
| `RecurringEvent` | `streamPassword` | `stream_password` |
| `RecurringEvent` | `streamPrivacy` | `stream_privacy` |
| `RecurringEvent` | `streamTitle` | `stream_title` |
| `RecurringEvent` | `streamableClip` | `streamable_clip` |
| `RecurringEvent` | `streamingAutoStop` | `streaming_auto_stop` |
| `RecurringEvent` | `timeZone` | `time_zone` |
| `RecurringEvent` | `unlimitedAutoCc` | `unlimited_auto_cc` |
| `RecurringEvent` | `unlimitedDuration` | `unlimited_duration` |
| `RecurringEvent` | `venueUuid` | `venue_uuid` |
| `RecurringEvent` | `viewLink` | `view_link` |
| `RecurringEvent` | `whitelistedDomains` | `whitelisted_domains` |
| `RegionalDelivery` | `displayDescription` | `display_description` |
| `RegionalDelivery` | `displayName` | `display_name` |
| `Renewal` | `displayDate` | `display_date` |
| `Rent` | `displayPrice` | `display_price` |
| `Rent` | `expiresTime` | `expires_time` |
| `Rent` | `purchaseTime` | `purchase_time` |
| `Reply` | `createdOn` | `created_on` |
| `Reply` | `deletedOn` | `deleted_on` |
| `Reply` | `lastEditedOn` | `last_edited_on` |
| `Reply` | `resourceKey` | `resource_key` |
| `Reply` | `textDecorations` | `text_decorations` |
| `ReportReasonNode` | `externalUrl` | `external_url` |
| `ReportReasonNode` | `parentId` | `parent_id` |
| `ReviewLink` | `allowComments` | `allow_comments` |
| `ReviewLink` | `allowDownloads` | `allow_downloads` |
| `ReviewLink` | `allowStatusChange` | `allow_status_change` |
| `ReviewLink` | `createdOn` | `created_on` |
| `ReviewLink` | `expiresOn` | `expires_on` |
| `ReviewLink` | `hideEndCards` | `hide_end_cards` |
| `ReviewLink` | `isDark` | `is_dark` |
| `ReviewLink` | `isEnabled` | `is_enabled` |
| `ReviewLink` | `logoUrl` | `logo_url` |
| `ReviewLink` | `modifiedOn` | `modified_on` |
| `ReviewLink` | `showAllVersions` | `show_all_versions` |
| `ReviewLink` | `showMyLogo` | `show_my_logo` |
| `ReviewLink` | `showResolvedComments` | `show_resolved_comments` |
| `Schedule` | `endTime` | `end_time` |
| `Schedule` | `startTime` | `start_time` |
| `Schedule` | `timeZone` | `time_zone` |
| `Segment` | `cueEnd` | `cue_end` |
| `Segment` | `cueStart` | `cue_start` |
| `Segment` | `textTrackUri` | `text_track_uri` |
| `Segment` | `translationMetadata` | `translation_metadata` |
| `Segment` | `videoUri` | `video_uri` |
| `SegmentTranslationMetadata` | `audioOutOfSync` | `audio_out_of_sync` |
| `SegmentTranslationMetadata` | `audioTrackId` | `audio_track_id` |
| `SegmentTranslationMetadata` | `dominantLanguage` | `dominant_language` |
| `SegmentTranslationMetadata` | `dubbingId` | `dubbing_id` |
| `SegmentTranslationMetadata` | `dubbingSegmentId` | `dubbing_segment_id` |
| `SegmentTranslationMetadata` | `translationOutOfSync` | `translation_out_of_sync` |
| `SegmentWords` | `endTime` | `end_time` |
| `SegmentWords` | `startTime` | `start_time` |
| `Segment1` | `endTime` | `end_time` |
| `Segment1` | `startTime` | `start_time` |
| `SentimentWidget` | `endTime` | `end_time` |
| `SentimentWidget` | `startTime` | `start_time` |
| `SentimentWidget1` | `endTime` | `end_time` |
| `SentimentWidget1` | `startTime` | `start_time` |
| `SetContentRating` | `contentRating` | `content_rating` |
| `Settings` | `embedPresetId` | `embed_preset_id` |
| `Settings` | `folderUri` | `folder_uri` |
| `Settings` | `isEmbedPresetInheritanceEnabled` | `is_embed_preset_inheritance_enabled` |
| `Settings1` | `askAi` | `ask_ai` |
| `Settings1` | `audioTracks` | `audio_tracks` |
| `Settings1` | `ccTrackMenu` | `cc_track_menu` |
| `Settings1` | `closedCaptions` | `closed_captions` |
| `Settings1` | `endScreen` | `end_screen` |
| `Settings1` | `playButton` | `play_button` |
| `Settings1` | `qualitySelector` | `quality_selector` |
| `Settings1` | `skippingForward` | `skipping_forward` |
| `Share` | `pictureUri` | `picture_uri` |
| `SharedTeam` | `logoUrl` | `logo_url` |
| `ShowAccountName` | `isUpgrade` | `is_upgrade` |
| `ShowAvatar` | `isUpgrade` | `is_upgrade` |
| `ShowBanner` | `isUpgrade` | `is_upgrade` |
| `ShowBannerDescription` | `isUpgrade` | `is_upgrade` |
| `ShowBannerHeader` | `isUpgrade` | `is_upgrade` |
| `ShowBannerTitle` | `isUpgrade` | `is_upgrade` |
| `ShowGridProfileImage` | `isUpgrade` | `is_upgrade` |
| `ShowGridProfileName` | `isUpgrade` | `is_upgrade` |
| `ShowGridSectionName` | `isUpgrade` | `is_upgrade` |
| `ShowGridVideoCount` | `isUpgrade` | `is_upgrade` |
| `ShowGridVideoTitles` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackAddedDate` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackGridProfileImage` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackGridProfileName` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackGridVideoCard` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackGridVideoTitle` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackProfileImage` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackProfileName` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackUploadedDate` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackVideoCount` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackVideoDescription` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackVideoTitle` | `isUpgrade` | `is_upgrade` |
| `ShowPlaybackViews` | `isUpgrade` | `is_upgrade` |
| `ShowSearchBar` | `isUpgrade` | `is_upgrade` |
| `ShowShowcaseOwnerAvatar` | `isUpgrade` | `is_upgrade` |
| `ShowStartWatchingButton` | `isUpgrade` | `is_upgrade` |
| `ShowVideoDescription` | `isUpgrade` | `is_upgrade` |
| `ShowVideoDetails` | `isUpgrade` | `is_upgrade` |
| `ShowVideoPlayerCards` | `isUpgrade` | `is_upgrade` |
| `ShowVideoTitle` | `isUpgrade` | `is_upgrade` |
| `ShowcaseConfig` | `showAccountName` | `show_account_name` |
| `ShowcaseConfig` | `showAvatar` | `show_avatar` |
| `ShowcaseConfig` | `showVideoDescription` | `show_video_description` |
| `ShowcaseConfig` | `showVideoDetails` | `show_video_details` |
| `ShowcaseConfig` | `showVideoPlayerCards` | `show_video_player_cards` |
| `ShowcaseConfig` | `showVideoTitle` | `show_video_title` |
| `ShowcaseConfig` | `textCtaAlignment` | `text_cta_alignment` |
| `Size` | `linkWithPlayButton` | `link_with_play_button` |
| `SourceMetadata` | `displayFiletype` | `display_filetype` |
| `Spatial` | `directorTimeline` | `director_timeline` |
| `Spatial` | `fieldOfView` | `field_of_view` |
| `Spatial` | `stereoFormat` | `stereo_format` |
| `Spatial1` | `directorTimeline` | `director_timeline` |
| `Spatial1` | `fieldOfView` | `field_of_view` |
| `Spatial1` | `stereoFormat` | `stereo_format` |
| `Spatial3` | `directorTimeline` | `director_timeline` |
| `Spatial3` | `fieldOfView` | `field_of_view` |
| `Spatial3` | `stereoFormat` | `stereo_format` |
| `StaffPick` | `bestOfTheMonth` | `best_of_the_month` |
| `StaffPick` | `bestOfTheYear` | `best_of_the_year` |
| `Storage` | `periodicQuota` | `periodic_quota` |
| `Storage` | `quotaCap` | `quota_cap` |
| `Storage` | `quotaPeriod` | `quota_period` |
| `Storage` | `quotaUnit` | `quota_unit` |
| `StreamPrivacy` | `unlistedHash` | `unlisted_hash` |
| `Subscribe` | `expiresTime` | `expires_time` |
| `Subscribe` | `purchaseTime` | `purchase_time` |
| `Subscribe1` | `expiresTime` | `expires_time` |
| `Subscribe1` | `purchaseTime` | `purchase_time` |
| `Subscription` | `accountId` | `account_id` |
| `Subscription` | `autoRenew` | `auto_renew` |
| `Subscription` | `canRenewNow` | `can_renew_now` |
| `Subscription` | `createdAt` | `created_at` |
| `Subscription` | `disabledAt` | `disabled_at` |
| `Subscription` | `endDate` | `end_date` |
| `Subscription` | `gracePeriodId` | `grace_period_id` |
| `Subscription` | `isLatest` | `is_latest` |
| `Subscription` | `paymentMethodId` | `payment_method_id` |
| `Subscription` | `startDate` | `start_date` |
| `Subscription` | `subscriptionNumber` | `subscription_number` |
| `Subscription` | `subscriptionVersion` | `subscription_version` |
| `Subscription` | `updatedAt` | `updated_at` |
| `SubscriptionPlans` | `priceFormatted` | `price_formatted` |
| `Tag` | `resourceKey` | `resource_key` |
| `TeamMembership` | `accessGrant` | `access_grant` |
| `TeamMembership` | `applicablePermissionPolicies` | `applicable_permission_policies` |
| `TeamMembership` | `applicableRoles` | `applicable_roles` |
| `TeamMembership` | `createdTime` | `created_time` |
| `TeamMembership` | `excludeSso` | `exclude_sso` |
| `TeamMembership` | `hasFolderAccess` | `has_folder_access` |
| `TeamMembership` | `hasLmsUser` | `has_lms_user` |
| `TeamMembership` | `inviteUrl` | `invite_url` |
| `TeamMembership` | `joinedTime` | `joined_time` |
| `TeamMembership` | `modifiedTime` | `modified_time` |
| `TeamMembership` | `permissionActions` | `permission_actions` |
| `TeamMembership` | `permissionLevel` | `permission_level` |
| `TeamMembership` | `recentlyReminded` | `recently_reminded` |
| `TeamMembership` | `resourceKey` | `resource_key` |
| `TeamRole` | `applicablePermissionPolicies` | `applicable_permission_policies` |
| `TeamRole` | `displayDescription` | `display_description` |
| `TeamRole` | `displayName` | `display_name` |
| `TeamRole` | `isDisabled` | `is_disabled` |
| `TeamRole` | `permissionLevel` | `permission_level` |
| `TeamsCustomMetadataBackfillRequest` | `fieldId` | `field_id` |
| `TeamsCustomMetadataBackfillRequest` | `fieldValue` | `field_value` |
| `TeamsCustomMetadataBackfillRequest` | `overrideExisting` | `override_existing` |
| `TeamsCustomMetadataOptionsRequest` | `fieldId` | `field_id` |
| `TextTrack` | `createdOn` | `created_on` |
| `TextTrack` | `displayLanguage` | `display_language` |
| `TextTrack` | `downloadLinks` | `download_links` |
| `TextTrack` | `downloadLinksExpiresTime` | `download_links_expires_time` |
| `TextTrack` | `hlsLink` | `hls_link` |
| `TextTrack` | `hlsLinkExpiresTime` | `hls_link_expires_time` |
| `TextTrack` | `linkExpiresTime` | `link_expires_time` |
| `TextTrack` | `modifiedOn` | `modified_on` |
| `TextTrack` | `sourceLink` | `source_link` |
| `TextTrack` | `sourceLinkExpiresTime` | `source_link_expires_time` |
| `TextCtaAlignment` | `isUpgrade` | `is_upgrade` |
| `Trailer` | `resourceKey` | `resource_key` |
| `TranscriptMetadata` | `clipId` | `clip_id` |
| `TranscriptMetadata` | `containerId` | `container_id` |
| `TranscriptMetadata` | `speakerCount` | `speaker_count` |
| `TranscriptMetadata` | `texttrackId` | `texttrack_id` |
| `TranscriptMetadata` | `transcriptStatusUuid` | `transcript_status_uuid` |
| `TranscriptMetadata` | `wordCount` | `word_count` |
| `Trial` | `hasBeenInFreeTrial` | `has_been_in_free_trial` |
| `Trial` | `isReverseFreeTrial` | `is_reverse_free_trial` |
| `TrimmedVideo` | `clipId` | `clip_id` |
| `TrimmedVideo` | `createdOn` | `created_on` |
| `TrimmedVideo` | `createdVersionId` | `created_version_id` |
| `TrimmedVideo` | `isClipFinishedTranscoding` | `is_clip_finished_transcoding` |
| `TrimmedVideo` | `modifiedOn` | `modified_on` |
| `TrimmedVideo` | `rootVersionId` | `root_version_id` |
| `TrimmedVideo` | `versionQuality` | `version_quality` |
| `Tutorial` | `nextStepsLink` | `next_steps_link` |
| `Tutorial` | `tokenIsAuthenticated` | `token_is_authenticated` |
| `Upload` | `gcsUid` | `gcs_uid` |
| `Upload` | `redirectUrl` | `redirect_url` |
| `Upload` | `uploadLink` | `upload_link` |
| `UploadAttempt` | `ticketId` | `ticket_id` |
| `UploadAttempt` | `uploadLink` | `upload_link` |
| `Upload1` | `gcsUid` | `gcs_uid` |
| `Upload1` | `redirectUrl` | `redirect_url` |
| `Upload1` | `uploadLink` | `upload_link` |
| `Upload2` | `redirectUrl` | `redirect_url` |
| `Upload4` | `redirectUrl` | `redirect_url` |
| `Upload5` | `redirectUrl` | `redirect_url` |
| `UploadQuota` | `recentlyDeletedDiskSpace` | `recently_deleted_disk_space` |
| `Uri` | `freeTrial` | `free_trial` |
| `User` | `accountDictionaryQuota` | `account_dictionary_quota` |
| `User` | `ageVerificationStatus` | `age_verification_status` |
| `User` | `aiCreditsQuota` | `ai_credits_quota` |
| `User` | `availableForHire` | `available_for_hire` |
| `User` | `canWorkRemotely` | `can_work_remotely` |
| `User` | `contentFilter` | `content_filter` |
| `User` | `createdTime` | `created_time` |
| `User` | `drmLicensesQuota` | `drm_licenses_quota` |
| `User` | `hasInvalidEmail` | `has_invalid_email` |
| `User` | `isExpert` | `is_expert` |
| `User` | `isStaffPicked` | `is_staff_picked` |
| `User` | `lastVideoUploadDate` | `last_video_upload_date` |
| `User` | `liveLocalizationTrialExpiresOn` | `live_localization_trial_expires_on` |
| `User` | `lmsLearnerSeatsQuota` | `lms_learner_seats_quota` |
| `User` | `locationDetails` | `location_details` |
| `User` | `maxTeamMembers` | `max_team_members` |
| `User` | `profileDiscovery` | `profile_discovery` |
| `User` | `requiresAgeVerification` | `requires_age_verification` |
| `User` | `resourceKey` | `resource_key` |
| `User` | `shortBio` | `short_bio` |
| `User` | `transcriptPhrasesLimit` | `transcript_phrases_limit` |
| `User` | `uploadQuota` | `upload_quota` |
| `User1` | `isStaffPicked` | `is_staff_picked` |
| `User2` | `isStaffPicked` | `is_staff_picked` |
| `UserFolderAccessGrants` | `folderPermissionPolicies` | `folder_permission_policies` |
| `UsersAlbumsRequest` | `brandColor` | `brand_color` |
| `UsersAlbumsRequest` | `hideFromVimeo` | `hide_from_vimeo` |
| `UsersAlbumsRequest` | `hideNav` | `hide_nav` |
| `UsersAlbumsRequest` | `hideUpcoming` | `hide_upcoming` |
| `UsersAlbumsRequest` | `reviewMode` | `review_mode` |
| `UsersAlbumsRequest1` | `brandColor` | `brand_color` |
| `UsersAlbumsRequest1` | `hideNav` | `hide_nav` |
| `UsersAlbumsRequest1` | `hideUpcoming` | `hide_upcoming` |
| `UsersAlbumsRequest1` | `reviewMode` | `review_mode` |
| `UsersAlbumsRequest1` | `useCustomDomain` | `use_custom_domain` |
| `UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest` | `timeCode` | `time_code` |
| `UsersLiveEventsActivateRequest` | `cloudComposingStreaming` | `cloud_composing_streaming` |
| `UsersLiveEventsActivateRequest` | `streamingStartRequested` | `streaming_start_requested` |
| `UsersLiveEventsAutoCcRequest` | `autoCcEnabled` | `auto_cc_enabled` |
| `UsersLiveEventsAutoCcRequest` | `autoCcKeywords` | `auto_cc_keywords` |
| `UsersLiveEventsAutoCcRequest` | `autoCcLang` | `auto_cc_lang` |
| `UsersLiveEventsAutoCcRequest` | `autoCcTranslationEnabled` | `auto_cc_translation_enabled` |
| `UsersLiveEventsAutoCcRequest` | `autoCcTranslationLanguages` | `auto_cc_translation_languages` |
| `UsersLiveEventsDestinationsRequest` | `displayName` | `display_name` |
| `UsersLiveEventsDestinationsRequest` | `isEnabled` | `is_enabled` |
| `UsersLiveEventsDestinationsRequest` | `providerDestinationId` | `provider_destination_id` |
| `UsersLiveEventsDestinationsRequest` | `providerVideoId` | `provider_video_id` |
| `UsersLiveEventsDestinationsRequest` | `scheduledAt` | `scheduled_at` |
| `UsersLiveEventsDestinationsRequest` | `serviceName` | `service_name` |
| `UsersLiveEventsDestinationsRequest` | `streamKey` | `stream_key` |
| `UsersLiveEventsDestinationsRequest` | `streamUrl` | `stream_url` |
| `UsersLiveEventsLowLatencyRequest` | `lowLatency` | `low_latency` |
| `UsersLiveEventsPrivacyDomainsRequest` | `allowedDomains` | `allowed_domains` |
| `UsersLiveEventsRequest1` | `allowShareLink` | `allow_share_link` |
| `UsersLiveEventsRequest1` | `autoCcEnabled` | `auto_cc_enabled` |
| `UsersLiveEventsRequest1` | `autoCcKeywords` | `auto_cc_keywords` |
| `UsersLiveEventsRequest1` | `autoCcLang` | `auto_cc_lang` |
| `UsersLiveEventsRequest1` | `automaticallyTitleStream` | `automatically_title_stream` |
| `UsersLiveEventsRequest1` | `chatEnabled` | `chat_enabled` |
| `UsersLiveEventsRequest1` | `contentRating` | `content_rating` |
| `UsersLiveEventsRequest1` | `disableAutoArchiving` | `disable_auto_archiving` |
| `UsersLiveEventsRequest1` | `eventType` | `event_type` |
| `UsersLiveEventsRequest1` | `folderUri` | `folder_uri` |
| `UsersLiveEventsRequest1` | `interactionToolsSettings` | `interaction_tools_settings` |
| `UsersLiveEventsRequest1` | `playlistSort` | `playlist_sort` |
| `UsersLiveEventsRequest1` | `preferredStreamMethod` | `preferred_stream_method` |
| `UsersLiveEventsRequest1` | `rtmpPreview` | `rtmp_preview` |
| `UsersLiveEventsRequest1` | `scheduledPlayback` | `scheduled_playback` |
| `UsersLiveEventsRequest1` | `srtEncryptionEnabled` | `srt_encryption_enabled` |
| `UsersLiveEventsRequest1` | `streamDescription` | `stream_description` |
| `UsersLiveEventsRequest1` | `streamEmbed` | `stream_embed` |
| `UsersLiveEventsRequest1` | `streamPassword` | `stream_password` |
| `UsersLiveEventsRequest1` | `streamPrivacy` | `stream_privacy` |
| `UsersLiveEventsRequest1` | `streamTitle` | `stream_title` |
| `UsersLiveEventsRequest1` | `streamingAutoStop` | `streaming_auto_stop` |
| `UsersLiveEventsRequest1` | `timeZone` | `time_zone` |
| `UsersLiveEventsRequest1` | `unlimitedDuration` | `unlimited_duration` |
| `UsersLiveEventsRequest1` | `venueUuid` | `venue_uuid` |
| `UsersLiveEventsRequest2` | `autoCcEnabled` | `auto_cc_enabled` |
| `UsersLiveEventsRequest2` | `autoCcKeywords` | `auto_cc_keywords` |
| `UsersLiveEventsRequest2` | `autoCcLanguage` | `auto_cc_language` |
| `UsersLiveEventsRequest2` | `automaticallyTitleStream` | `automatically_title_stream` |
| `UsersLiveEventsRequest2` | `chatEnabled` | `chat_enabled` |
| `UsersLiveEventsRequest2` | `contentRating` | `content_rating` |
| `UsersLiveEventsRequest2` | `disableAutoArchiving` | `disable_auto_archiving` |
| `UsersLiveEventsRequest2` | `interactionToolsSettings` | `interaction_tools_settings` |
| `UsersLiveEventsRequest2` | `landingPageLogo` | `landing_page_logo` |
| `UsersLiveEventsRequest2` | `playlistSort` | `playlist_sort` |
| `UsersLiveEventsRequest2` | `preferredStreamMethod` | `preferred_stream_method` |
| `UsersLiveEventsRequest2` | `scheduledPlayback` | `scheduled_playback` |
| `UsersLiveEventsRequest2` | `srtEncryptionEnabled` | `srt_encryption_enabled` |
| `UsersLiveEventsRequest2` | `streamDescription` | `stream_description` |
| `UsersLiveEventsRequest2` | `streamEmbed` | `stream_embed` |
| `UsersLiveEventsRequest2` | `streamMode` | `stream_mode` |
| `UsersLiveEventsRequest2` | `streamPassword` | `stream_password` |
| `UsersLiveEventsRequest2` | `streamPrivacy` | `stream_privacy` |
| `UsersLiveEventsRequest2` | `streamTitle` | `stream_title` |
| `UsersLiveEventsRequest2` | `streamingAutoStop` | `streaming_auto_stop` |
| `UsersLiveEventsRequest2` | `timeZone` | `time_zone` |
| `UsersLiveEventsRequest2` | `unlimitedDuration` | `unlimited_duration` |
| `UsersOndemandPagesRequest` | `acceptedCurrencies` | `accepted_currencies` |
| `UsersOndemandPagesRequest` | `contentRating` | `content_rating` |
| `UsersOndemandPagesRequest` | `domainLink` | `domain_link` |
| `UsersPresetsRequest` | `applyToAll` | `apply_to_all` |
| `UsersProjectsRequest` | `parentFolderUri` | `parent_folder_uri` |
| `UsersProjectsRequest1` | `sendToRecentlyDeleted` | `send_to_recently_deleted` |
| `UsersProjectsRequest1` | `shouldDeleteClips` | `should_delete_clips` |
| `UsersProjectsVideosRequest` | `sendToRecentlyDeleted` | `send_to_recently_deleted` |
| `UsersProjectsVideosRequest` | `shouldDeleteClips` | `should_delete_clips` |
| `UsersRequest` | `contentFilter` | `content_filter` |
| `UsersVideosRequest` | `sendToRecentlyDeleted` | `send_to_recently_deleted` |
| `UsersVideosRequest1` | `contentRating` | `content_rating` |
| `UsersVideosRequest1` | `embedDomains` | `embed_domains` |
| `UsersVideosRequest1` | `folderUri` | `folder_uri` |
| `UsersVideosRequest1` | `hideFromVimeo` | `hide_from_vimeo` |
| `UsersVideosRequest1` | `reviewPage` | `review_page` |
| `VersionTranscodeStatus` | `isComplete` | `is_complete` |
| `VersionTranscodeStatus` | `isFullyPlayable` | `is_fully_playable` |
| `VersionTranscodeStatus` | `isPlayable` | `is_playable` |
| `Versions` | `createStoryboardId` | `create_storyboard_id` |
| `Versions` | `currentUri` | `current_uri` |
| `Versions` | `hasInteractive` | `has_interactive` |
| `Versions` | `originVariableFrameResolution` | `origin_variable_frame_resolution` |
| `Versions` | `resourceKey` | `resource_key` |
| `Versions` | `sequenceNumber` | `sequence_number` |
| `Versions` | `totalIncludingDeleted` | `total_including_deleted` |
| `Video` | `allowMultipleReviewLinks` | `allow_multiple_review_links` |
| `Video` | `allowedPrivacies` | `allowed_privacies` |
| `Video` | `canMoveToProject` | `can_move_to_project` |
| `Video` | `contentRating` | `content_rating` |
| `Video` | `contentRatingClass` | `content_rating_class` |
| `Video` | `countsTowardManagedStorage` | `counts_toward_managed_storage` |
| `Video` | `createdTime` | `created_time` |
| `Video` | `customMetadata` | `custom_metadata` |
| `Video` | `customUrl` | `custom_url` |
| `Video` | `deletedBy` | `deleted_by` |
| `Video` | `descriptionHtml` | `description_html` |
| `Video` | `descriptionRich` | `description_rich` |
| `Video` | `editSession` | `edit_session` |
| `Video` | `explicitAccessSummary` | `explicit_access_summary` |
| `Video` | `filesSize` | `files_size` |
| `Video` | `hasAudio` | `has_audio` |
| `Video` | `hasAudioTracks` | `has_audio_tracks` |
| `Video` | `hasChapters` | `has_chapters` |
| `Video` | `hasInteractive` | `has_interactive` |
| `Video` | `hasTextTracks` | `has_text_tracks` |
| `Video` | `isColdPrivacyRestricted` | `is_cold_privacy_restricted` |
| `Video` | `isColdStorage` | `is_cold_storage` |
| `Video` | `isCopyrightRestricted` | `is_copyright_restricted` |
| `Video` | `isFree` | `is_free` |
| `Video` | `isPlayable` | `is_playable` |
| `Video` | `isStarredByCurUser` | `is_starred_by_cur_user` |
| `Video` | `lastUserActionEventDate` | `last_user_action_event_date` |
| `Video` | `manageLink` | `manage_link` |
| `Video` | `modifiedTime` | `modified_time` |
| `Video` | `originVariableFrameResolution` | `origin_variable_frame_resolution` |
| `Video` | `parentProject` | `parent_project` |
| `Video` | `playerEmbedUrl` | `player_embed_url` |
| `Video` | `ratingModLocked` | `rating_mod_locked` |
| `Video` | `releaseTime` | `release_time` |
| `Video` | `resourceKey` | `resource_key` |
| `Video` | `reviewLinks` | `review_links` |
| `Video` | `reviewStatus` | `review_status` |
| `Video` | `showReviewPage` | `show_review_page` |
| `Video` | `showSvvFooterBanner` | `show_svv_footer_banner` |
| `Video` | `showSvvTimecodedComments` | `show_svv_timecoded_comments` |
| `Video` | `usesDrm` | `uses_drm` |
| `Video` | `versionTranscodeStatus` | `version_transcode_status` |
| `VideoFile` | `createdTime` | `created_time` |
| `VideoFile` | `publicName` | `public_name` |
| `VideoFile` | `sizeShort` | `size_short` |
| `VideoFile` | `sourceLink` | `source_link` |
| `VideoPageSettings` | `askAi` | `ask_ai` |
| `VideoPageSettings` | `creativeCommons` | `creative_commons` |
| `VideoPageSettings` | `dateAdded` | `date_added` |
| `VideoPageSettings` | `watchLater` | `watch_later` |
| `VideoVersion` | `audioTrackQuota` | `audio_track_quota` |
| `VideoVersion` | `canRestoreCreate` | `can_restore_create` |
| `VideoVersion` | `createStoryboardId` | `create_storyboard_id` |
| `VideoVersion` | `createdTime` | `created_time` |
| `VideoVersion` | `downloadConfig` | `download_config` |
| `VideoVersion` | `editSession` | `edit_session` |
| `VideoVersion` | `hasInteractive` | `has_interactive` |
| `VideoVersion` | `isDeleted` | `is_deleted` |
| `VideoVersion` | `isPlayable` | `is_playable` |
| `VideoVersion` | `modifiedTime` | `modified_time` |
| `VideoVersion` | `originVariableFrameResolution` | `origin_variable_frame_resolution` |
| `VideoVersion` | `playerEmbedUrl` | `player_embed_url` |
| `VideoVersion` | `sequenceNumber` | `sequence_number` |
| `VideoVersion` | `sourceMetadata` | `source_metadata` |
| `VideoVersion` | `uploadDate` | `upload_date` |
| `VideoVersion` | `versionTranscodeStatus` | `version_transcode_status` |
| `VideoVersion` | `versionType` | `version_type` |
| `VideoVersionsSize` | `fileSizeType` | `file_size_type` |
| `VideoVersionsSize` | `numVersions` | `num_versions` |
| `VideoVersionsSize` | `totalSize` | `total_size` |
| `Video1` | `createdTime` | `created_time` |
| `Video1` | `manageLink` | `manage_link` |
| `Video4` | `displayCodec` | `display_codec` |
| `Video4` | `stereoMode` | `stereo_mode` |
| `VideosAiTranslateSubtitlesRequest` | `texttrackId` | `texttrack_id` |
| `VideosAnimatedThumbsetsRequest` | `startTime` | `start_time` |
| `VideosChaptersRequest` | `activeThumbnailUri` | `active_thumbnail_uri` |
| `VideosChaptersRequest` | `thumbnailUris` | `thumbnail_uris` |
| `VideosChaptersRequest1` | `activeThumbnailUri` | `active_thumbnail_uri` |
| `VideosCreditsRequest` | `userUri` | `user_uri` |
| `VideosRequest` | `sendToRecentlyDeleted` | `send_to_recently_deleted` |
| `VideosRequest1` | `contentRating` | `content_rating` |
| `VideosRequest1` | `customUrl` | `custom_url` |
| `VideosRequest1` | `embedDomains` | `embed_domains` |
| `VideosRequest1` | `embedDomainsAdd` | `embed_domains_add` |
| `VideosRequest1` | `embedDomainsDelete` | `embed_domains_delete` |
| `VideosRequest1` | `hideFromVimeo` | `hide_from_vimeo` |
| `VideosRequest1` | `reviewPage` | `review_page` |
| `VideosTexttracksRequest` | `isAutoGenerated` | `is_auto_generated` |
| `VideosTexttracksRequest` | `isEdited` | `is_edited` |
| `VideosTrimRequest` | `trimEnd` | `trim_end` |
| `VideosTrimRequest` | `trimStart` | `trim_start` |
| `VideosVersionsAudiotracksAudiotrackIdRequest` | `languageCode` | `language_code` |
| `VideosVersionsAudiotracksRequest` | `languageCode` | `language_code` |
| `VideosVersionsRequest` | `fileName` | `file_name` |
| `VideosVersionsRequest1` | `isCurrent` | `is_current` |
| `Videos15` | `outroVideosCollectionType` | `outro_videos_collection_type` |
| `Videos15` | `outroVideosCollectionUri` | `outro_videos_collection_uri` |
| `Videos15` | `pictureUri` | `picture_uri` |
| `Videos15` | `videoUris` | `video_uris` |
| `Videos4` | `autoGenerateReviewLink` | `auto_generate_review_link` |
| `Videos4` | `autoccDisplayEnabledByDefault` | `autocc_display_enabled_by_default` |
| `Videos4` | `embedPresetUri` | `embed_preset_uri` |
| `Videos4` | `hideStats` | `hide_stats` |
| `Videos4` | `keepSourceFiles` | `keep_source_files` |
| `Videos4` | `pagePresetUri` | `page_preset_uri` |
| `Videos4` | `sharingLinkDefaultExpiryDays` | `sharing_link_default_expiry_days` |
| `Videos5` | `deepTotal` | `deep_total` |
| `Videos8` | `extraTotal` | `extra_total` |
| `Videos8` | `mainTotal` | `main_total` |
| `Videos8` | `viewableTotal` | `viewable_total` |
| `ViewProfile` | `modOverride` | `mod_override` |
| `Watched` | `addedTime` | `added_time` |
| `Watchlater1` | `addedTime` | `added_time` |
| `Watchlater2` | `addedTime` | `added_time` |
| `Activity31Connection` | `perPage` | `per_page` |
| `AlbumConnection` | `perPage` | `per_page` |
| `AlternateAudioTrackConnection` | `perPage` | `per_page` |
| `AnalyticsConnection` | `perPage` | `per_page` |
| `AnimatedThumbsetConnection` | `perPage` | `per_page` |
| `ApiAppWebhookConnection` | `perPage` | `per_page` |
| `CategoryConnection` | `perPage` | `per_page` |
| `ChannelConnection` | `perPage` | `per_page` |
| `ChapterConnection` | `perPage` | `per_page` |
| `CommentConnection` | `perPage` | `per_page` |
| `ComposerGraphicsConnection` | `perPage` | `per_page` |
| `ComposerScenesConnection` | `perPage` | `per_page` |
| `ContentRatingConnection` | `perPage` | `per_page` |
| `CreativeCommonsConnection` | `perPage` | `per_page` |
| `CreditConnection` | `perPage` | `per_page` |
| `CustomMetadataSettingsConnection` | `perPage` | `per_page` |
| `DomainConnection` | `perPage` | `per_page` |
| `EventConnection` | `perPage` | `per_page` |
| `EventDestinationConnection` | `perPage` | `per_page` |
| `FederatedSearchItemsConnection` | `perPage` | `per_page` |
| `GroupConnection` | `perPage` | `per_page` |
| `LanguageConnection` | `perPage` | `per_page` |
| `LiveEventOccurrenceConnection` | `perPage` | `per_page` |
| `OnDemandGenreConnection` | `perPage` | `per_page` |
| `OnDemandPageConnection` | `perPage` | `per_page` |
| `OnDemandRegionConnection` | `perPage` | `per_page` |
| `OnDemandSeasonConnection` | `perPage` | `per_page` |
| `OnDemandVideoConnection` | `perPage` | `per_page` |
| `OttDestinationConnection` | `perPage` | `per_page` |
| `PaymentMethodConnection` | `perPage` | `per_page` |
| `PictureConnection` | `perPage` | `per_page` |
| `PortfolioConnection` | `perPage` | `per_page` |
| `PresetConnection` | `perPage` | `per_page` |
| `ProjectConnection` | `perPage` | `per_page` |
| `SegmentConnection` | `perPage` | `per_page` |
| `TagConnection` | `perPage` | `per_page` |
| `TextTrackConnection` | `perPage` | `per_page` |
| `UserConnection` | `perPage` | `per_page` |
| `VideoConnection` | `perPage` | `per_page` |
| `VideoVersionConnection` | `perPage` | `per_page` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **520 of the 520 operations** require a credential and **0** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `bearer` | `bearer` | `Authorization: Bearer <token>` |
| `oauth2AuthorizationCode` | `oauth2AuthorizationCode: { clientId, clientSecret?, redirectUri, scope?, state?, pkce?, promptForAuthorizationCode }` | `Authorization: Bearer <access token>` |
| `oauth2ClientCredentials` | `oauth2ClientCredentials: { clientId, clientSecret, scope? }` | `Authorization: Bearer <access token>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**OAuth2 fetches and caches its own token.** The token request goes through the same client as every other call — same timeout, same `fetch` — sends a form-urlencoded body, and **decodes** the response against a schema rather than casting it. An access token is cached until shortly before it expires; a response carrying no `expires_in` is treated as never expiring (RFC 6749 §5.1); concurrent callers share one in-flight fetch. A refused token endpoint rejects with `AuthError` wrapping the underlying `ResponseError` as `cause`, so it never looks like the business call failing.

| Flow | Token endpoint | Client credentials travel |
| --- | --- | --- |
| `oauth2AuthorizationCode` | `default` + `/oauth/access_token` | as `Authorization: Basic` |
| `oauth2ClientCredentials` | `default` + `/oauth/authorize/client` | as `Authorization: Basic` |

The authorization-code grant differs in three ways. It needs a human, so `promptForAuthorizationCode` is a **required** member of its credentials: the SDK builds the authorization URL from `default` + `/oauth/authorize` and hands it over, and never opens it itself. PKCE is on by default — `pkce` defaults to `PkceMethod.S256`, and `null` disables it, which then requires a client secret or the scheme throws `AuthError` before prompting. And it is the only grant that can refresh, so acquisition is a ladder: live cache, then a refresh attempt, then a full re-authorization.

**Replacing a grant.** Each OAuth2 scheme's token request is a strategy you can substitute — `oauth2AuthorizationCodeStrategy`, `oauth2ClientCredentialsStrategy` on `ClientOptions`. A strategy is one method, `getToken(credentials, signal)`, plus `tryRefreshToken(...)` for the refreshable one. Supply it and the built-in token request is not used, while the caching, the expiry buffer and the single-flight behaviour above still apply.

**The auth types you can name.** Every row below is exported from the package root. `Source` is where to read the declaration, never what to import — the credential shapes themselves are already spelled in the scheme table above.

| Type | Source |
| --- | --- |
| `OAuthToken` | `src/core/auth/oauth2-strategies.ts` |
| `OAuth2CredentialPlacement` | `src/core/auth/oauth2-strategies.ts` |
| `OAuthTokenRefreshable` | `src/core/auth/oauth2-strategies.ts` |
| `AuthorizationCodePrompt` | `src/core/auth/credentials.ts` |
| `PkceMethod` | `src/core/auth/credentials.ts` |

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |

**Server groups.** 1 logical server; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `production` | `https://api.vimeo.com` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("vimeo-api")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Auth adds more, each reached only once the credential needing it is configured. `TextEncoder` and `btoa` build every `Authorization: Basic` value, sent on every OAuth2 token request, whose client credentials travel as Basic by default. `crypto.getRandomValues` and `crypto.subtle.digest` belong to the authorization-code grant's PKCE alone. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

One auth floor is not a version at all. `crypto.subtle` is `undefined` on an **insecure origin** in every browser, so the authorization-code grant's default `S256` PKCE fails on a page served over plain `http` — a LAN IP included, since only `localhost` is treated as secure. HTTPS is the fix; `PkceMethod.Plain` avoids `crypto.subtle` entirely.


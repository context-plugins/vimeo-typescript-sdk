<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersAnalytics — operations

Accessor: `client.usersAnalytics` · Source: `src/resources/users-analytics.ts` · 2 operations · Request types: namespace `UsersAnalytics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUserAnalytics

- **Signature**: `getUserAnalytics(request: UsersAnalytics.GetUserAnalyticsRequest, options?: RequestOptions): ApiPromise<AnalyticsConnection, ApiError>`
- **Wire**: `GET /users/{user_id}/analytics`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersAnalytics.GetUserAnalyticsRequest` (17):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `dimension` | `query` | — | `Dimension` | yes |
| `from` | `query` | — | `string` | yes |
| `to` | `query` | — | `string` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filterContent` | `query` | `filter_content` | `string` | no |
| `filterCountries` | `query` | `filter_countries` | `string[]` | no |
| `filterCustomMetadata` | `query` | `filter_custom_metadata` | `string` | no |
| `filterDeviceTypes` | `query` | `filter_device_types` | `string[]` | no |
| `filterEmbedDomains` | `query` | `filter_embed_domains` | `string[]` | no |
| `filterRegions` | `query` | `filter_regions` | `string[]` | no |
| `filterStreamingTypes` | `query` | `filter_streaming_types` | `string[]` | no |
| `filterWorkspaces` | `query` | `filter_workspaces` | `string` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort22` | no |
| `timeInterval` | `query` | `time_interval` | `TimeInterval` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Dimension` | `dimensionSchema` | `src/models/dimension.ts` |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort22` | `sort22Schema` | `src/models/sort22.ts` |
| `TimeInterval` | `timeIntervalSchema` | `src/models/time-interval.ts` |
| `AnalyticsConnection` | `analyticsConnectionSchema` | `src/models/analytics-connection.ts` |

### getUserAnalyticsAlt1

- **Signature**: `getUserAnalyticsAlt1(request: UsersAnalytics.GetUserAnalyticsAlt1Request, options?: RequestOptions): ApiPromise<AnalyticsConnection, ApiError>`
- **Wire**: `GET /me/analytics`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersAnalytics.GetUserAnalyticsAlt1Request` (16):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `dimension` | `query` | — | `Dimension` | yes |
| `from` | `query` | — | `string` | yes |
| `to` | `query` | — | `string` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filterContent` | `query` | `filter_content` | `string` | no |
| `filterCountries` | `query` | `filter_countries` | `string[]` | no |
| `filterCustomMetadata` | `query` | `filter_custom_metadata` | `string` | no |
| `filterDeviceTypes` | `query` | `filter_device_types` | `string[]` | no |
| `filterEmbedDomains` | `query` | `filter_embed_domains` | `string[]` | no |
| `filterRegions` | `query` | `filter_regions` | `string[]` | no |
| `filterStreamingTypes` | `query` | `filter_streaming_types` | `string[]` | no |
| `filterWorkspaces` | `query` | `filter_workspaces` | `string` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort22` | no |
| `timeInterval` | `query` | `time_interval` | `TimeInterval` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Dimension` | `dimensionSchema` | `src/models/dimension.ts` |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort22` | `sort22Schema` | `src/models/sort22.ts` |
| `TimeInterval` | `timeIntervalSchema` | `src/models/time-interval.ts` |
| `AnalyticsConnection` | `analyticsConnectionSchema` | `src/models/analytics-connection.ts` |


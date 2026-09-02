<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnDemandPromotions — operations

Accessor: `client.onDemandPromotions` · Source: `src/resources/on-demand-promotions.ts` · 5 operations · Request and error types: namespace `OnDemandPromotions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createVodPromotion

- **Signature**: `createVodPromotion(request: OnDemandPromotions.CreateVodPromotionRequest, options?: RequestOptions): ApiPromise<OnDemandPromotion, OnDemandPromotions.CreateVodPromotionError>`
- **Wire**: `POST /ondemand/pages/{ondemand_id}/promotions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `OnDemandPromotion`
- **Error**: `OnDemandPromotions.CreateVodPromotionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"legacyError3"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandPromotions.CreateVodPromotionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `body` | `body` | — | `OndemandPagesPromotionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OndemandPagesPromotionsRequest` | `ondemandPagesPromotionsRequestSchema` | `src/models/ondemand-pages-promotions-request.ts` |
| `OnDemandPromotion` | `onDemandPromotionSchema` | `src/models/on-demand-promotion.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVodPromotion

- **Signature**: `deleteVodPromotion(request: OnDemandPromotions.DeleteVodPromotionRequest, options?: RequestOptions): ApiPromise<undefined, OnDemandPromotions.DeleteVodPromotionError>`
- **Wire**: `DELETE /ondemand/pages/{ondemand_id}/promotions/{promotion_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OnDemandPromotions.DeleteVodPromotionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandPromotions.DeleteVodPromotionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `promotionId` | `path` | `promotion_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodPromotion

- **Signature**: `getVodPromotion(request: OnDemandPromotions.GetVodPromotionRequest, options?: RequestOptions): ApiPromise<OnDemandPromotion, OnDemandPromotions.GetVodPromotionError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/promotions/{promotion_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandPromotion`
- **Error**: `OnDemandPromotions.GetVodPromotionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandPromotions.GetVodPromotionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `promotionId` | `path` | `promotion_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandPromotion` | `onDemandPromotionSchema` | `src/models/on-demand-promotion.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodPromotionCodes

- **Signature**: `getVodPromotionCodes(request: OnDemandPromotions.GetVodPromotionCodesRequest, options?: RequestOptions): ApiPromise<OnDemandPromotionCode, OnDemandPromotions.GetVodPromotionCodesError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/promotions/{promotion_id}/codes`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandPromotionCode`
- **Error**: `OnDemandPromotions.GetVodPromotionCodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandPromotions.GetVodPromotionCodesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `promotionId` | `path` | `promotion_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandPromotionCode` | `onDemandPromotionCodeSchema` | `src/models/on-demand-promotion-code.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodPromotions

- **Signature**: `getVodPromotions(request: OnDemandPromotions.GetVodPromotionsRequest, options?: RequestOptions): ApiPromise<OnDemandPromotion, OnDemandPromotions.GetVodPromotionsError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/promotions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandPromotion`
- **Error**: `OnDemandPromotions.GetVodPromotionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"legacyError3"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandPromotions.GetVodPromotionsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `filter` | `query` | — | `Filter26` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter26` | `filter26Schema` | `src/models/filter26.ts` |
| `OnDemandPromotion` | `onDemandPromotionSchema` | `src/models/on-demand-promotion.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |


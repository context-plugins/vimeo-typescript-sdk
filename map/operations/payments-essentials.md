<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentsEssentials — operations

Accessor: `client.paymentsEssentials` · Source: `src/resources/payments-essentials.ts` · 4 operations · Request and error types: namespace `PaymentsEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deletePaymentMethod

- **Signature**: `deletePaymentMethod(request: PaymentsEssentials.DeletePaymentMethodRequest, options?: RequestOptions): ApiPromise<undefined, PaymentsEssentials.DeletePaymentMethodError>`
- **Wire**: `DELETE /me/payment_methods/{payment_method_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `PaymentsEssentials.DeletePaymentMethodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsEssentials.DeletePaymentMethodRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentMethodId` | `path` | `payment_method_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPaymentMethodInfo

- **Signature**: `getPaymentMethodInfo(request: PaymentsEssentials.GetPaymentMethodInfoRequest, options?: RequestOptions): ApiPromise<PaymentMethod, PaymentsEssentials.GetPaymentMethodInfoError>`
- **Wire**: `GET /me/payment_methods/{payment_method_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentMethod`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `PaymentsEssentials.GetPaymentMethodInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsEssentials.GetPaymentMethodInfoRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentMethodId` | `path` | `payment_method_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentMethod` | `paymentMethodSchema` | `src/models/payment-method.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSubscriptionInfo

- **Signature**: `getSubscriptionInfo(request: PaymentsEssentials.GetSubscriptionInfoRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /users/{user_id}/subscriptions/{subscription_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PaymentsEssentials.GetSubscriptionInfoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `userId` | `path` | `user_id` | `string` | yes |

### listPaymentMethods

- **Signature**: `listPaymentMethods(request: PaymentsEssentials.ListPaymentMethodsRequest, options?: RequestOptions): ApiPromise<PaymentMethodConnection, PaymentsEssentials.ListPaymentMethodsError>`
- **Wire**: `GET /me/payment_methods`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentMethodConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `PaymentsEssentials.ListPaymentMethodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsEssentials.ListPaymentMethodsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cardmemberName` | `query` | `cardmember_name` | `string` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `showDisabled` | `query` | `show_disabled` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentMethodConnection` | `paymentMethodConnectionSchema` | `src/models/payment-method-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


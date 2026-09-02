# Reference

> Source: [VimeoApiClient](src/client.ts)

## ApiAppsWebhooks

> Source: [ApiAppsWebhooks](src/resources/api-apps-webhooks.ts)

<details>
<summary><code>addWebhook(request: ApiAppsWebhooks.AddWebhookRequest, options?: RequestOptions): ApiPromise&lt;ApiAppWebhook, ApiAppsWebhooks.AddWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a webhook for the specified app.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiAppsWebhooks.addWebhook({ appId });
  // TODO: Handle 'response' of type ApiAppWebhook
} catch (err) {
  if (err instanceof ApiAppsWebhooks.AddWebhookError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>appId</code> | <code>number</code> | The ID of the app for which the webhook is created. |
| <code>body?</code> | <code>[AppsWebhooksRequest](src/models/apps-webhooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiAppWebhook](src/models/api-app-webhook.ts)</code>

**OnError**: <code>[ApiAppsWebhooks.AddWebhookError](src/resources/api-apps-webhooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: ApiAppsWebhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiAppsWebhooks.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.apiAppsWebhooks.deleteWebhook({ appId, webhookId });
} catch (err) {
  if (err instanceof ApiAppsWebhooks.DeleteWebhookError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>appId</code> | <code>number</code> | The ID of the app that the webhook is associated with. |
| <code>webhookId</code> | <code>number</code> | The ID of the webhook. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ApiAppsWebhooks.DeleteWebhookError](src/resources/api-apps-webhooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhook(request: ApiAppsWebhooks.GetWebhookRequest, options?: RequestOptions): ApiPromise&lt;ApiAppWebhook, ApiAppsWebhooks.GetWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiAppsWebhooks.getWebhook({ appId, webhookId });
  // TODO: Handle 'response' of type ApiAppWebhook
} catch (err) {
  if (err instanceof ApiAppsWebhooks.GetWebhookError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>appId</code> | <code>number</code> | The ID of the app that the webhook is associated with. |
| <code>webhookId</code> | <code>number</code> | The ID of the webhook. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiAppWebhook](src/models/api-app-webhook.ts)</code>

**OnError**: <code>[ApiAppsWebhooks.GetWebhookError](src/resources/api-apps-webhooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhooks(request: ApiAppsWebhooks.GetWebhooksRequest, options?: RequestOptions): ApiPromise&lt;ApiAppWebhookConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every webhook for the specified app.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiAppsWebhooks.getWebhooks({ appId });
  // TODO: Handle 'response' of type ApiAppWebhookConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>appId</code> | <code>number</code> | The ID of the app that the webhook is associated with. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiAppWebhookConnection](src/models/api-app-webhook-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhook(request: ApiAppsWebhooks.UpdateWebhookRequest, options?: RequestOptions): ApiPromise&lt;ApiAppWebhook, ApiAppsWebhooks.UpdateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method updates the specified webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiAppsWebhooks.updateWebhook({ appId, webhookId });
  // TODO: Handle 'response' of type ApiAppWebhook
} catch (err) {
  if (err instanceof ApiAppsWebhooks.UpdateWebhookError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>appId</code> | <code>number</code> | The ID of the app that the webhook is associated with. |
| <code>webhookId</code> | <code>number</code> | The ID of the webhook. |
| <code>body?</code> | <code>[AppsWebhooksRequest1](src/models/apps-webhooks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiAppWebhook](src/models/api-app-webhook.ts)</code>

**OnError**: <code>[ApiAppsWebhooks.UpdateWebhookError](src/resources/api-apps-webhooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ApiInformationEssentials

> Source: [ApiInformationEssentials](src/resources/api-information-essentials.ts)

<details>
<summary><code>getEndpoints(options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the full OpenAPI specification for the Vimeo API.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.apiInformationEssentials.getEndpoints();
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthenticationExtrasAuthenticate

> Source: [AuthenticationExtrasAuthenticate](src/resources/authentication-extras-authenticate.ts)

<details>
<summary><code>clientAuth(request: AuthenticationExtrasAuthenticate.ClientAuthRequest, options?: RequestOptions): ApiPromise&lt;Auth, AuthenticationExtrasAuthenticate.ClientAuthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method uses the OAuth protocol to authorize a client. For details on OAuth client authorization, see our [Working with Authentication](/api/authentication) guide or the [OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.authenticationExtrasAuthenticate.clientAuth({ body });
  // TODO: Handle 'response' of type Auth
} catch (err) {
  if (err instanceof AuthenticationExtrasAuthenticate.ClientAuthError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OauthAuthorizeClientRequest](src/models/oauth-authorize-client-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Auth](src/models/auth.ts)</code>

**OnError**: <code>[AuthenticationExtrasAuthenticate.ClientAuthError](src/resources/authentication-extras-authenticate.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthenticationExtrasConvert

> Source: [AuthenticationExtrasConvert](src/resources/authentication-extras-convert.ts)

<details>
<summary><code>convertAccessToken(request: AuthenticationExtrasConvert.ConvertAccessTokenRequest, options?: RequestOptions): ApiPromise&lt;Auth, AuthenticationExtrasConvert.ConvertAccessTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method exchanges a legacy Advanced API OAuth 1 token for an API v3 OAuth 2 token.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.authenticationExtrasConvert.convertAccessToken({ body });
  // TODO: Handle 'response' of type Auth
} catch (err) {
  if (
    err instanceof AuthenticationExtrasConvert.ConvertAccessTokenError &&
      err.payload.kind === "authErrorModel"
  ) {
    // TODO: Handle 'err.payload.body' of type AuthErrorModel
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OauthAuthorizeVimeoOauth1Request](src/models/oauth-authorize-vimeo-oauth1-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Auth](src/models/auth.ts)</code>

**OnError**: <code>[AuthenticationExtrasConvert.ConvertAccessTokenError](src/resources/authentication-extras-convert.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthenticationExtrasEssentials

> Source: [AuthenticationExtrasEssentials](src/resources/authentication-extras-essentials.ts)

<details>
<summary><code>deleteToken(options?: RequestOptions): ApiPromise&lt;undefined, AuthenticationExtrasEssentials.DeleteTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method revokes the access token that the requesting app is currently using. The token must be of the OAuth 2 type.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.authenticationExtrasEssentials.deleteToken();
} catch (err) {
  if (err instanceof AuthenticationExtrasEssentials.DeleteTokenError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[AuthenticationExtrasEssentials.DeleteTokenError](src/resources/authentication-extras-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyToken(options?: RequestOptions): ApiPromise&lt;Auth, AuthenticationExtrasEssentials.VerifyTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method verifies that an OAuth 2 access token exists.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.authenticationExtrasEssentials.verifyToken();
  // TODO: Handle 'response' of type Auth
} catch (err) {
  if (err instanceof AuthenticationExtrasEssentials.VerifyTokenError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Auth](src/models/auth.ts)</code>

**OnError**: <code>[AuthenticationExtrasEssentials.VerifyTokenError](src/resources/authentication-extras-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthenticationExtrasExchange

> Source: [AuthenticationExtrasExchange](src/resources/authentication-extras-exchange.ts)

<details>
<summary><code>exchangeAuthCode(request: AuthenticationExtrasExchange.ExchangeAuthCodeRequest, options?: RequestOptions): ApiPromise&lt;Auth, AuthenticationExtrasExchange.ExchangeAuthCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method exchanges an OAuth authorization code for an OAuth access token.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.authenticationExtrasExchange.exchangeAuthCode({ body });
  // TODO: Handle 'response' of type Auth
} catch (err) {
  if (
    err instanceof AuthenticationExtrasExchange.ExchangeAuthCodeError && err.payload.kind === "authErrorModel"
  ) {
    // TODO: Handle 'err.payload.body' of type AuthErrorModel
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OauthAccessTokenRequest](src/models/oauth-access-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Auth](src/models/auth.ts)</code>

**OnError**: <code>[AuthenticationExtrasExchange.ExchangeAuthCodeError](src/resources/authentication-extras-exchange.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CategoriesChannels

> Source: [CategoriesChannels](src/resources/categories-channels.ts)

<details>
<summary><code>getCategoryChannels(request: CategoriesChannels.GetCategoryChannelsRequest, options?: RequestOptions): ApiPromise&lt;ChannelConnection, CategoriesChannels.GetCategoryChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every channel that belongs to the specified category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesChannels.getCategoryChannels({ category });
  // TODO: Handle 'response' of type ChannelConnection
} catch (err) {
  if (err instanceof CategoriesChannels.GetCategoryChannelsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort4](src/models/sort4.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `followers` - Sort the results by number of followers.<br> * `videos` - Sort the results by number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChannelConnection](src/models/channel-connection.ts)</code>

**OnError**: <code>[CategoriesChannels.GetCategoryChannelsError](src/resources/categories-channels.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CategoriesEssentials

> Source: [CategoriesEssentials](src/resources/categories-essentials.ts)

<details>
<summary><code>getCategories(request: CategoriesEssentials.GetCategoriesRequest, options?: RequestOptions): ApiPromise&lt;CategoryConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every available category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesEssentials.getCategories();
  // TODO: Handle 'response' of type CategoryConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort3](src/models/sort3.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `last_video_featured_time` - Sort the results by most recently featured.<br> * `name` - Sort the results by name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CategoryConnection](src/models/category-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategory(request: CategoriesEssentials.GetCategoryRequest, options?: RequestOptions): ApiPromise&lt;Category, CategoriesEssentials.GetCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesEssentials.getCategory({ category });
  // TODO: Handle 'response' of type Category
} catch (err) {
  if (err instanceof CategoriesEssentials.GetCategoryError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Category](src/models/category.ts)</code>

**OnError**: <code>[CategoriesEssentials.GetCategoryError](src/resources/categories-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CategoriesGroups

> Source: [CategoriesGroups](src/resources/categories-groups.ts)

<details>
<summary><code>getCategoryGroups(request: CategoriesGroups.GetCategoryGroupsRequest, options?: RequestOptions): ApiPromise&lt;GroupConnection, CategoriesGroups.GetCategoryGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every group that belongs to the specified category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesGroups.getCategoryGroups({ category });
  // TODO: Handle 'response' of type GroupConnection
} catch (err) {
  if (err instanceof CategoriesGroups.GetCategoryGroupsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort5](src/models/sort5.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `members` - Sort the results by number of members.<br> * `videos` - Sort the results by number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupConnection](src/models/group-connection.ts)</code>

**OnError**: <code>[CategoriesGroups.GetCategoryGroupsError](src/resources/categories-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CategoriesUsers

> Source: [CategoriesUsers](src/resources/categories-users.ts)

<details>
<summary><code>checkIfUserSubscribedToCategory(request: CategoriesUsers.CheckIfUserSubscribedToCategoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the authenticated user follows the specified category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.categoriesUsers.checkIfUserSubscribedToCategory({ category, userId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkIfUserSubscribedToCategoryAlt1(request: CategoriesUsers.CheckIfUserSubscribedToCategoryAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the authenticated user follows the specified category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.categoriesUsers.checkIfUserSubscribedToCategoryAlt1({ category });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategorySubscriptions(request: CategoriesUsers.GetCategorySubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;CategoryConnection, CategoriesUsers.GetCategorySubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every category that the authenticated user follows.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesUsers.getCategorySubscriptions({ userId });
  // TODO: Handle 'response' of type CategoryConnection
} catch (err) {
  if (err instanceof CategoriesUsers.GetCategorySubscriptionsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort24](src/models/sort24.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `name` - Sort the results by name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CategoryConnection](src/models/category-connection.ts)</code>

**OnError**: <code>[CategoriesUsers.GetCategorySubscriptionsError](src/resources/categories-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategorySubscriptionsAlt1(request: CategoriesUsers.GetCategorySubscriptionsAlt1Request, options?: RequestOptions): ApiPromise&lt;CategoryConnection, CategoriesUsers.GetCategorySubscriptionsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every category that the authenticated user follows.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesUsers.getCategorySubscriptionsAlt1();
  // TODO: Handle 'response' of type CategoryConnection
} catch (err) {
  if (err instanceof CategoriesUsers.GetCategorySubscriptionsAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort24](src/models/sort24.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `name` - Sort the results by name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CategoryConnection](src/models/category-connection.ts)</code>

**OnError**: <code>[CategoriesUsers.GetCategorySubscriptionsAlt1Error](src/resources/categories-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subscribeToCategory(request: CategoriesUsers.SubscribeToCategoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to follow the specified category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.categoriesUsers.subscribeToCategory({ category, userId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subscribeToCategoryAlt1(request: CategoriesUsers.SubscribeToCategoryAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to follow the specified category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.categoriesUsers.subscribeToCategoryAlt1({ category });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unsubscribeFromCategory(request: CategoriesUsers.UnsubscribeFromCategoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to stop following the specified category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.categoriesUsers.unsubscribeFromCategory({ category, userId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unsubscribeFromCategoryAlt1(request: CategoriesUsers.UnsubscribeFromCategoryAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to stop following the specified category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.categoriesUsers.unsubscribeFromCategoryAlt1({ category });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CategoriesVideos

> Source: [CategoriesVideos](src/resources/categories-videos.ts)

<details>
<summary><code>checkCategoryForVideo(request: CategoriesVideos.CheckCategoryForVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, CategoriesVideos.CheckCategoryForVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video in the specified category. You can use this method to determine whether the video belongs to the category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesVideos.checkCategoryForVideo({ category, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof CategoriesVideos.CheckCategoryForVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[CategoriesVideos.CheckCategoryForVideoError](src/resources/categories-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategoryVideos(request: CategoriesVideos.GetCategoryVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, CategoriesVideos.GetCategoryVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video that belongs to the specified category.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesVideos.getCategoryVideos({ category });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof CategoriesVideos.GetCategoryVideosError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter](src/models/filter.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `conditional_featured` - Return featured videos.<br> * `embeddable` - Return embeddable videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort6](src/models/sort6.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by date.<br> * `duration` - Sort the results by duration.<br> * `featured` - Sort the results by featured status.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays.<br> * `relevant` - Sort the results by relevance. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[CategoriesVideos.GetCategoryVideosError](src/resources/categories-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoCategories(request: CategoriesVideos.GetVideoCategoriesRequest, options?: RequestOptions): ApiPromise&lt;CategoryConnection, CategoriesVideos.GetVideoCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every category that contains the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesVideos.getVideoCategories({ videoId });
  // TODO: Handle 'response' of type CategoryConnection
} catch (err) {
  if (err instanceof CategoriesVideos.GetVideoCategoriesError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CategoryConnection](src/models/category-connection.ts)</code>

**OnError**: <code>[CategoriesVideos.GetVideoCategoriesError](src/resources/categories-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>suggestVideoCategory(request: CategoriesVideos.SuggestVideoCategoryRequest, options?: RequestOptions): ApiPromise&lt;Category, CategoriesVideos.SuggestVideoCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method sets multiple categories and subcategories for the specified video. Include the categories as a JSON block in the body of the request using the **category** field, like this: `[{ "category": "Tech" }, { "category": "Music" }]`. The authenticated user must have edit access to the video. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesVideos.suggestVideoCategory({ videoId, body });
  // TODO: Handle 'response' of type Category
} catch (err) {
  if (err instanceof CategoriesVideos.SuggestVideoCategoryError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body</code> | <code>[VideosCategoriesRequest](src/models/videos-categories-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Category](src/models/category.ts)</code>

**OnError**: <code>[CategoriesVideos.SuggestVideoCategoryError](src/resources/categories-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ChannelsCategories

> Source: [ChannelsCategories](src/resources/channels-categories.ts)

<details>
<summary><code>addChannelCategories(request: ChannelsCategories.AddChannelCategoriesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsCategories.AddChannelCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds the specified channel to multiple categories.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsCategories.addChannelCategories({ channelId, body });
} catch (err) {
  if (err instanceof ChannelsCategories.AddChannelCategoriesError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>body</code> | <code>[ChannelsCategoriesRequest](src/models/channels-categories-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsCategories.AddChannelCategoriesError](src/resources/channels-categories.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>categorizeChannel(request: ChannelsCategories.CategorizeChannelRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsCategories.CategorizeChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds the specified channel to a single category. The authenticated user must be the owner of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsCategories.categorizeChannel({ category, channelId });
} catch (err) {
  if (err instanceof ChannelsCategories.CategorizeChannelError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsCategories.CategorizeChannelError](src/resources/channels-categories.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteChannelCategory(request: ChannelsCategories.DeleteChannelCategoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsCategories.DeleteChannelCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a channel from the specified category. The authenticated user must be the owner of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsCategories.deleteChannelCategory({ category, channelId });
} catch (err) {
  if (err instanceof ChannelsCategories.DeleteChannelCategoryError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | The name of the category. |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsCategories.DeleteChannelCategoryError](src/resources/channels-categories.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannelCategories(request: ChannelsCategories.GetChannelCategoriesRequest, options?: RequestOptions): ApiPromise&lt;CategoryConnection, ChannelsCategories.GetChannelCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every category to which the specified channel belongs.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsCategories.getChannelCategories({ channelId });
  // TODO: Handle 'response' of type CategoryConnection
} catch (err) {
  if (err instanceof ChannelsCategories.GetChannelCategoriesError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CategoryConnection](src/models/category-connection.ts)</code>

**OnError**: <code>[ChannelsCategories.GetChannelCategoriesError](src/resources/channels-categories.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ChannelsEssentials

> Source: [ChannelsEssentials](src/resources/channels-essentials.ts)

<details>
<summary><code>createChannel(request: ChannelsEssentials.CreateChannelRequest, options?: RequestOptions): ApiPromise&lt;Channel, ChannelsEssentials.CreateChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsEssentials.createChannel({ body });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  if (err instanceof ChannelsEssentials.CreateChannelError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChannelsRequest](src/models/channels-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Channel](src/models/channel.ts)</code>

**OnError**: <code>[ChannelsEssentials.CreateChannelError](src/resources/channels-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteChannel(request: ChannelsEssentials.DeleteChannelRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsEssentials.DeleteChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified channel. The authenticated user must own the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsEssentials.deleteChannel({ channelId });
} catch (err) {
  if (err instanceof ChannelsEssentials.DeleteChannelError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsEssentials.DeleteChannelError](src/resources/channels-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editChannel(request: ChannelsEssentials.EditChannelRequest, options?: RequestOptions): ApiPromise&lt;Channel, ChannelsEssentials.EditChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsEssentials.editChannel({ channelId });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  if (err instanceof ChannelsEssentials.EditChannelError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>body?</code> | <code>[ChannelsRequest1](src/models/channels-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Channel](src/models/channel.ts)</code>

**OnError**: <code>[ChannelsEssentials.EditChannelError](src/resources/channels-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannel(request: ChannelsEssentials.GetChannelRequest, options?: RequestOptions): ApiPromise&lt;Channel, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsEssentials.getChannel({ channelId });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>sizes?</code> | <code>string</code> | The pixel dimensions of the image in `{width}x{height}` format. For more information, see our [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#using-the-sizes-parameter) guide. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Channel](src/models/channel.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannelSubscriptions(request: ChannelsEssentials.GetChannelSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;ChannelConnection, ChannelsEssentials.GetChannelSubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the channels to which the specified user subscribes.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsEssentials.getChannelSubscriptions({ userId });
  // TODO: Handle 'response' of type ChannelConnection
} catch (err) {
  if (err instanceof ChannelsEssentials.GetChannelSubscriptionsError && err.payload.kind === "error304") {
    // TODO: Handle 'err.payload' — the "error304" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter12](src/models/filter12.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `moderated` - Return moderated channels. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort4](src/models/sort4.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date.<br> * `followers` - Sort the results by number of followers.<br> * `videos` - Sort the results by number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChannelConnection](src/models/channel-connection.ts)</code>

**OnError**: <code>[ChannelsEssentials.GetChannelSubscriptionsError](src/resources/channels-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannelSubscriptionsAlt1(request: ChannelsEssentials.GetChannelSubscriptionsAlt1Request, options?: RequestOptions): ApiPromise&lt;ChannelConnection, ChannelsEssentials.GetChannelSubscriptionsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the channels to which the specified user subscribes.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsEssentials.getChannelSubscriptionsAlt1();
  // TODO: Handle 'response' of type ChannelConnection
} catch (err) {
  if (err instanceof ChannelsEssentials.GetChannelSubscriptionsAlt1Error && err.payload.kind === "error304") {
    // TODO: Handle 'err.payload' — the "error304" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter12](src/models/filter12.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `moderated` - Return moderated channels. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort4](src/models/sort4.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date.<br> * `followers` - Sort the results by number of followers.<br> * `videos` - Sort the results by number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChannelConnection](src/models/channel-connection.ts)</code>

**OnError**: <code>[ChannelsEssentials.GetChannelSubscriptionsAlt1Error](src/resources/channels-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannels(request: ChannelsEssentials.GetChannelsRequest, options?: RequestOptions): ApiPromise&lt;ChannelConnection, ChannelsEssentials.GetChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all available channels.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsEssentials.getChannels();
  // TODO: Handle 'response' of type ChannelConnection
} catch (err) {
  if (err instanceof ChannelsEssentials.GetChannelsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter1](src/models/filter1.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `featured` - Return featured channels. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort7](src/models/sort7.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date.<br> * `default` - Sort the results by creation date.<br> * `followers` - Sort the results by number of followers.<br> * `relevant` - Sort the results by relevance. This option is available for search queries only.<br> * `videos` - Sort the results by number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChannelConnection](src/models/channel-connection.ts)</code>

**OnError**: <code>[ChannelsEssentials.GetChannelsError](src/resources/channels-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ChannelsModerators

> Source: [ChannelsModerators](src/resources/channels-moderators.ts)

<details>
<summary><code>addChannelModerator(request: ChannelsModerators.AddChannelModeratorRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsModerators.AddChannelModeratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a single user as a moderator to the specified channel. The authenticated user must be a follower of the requested user to add them as a channel moderator.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsModerators.addChannelModerator({ channelId, userId });
} catch (err) {
  if (err instanceof ChannelsModerators.AddChannelModeratorError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsModerators.AddChannelModeratorError](src/resources/channels-moderators.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addChannelModerators(request: ChannelsModerators.AddChannelModeratorsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsModerators.AddChannelModeratorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds multiple users as moderators to the specified channel. Include the users by their URI as a JSON array in the body of the request using the **user_uri** field, like this: `[{ "user_uri": "/users/1234" }, { "user_uri": "/users/1235" }]`. The authenticated user must be a follower of a requested user to add this person as a moderator. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsModerators.addChannelModerators({ channelId });
} catch (err) {
  if (err instanceof ChannelsModerators.AddChannelModeratorsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsModerators.AddChannelModeratorsError](src/resources/channels-moderators.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannelModerator(request: ChannelsModerators.GetChannelModeratorRequest, options?: RequestOptions): ApiPromise&lt;User, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single moderator of the specified channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsModerators.getChannelModerator({ channelId, userId });
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannelModerators(request: ChannelsModerators.GetChannelModeratorsRequest, options?: RequestOptions): ApiPromise&lt;UserConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every moderator of the specified channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsModerators.getChannelModerators({ channelId });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date added. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeChannelModerator(request: ChannelsModerators.RemoveChannelModeratorRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsModerators.RemoveChannelModeratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a single moderator from the specified channel. The authenticated user must be the owner of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsModerators.removeChannelModerator({ channelId, userId });
} catch (err) {
  if (err instanceof ChannelsModerators.RemoveChannelModeratorError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsModerators.RemoveChannelModeratorError](src/resources/channels-moderators.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeChannelModerators(request: ChannelsModerators.RemoveChannelModeratorsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsModerators.RemoveChannelModeratorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes multiple moderators from the specified channel. The authenticated user must be the owner of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsModerators.removeChannelModerators({ channelId, body });
} catch (err) {
  if (err instanceof ChannelsModerators.RemoveChannelModeratorsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>body</code> | <code>[ChannelsModeratorsRequest](src/models/channels-moderators-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsModerators.RemoveChannelModeratorsError](src/resources/channels-moderators.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceChannelModerators(request: ChannelsModerators.ReplaceChannelModeratorsRequest, options?: RequestOptions): ApiPromise&lt;User[], ChannelsModerators.ReplaceChannelModeratorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method replaces the current list of channel moderators with a new list. The authenticated user must be the owner of the channel and a follower of each requested user to add them as a channel moderator.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsModerators.replaceChannelModerators({ channelId, body });
  // TODO: Handle 'response' of type User[]
} catch (err) {
  if (err instanceof ChannelsModerators.ReplaceChannelModeratorsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>body</code> | <code>[ChannelsModeratorsRequest1](src/models/channels-moderators-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)[]</code>

**OnError**: <code>[ChannelsModerators.ReplaceChannelModeratorsError](src/resources/channels-moderators.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ChannelsPrivateChannelMembers

> Source: [ChannelsPrivateChannelMembers](src/resources/channels-private-channel-members.ts)

<details>
<summary><code>deleteChannelPrivacyUser(request: ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method prevents a single user from being able to access the specified private channel. The authenticated user must be the owner of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsPrivateChannelMembers.deleteChannelPrivacyUser({ channelId, userId });
} catch (err) {
  if (
    err instanceof ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserError](src/resources/channels-private-channel-members.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannelPrivacyUsers(request: ChannelsPrivateChannelMembers.GetChannelPrivacyUsersRequest, options?: RequestOptions): ApiPromise&lt;UserConnection, ChannelsPrivateChannelMembers.GetChannelPrivacyUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the users who have access to the specified private channel. The authenticated user must be the owner of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsPrivateChannelMembers.getChannelPrivacyUsers({ channelId });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  if (
    err instanceof ChannelsPrivateChannelMembers.GetChannelPrivacyUsersError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[ChannelsPrivateChannelMembers.GetChannelPrivacyUsersError](src/resources/channels-private-channel-members.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setChannelPrivacyUser(request: ChannelsPrivateChannelMembers.SetChannelPrivacyUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsPrivateChannelMembers.SetChannelPrivacyUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method gives a single user access to the specified private channel. The authenticated user must be the owner of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsPrivateChannelMembers.setChannelPrivacyUser({ channelId, userId });
} catch (err) {
  if (
    err instanceof ChannelsPrivateChannelMembers.SetChannelPrivacyUserError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsPrivateChannelMembers.SetChannelPrivacyUserError](src/resources/channels-private-channel-members.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setChannelPrivacyUsers(request: ChannelsPrivateChannelMembers.SetChannelPrivacyUsersRequest, options?: RequestOptions): ApiPromise&lt;User[], ChannelsPrivateChannelMembers.SetChannelPrivacyUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method gives multiple users access to the specified private channel. The authenticated user must be the owner of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsPrivateChannelMembers.setChannelPrivacyUsers({ channelId, body });
  // TODO: Handle 'response' of type User[]
} catch (err) {
  if (
    err instanceof ChannelsPrivateChannelMembers.SetChannelPrivacyUsersError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>body</code> | <code>[ChannelsPrivacyUsersRequest](src/models/channels-privacy-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)[]</code>

**OnError**: <code>[ChannelsPrivateChannelMembers.SetChannelPrivacyUsersError](src/resources/channels-private-channel-members.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ChannelsSubscriptionsAndSubscribers

> Source: [ChannelsSubscriptionsAndSubscribers](src/resources/channels-subscriptions-and-subscribers.ts)

<details>
<summary><code>checkIfUserSubscribedToChannel(request: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the specified user is a follower of a particular channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsSubscriptionsAndSubscribers.checkIfUserSubscribedToChannel({ channelId, userId });
} catch (err) {
  if (
    err instanceof ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelError &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelError](src/resources/channels-subscriptions-and-subscribers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkIfUserSubscribedToChannelAlt1(request: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the specified user is a follower of a particular channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsSubscriptionsAndSubscribers.checkIfUserSubscribedToChannelAlt1({ channelId });
} catch (err) {
  if (
    err instanceof ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Error &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Error](src/resources/channels-subscriptions-and-subscribers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannelSubscribers(request: ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersRequest, options?: RequestOptions): ApiPromise&lt;UserConnection, ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every follower of the specified channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsSubscriptionsAndSubscribers.getChannelSubscribers({
    channelId,
    filter,
  });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  if (
    err instanceof ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersError &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>filter</code> | <code>[Filter2](src/models/filter2.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `moderators` - Return moderators. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by follow date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersError](src/resources/channels-subscriptions-and-subscribers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subscribeToChannel(request: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsSubscriptionsAndSubscribers.SubscribeToChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method subscribes the authenticated user to the specified channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsSubscriptionsAndSubscribers.subscribeToChannel({ channelId, userId });
} catch (err) {
  if (
    err instanceof ChannelsSubscriptionsAndSubscribers.SubscribeToChannelError &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsSubscriptionsAndSubscribers.SubscribeToChannelError](src/resources/channels-subscriptions-and-subscribers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subscribeToChannelAlt1(request: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method subscribes the authenticated user to the specified channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsSubscriptionsAndSubscribers.subscribeToChannelAlt1({ channelId });
} catch (err) {
  if (
    err instanceof ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Error &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Error](src/resources/channels-subscriptions-and-subscribers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unsubscribeFromChannel(request: ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method unsubscribes the authenticated user from the specified channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsSubscriptionsAndSubscribers.unsubscribeFromChannel({ channelId, userId });
} catch (err) {
  if (
    err instanceof ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelError &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelError](src/resources/channels-subscriptions-and-subscribers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unsubscribeFromChannelAlt1(request: ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method unsubscribes the authenticated user from the specified channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsSubscriptionsAndSubscribers.unsubscribeFromChannelAlt1({ channelId });
} catch (err) {
  if (
    err instanceof ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Error &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Error](src/resources/channels-subscriptions-and-subscribers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ChannelsTags

> Source: [ChannelsTags](src/resources/channels-tags.ts)

<details>
<summary><code>addChannelTag(request: ChannelsTags.AddChannelTagRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsTags.AddChannelTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a single tag to the specified channel. The authenticated user must be the owner of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsTags.addChannelTag({ channelId, word });
} catch (err) {
  if (err instanceof ChannelsTags.AddChannelTagError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>word</code> | <code>string</code> | The word to use as the tag. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsTags.AddChannelTagError](src/resources/channels-tags.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addTagsToChannel(request: ChannelsTags.AddTagsToChannelRequest, options?: RequestOptions): ApiPromise&lt;Tag[], ChannelsTags.AddTagsToChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds multiple tags to the specified channel. Include the tags as a JSON array in the body of the request using the **tag** field, like this: `[{ "tag": "funny" }, { "tag": "concert" }]`. The authenticated user must be the owner of the channel. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTags.addTagsToChannel({ channelId, body });
  // TODO: Handle 'response' of type Tag[]
} catch (err) {
  if (err instanceof ChannelsTags.AddTagsToChannelError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>body</code> | <code>[ChannelsTagsRequest](src/models/channels-tags-request.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tag](src/models/tag.ts)[]</code>

**OnError**: <code>[ChannelsTags.AddTagsToChannelError](src/resources/channels-tags.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkIfChannelHasTag(request: ChannelsTags.CheckIfChannelHasTagRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsTags.CheckIfChannelHasTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether a tag has been added to the specified channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsTags.checkIfChannelHasTag({ channelId, word });
} catch (err) {
  if (err instanceof ChannelsTags.CheckIfChannelHasTagError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>word</code> | <code>string</code> | The word to use as the tag. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsTags.CheckIfChannelHasTagError](src/resources/channels-tags.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTagFromChannel(request: ChannelsTags.DeleteTagFromChannelRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsTags.DeleteTagFromChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a single tag from the specified channel. The authenticated user must be the owner of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsTags.deleteTagFromChannel({ channelId, word });
} catch (err) {
  if (err instanceof ChannelsTags.DeleteTagFromChannelError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>word</code> | <code>string</code> | The word to use as the tag. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsTags.DeleteTagFromChannelError](src/resources/channels-tags.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannelTags(request: ChannelsTags.GetChannelTagsRequest, options?: RequestOptions): ApiPromise&lt;TagConnection, ChannelsTags.GetChannelTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every tag that has been added to the specified channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsTags.getChannelTags({ channelId });
  // TODO: Handle 'response' of type TagConnection
} catch (err) {
  if (err instanceof ChannelsTags.GetChannelTagsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagConnection](src/models/tag-connection.ts)</code>

**OnError**: <code>[ChannelsTags.GetChannelTagsError](src/resources/channels-tags.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ChannelsVideos

> Source: [ChannelsVideos](src/resources/channels-videos.ts)

<details>
<summary><code>addVideoToChannel(request: ChannelsVideos.AddVideoToChannelRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsVideos.AddVideoToChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a single video to the specified channel. The authenticated user must be a moderator of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsVideos.addVideoToChannel({ channelId, videoId });
} catch (err) {
  if (err instanceof ChannelsVideos.AddVideoToChannelError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsVideos.AddVideoToChannelError](src/resources/channels-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideosToChannel(request: ChannelsVideos.AddVideosToChannelRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsVideos.AddVideosToChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds multiple videos to the specified channel. The authenticated user must be a moderator of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsVideos.addVideosToChannel({ channelId, body });
} catch (err) {
  if (err instanceof ChannelsVideos.AddVideosToChannelError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>body</code> | <code>[ChannelsVideosRequest1](src/models/channels-videos-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsVideos.AddVideosToChannelError](src/resources/channels-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoFromChannel(request: ChannelsVideos.DeleteVideoFromChannelRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsVideos.DeleteVideoFromChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a single video from the specified channel. The authenticated user must be a moderator of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsVideos.deleteVideoFromChannel({ channelId, videoId });
} catch (err) {
  if (err instanceof ChannelsVideos.DeleteVideoFromChannelError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsVideos.DeleteVideoFromChannelError](src/resources/channels-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAvailableVideoChannels(request: ChannelsVideos.GetAvailableVideoChannelsRequest, options?: RequestOptions): ApiPromise&lt;ChannelConnection, ChannelsVideos.GetAvailableVideoChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every channel to which the authenticated user can add or remove the specified video. The authenticated user must be a moderator of the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsVideos.getAvailableVideoChannels({ videoId });
  // TODO: Handle 'response' of type ChannelConnection
} catch (err) {
  if (err instanceof ChannelsVideos.GetAvailableVideoChannelsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChannelConnection](src/models/channel-connection.ts)</code>

**OnError**: <code>[ChannelsVideos.GetAvailableVideoChannelsError](src/resources/channels-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannelVideo(request: ChannelsVideos.GetChannelVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, ChannelsVideos.GetChannelVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video in the specified channel. You can use it to determine whether the video is in the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsVideos.getChannelVideo({ channelId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof ChannelsVideos.GetChannelVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[ChannelsVideos.GetChannelVideoError](src/resources/channels-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannelVideos(request: ChannelsVideos.GetChannelVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, ChannelsVideos.GetChannelVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video in the specified channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelsVideos.getChannelVideos({ channelId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof ChannelsVideos.GetChannelVideosError && err.payload.kind === "error304") {
    // TODO: Handle 'err.payload' — the "error304" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>containingUri?</code> | <code>string</code> | The page that contains the video URI. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sizes?</code> | <code>string</code> | The pixel dimensions of the image in `{width}x{height}` format. For more information, see our [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#using-the-sizes-parameter) guide. |
| <code>sort?</code> | <code>[Sort10](src/models/sort10.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `added` - Sort the results by date added.<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by creation date.<br> * `default` - Use the default sorting method.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `manual` - Sort the results as the user has arranged them.<br> * `modified_time` - Sort the results by last modification.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[ChannelsVideos.GetChannelVideosError](src/resources/channels-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeVideosFromChannel(request: ChannelsVideos.RemoveVideosFromChannelRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChannelsVideos.RemoveVideosFromChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes multiple videos from the specified channel. Include the videos by their URI as a JSON block in the body of the request using the **video_uri** field, like this: `[{ "video_uri": "/videos/1234" }, { "video_uri": "/videos/1235" }]`. The authenticated user must be a moderator of the channel. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.channelsVideos.removeVideosFromChannel({ channelId, body });
} catch (err) {
  if (err instanceof ChannelsVideos.RemoveVideosFromChannelError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>body</code> | <code>[ChannelsVideosRequest](src/models/channels-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ChannelsVideos.RemoveVideosFromChannelError](src/resources/channels-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EmbedPresetsCustomLogos

> Source: [EmbedPresetsCustomLogos](src/resources/embed-presets-custom-logos.ts)

<details>
<summary><code>createCustomLogo(request: EmbedPresetsCustomLogos.CreateCustomLogoRequest, options?: RequestOptions): ApiPromise&lt;Picture, EmbedPresetsCustomLogos.CreateCustomLogoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a custom logo representing the authenticated user for display in the embedded player. Be sure to use this method in the context of the multi-step upload procedure described in our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail) guide. This method represents Step 2 of the procedure.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsCustomLogos.createCustomLogo({ userId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof EmbedPresetsCustomLogos.CreateCustomLogoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[EmbedPresetsCustomLogos.CreateCustomLogoError](src/resources/embed-presets-custom-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomLogoAlt1(options?: RequestOptions): ApiPromise&lt;Picture, EmbedPresetsCustomLogos.CreateCustomLogoAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a custom logo representing the authenticated user for display in the embedded player. Be sure to use this method in the context of the multi-step upload procedure described in our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail) guide. This method represents Step 2 of the procedure.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsCustomLogos.createCustomLogoAlt1();
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (
    err instanceof EmbedPresetsCustomLogos.CreateCustomLogoAlt1Error && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[EmbedPresetsCustomLogos.CreateCustomLogoAlt1Error](src/resources/embed-presets-custom-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomLogo(request: EmbedPresetsCustomLogos.DeleteCustomLogoRequest, options?: RequestOptions): ApiPromise&lt;undefined, EmbedPresetsCustomLogos.DeleteCustomLogoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified custom logo belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.embedPresetsCustomLogos.deleteCustomLogo({ logoId, userId });
} catch (err) {
  if (err instanceof EmbedPresetsCustomLogos.DeleteCustomLogoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>logoId</code> | <code>number</code> | The ID of the custom logo. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[EmbedPresetsCustomLogos.DeleteCustomLogoError](src/resources/embed-presets-custom-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomLogoAlt1(request: EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified custom logo belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.embedPresetsCustomLogos.deleteCustomLogoAlt1({ logoId });
} catch (err) {
  if (
    err instanceof EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Error && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>logoId</code> | <code>number</code> | The ID of the custom logo. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Error](src/resources/embed-presets-custom-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomLogo(request: EmbedPresetsCustomLogos.GetCustomLogoRequest, options?: RequestOptions): ApiPromise&lt;Picture, EmbedPresetsCustomLogos.GetCustomLogoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single custom logo belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsCustomLogos.getCustomLogo({ logoId, userId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof EmbedPresetsCustomLogos.GetCustomLogoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>logoId</code> | <code>number</code> | The ID of the custom logo. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[EmbedPresetsCustomLogos.GetCustomLogoError](src/resources/embed-presets-custom-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomLogoAlt1(request: EmbedPresetsCustomLogos.GetCustomLogoAlt1Request, options?: RequestOptions): ApiPromise&lt;Picture, EmbedPresetsCustomLogos.GetCustomLogoAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single custom logo belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsCustomLogos.getCustomLogoAlt1({ logoId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof EmbedPresetsCustomLogos.GetCustomLogoAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>logoId</code> | <code>number</code> | The ID of the custom logo. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[EmbedPresetsCustomLogos.GetCustomLogoAlt1Error](src/resources/embed-presets-custom-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomLogos(request: EmbedPresetsCustomLogos.GetCustomLogosRequest, options?: RequestOptions): ApiPromise&lt;PictureConnection, EmbedPresetsCustomLogos.GetCustomLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every custom logo that belongs to the authenticated user or team owner.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsCustomLogos.getCustomLogos({ userId });
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  if (err instanceof EmbedPresetsCustomLogos.GetCustomLogosError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sizes?</code> | <code>string</code> | The pixel dimensions of the image in `{width}x{height}` format. For more information, see our [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#using-the-sizes-parameter) guide. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[EmbedPresetsCustomLogos.GetCustomLogosError](src/resources/embed-presets-custom-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomLogosAlt1(request: EmbedPresetsCustomLogos.GetCustomLogosAlt1Request, options?: RequestOptions): ApiPromise&lt;PictureConnection, EmbedPresetsCustomLogos.GetCustomLogosAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every custom logo that belongs to the authenticated user or team owner.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsCustomLogos.getCustomLogosAlt1();
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  if (err instanceof EmbedPresetsCustomLogos.GetCustomLogosAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sizes?</code> | <code>string</code> | The pixel dimensions of the image in `{width}x{height}` format. For more information, see our [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#using-the-sizes-parameter) guide. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[EmbedPresetsCustomLogos.GetCustomLogosAlt1Error](src/resources/embed-presets-custom-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EmbedPresetsEssentials

> Source: [EmbedPresetsEssentials](src/resources/embed-presets-essentials.ts)

<details>
<summary><code>createEmbedPresets(request: EmbedPresetsEssentials.CreateEmbedPresetsRequest, options?: RequestOptions): ApiPromise&lt;Preset, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates an embed preset.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsEssentials.createEmbedPresets({ userId });
  // TODO: Handle 'response' of type Preset
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersPresetsRequest](src/models/users-presets-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Preset](src/models/preset.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEmbedPresetsAlt1(request: EmbedPresetsEssentials.CreateEmbedPresetsAlt1Request, options?: RequestOptions): ApiPromise&lt;Preset, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates an embed preset.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsEssentials.createEmbedPresetsAlt1();
  // TODO: Handle 'response' of type Preset
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[MePresetsRequest](src/models/me-presets-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Preset](src/models/preset.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEmbedPreset(request: EmbedPresetsEssentials.DeleteEmbedPresetRequest, options?: RequestOptions): ApiPromise&lt;undefined, EmbedPresetsEssentials.DeleteEmbedPresetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified embed preset. The authenticated user must be the owner of the preset.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.embedPresetsEssentials.deleteEmbedPreset({ presetId, userId });
} catch (err) {
  if (err instanceof EmbedPresetsEssentials.DeleteEmbedPresetError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the embed preset. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[EmbedPresetsEssentials.DeleteEmbedPresetError](src/resources/embed-presets-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEmbedPresetAlt1(request: EmbedPresetsEssentials.DeleteEmbedPresetAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, EmbedPresetsEssentials.DeleteEmbedPresetAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified embed preset. The authenticated user must be the owner of the preset.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.embedPresetsEssentials.deleteEmbedPresetAlt1({ presetId });
} catch (err) {
  if (
    err instanceof EmbedPresetsEssentials.DeleteEmbedPresetAlt1Error && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the embed preset. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[EmbedPresetsEssentials.DeleteEmbedPresetAlt1Error](src/resources/embed-presets-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editEmbedPreset(request: EmbedPresetsEssentials.EditEmbedPresetRequest, options?: RequestOptions): ApiPromise&lt;Preset, EmbedPresetsEssentials.EditEmbedPresetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified embed preset. The authenticated user must be the owner of the preset.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsEssentials.editEmbedPreset({ presetId, userId });
  // TODO: Handle 'response' of type Preset
} catch (err) {
  if (err instanceof EmbedPresetsEssentials.EditEmbedPresetError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the preset. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersPresetsRequest1](src/models/users-presets-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Preset](src/models/preset.ts)</code>

**OnError**: <code>[EmbedPresetsEssentials.EditEmbedPresetError](src/resources/embed-presets-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editEmbedPresetAlt1(request: EmbedPresetsEssentials.EditEmbedPresetAlt1Request, options?: RequestOptions): ApiPromise&lt;Preset, EmbedPresetsEssentials.EditEmbedPresetAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified embed preset. The authenticated user must be the owner of the preset.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsEssentials.editEmbedPresetAlt1({ presetId });
  // TODO: Handle 'response' of type Preset
} catch (err) {
  if (err instanceof EmbedPresetsEssentials.EditEmbedPresetAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the preset. |
| <code>body?</code> | <code>[MePresetsRequest1](src/models/me-presets-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Preset](src/models/preset.ts)</code>

**OnError**: <code>[EmbedPresetsEssentials.EditEmbedPresetAlt1Error](src/resources/embed-presets-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEmbedPreset(request: EmbedPresetsEssentials.GetEmbedPresetRequest, options?: RequestOptions): ApiPromise&lt;Preset, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single embed preset. The authenticated user must be the owner of the preset.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsEssentials.getEmbedPreset({ presetId, userId });
  // TODO: Handle 'response' of type Preset
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the preset. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Preset](src/models/preset.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEmbedPresetAlt1(request: EmbedPresetsEssentials.GetEmbedPresetAlt1Request, options?: RequestOptions): ApiPromise&lt;Preset, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single embed preset. The authenticated user must be the owner of the preset.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsEssentials.getEmbedPresetAlt1({ presetId });
  // TODO: Handle 'response' of type Preset
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the preset. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Preset](src/models/preset.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEmbedPresets(request: EmbedPresetsEssentials.GetEmbedPresetsRequest, options?: RequestOptions): ApiPromise&lt;PresetConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every embed preset that belongs to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsEssentials.getEmbedPresets({ userId });
  // TODO: Handle 'response' of type PresetConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PresetConnection](src/models/preset-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEmbedPresetsAlt1(request: EmbedPresetsEssentials.GetEmbedPresetsAlt1Request, options?: RequestOptions): ApiPromise&lt;PresetConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every embed preset that belongs to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsEssentials.getEmbedPresetsAlt1();
  // TODO: Handle 'response' of type PresetConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PresetConnection](src/models/preset-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EmbedPresetsFolders

> Source: [EmbedPresetsFolders](src/resources/embed-presets-folders.ts)

<details>
<summary><code>deleteFolderEmbedPreset(request: EmbedPresetsFolders.DeleteFolderEmbedPresetRequest, options?: RequestOptions): ApiPromise&lt;undefined, EmbedPresetsFolders.DeleteFolderEmbedPresetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the specified embed preset from a folder. The authenticated user must be either the owner of the folder or a team user with the contributor or admin role.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.embedPresetsFolders.deleteFolderEmbedPreset({ presetId, projectId, userId });
} catch (err) {
  if (err instanceof EmbedPresetsFolders.DeleteFolderEmbedPresetError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the embed preset. |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[EmbedPresetsFolders.DeleteFolderEmbedPresetError](src/resources/embed-presets-folders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EmbedPresetsTimelineEvents

> Source: [EmbedPresetsTimelineEvents](src/resources/embed-presets-timeline-events.ts)

<details>
<summary><code>createVideoCustomLogo(request: EmbedPresetsTimelineEvents.CreateVideoCustomLogoRequest, options?: RequestOptions): ApiPromise&lt;Picture, EmbedPresetsTimelineEvents.CreateVideoCustomLogoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a timeline event thumbnail to the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsTimelineEvents.createVideoCustomLogo({ videoId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (
    err instanceof EmbedPresetsTimelineEvents.CreateVideoCustomLogoError && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[EmbedPresetsTimelineEvents.CreateVideoCustomLogoError](src/resources/embed-presets-timeline-events.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoCustomLogo(request: EmbedPresetsTimelineEvents.GetVideoCustomLogoRequest, options?: RequestOptions): ApiPromise&lt;Picture, EmbedPresetsTimelineEvents.GetVideoCustomLogoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single timeline event thumbnail that belongs to the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsTimelineEvents.getVideoCustomLogo({ thumbnailId, videoId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (
    err instanceof EmbedPresetsTimelineEvents.GetVideoCustomLogoError && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>thumbnailId</code> | <code>number</code> | The ID of the timeline event thumbnail. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[EmbedPresetsTimelineEvents.GetVideoCustomLogoError](src/resources/embed-presets-timeline-events.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EmbedPresetsVideos

> Source: [EmbedPresetsVideos](src/resources/embed-presets-videos.ts)

<details>
<summary><code>addVideoEmbedPreset(request: EmbedPresetsVideos.AddVideoEmbedPresetRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds an embed preset to the specified video. The authenticated user must either be the owner of the video or a team user with the contributor or admin role.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.embedPresetsVideos.addVideoEmbedPreset({ presetId, videoId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the embed preset. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoEmbedPreset(request: EmbedPresetsVideos.DeleteVideoEmbedPresetRequest, options?: RequestOptions): ApiPromise&lt;undefined, EmbedPresetsVideos.DeleteVideoEmbedPresetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the specified embed preset from a video. The authenticated user must either be the owner of the video or a team user with the contributor or admin role.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.embedPresetsVideos.deleteVideoEmbedPreset({ presetId, videoId });
} catch (err) {
  if (err instanceof EmbedPresetsVideos.DeleteVideoEmbedPresetError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the embed preset. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[EmbedPresetsVideos.DeleteVideoEmbedPresetError](src/resources/embed-presets-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEmbedPresetVideos(request: EmbedPresetsVideos.GetEmbedPresetVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video to which the specified embed preset has been added. The authenticated user must be the owner of the videos.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsVideos.getEmbedPresetVideos({ presetId, userId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the embed preset. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEmbedPresetVideosAlt1(request: EmbedPresetsVideos.GetEmbedPresetVideosAlt1Request, options?: RequestOptions): ApiPromise&lt;VideoConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video to which the specified embed preset has been added. The authenticated user must be the owner of the videos.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedPresetsVideos.getEmbedPresetVideosAlt1({ presetId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the embed preset. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoEmbedPreset(request: EmbedPresetsVideos.GetVideoEmbedPresetRequest, options?: RequestOptions): ApiPromise&lt;undefined, EmbedPresetsVideos.GetVideoEmbedPresetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether a video has the specified embed preset.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.embedPresetsVideos.getVideoEmbedPreset({ presetId, videoId });
} catch (err) {
  if (err instanceof EmbedPresetsVideos.GetVideoEmbedPresetError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>presetId</code> | <code>number</code> | The ID of the embed preset. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[EmbedPresetsVideos.GetVideoEmbedPresetError](src/resources/embed-presets-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FoldersEssentials

> Source: [FoldersEssentials](src/resources/folders-essentials.ts)

<details>
<summary><code>createProject(request: FoldersEssentials.CreateProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, FoldersEssentials.CreateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new folder for the authenticated user. By default, this method creates a top-level folder. To create a subfolder — that is, to place the new folder inside an existing folder — specify the parent folder by URI with the **parent_folder_uri** parameter in the body of the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.foldersEssentials.createProject({ userId, body });
  // TODO: Handle 'response' of type Project
} catch (err) {
  if (err instanceof FoldersEssentials.CreateProjectError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersProjectsRequest](src/models/users-projects-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/models/project.ts)</code>

**OnError**: <code>[FoldersEssentials.CreateProjectError](src/resources/folders-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProjectAlt1(request: FoldersEssentials.CreateProjectAlt1Request, options?: RequestOptions): ApiPromise&lt;Project, FoldersEssentials.CreateProjectAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new folder for the authenticated user. By default, this method creates a top-level folder. To create a subfolder — that is, to place the new folder inside an existing folder — specify the parent folder by URI with the **parent_folder_uri** parameter in the body of the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.foldersEssentials.createProjectAlt1({ body });
  // TODO: Handle 'response' of type Project
} catch (err) {
  if (err instanceof FoldersEssentials.CreateProjectAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MeProjectsRequest](src/models/me-projects-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/models/project.ts)</code>

**OnError**: <code>[FoldersEssentials.CreateProjectAlt1Error](src/resources/folders-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProject(request: FoldersEssentials.DeleteProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, FoldersEssentials.DeleteProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified folder and optionally also the videos that it contains. The authenticated user must be the owner of the folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersEssentials.deleteProject({ projectId, userId });
} catch (err) {
  if (err instanceof FoldersEssentials.DeleteProjectError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersProjectsRequest1](src/models/users-projects-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[FoldersEssentials.DeleteProjectError](src/resources/folders-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProjectAlt1(request: FoldersEssentials.DeleteProjectAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, FoldersEssentials.DeleteProjectAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified folder and optionally also the videos that it contains. The authenticated user must be the owner of the folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersEssentials.deleteProjectAlt1({ projectId });
} catch (err) {
  if (err instanceof FoldersEssentials.DeleteProjectAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>body?</code> | <code>[MeProjectsRequest1](src/models/me-projects-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[FoldersEssentials.DeleteProjectAlt1Error](src/resources/folders-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editProject(request: FoldersEssentials.EditProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, FoldersEssentials.EditProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified folder. The authenticated user must be the owner of the folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.foldersEssentials.editProject({ projectId, userId, body });
  // TODO: Handle 'response' of type Project
} catch (err) {
  if (err instanceof FoldersEssentials.EditProjectError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersProjectsRequest2](src/models/users-projects-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/models/project.ts)</code>

**OnError**: <code>[FoldersEssentials.EditProjectError](src/resources/folders-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editProjectAlt1(request: FoldersEssentials.EditProjectAlt1Request, options?: RequestOptions): ApiPromise&lt;Project, FoldersEssentials.EditProjectAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified folder. The authenticated user must be the owner of the folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.foldersEssentials.editProjectAlt1({ projectId, body });
  // TODO: Handle 'response' of type Project
} catch (err) {
  if (err instanceof FoldersEssentials.EditProjectAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>body</code> | <code>[MeProjectsRequest2](src/models/me-projects-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/models/project.ts)</code>

**OnError**: <code>[FoldersEssentials.EditProjectAlt1Error](src/resources/folders-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPrivateToMeFolder(request: FoldersEssentials.GetPrivateToMeFolderRequest, options?: RequestOptions): ApiPromise&lt;Project, FoldersEssentials.GetPrivateToMeFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified private-to-me folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.foldersEssentials.getPrivateToMeFolder({ ownerId });
  // TODO: Handle 'response' of type Project
} catch (err) {
  if (err instanceof FoldersEssentials.GetPrivateToMeFolderError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ownerId</code> | <code>number</code> | The ID of the owner. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/models/project.ts)</code>

**OnError**: <code>[FoldersEssentials.GetPrivateToMeFolderError](src/resources/folders-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProject(request: FoldersEssentials.GetProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, FoldersEssentials.GetProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single folder belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.foldersEssentials.getProject({ projectId, userId });
  // TODO: Handle 'response' of type Project
} catch (err) {
  if (err instanceof FoldersEssentials.GetProjectError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/models/project.ts)</code>

**OnError**: <code>[FoldersEssentials.GetProjectError](src/resources/folders-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectAlt1(request: FoldersEssentials.GetProjectAlt1Request, options?: RequestOptions): ApiPromise&lt;Project, FoldersEssentials.GetProjectAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single folder belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.foldersEssentials.getProjectAlt1({ projectId });
  // TODO: Handle 'response' of type Project
} catch (err) {
  if (err instanceof FoldersEssentials.GetProjectAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/models/project.ts)</code>

**OnError**: <code>[FoldersEssentials.GetProjectAlt1Error](src/resources/folders-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjects(request: FoldersEssentials.GetProjectsRequest, options?: RequestOptions): ApiPromise&lt;ProjectConnection, FoldersEssentials.GetProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the folders belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.foldersEssentials.getProjects({ userId });
  // TODO: Handle 'response' of type ProjectConnection
} catch (err) {
  if (err instanceof FoldersEssentials.GetProjectsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort36](src/models/sort36.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `date` - Sort the results by date.<br> * `default` - Use the default sort order.<br> * `modified_time` - Sort the results by last modification.<br> * `name` - Sort the results by name.<br> * `pinned_on` - Sort the results by pinned timestamp. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectConnection](src/models/project-connection.ts)</code>

**OnError**: <code>[FoldersEssentials.GetProjectsError](src/resources/folders-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectsAlt1(request: FoldersEssentials.GetProjectsAlt1Request, options?: RequestOptions): ApiPromise&lt;ProjectConnection, FoldersEssentials.GetProjectsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the folders belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.foldersEssentials.getProjectsAlt1();
  // TODO: Handle 'response' of type ProjectConnection
} catch (err) {
  if (err instanceof FoldersEssentials.GetProjectsAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort36](src/models/sort36.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `date` - Sort the results by date.<br> * `default` - Use the default sort order.<br> * `modified_time` - Sort the results by last modification.<br> * `name` - Sort the results by name.<br> * `pinned_on` - Sort the results by pinned timestamp. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectConnection](src/models/project-connection.ts)</code>

**OnError**: <code>[FoldersEssentials.GetProjectsAlt1Error](src/resources/folders-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FoldersItems

> Source: [FoldersItems](src/resources/folders-items.ts)

<details>
<summary><code>deleteFolderItemsAlt1(request: FoldersItems.DeleteFolderItemsAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, FoldersItems.DeleteFolderItemsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes all items from the specified folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersItems.deleteFolderItemsAlt1({ projectId, uris });
} catch (err) {
  if (err instanceof FoldersItems.DeleteFolderItemsAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>uris</code> | <code>string</code> | A comma-separated list of video, event, or folder URIs to remove. Folder URIs are moved to the library root (with their contents). |
| <code>sendToRecentlyDeleted?</code> | <code>boolean</code> | When `should_delete_items` is true, send deleted clips to Recently Deleted purgatory (`TYPE_RECENTLY_DELETED`) instead of legacy user delete purgatory. |
| <code>shouldDeleteItems?</code> | <code>boolean</code> | Whether to delete the items when removing them from the folder. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[FoldersItems.DeleteFolderItemsAlt1Error](src/resources/folders-items.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFolderItems(request: FoldersItems.GetFolderItemsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every item that belongs to the specified folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersItems.getFolderItems({ projectId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>clipPrivacyFilters?</code> | <code>string</code> | A comma-separated list of video privacy types to filter on. The accepted values are `private` for when only the creator and users with access grants can play the video; `public` for when anyone can play the video; `password` for when only users with the correct password can play the video; `hide_from_vimeo` for when the video is private but embeddable anywhere; and `unlisted` for when only users with the link can play the video. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter21](src/models/filter21.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `folder` - Filter the results by folder.<br> * `live_event` - Filter the results by event.<br> * `video` - Filter the results by video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort37](src/models/sort37.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `default` - Use the default sort order.<br> * `duration` - Sort the results by duration. Items without a duration, namely events and folders, are grouped by type in ascending alphabetical order, with events first.<br> * `last_user_action_event_date` - Sort the results by the date of the last user action. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFolderItems2(request: FoldersItems.GetFolderItems2Request, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every item that belongs to the specified folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersItems.getFolderItems2({ projectId, userId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>clipPrivacyFilters?</code> | <code>string</code> | A comma-separated list of video privacy types to filter on. The accepted values are `private` for when only the creator and users with access grants can play the video; `public` for when anyone can play the video; `password` for when only users with the correct password can play the video; `hide_from_vimeo` for when the video is private but embeddable anywhere; and `unlisted` for when only users with the link can play the video. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter21](src/models/filter21.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `folder` - Filter the results by folder.<br> * `live_event` - Filter the results by event.<br> * `video` - Filter the results by video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort37](src/models/sort37.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `default` - Use the default sort order.<br> * `duration` - Sort the results by duration. Items without a duration, namely events and folders, are grouped by type in ascending alphabetical order, with events first.<br> * `last_user_action_event_date` - Sort the results by the date of the last user action. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FoldersVideos

> Source: [FoldersVideos](src/resources/folders-videos.ts)

<details>
<summary><code>addVideoToProject(request: FoldersVideos.AddVideoToProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, FoldersVideos.AddVideoToProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a single video to the specified folder. The authenticated user must be the owner of the folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersVideos.addVideoToProject({ projectId, userId, videoId });
} catch (err) {
  if (err instanceof FoldersVideos.AddVideoToProjectError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[FoldersVideos.AddVideoToProjectError](src/resources/folders-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideoToProjectAlt1(request: FoldersVideos.AddVideoToProjectAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, FoldersVideos.AddVideoToProjectAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a single video to the specified folder. The authenticated user must be the owner of the folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersVideos.addVideoToProjectAlt1({ projectId, videoId });
} catch (err) {
  if (err instanceof FoldersVideos.AddVideoToProjectAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[FoldersVideos.AddVideoToProjectAlt1Error](src/resources/folders-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideosToProject(request: FoldersVideos.AddVideosToProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, FoldersVideos.AddVideosToProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds multiple videos to the specified folder. The authenticated user must be the owner of the folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersVideos.addVideosToProject({ projectId, userId, body });
} catch (err) {
  if (err instanceof FoldersVideos.AddVideosToProjectError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersProjectsVideosRequest1](src/models/users-projects-videos-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[FoldersVideos.AddVideosToProjectError](src/resources/folders-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideosToProjectAlt1(request: FoldersVideos.AddVideosToProjectAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, FoldersVideos.AddVideosToProjectAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds multiple videos to the specified folder. The authenticated user must be the owner of the folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersVideos.addVideosToProjectAlt1({ projectId, body });
} catch (err) {
  if (err instanceof FoldersVideos.AddVideosToProjectAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>body</code> | <code>[MeProjectsVideosRequest1](src/models/me-projects-videos-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[FoldersVideos.AddVideosToProjectAlt1Error](src/resources/folders-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectVideos(request: FoldersVideos.GetProjectVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, FoldersVideos.GetProjectVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the videos that belong to the specified folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.foldersVideos.getProjectVideos({ projectId, userId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof FoldersVideos.GetProjectVideosError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filterTag?</code> | <code>string</code> | A comma-separated list of tags to filter on. All results must include at least one of these tags. The use of this parameter triggers a search. |
| <code>filterTagAllOf?</code> | <code>string</code> | A comma-separated list of tags to filter on. All results must include all of these tags. The use of this parameter triggers a search. |
| <code>filterTagExclude?</code> | <code>string</code> | A comma-separated list of tags to exclude. The use of this parameter triggers a search. |
| <code>includeSubfolders?</code> | <code>boolean</code> | Whether to include subfolders. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>queryFields?</code> | <code>string</code> | A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`. |
| <code>sort?</code> | <code>[Sort37](src/models/sort37.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `default` - Use the default sort order.<br> * `duration` - Sort the results by duration.<br> * `last_user_action_event_date` - Sort the results by the date of the last user action. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[FoldersVideos.GetProjectVideosError](src/resources/folders-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectVideosAlt1(request: FoldersVideos.GetProjectVideosAlt1Request, options?: RequestOptions): ApiPromise&lt;VideoConnection, FoldersVideos.GetProjectVideosAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the videos that belong to the specified folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.foldersVideos.getProjectVideosAlt1({ projectId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof FoldersVideos.GetProjectVideosAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filterTag?</code> | <code>string</code> | A comma-separated list of tags to filter on. All results must include at least one of these tags. The use of this parameter triggers a search. |
| <code>filterTagAllOf?</code> | <code>string</code> | A comma-separated list of tags to filter on. All results must include all of these tags. The use of this parameter triggers a search. |
| <code>filterTagExclude?</code> | <code>string</code> | A comma-separated list of tags to exclude. The use of this parameter triggers a search. |
| <code>includeSubfolders?</code> | <code>boolean</code> | Whether to include subfolders. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>queryFields?</code> | <code>string</code> | A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`. |
| <code>sort?</code> | <code>[Sort37](src/models/sort37.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `default` - Use the default sort order.<br> * `duration` - Sort the results by duration.<br> * `last_user_action_event_date` - Sort the results by the date of the last user action. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[FoldersVideos.GetProjectVideosAlt1Error](src/resources/folders-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeVideoFromProject(request: FoldersVideos.RemoveVideoFromProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, FoldersVideos.RemoveVideoFromProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a single video from the specified folder. Please note that this doesn't delete the video itself.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersVideos.removeVideoFromProject({ projectId, userId, videoId });
} catch (err) {
  if (err instanceof FoldersVideos.RemoveVideoFromProjectError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[FoldersVideos.RemoveVideoFromProjectError](src/resources/folders-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeVideoFromProjectAlt1(request: FoldersVideos.RemoveVideoFromProjectAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, FoldersVideos.RemoveVideoFromProjectAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a single video from the specified folder. Please note that this doesn't delete the video itself.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersVideos.removeVideoFromProjectAlt1({ projectId, videoId });
} catch (err) {
  if (err instanceof FoldersVideos.RemoveVideoFromProjectAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[FoldersVideos.RemoveVideoFromProjectAlt1Error](src/resources/folders-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeVideosFromProject(request: FoldersVideos.RemoveVideosFromProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, FoldersVideos.RemoveVideosFromProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes multiple videos from the specified folder. The authenticated user must be the owner of the folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersVideos.removeVideosFromProject({ projectId, userId, body });
} catch (err) {
  if (err instanceof FoldersVideos.RemoveVideosFromProjectError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersProjectsVideosRequest](src/models/users-projects-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[FoldersVideos.RemoveVideosFromProjectError](src/resources/folders-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeVideosFromProjectAlt1(request: FoldersVideos.RemoveVideosFromProjectAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, FoldersVideos.RemoveVideosFromProjectAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes multiple videos from the specified folder. The authenticated user must be the owner of the folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.foldersVideos.removeVideosFromProjectAlt1({ projectId, body });
} catch (err) {
  if (err instanceof FoldersVideos.RemoveVideosFromProjectAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>number</code> | The ID of the folder. |
| <code>body</code> | <code>[MeProjectsVideosRequest](src/models/me-projects-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[FoldersVideos.RemoveVideosFromProjectAlt1Error](src/resources/folders-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GroupsEssentials

> Source: [GroupsEssentials](src/resources/groups-essentials.ts)

<details>
<summary><code>createGroup(request: GroupsEssentials.CreateGroupRequest, options?: RequestOptions): ApiPromise&lt;Group, GroupsEssentials.CreateGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsEssentials.createGroup({ body });
  // TODO: Handle 'response' of type Group
} catch (err) {
  if (err instanceof GroupsEssentials.CreateGroupError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GroupsRequest](src/models/groups-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Group](src/models/group.ts)</code>

**OnError**: <code>[GroupsEssentials.CreateGroupError](src/resources/groups-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGroup(request: GroupsEssentials.DeleteGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, GroupsEssentials.DeleteGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified group. The authenticated user must be the owner of the group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.groupsEssentials.deleteGroup({ groupId });
} catch (err) {
  if (err instanceof GroupsEssentials.DeleteGroupError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[GroupsEssentials.DeleteGroupError](src/resources/groups-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroup(request: GroupsEssentials.GetGroupRequest, options?: RequestOptions): ApiPromise&lt;Group, GroupsEssentials.GetGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsEssentials.getGroup({ groupId });
  // TODO: Handle 'response' of type Group
} catch (err) {
  if (err instanceof GroupsEssentials.GetGroupError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Group](src/models/group.ts)</code>

**OnError**: <code>[GroupsEssentials.GetGroupError](src/resources/groups-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroups(request: GroupsEssentials.GetGroupsRequest, options?: RequestOptions): ApiPromise&lt;GroupConnection, GroupsEssentials.GetGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every available group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsEssentials.getGroups();
  // TODO: Handle 'response' of type GroupConnection
} catch (err) {
  if (err instanceof GroupsEssentials.GetGroupsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter1](src/models/filter1.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `featured` - Return featured groups. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort13](src/models/sort13.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date.<br> * `followers` - Sort the results by number of followers.<br> * `relevant` - Sort the results by relevance. This option is available for search queries only.<br> * `videos` - Sort the results by number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupConnection](src/models/group-connection.ts)</code>

**OnError**: <code>[GroupsEssentials.GetGroupsError](src/resources/groups-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GroupsSubscriptions

> Source: [GroupsSubscriptions](src/resources/groups-subscriptions.ts)

<details>
<summary><code>joinGroup(request: GroupsSubscriptions.JoinGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, GroupsSubscriptions.JoinGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds the authenticated user to the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.groupsSubscriptions.joinGroup({ groupId, userId });
} catch (err) {
  if (err instanceof GroupsSubscriptions.JoinGroupError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[GroupsSubscriptions.JoinGroupError](src/resources/groups-subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>joinGroupAlt1(request: GroupsSubscriptions.JoinGroupAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, GroupsSubscriptions.JoinGroupAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds the authenticated user to the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.groupsSubscriptions.joinGroupAlt1({ groupId });
} catch (err) {
  if (err instanceof GroupsSubscriptions.JoinGroupAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[GroupsSubscriptions.JoinGroupAlt1Error](src/resources/groups-subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>leaveGroup(request: GroupsSubscriptions.LeaveGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, GroupsSubscriptions.LeaveGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the authenticated user from the specified group. The authenticated user can't be the owner of the group; assign a new owner through a PATCH request first.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.groupsSubscriptions.leaveGroup({ groupId, userId });
} catch (err) {
  if (err instanceof GroupsSubscriptions.LeaveGroupError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[GroupsSubscriptions.LeaveGroupError](src/resources/groups-subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>leaveGroupAlt1(request: GroupsSubscriptions.LeaveGroupAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, GroupsSubscriptions.LeaveGroupAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the authenticated user from the specified group. The authenticated user can't be the owner of the group; assign a new owner through a PATCH request first.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.groupsSubscriptions.leaveGroupAlt1({ groupId });
} catch (err) {
  if (err instanceof GroupsSubscriptions.LeaveGroupAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[GroupsSubscriptions.LeaveGroupAlt1Error](src/resources/groups-subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GroupsUsers

> Source: [GroupsUsers](src/resources/groups-users.ts)

<details>
<summary><code>checkIfUserJoinedGroup(request: GroupsUsers.CheckIfUserJoinedGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, GroupsUsers.CheckIfUserJoinedGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the authenticated user belongs to the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.groupsUsers.checkIfUserJoinedGroup({ groupId, userId });
} catch (err) {
  if (err instanceof GroupsUsers.CheckIfUserJoinedGroupError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[GroupsUsers.CheckIfUserJoinedGroupError](src/resources/groups-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkIfUserJoinedGroupAlt1(request: GroupsUsers.CheckIfUserJoinedGroupAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, GroupsUsers.CheckIfUserJoinedGroupAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the authenticated user belongs to the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.groupsUsers.checkIfUserJoinedGroupAlt1({ groupId });
} catch (err) {
  if (err instanceof GroupsUsers.CheckIfUserJoinedGroupAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[GroupsUsers.CheckIfUserJoinedGroupAlt1Error](src/resources/groups-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupMembers(request: GroupsUsers.GetGroupMembersRequest, options?: RequestOptions): ApiPromise&lt;UserConnection, GroupsUsers.GetGroupMembersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every user who belongs to the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsUsers.getGroupMembers({ groupId });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  if (err instanceof GroupsUsers.GetGroupMembersError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter2](src/models/filter2.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `moderators` - Return group moderators. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[GroupsUsers.GetGroupMembersError](src/resources/groups-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserGroups(request: GroupsUsers.GetUserGroupsRequest, options?: RequestOptions): ApiPromise&lt;GroupConnection, GroupsUsers.GetUserGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every group to which the authenticated user belongs.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsUsers.getUserGroups({ userId });
  // TODO: Handle 'response' of type GroupConnection
} catch (err) {
  if (err instanceof GroupsUsers.GetUserGroupsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter12](src/models/filter12.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `moderated` - Return moderated groups. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort5](src/models/sort5.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date.<br> * `members` - Sort the results by number of members.<br> * `videos` - Sort the results by number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupConnection](src/models/group-connection.ts)</code>

**OnError**: <code>[GroupsUsers.GetUserGroupsError](src/resources/groups-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserGroupsAlt1(request: GroupsUsers.GetUserGroupsAlt1Request, options?: RequestOptions): ApiPromise&lt;GroupConnection, GroupsUsers.GetUserGroupsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every group to which the authenticated user belongs.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsUsers.getUserGroupsAlt1();
  // TODO: Handle 'response' of type GroupConnection
} catch (err) {
  if (err instanceof GroupsUsers.GetUserGroupsAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter12](src/models/filter12.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `moderated` - Return moderated groups. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort5](src/models/sort5.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date.<br> * `members` - Sort the results by number of members.<br> * `videos` - Sort the results by number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupConnection](src/models/group-connection.ts)</code>

**OnError**: <code>[GroupsUsers.GetUserGroupsAlt1Error](src/resources/groups-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GroupsVideos

> Source: [GroupsVideos](src/resources/groups-videos.ts)

<details>
<summary><code>addVideoToGroup(request: GroupsVideos.AddVideoToGroupRequest, options?: RequestOptions): ApiPromise&lt;Video, GroupsVideos.AddVideoToGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a video to the specified group. The authenticated user must be the owner of the group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsVideos.addVideoToGroup({ groupId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof GroupsVideos.AddVideoToGroupError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[GroupsVideos.AddVideoToGroupError](src/resources/groups-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoFromGroup(request: GroupsVideos.DeleteVideoFromGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, GroupsVideos.DeleteVideoFromGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a video from the specified group. The authenticated user must be the owner of the group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.groupsVideos.deleteVideoFromGroup({ groupId, videoId });
} catch (err) {
  if (err instanceof GroupsVideos.DeleteVideoFromGroupError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[GroupsVideos.DeleteVideoFromGroupError](src/resources/groups-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAvailableVideoGroups(request: GroupsVideos.GetAvailableVideoGroupsRequest, options?: RequestOptions): ApiPromise&lt;GroupConnection, GroupsVideos.GetAvailableVideoGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every group to which the authenticated user can add or remove the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsVideos.getAvailableVideoGroups({ videoId });
  // TODO: Handle 'response' of type GroupConnection
} catch (err) {
  if (err instanceof GroupsVideos.GetAvailableVideoGroupsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupConnection](src/models/group-connection.ts)</code>

**OnError**: <code>[GroupsVideos.GetAvailableVideoGroupsError](src/resources/groups-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupVideo(request: GroupsVideos.GetGroupVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, GroupsVideos.GetGroupVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video from the specified group. You can use this method to determine whether the video belongs to the group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsVideos.getGroupVideo({ groupId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof GroupsVideos.GetGroupVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[GroupsVideos.GetGroupVideoError](src/resources/groups-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupVideos(request: GroupsVideos.GetGroupVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, GroupsVideos.GetGroupVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video from the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsVideos.getGroupVideos({ groupId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof GroupsVideos.GetGroupVideosError && err.payload.kind === "error304") {
    // TODO: Handle 'err.payload' — the "error304" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>number</code> | The ID of the group. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort15](src/models/sort15.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by creation date.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[GroupsVideos.GetGroupVideosError](src/resources/groups-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LikesEssentials

> Source: [LikesEssentials](src/resources/likes-essentials.ts)

<details>
<summary><code>checkIfUserLikedVideo(request: LikesEssentials.CheckIfUserLikedVideoRequest, options?: RequestOptions): ApiPromise&lt;undefined, LikesEssentials.CheckIfUserLikedVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method checks if the authenticated user has liked the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.likesEssentials.checkIfUserLikedVideo({ userId, videoId });
} catch (err) {
  if (err instanceof LikesEssentials.CheckIfUserLikedVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LikesEssentials.CheckIfUserLikedVideoError](src/resources/likes-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkIfUserLikedVideoAlt1(request: LikesEssentials.CheckIfUserLikedVideoAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, LikesEssentials.CheckIfUserLikedVideoAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method checks if the authenticated user has liked the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.likesEssentials.checkIfUserLikedVideoAlt1({ videoId });
} catch (err) {
  if (err instanceof LikesEssentials.CheckIfUserLikedVideoAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LikesEssentials.CheckIfUserLikedVideoAlt1Error](src/resources/likes-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLikes(request: LikesEssentials.GetLikesRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, LikesEssentials.GetLikesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video that the authenticated user has liked.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.likesEssentials.getLikes({ userId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof LikesEssentials.GetLikesError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort15](src/models/sort15.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by creation date.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[LikesEssentials.GetLikesError](src/resources/likes-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLikesAlt1(request: LikesEssentials.GetLikesAlt1Request, options?: RequestOptions): ApiPromise&lt;VideoConnection, LikesEssentials.GetLikesAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video that the authenticated user has liked.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.likesEssentials.getLikesAlt1();
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof LikesEssentials.GetLikesAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort15](src/models/sort15.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by creation date.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[LikesEssentials.GetLikesAlt1Error](src/resources/likes-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoLikes(request: LikesEssentials.GetVideoLikesRequest, options?: RequestOptions): ApiPromise&lt;UserConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every user who has liked the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.likesEssentials.getVideoLikes({ videoId });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by join date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoLikesAlt1(request: LikesEssentials.GetVideoLikesAlt1Request, options?: RequestOptions): ApiPromise&lt;UserConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every user who has liked the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.likesEssentials.getVideoLikesAlt1({ channelId, videoId });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by join date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodLikes(request: LikesEssentials.GetVodLikesRequest, options?: RequestOptions): ApiPromise&lt;UserConnection, LikesEssentials.GetVodLikesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every user who has liked the specified video on an On Demand page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.likesEssentials.getVodLikes({ ondemandId });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  if (err instanceof LikesEssentials.GetVodLikesError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter25](src/models/filter25.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `extra` - Consider extra content only.<br> * `main` - Consider main content only.<br> * `trailer` - Consider trailer content only. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by join date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[LikesEssentials.GetVodLikesError](src/resources/likes-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>likeVideo(request: LikesEssentials.LikeVideoRequest, options?: RequestOptions): ApiPromise&lt;undefined, LikesEssentials.LikeVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to like the specified video. The user can't like their own video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.likesEssentials.likeVideo({ userId, videoId });
} catch (err) {
  if (err instanceof LikesEssentials.LikeVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LikesEssentials.LikeVideoError](src/resources/likes-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>likeVideoAlt1(request: LikesEssentials.LikeVideoAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, LikesEssentials.LikeVideoAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to like the specified video. The user can't like their own video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.likesEssentials.likeVideoAlt1({ videoId });
} catch (err) {
  if (err instanceof LikesEssentials.LikeVideoAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LikesEssentials.LikeVideoAlt1Error](src/resources/likes-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unlikeVideo(request: LikesEssentials.UnlikeVideoRequest, options?: RequestOptions): ApiPromise&lt;undefined, LikesEssentials.UnlikeVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to unlike the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.likesEssentials.unlikeVideo({ userId, videoId });
} catch (err) {
  if (err instanceof LikesEssentials.UnlikeVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LikesEssentials.UnlikeVideoError](src/resources/likes-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unlikeVideoAlt1(request: LikesEssentials.UnlikeVideoAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, LikesEssentials.UnlikeVideoAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to unlike the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.likesEssentials.unlikeVideoAlt1({ videoId });
} catch (err) {
  if (err instanceof LikesEssentials.UnlikeVideoAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LikesEssentials.UnlikeVideoAlt1Error](src/resources/likes-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveAnalytics

> Source: [LiveAnalytics](src/resources/live-analytics.ts)

<details>
<summary><code>exportVpaasViewerAnalytics(request: LiveAnalytics.ExportVpaasViewerAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveAnalytics.ExportVpaasViewerAnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method queues an export of VPaaS viewer analytics for the specified live event.

The authenticated user must be the owner of the event or have edit permissions.
The webhook is delivered to the managing vendor app's registered webhook URL.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveAnalytics.exportVpaasViewerAnalytics({ liveEventId });
} catch (err) {
  if (err instanceof LiveAnalytics.ExportVpaasViewerAnalyticsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the live event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveAnalytics.ExportVpaasViewerAnalyticsError](src/resources/live-analytics.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveAudioTracks

> Source: [LiveAudioTracks](src/resources/live-audio-tracks.ts)

<details>
<summary><code>getEventAudioTracks(request: LiveAudioTracks.GetEventAudioTracksRequest, options?: RequestOptions): ApiPromise&lt;EventAudioTracks, LiveAudioTracks.GetEventAudioTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns audio tracks settings for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveAudioTracks.getEventAudioTracks({ liveEventId });
  // TODO: Handle 'response' of type EventAudioTracks
} catch (err) {
  if (err instanceof LiveAudioTracks.GetEventAudioTracksError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventAudioTracks](src/models/event-audio-tracks.ts)</code>

**OnError**: <code>[LiveAudioTracks.GetEventAudioTracksError](src/resources/live-audio-tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEventAudioTracks(request: LiveAudioTracks.UpdateEventAudioTracksRequest, options?: RequestOptions): ApiPromise&lt;EventAudioTracks, LiveAudioTracks.UpdateEventAudioTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method updates audio tracks settings on the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveAudioTracks.updateEventAudioTracks({ liveEventId });
  // TODO: Handle 'response' of type EventAudioTracks
} catch (err) {
  if (err instanceof LiveAudioTracks.UpdateEventAudioTracksError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[LiveEventsAudioTracksRequest](src/models/live-events-audio-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventAudioTracks](src/models/event-audio-tracks.ts)</code>

**OnError**: <code>[LiveAudioTracks.UpdateEventAudioTracksError](src/resources/live-audio-tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveEmbedPrivacy

> Source: [LiveEmbedPrivacy](src/resources/live-embed-privacy.ts)

<details>
<summary><code>getLiveEventWhitelist(request: LiveEmbedPrivacy.GetLiveEventWhitelistRequest, options?: RequestOptions): ApiPromise&lt;DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every permitted domain for an event. The embed privacy setting must be `whitelist`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEmbedPrivacy.getLiveEventWhitelist({ liveEventId, userId });
  // TODO: Handle 'response' of type DomainConnection
} catch (err) {
  if (err instanceof LiveEmbedPrivacy.GetLiveEventWhitelistError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DomainConnection](src/models/domain-connection.ts)</code>

**OnError**: <code>[LiveEmbedPrivacy.GetLiveEventWhitelistError](src/resources/live-embed-privacy.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventWhitelistAlt1(request: LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Request, options?: RequestOptions): ApiPromise&lt;DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every permitted domain for an event. The embed privacy setting must be `whitelist`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEmbedPrivacy.getLiveEventWhitelistAlt1({ liveEventId });
  // TODO: Handle 'response' of type DomainConnection
} catch (err) {
  if (err instanceof LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DomainConnection](src/models/domain-connection.ts)</code>

**OnError**: <code>[LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Error](src/resources/live-embed-privacy.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventWhitelistAlt2(request: LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Request, options?: RequestOptions): ApiPromise&lt;DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every permitted domain for an event. The embed privacy setting must be `whitelist`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEmbedPrivacy.getLiveEventWhitelistAlt2({ liveEventId });
  // TODO: Handle 'response' of type DomainConnection
} catch (err) {
  if (err instanceof LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DomainConnection](src/models/domain-connection.ts)</code>

**OnError**: <code>[LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Error](src/resources/live-embed-privacy.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setLiveEventWhitelist(request: LiveEmbedPrivacy.SetLiveEventWhitelistRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveEmbedPrivacy.SetLiveEventWhitelistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method embeds an event on the specified domains. The embed privacy setting must be `whitelist`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEmbedPrivacy.setLiveEventWhitelist({ liveEventId, userId });
} catch (err) {
  if (err instanceof LiveEmbedPrivacy.SetLiveEventWhitelistError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersLiveEventsPrivacyDomainsRequest](src/models/users-live-events-privacy-domains-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEmbedPrivacy.SetLiveEventWhitelistError](src/resources/live-embed-privacy.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setLiveEventWhitelistAlt1(request: LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method embeds an event on the specified domains. The embed privacy setting must be `whitelist`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEmbedPrivacy.setLiveEventWhitelistAlt1({ liveEventId });
} catch (err) {
  if (err instanceof LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[LiveEventsPrivacyDomainsRequest](src/models/live-events-privacy-domains-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Error](src/resources/live-embed-privacy.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setLiveEventWhitelistAlt2(request: LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method embeds an event on the specified domains. The embed privacy setting must be `whitelist`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEmbedPrivacy.setLiveEventWhitelistAlt2({ liveEventId });
} catch (err) {
  if (err instanceof LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[MeLiveEventsPrivacyDomainsRequest](src/models/me-live-events-privacy-domains-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Error](src/resources/live-embed-privacy.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveEssentials

> Source: [LiveEssentials](src/resources/live-essentials.ts)

<details>
<summary><code>createLiveEvent(request: LiveEssentials.CreateLiveEventRequest, options?: RequestOptions): ApiPromise&lt;RecurringEvent, LiveEssentials.CreateLiveEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new event for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.createLiveEvent({ userId, body });
  // TODO: Handle 'response' of type RecurringEvent
} catch (err) {
  if (err instanceof LiveEssentials.CreateLiveEventError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersLiveEventsRequest1](src/models/users-live-events-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEvent](src/models/recurring-event.ts)</code>

**OnError**: <code>[LiveEssentials.CreateLiveEventError](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLiveEventAlt1(request: LiveEssentials.CreateLiveEventAlt1Request, options?: RequestOptions): ApiPromise&lt;RecurringEvent, LiveEssentials.CreateLiveEventAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new event for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.createLiveEventAlt1({ body });
  // TODO: Handle 'response' of type RecurringEvent
} catch (err) {
  if (err instanceof LiveEssentials.CreateLiveEventAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LiveEventsRequest1](src/models/live-events-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEvent](src/models/recurring-event.ts)</code>

**OnError**: <code>[LiveEssentials.CreateLiveEventAlt1Error](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLiveEventAlt2(request: LiveEssentials.CreateLiveEventAlt2Request, options?: RequestOptions): ApiPromise&lt;RecurringEvent, LiveEssentials.CreateLiveEventAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new event for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.createLiveEventAlt2({ body });
  // TODO: Handle 'response' of type RecurringEvent
} catch (err) {
  if (err instanceof LiveEssentials.CreateLiveEventAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MeLiveEventsRequest1](src/models/me-live-events-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEvent](src/models/recurring-event.ts)</code>

**OnError**: <code>[LiveEssentials.CreateLiveEventAlt2Error](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLiveEvent(request: LiveEssentials.DeleteLiveEventRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveEssentials.DeleteLiveEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes a single event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEssentials.deleteLiveEvent({ liveEventId, userId });
} catch (err) {
  if (err instanceof LiveEssentials.DeleteLiveEventError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEssentials.DeleteLiveEventError](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLiveEventAlt1(request: LiveEssentials.DeleteLiveEventAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEssentials.DeleteLiveEventAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes a single event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEssentials.deleteLiveEventAlt1({ liveEventId });
} catch (err) {
  if (err instanceof LiveEssentials.DeleteLiveEventAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEssentials.DeleteLiveEventAlt1Error](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLiveEventAlt2(request: LiveEssentials.DeleteLiveEventAlt2Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEssentials.DeleteLiveEventAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes a single event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEssentials.deleteLiveEventAlt2({ liveEventId });
} catch (err) {
  if (err instanceof LiveEssentials.DeleteLiveEventAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEssentials.DeleteLiveEventAlt2Error](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLiveEvents(request: LiveEssentials.DeleteLiveEventsRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveEssentials.DeleteLiveEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes multiple events belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEssentials.deleteLiveEvents({ userId, body });
} catch (err) {
  if (err instanceof LiveEssentials.DeleteLiveEventsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersLiveEventsRequest](src/models/users-live-events-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEssentials.DeleteLiveEventsError](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLiveEventsAlt1(request: LiveEssentials.DeleteLiveEventsAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEssentials.DeleteLiveEventsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes multiple events belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEssentials.deleteLiveEventsAlt1({ body });
} catch (err) {
  if (err instanceof LiveEssentials.DeleteLiveEventsAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LiveEventsRequest](src/models/live-events-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEssentials.DeleteLiveEventsAlt1Error](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLiveEventsAlt2(request: LiveEssentials.DeleteLiveEventsAlt2Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEssentials.DeleteLiveEventsAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes multiple events belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEssentials.deleteLiveEventsAlt2({ body });
} catch (err) {
  if (err instanceof LiveEssentials.DeleteLiveEventsAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MeLiveEventsRequest](src/models/me-live-events-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEssentials.DeleteLiveEventsAlt2Error](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEvent(request: LiveEssentials.GetLiveEventRequest, options?: RequestOptions): ApiPromise&lt;RecurringEvent, LiveEssentials.GetLiveEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.getLiveEvent({ liveEventId, userId });
  // TODO: Handle 'response' of type RecurringEvent
} catch (err) {
  if (err instanceof LiveEssentials.GetLiveEventError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>password?</code> | <code>string</code> | The password of the event when the privacy is set to `password`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEvent](src/models/recurring-event.ts)</code>

**OnError**: <code>[LiveEssentials.GetLiveEventError](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventAlt1(request: LiveEssentials.GetLiveEventAlt1Request, options?: RequestOptions): ApiPromise&lt;RecurringEvent, LiveEssentials.GetLiveEventAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.getLiveEventAlt1({ liveEventId });
  // TODO: Handle 'response' of type RecurringEvent
} catch (err) {
  if (err instanceof LiveEssentials.GetLiveEventAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>password?</code> | <code>string</code> | The password of the event when the privacy is set to `password`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEvent](src/models/recurring-event.ts)</code>

**OnError**: <code>[LiveEssentials.GetLiveEventAlt1Error](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventAlt2(request: LiveEssentials.GetLiveEventAlt2Request, options?: RequestOptions): ApiPromise&lt;RecurringEvent, LiveEssentials.GetLiveEventAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.getLiveEventAlt2({ liveEventId });
  // TODO: Handle 'response' of type RecurringEvent
} catch (err) {
  if (err instanceof LiveEssentials.GetLiveEventAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>password?</code> | <code>string</code> | The password of the event when the privacy is set to `password`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEvent](src/models/recurring-event.ts)</code>

**OnError**: <code>[LiveEssentials.GetLiveEventAlt2Error](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventOccurrences(request: LiveEssentials.GetLiveEventOccurrencesRequest, options?: RequestOptions): ApiPromise&lt;LiveEventOccurrenceConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all live event occurrences for the user within the given date range.

For recurring events (with rrule), each occurrence within the range is returned as a separate entry.
For one-time events (no rrule), the event is included if its start_time falls within the range.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.getLiveEventOccurrences({ userId, startDate });
  // TODO: Handle 'response' of type LiveEventOccurrenceConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>startDate</code> | <code>string</code> | The start of the date range in ISO 8601 format. |
| <code>endDate?</code> | <code>string</code> | The end of the date range in ISO 8601 format. Defaults to 7 days after start. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LiveEventOccurrenceConnection](src/models/live-event-occurrence-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEvents(request: LiveEssentials.GetLiveEventsRequest, options?: RequestOptions): ApiPromise&lt;EventConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The method returns every event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.getLiveEvents({ userId });
  // TODO: Handle 'response' of type EventConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter8](src/models/filter8.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `not_in_folder` - Show only events that aren't in a folder.<br> * `not_in_showcase` - Show only events that aren't in a showcase. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date. |
| <code>type?</code> | <code>[Type31](src/models/type31.ts)</code> | The type of event to return.<br><br>Option descriptions:<br> * `all` - Return all events.<br> * `one_time` - Return one-time events only.<br> * `recurring` - Return recurring events only. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventConnection](src/models/event-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventsAlt1(request: LiveEssentials.GetLiveEventsAlt1Request, options?: RequestOptions): ApiPromise&lt;EventConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The method returns every event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.getLiveEventsAlt1();
  // TODO: Handle 'response' of type EventConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter8](src/models/filter8.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `not_in_folder` - Show only events that aren't in a folder.<br> * `not_in_showcase` - Show only events that aren't in a showcase. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date. |
| <code>type?</code> | <code>[Type31](src/models/type31.ts)</code> | The type of event to return.<br><br>Option descriptions:<br> * `all` - Return all events.<br> * `one_time` - Return one-time events only.<br> * `recurring` - Return recurring events only. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventConnection](src/models/event-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventsAlt2(request: LiveEssentials.GetLiveEventsAlt2Request, options?: RequestOptions): ApiPromise&lt;EventConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The method returns every event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.getLiveEventsAlt2();
  // TODO: Handle 'response' of type EventConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter8](src/models/filter8.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `not_in_folder` - Show only events that aren't in a folder.<br> * `not_in_showcase` - Show only events that aren't in a showcase. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date. |
| <code>type?</code> | <code>[Type31](src/models/type31.ts)</code> | The type of event to return.<br><br>Option descriptions:<br> * `all` - Return all events.<br> * `one_time` - Return one-time events only.<br> * `recurring` - Return recurring events only. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventConnection](src/models/event-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLiveEvent(request: LiveEssentials.UpdateLiveEventRequest, options?: RequestOptions): ApiPromise&lt;RecurringEvent, LiveEssentials.UpdateLiveEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method updates an event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.updateLiveEvent({ liveEventId, userId });
  // TODO: Handle 'response' of type RecurringEvent
} catch (err) {
  if (err instanceof LiveEssentials.UpdateLiveEventError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersLiveEventsRequest2](src/models/users-live-events-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEvent](src/models/recurring-event.ts)</code>

**OnError**: <code>[LiveEssentials.UpdateLiveEventError](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLiveEventAlt1(request: LiveEssentials.UpdateLiveEventAlt1Request, options?: RequestOptions): ApiPromise&lt;RecurringEvent, LiveEssentials.UpdateLiveEventAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method updates an event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.updateLiveEventAlt1({ liveEventId });
  // TODO: Handle 'response' of type RecurringEvent
} catch (err) {
  if (err instanceof LiveEssentials.UpdateLiveEventAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[LiveEventsRequest2](src/models/live-events-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEvent](src/models/recurring-event.ts)</code>

**OnError**: <code>[LiveEssentials.UpdateLiveEventAlt1Error](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLiveEventAlt2(request: LiveEssentials.UpdateLiveEventAlt2Request, options?: RequestOptions): ApiPromise&lt;RecurringEvent, LiveEssentials.UpdateLiveEventAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method updates an event belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEssentials.updateLiveEventAlt2({ liveEventId });
  // TODO: Handle 'response' of type RecurringEvent
} catch (err) {
  if (err instanceof LiveEssentials.UpdateLiveEventAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[MeLiveEventsRequest2](src/models/me-live-events-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEvent](src/models/recurring-event.ts)</code>

**OnError**: <code>[LiveEssentials.UpdateLiveEventAlt2Error](src/resources/live-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveEventM3U8Playback

> Source: [LiveEventM3U8Playback](src/resources/live-event-m3-u8-playback.ts)

<details>
<summary><code>getLiveEventM3U8Playback(request: LiveEventM3U8Playback.GetLiveEventM3U8PlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventM3U8Playback.GetLiveEventM3U8PlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our [HLS guide](https://developer.vimeo.com/api/live/playback).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventM3U8Playback.getLiveEventM3U8Playback({ liveEventId, userId });
} catch (err) {
  if (err instanceof LiveEventM3U8Playback.GetLiveEventM3U8PlaybackError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>dvr?</code> | <code>number</code> | When set to `1`, returns an fMP4 stream URL if DVR is enabled on the event. If DVR is not enabled, the standard stream URL is returned. |
| <code>maxFpsFhd?</code> | <code>number</code> | The requested maximum frames per second. |
| <code>ttl?</code> | <code>number</code> | The time to live of the playlist link in seconds. This value must be between `10` and `60`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventM3U8Playback.GetLiveEventM3U8PlaybackError](src/resources/live-event-m3-u8-playback.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventM3U8PlaybackAlt1(request: LiveEventM3U8Playback.GetLiveEventM3U8PlaybackAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventM3U8Playback.GetLiveEventM3U8PlaybackAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our [HLS guide](https://developer.vimeo.com/api/live/playback).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventM3U8Playback.getLiveEventM3U8PlaybackAlt1({ liveEventId });
} catch (err) {
  if (
    err instanceof LiveEventM3U8Playback.GetLiveEventM3U8PlaybackAlt1Error && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>dvr?</code> | <code>number</code> | When set to `1`, returns an fMP4 stream URL if DVR is enabled on the event. If DVR is not enabled, the standard stream URL is returned. |
| <code>maxFpsFhd?</code> | <code>number</code> | The requested maximum frames per second. |
| <code>ttl?</code> | <code>number</code> | The time to live of the playlist link in seconds. This value must be between `10` and `60`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventM3U8Playback.GetLiveEventM3U8PlaybackAlt1Error](src/resources/live-event-m3-u8-playback.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveEventActivation

> Source: [LiveEventActivation](src/resources/live-event-activation.ts)

<details>
<summary><code>activateLiveEvent(request: LiveEventActivation.ActivateLiveEventRequest, options?: RequestOptions): ApiPromise&lt;Video, LiveEventActivation.ActivateLiveEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates the necessary RTMP links for the specified event. Begin streaming to these links to trigger the event on Vimeo. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventActivation.activateLiveEvent({ liveEventId, userId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof LiveEventActivation.ActivateLiveEventError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersLiveEventsActivateRequest](src/models/users-live-events-activate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[LiveEventActivation.ActivateLiveEventError](src/resources/live-event-activation.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>activateLiveEventAlt1(request: LiveEventActivation.ActivateLiveEventAlt1Request, options?: RequestOptions): ApiPromise&lt;Video, LiveEventActivation.ActivateLiveEventAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates the necessary RTMP links for the specified event. Begin streaming to these links to trigger the event on Vimeo. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventActivation.activateLiveEventAlt1({ liveEventId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof LiveEventActivation.ActivateLiveEventAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[LiveEventsActivateRequest](src/models/live-events-activate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[LiveEventActivation.ActivateLiveEventAlt1Error](src/resources/live-event-activation.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>activateLiveEventAlt2(request: LiveEventActivation.ActivateLiveEventAlt2Request, options?: RequestOptions): ApiPromise&lt;Video, LiveEventActivation.ActivateLiveEventAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates the necessary RTMP links for the specified event. Begin streaming to these links to trigger the event on Vimeo. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventActivation.activateLiveEventAlt2({ liveEventId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof LiveEventActivation.ActivateLiveEventAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[MeLiveEventsActivateRequest](src/models/me-live-events-activate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[LiveEventActivation.ActivateLiveEventAlt2Error](src/resources/live-event-activation.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveEventAutomatedClosedCaptions

> Source: [LiveEventAutomatedClosedCaptions](src/resources/live-event-automated-closed-captions.ts)

<details>
<summary><code>editLiveEventAutoCc(request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcRequest, options?: RequestOptions): ApiPromise&lt;EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the automated closed captions preference for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventAutomatedClosedCaptions.editLiveEventAutoCc({
    liveEventId,
    userId,
    body,
  });
  // TODO: Handle 'response' of type EventAutomatedClosedCaptions
} catch (err) {
  if (
    err instanceof LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersLiveEventsAutoCcRequest](src/models/users-live-events-auto-cc-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventAutomatedClosedCaptions](src/models/event-automated-closed-captions.ts)</code>

**OnError**: <code>[LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcError](src/resources/live-event-automated-closed-captions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editLiveEventAutoCcAlt1(request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Request, options?: RequestOptions): ApiPromise&lt;EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the automated closed captions preference for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventAutomatedClosedCaptions.editLiveEventAutoCcAlt1({
    liveEventId,
    body,
  });
  // TODO: Handle 'response' of type EventAutomatedClosedCaptions
} catch (err) {
  if (
    err instanceof LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Error &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body</code> | <code>[LiveEventsAutoCcRequest](src/models/live-events-auto-cc-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventAutomatedClosedCaptions](src/models/event-automated-closed-captions.ts)</code>

**OnError**: <code>[LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Error](src/resources/live-event-automated-closed-captions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editLiveEventAutoCcAlt2(request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Request, options?: RequestOptions): ApiPromise&lt;EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the automated closed captions preference for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventAutomatedClosedCaptions.editLiveEventAutoCcAlt2({
    liveEventId,
    body,
  });
  // TODO: Handle 'response' of type EventAutomatedClosedCaptions
} catch (err) {
  if (
    err instanceof LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Error &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body</code> | <code>[MeLiveEventsAutoCcRequest](src/models/me-live-events-auto-cc-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventAutomatedClosedCaptions](src/models/event-automated-closed-captions.ts)</code>

**OnError**: <code>[LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Error](src/resources/live-event-automated-closed-captions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveEventDestinations

> Source: [LiveEventDestinations](src/resources/live-event-destinations.ts)

<details>
<summary><code>createLiveEventDestination(request: LiveEventDestinations.CreateLiveEventDestinationRequest, options?: RequestOptions): ApiPromise&lt;EventDestination, LiveEventDestinations.CreateLiveEventDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a destination for the specified event. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventDestinations.createLiveEventDestination({ liveEventId, body });
  // TODO: Handle 'response' of type EventDestination
} catch (err) {
  if (err instanceof LiveEventDestinations.CreateLiveEventDestinationError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body</code> | <code>[MeLiveEventsDestinationsRequest](src/models/me-live-events-destinations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventDestination](src/models/event-destination.ts)</code>

**OnError**: <code>[LiveEventDestinations.CreateLiveEventDestinationError](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLiveEventDestinationAlt1(request: LiveEventDestinations.CreateLiveEventDestinationAlt1Request, options?: RequestOptions): ApiPromise&lt;EventDestination, LiveEventDestinations.CreateLiveEventDestinationAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a destination for the specified event. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventDestinations.createLiveEventDestinationAlt1({
    liveEventId,
    userId,
    body,
  });
  // TODO: Handle 'response' of type EventDestination
} catch (err) {
  if (
    err instanceof LiveEventDestinations.CreateLiveEventDestinationAlt1Error && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersLiveEventsDestinationsRequest](src/models/users-live-events-destinations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventDestination](src/models/event-destination.ts)</code>

**OnError**: <code>[LiveEventDestinations.CreateLiveEventDestinationAlt1Error](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOttDestination(request: LiveEventDestinations.CreateOttDestinationRequest, options?: RequestOptions): ApiPromise&lt;OttDestination, LiveEventDestinations.CreateOttDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates an OTT channel as the destination of the specified event. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventDestinations.createOttDestination({ liveEventId, userId });
  // TODO: Handle 'response' of type OttDestination
} catch (err) {
  if (err instanceof LiveEventDestinations.CreateOttDestinationError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OttDestination](src/models/ott-destination.ts)</code>

**OnError**: <code>[LiveEventDestinations.CreateOttDestinationError](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLiveEventDestination(request: LiveEventDestinations.DeleteLiveEventDestinationRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventDestinations.DeleteLiveEventDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified event destination belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventDestinations.deleteLiveEventDestination({ destinationId });
} catch (err) {
  if (err instanceof LiveEventDestinations.DeleteLiveEventDestinationError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>destinationId</code> | <code>number</code> | The ID of the event destination. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventDestinations.DeleteLiveEventDestinationError](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOttDestination(request: LiveEventDestinations.DeleteOttDestinationRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventDestinations.DeleteOttDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes an OTT channel as the destination of the specified event. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventDestinations.deleteOttDestination({ liveEventId, userId, destinationId });
} catch (err) {
  if (err instanceof LiveEventDestinations.DeleteOttDestinationError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>destinationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventDestinations.DeleteOttDestinationError](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAvailableDestinations(request: LiveEventDestinations.GetAvailableDestinationsRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventDestinations.GetAvailableDestinationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every available event destination for the authenticated user to stream to.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventDestinations.getAvailableDestinations({ userId });
} catch (err) {
  if (err instanceof LiveEventDestinations.GetAvailableDestinationsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The user ID of the team owner. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventDestinations.GetAvailableDestinationsError](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAvailableDestinationsAlt1(options?: RequestOptions): ApiPromise&lt;undefined, LiveEventDestinations.GetAvailableDestinationsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every available event destination for the authenticated user to stream to.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventDestinations.getAvailableDestinationsAlt1();
} catch (err) {
  if (
    err instanceof LiveEventDestinations.GetAvailableDestinationsAlt1Error && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventDestinations.GetAvailableDestinationsAlt1Error](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventDestination(request: LiveEventDestinations.GetLiveEventDestinationRequest, options?: RequestOptions): ApiPromise&lt;EventDestination, LiveEventDestinations.GetLiveEventDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified event destination belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventDestinations.getLiveEventDestination({ destinationId });
  // TODO: Handle 'response' of type EventDestination
} catch (err) {
  if (err instanceof LiveEventDestinations.GetLiveEventDestinationError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>destinationId</code> | <code>number</code> | The ID of the event destination. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventDestination](src/models/event-destination.ts)</code>

**OnError**: <code>[LiveEventDestinations.GetLiveEventDestinationError](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventDestinations(request: LiveEventDestinations.GetLiveEventDestinationsRequest, options?: RequestOptions): ApiPromise&lt;EventDestinationConnection, LiveEventDestinations.GetLiveEventDestinationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every destination of the specified event. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventDestinations.getLiveEventDestinations({ liveEventId });
  // TODO: Handle 'response' of type EventDestinationConnection
} catch (err) {
  if (err instanceof LiveEventDestinations.GetLiveEventDestinationsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventDestinationConnection](src/models/event-destination-connection.ts)</code>

**OnError**: <code>[LiveEventDestinations.GetLiveEventDestinationsError](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventDestinationsAlt1(request: LiveEventDestinations.GetLiveEventDestinationsAlt1Request, options?: RequestOptions): ApiPromise&lt;EventDestinationConnection, LiveEventDestinations.GetLiveEventDestinationsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every destination of the specified event. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventDestinations.getLiveEventDestinationsAlt1({ liveEventId, userId });
  // TODO: Handle 'response' of type EventDestinationConnection
} catch (err) {
  if (
    err instanceof LiveEventDestinations.GetLiveEventDestinationsAlt1Error && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventDestinationConnection](src/models/event-destination-connection.ts)</code>

**OnError**: <code>[LiveEventDestinations.GetLiveEventDestinationsAlt1Error](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOttDestinations(request: LiveEventDestinations.GetOttDestinationsRequest, options?: RequestOptions): ApiPromise&lt;OttDestinationConnection, LiveEventDestinations.GetOttDestinationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every OTT destination of the specified event. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventDestinations.getOttDestinations({ liveEventId, userId });
  // TODO: Handle 'response' of type OttDestinationConnection
} catch (err) {
  if (err instanceof LiveEventDestinations.GetOttDestinationsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OttDestinationConnection](src/models/ott-destination-connection.ts)</code>

**OnError**: <code>[LiveEventDestinations.GetOttDestinationsError](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLiveEventDestination(request: LiveEventDestinations.UpdateLiveEventDestinationRequest, options?: RequestOptions): ApiPromise&lt;EventDestination, LiveEventDestinations.UpdateLiveEventDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method updates the specified event destination belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventDestinations.updateLiveEventDestination({ destinationId });
  // TODO: Handle 'response' of type EventDestination
} catch (err) {
  if (err instanceof LiveEventDestinations.UpdateLiveEventDestinationError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>destinationId</code> | <code>number</code> | The ID of the event destination. |
| <code>body?</code> | <code>[DestinationRequest](src/models/destination-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventDestination](src/models/event-destination.ts)</code>

**OnError**: <code>[LiveEventDestinations.UpdateLiveEventDestinationError](src/resources/live-event-destinations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveEventEnd

> Source: [LiveEventEnd](src/resources/live-event-end.ts)

<details>
<summary><code>endLiveEvent(request: LiveEventEnd.EndLiveEventRequest, options?: RequestOptions): ApiPromise&lt;Video, LiveEventEnd.EndLiveEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method ends the specified event. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventEnd.endLiveEvent({ liveEventId, userId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof LiveEventEnd.EndLiveEventError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>string</code> | - |
| <code>clipId?</code> | <code>number</code> | The ID of the streamable video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[LiveEventEnd.EndLiveEventError](src/resources/live-event-end.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>endLiveEventAlt1(request: LiveEventEnd.EndLiveEventAlt1Request, options?: RequestOptions): ApiPromise&lt;Video, LiveEventEnd.EndLiveEventAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method ends the specified event. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventEnd.endLiveEventAlt1({ liveEventId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof LiveEventEnd.EndLiveEventAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>clipId?</code> | <code>number</code> | The ID of the streamable video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[LiveEventEnd.EndLiveEventAlt1Error](src/resources/live-event-end.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>endLiveEventAlt2(request: LiveEventEnd.EndLiveEventAlt2Request, options?: RequestOptions): ApiPromise&lt;Video, LiveEventEnd.EndLiveEventAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method ends the specified event. The authenticated user must be the owner of the event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventEnd.endLiveEventAlt2({ liveEventId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof LiveEventEnd.EndLiveEventAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>clipId?</code> | <code>number</code> | The ID of the streamable video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[LiveEventEnd.EndLiveEventAlt2Error](src/resources/live-event-end.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveEventLowLatency

> Source: [LiveEventLowLatency](src/resources/live-event-low-latency.ts)

<details>
<summary><code>toggleRleLowLatency(request: LiveEventLowLatency.ToggleRleLowLatencyRequest, options?: RequestOptions): ApiPromise&lt;RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method toggles the low-latency option of the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventLowLatency.toggleRleLowLatency({ liveEventId, userId });
  // TODO: Handle 'response' of type RecurringEventLowLatency
} catch (err) {
  if (err instanceof LiveEventLowLatency.ToggleRleLowLatencyError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersLiveEventsLowLatencyRequest](src/models/users-live-events-low-latency-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEventLowLatency](src/models/recurring-event-low-latency.ts)</code>

**OnError**: <code>[LiveEventLowLatency.ToggleRleLowLatencyError](src/resources/live-event-low-latency.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>toggleRleLowLatencyAlt1(request: LiveEventLowLatency.ToggleRleLowLatencyAlt1Request, options?: RequestOptions): ApiPromise&lt;RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method toggles the low-latency option of the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventLowLatency.toggleRleLowLatencyAlt1({ liveEventId });
  // TODO: Handle 'response' of type RecurringEventLowLatency
} catch (err) {
  if (err instanceof LiveEventLowLatency.ToggleRleLowLatencyAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[LiveEventsLowLatencyRequest](src/models/live-events-low-latency-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEventLowLatency](src/models/recurring-event-low-latency.ts)</code>

**OnError**: <code>[LiveEventLowLatency.ToggleRleLowLatencyAlt1Error](src/resources/live-event-low-latency.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>toggleRleLowLatencyAlt2(request: LiveEventLowLatency.ToggleRleLowLatencyAlt2Request, options?: RequestOptions): ApiPromise&lt;RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method toggles the low-latency option of the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventLowLatency.toggleRleLowLatencyAlt2({ liveEventId });
  // TODO: Handle 'response' of type RecurringEventLowLatency
} catch (err) {
  if (err instanceof LiveEventLowLatency.ToggleRleLowLatencyAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[MeLiveEventsLowLatencyRequest](src/models/me-live-events-low-latency-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringEventLowLatency](src/models/recurring-event-low-latency.ts)</code>

**OnError**: <code>[LiveEventLowLatency.ToggleRleLowLatencyAlt2Error](src/resources/live-event-low-latency.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveEventSessions

> Source: [LiveEventSessions](src/resources/live-event-sessions.ts)

<details>
<summary><code>getLiveClipIngestStatus(request: LiveEventSessions.GetLiveClipIngestStatusRequest, options?: RequestOptions): ApiPromise&lt;EventSessionStatus, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the ingest status of the specified event and associated video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventSessions.getLiveClipIngestStatus({ liveEventId });
  // TODO: Handle 'response' of type EventSessionStatus
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>string</code> | - |
| <code>clipId?</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventSessionStatus](src/models/event-session-status.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveIngestStatus(request: LiveEventSessions.GetLiveIngestStatusRequest, options?: RequestOptions): ApiPromise&lt;EventSessionStatus, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the ingest status of the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventSessions.getLiveIngestStatus({ videoId });
  // TODO: Handle 'response' of type EventSessionStatus
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventSessionStatus](src/models/event-session-status.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveEventThumbnails

> Source: [LiveEventThumbnails](src/resources/live-event-thumbnails.ts)

<details>
<summary><code>createLiveEventThumbnail(request: LiveEventThumbnails.CreateLiveEventThumbnailRequest, options?: RequestOptions): ApiPromise&lt;Picture, LiveEventThumbnails.CreateLiveEventThumbnailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a thumbnail image for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.createLiveEventThumbnail({ liveEventId, userId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof LiveEventThumbnails.CreateLiveEventThumbnailError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersLiveEventsPicturesRequest](src/models/users-live-events-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[LiveEventThumbnails.CreateLiveEventThumbnailError](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLiveEventThumbnailAlt1(request: LiveEventThumbnails.CreateLiveEventThumbnailAlt1Request, options?: RequestOptions): ApiPromise&lt;Picture, LiveEventThumbnails.CreateLiveEventThumbnailAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a thumbnail image for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.createLiveEventThumbnailAlt1({ liveEventId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof LiveEventThumbnails.CreateLiveEventThumbnailAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[LiveEventsPicturesRequest](src/models/live-events-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[LiveEventThumbnails.CreateLiveEventThumbnailAlt1Error](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLiveEventThumbnailAlt2(request: LiveEventThumbnails.CreateLiveEventThumbnailAlt2Request, options?: RequestOptions): ApiPromise&lt;Picture, LiveEventThumbnails.CreateLiveEventThumbnailAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a thumbnail image for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.createLiveEventThumbnailAlt2({ liveEventId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof LiveEventThumbnails.CreateLiveEventThumbnailAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[MeLiveEventsPicturesRequest](src/models/me-live-events-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[LiveEventThumbnails.CreateLiveEventThumbnailAlt2Error](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLiveEventThumbnail(request: LiveEventThumbnails.DeleteLiveEventThumbnailRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventThumbnails.DeleteLiveEventThumbnailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes a thumbnail image for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventThumbnails.deleteLiveEventThumbnail({ liveEventId, thumbnailId, userId });
} catch (err) {
  if (err instanceof LiveEventThumbnails.DeleteLiveEventThumbnailError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the thumbnail. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventThumbnails.DeleteLiveEventThumbnailError](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLiveEventThumbnailAlt1(request: LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes a thumbnail image for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventThumbnails.deleteLiveEventThumbnailAlt1({ liveEventId, thumbnailId });
} catch (err) {
  if (err instanceof LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the thumbnail. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Error](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLiveEventThumbnailAlt2(request: LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes a thumbnail image for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventThumbnails.deleteLiveEventThumbnailAlt2({ liveEventId, thumbnailId });
} catch (err) {
  if (err instanceof LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the thumbnail. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Error](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editLiveEventThumbnail(request: LiveEventThumbnails.EditLiveEventThumbnailRequest, options?: RequestOptions): ApiPromise&lt;Picture, LiveEventThumbnails.EditLiveEventThumbnailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits a thumbnail image for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.editLiveEventThumbnail({
    liveEventId,
    thumbnailId,
    userId,
  });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof LiveEventThumbnails.EditLiveEventThumbnailError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the thumbnail. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersLiveEventsPicturesThumbnailIdRequest](src/models/users-live-events-pictures-thumbnail-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[LiveEventThumbnails.EditLiveEventThumbnailError](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editLiveEventThumbnailAlt1(request: LiveEventThumbnails.EditLiveEventThumbnailAlt1Request, options?: RequestOptions): ApiPromise&lt;Picture, LiveEventThumbnails.EditLiveEventThumbnailAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits a thumbnail image for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.editLiveEventThumbnailAlt1({ liveEventId, thumbnailId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof LiveEventThumbnails.EditLiveEventThumbnailAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the thumbnail. |
| <code>body?</code> | <code>[LiveEventsPicturesRequest](src/models/live-events-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[LiveEventThumbnails.EditLiveEventThumbnailAlt1Error](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editLiveEventThumbnailAlt2(request: LiveEventThumbnails.EditLiveEventThumbnailAlt2Request, options?: RequestOptions): ApiPromise&lt;Picture, LiveEventThumbnails.EditLiveEventThumbnailAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits a thumbnail image for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.editLiveEventThumbnailAlt2({ liveEventId, thumbnailId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof LiveEventThumbnails.EditLiveEventThumbnailAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the thumbnail. |
| <code>body?</code> | <code>[MeLiveEventsPicturesRequest](src/models/me-live-events-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[LiveEventThumbnails.EditLiveEventThumbnailAlt2Error](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventThumbnail(request: LiveEventThumbnails.GetLiveEventThumbnailRequest, options?: RequestOptions): ApiPromise&lt;Picture, LiveEventThumbnails.GetLiveEventThumbnailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single thumbnail image of the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.getLiveEventThumbnail({
    liveEventId,
    thumbnailId,
    userId,
  });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof LiveEventThumbnails.GetLiveEventThumbnailError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the thumbnail. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[LiveEventThumbnails.GetLiveEventThumbnailError](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventThumbnailAlt1(request: LiveEventThumbnails.GetLiveEventThumbnailAlt1Request, options?: RequestOptions): ApiPromise&lt;Picture, LiveEventThumbnails.GetLiveEventThumbnailAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single thumbnail image of the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.getLiveEventThumbnailAlt1({ liveEventId, thumbnailId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof LiveEventThumbnails.GetLiveEventThumbnailAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the thumbnail. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[LiveEventThumbnails.GetLiveEventThumbnailAlt1Error](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventThumbnailAlt2(request: LiveEventThumbnails.GetLiveEventThumbnailAlt2Request, options?: RequestOptions): ApiPromise&lt;Picture, LiveEventThumbnails.GetLiveEventThumbnailAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single thumbnail image of the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.getLiveEventThumbnailAlt2({ liveEventId, thumbnailId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof LiveEventThumbnails.GetLiveEventThumbnailAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the thumbnail. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[LiveEventThumbnails.GetLiveEventThumbnailAlt2Error](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventThumbnails(request: LiveEventThumbnails.GetLiveEventThumbnailsRequest, options?: RequestOptions): ApiPromise&lt;PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every thumbnail image of the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.getLiveEventThumbnails({ liveEventId, userId });
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  if (err instanceof LiveEventThumbnails.GetLiveEventThumbnailsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[LiveEventThumbnails.GetLiveEventThumbnailsError](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventThumbnailsAlt1(request: LiveEventThumbnails.GetLiveEventThumbnailsAlt1Request, options?: RequestOptions): ApiPromise&lt;PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every thumbnail image of the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.getLiveEventThumbnailsAlt1({ liveEventId });
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  if (err instanceof LiveEventThumbnails.GetLiveEventThumbnailsAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[LiveEventThumbnails.GetLiveEventThumbnailsAlt1Error](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventThumbnailsAlt2(request: LiveEventThumbnails.GetLiveEventThumbnailsAlt2Request, options?: RequestOptions): ApiPromise&lt;PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every thumbnail image of the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventThumbnails.getLiveEventThumbnailsAlt2({ liveEventId });
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  if (err instanceof LiveEventThumbnails.GetLiveEventThumbnailsAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[LiveEventThumbnails.GetLiveEventThumbnailsAlt2Error](src/resources/live-event-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveEventVideos

> Source: [LiveEventVideos](src/resources/live-event-videos.ts)

<details>
<summary><code>addVideosToLiveEvent(request: LiveEventVideos.AddVideosToLiveEventRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventVideos.AddVideosToLiveEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds multiple videos to the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventVideos.addVideosToLiveEvent({ liveEventId, userId });
} catch (err) {
  if (err instanceof LiveEventVideos.AddVideosToLiveEventError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersLiveEventsVideosRequest1](src/models/users-live-events-videos-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventVideos.AddVideosToLiveEventError](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideosToLiveEventAlt1(request: LiveEventVideos.AddVideosToLiveEventAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventVideos.AddVideosToLiveEventAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds multiple videos to the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventVideos.addVideosToLiveEventAlt1({ liveEventId });
} catch (err) {
  if (err instanceof LiveEventVideos.AddVideosToLiveEventAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[LiveEventsVideosRequest1](src/models/live-events-videos-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventVideos.AddVideosToLiveEventAlt1Error](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideosToLiveEventAlt2(request: LiveEventVideos.AddVideosToLiveEventAlt2Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventVideos.AddVideosToLiveEventAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds multiple videos to the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventVideos.addVideosToLiveEventAlt2({ liveEventId });
} catch (err) {
  if (err instanceof LiveEventVideos.AddVideosToLiveEventAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[MeLiveEventsVideosRequest1](src/models/me-live-events-videos-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventVideos.AddVideosToLiveEventAlt2Error](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventVideo(request: LiveEventVideos.GetLiveEventVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, LiveEventVideos.GetLiveEventVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video in the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventVideos.getLiveEventVideo({ liveEventId, userId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof LiveEventVideos.GetLiveEventVideoError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[LiveEventVideos.GetLiveEventVideoError](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventVideoAlt1(request: LiveEventVideos.GetLiveEventVideoAlt1Request, options?: RequestOptions): ApiPromise&lt;Video, LiveEventVideos.GetLiveEventVideoAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video in the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventVideos.getLiveEventVideoAlt1({ liveEventId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof LiveEventVideos.GetLiveEventVideoAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[LiveEventVideos.GetLiveEventVideoAlt1Error](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventVideoAlt2(request: LiveEventVideos.GetLiveEventVideoAlt2Request, options?: RequestOptions): ApiPromise&lt;Video, LiveEventVideos.GetLiveEventVideoAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video in the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventVideos.getLiveEventVideoAlt2({ liveEventId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof LiveEventVideos.GetLiveEventVideoAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[LiveEventVideos.GetLiveEventVideoAlt2Error](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventVideos(request: LiveEventVideos.GetLiveEventVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, LiveEventVideos.GetLiveEventVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video in the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventVideos.getLiveEventVideos({ liveEventId, userId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof LiveEventVideos.GetLiveEventVideosError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>containingUri?</code> | <code>string</code> | The page that contains the video URI. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable events. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort17](src/models/sort17.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `added` - Sort the results by most recently added videos.<br> * `alphabetical` - Sort the results alphabetically.<br> * `arranged` - Sort the results in the order that the user has arranged the videos.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by creation date.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[LiveEventVideos.GetLiveEventVideosError](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventVideosAlt1(request: LiveEventVideos.GetLiveEventVideosAlt1Request, options?: RequestOptions): ApiPromise&lt;VideoConnection, LiveEventVideos.GetLiveEventVideosAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video in the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventVideos.getLiveEventVideosAlt1({ liveEventId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof LiveEventVideos.GetLiveEventVideosAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>containingUri?</code> | <code>string</code> | The page that contains the video URI. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable events. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort17](src/models/sort17.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `added` - Sort the results by most recently added videos.<br> * `alphabetical` - Sort the results alphabetically.<br> * `arranged` - Sort the results in the order that the user has arranged the videos.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by creation date.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[LiveEventVideos.GetLiveEventVideosAlt1Error](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveEventVideosAlt2(request: LiveEventVideos.GetLiveEventVideosAlt2Request, options?: RequestOptions): ApiPromise&lt;VideoConnection, LiveEventVideos.GetLiveEventVideosAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video in the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveEventVideos.getLiveEventVideosAlt2({ liveEventId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof LiveEventVideos.GetLiveEventVideosAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>containingUri?</code> | <code>string</code> | The page that contains the video URI. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable events. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort17](src/models/sort17.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `added` - Sort the results by most recently added videos.<br> * `alphabetical` - Sort the results alphabetically.<br> * `arranged` - Sort the results in the order that the user has arranged the videos.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by creation date.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[LiveEventVideos.GetLiveEventVideosAlt2Error](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeVideosFromLiveEvent(request: LiveEventVideos.RemoveVideosFromLiveEventRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventVideos.RemoveVideosFromLiveEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes multiple videos from the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventVideos.removeVideosFromLiveEvent({ liveEventId, userId });
} catch (err) {
  if (err instanceof LiveEventVideos.RemoveVideosFromLiveEventError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersLiveEventsVideosRequest](src/models/users-live-events-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventVideos.RemoveVideosFromLiveEventError](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeVideosFromLiveEventAlt1(request: LiveEventVideos.RemoveVideosFromLiveEventAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventVideos.RemoveVideosFromLiveEventAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes multiple videos from the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventVideos.removeVideosFromLiveEventAlt1({ liveEventId });
} catch (err) {
  if (err instanceof LiveEventVideos.RemoveVideosFromLiveEventAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[LiveEventsVideosRequest](src/models/live-events-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventVideos.RemoveVideosFromLiveEventAlt1Error](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeVideosFromLiveEventAlt2(request: LiveEventVideos.RemoveVideosFromLiveEventAlt2Request, options?: RequestOptions): ApiPromise&lt;undefined, LiveEventVideos.RemoveVideosFromLiveEventAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes multiple videos from the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveEventVideos.removeVideosFromLiveEventAlt2({ liveEventId });
} catch (err) {
  if (err instanceof LiveEventVideos.RemoveVideosFromLiveEventAlt2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[MeLiveEventsVideosRequest](src/models/me-live-events-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveEventVideos.RemoveVideosFromLiveEventAlt2Error](src/resources/live-event-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveGraphics

> Source: [LiveGraphics](src/resources/live-graphics.ts)

<details>
<summary><code>addComposerVideoGraphicItem(request: LiveGraphics.AddComposerVideoGraphicItemRequest, options?: RequestOptions): ApiPromise&lt;ComposerGraphics, LiveGraphics.AddComposerVideoGraphicItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method add a new video graphics item to the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveGraphics.addComposerVideoGraphicItem({ liveEventId, body });
  // TODO: Handle 'response' of type ComposerGraphics
} catch (err) {
  if (err instanceof LiveGraphics.AddComposerVideoGraphicItemError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body</code> | <code>[LiveEventsComposerGraphicsVideosRequest](src/models/live-events-composer-graphics-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComposerGraphics](src/models/composer-graphics.ts)</code>

**OnError**: <code>[LiveGraphics.AddComposerVideoGraphicItemError](src/resources/live-graphics.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteComposerVideoGraphicItem(request: LiveGraphics.DeleteComposerVideoGraphicItemRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiveGraphics.DeleteComposerVideoGraphicItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes a video graphics item belonging to the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.liveGraphics.deleteComposerVideoGraphicItem({ liveEventId, videoId });
} catch (err) {
  if (err instanceof LiveGraphics.DeleteComposerVideoGraphicItemError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>videoId</code> | <code>number</code> | The ID of the associated video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[LiveGraphics.DeleteComposerVideoGraphicItemError](src/resources/live-graphics.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getComposerVideoGraphicItems(request: LiveGraphics.GetComposerVideoGraphicItemsRequest, options?: RequestOptions): ApiPromise&lt;ComposerGraphicsConnection, LiveGraphics.GetComposerVideoGraphicItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The method returns every video graphics item belonging to the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveGraphics.getComposerVideoGraphicItems({ liveEventId });
  // TODO: Handle 'response' of type ComposerGraphicsConnection
} catch (err) {
  if (err instanceof LiveGraphics.GetComposerVideoGraphicItemsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComposerGraphicsConnection](src/models/composer-graphics-connection.ts)</code>

**OnError**: <code>[LiveGraphics.GetComposerVideoGraphicItemsError](src/resources/live-graphics.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LiveScenes

> Source: [LiveScenes](src/resources/live-scenes.ts)

<details>
<summary><code>attachGraphicItemToScene(request: LiveScenes.AttachGraphicItemToSceneRequest, options?: RequestOptions): ApiPromise&lt;ComposerScenes, LiveScenes.AttachGraphicItemToSceneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method attaches a graphic item to the specified scene.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveScenes.attachGraphicItemToScene({ liveEventId, sceneId, body });
  // TODO: Handle 'response' of type ComposerScenes
} catch (err) {
  if (err instanceof LiveScenes.AttachGraphicItemToSceneError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>sceneId</code> | <code>string</code> | The ID of the scene. |
| <code>body</code> | <code>[LiveEventsComposerScenesGraphicsRequest](src/models/live-events-composer-scenes-graphics-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComposerScenes](src/models/composer-scenes.ts)</code>

**OnError**: <code>[LiveScenes.AttachGraphicItemToSceneError](src/resources/live-scenes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createComposerScene(request: LiveScenes.CreateComposerSceneRequest, options?: RequestOptions): ApiPromise&lt;ComposerScenes, LiveScenes.CreateComposerSceneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The method creates a new scene for the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveScenes.createComposerScene({ liveEventId });
  // TODO: Handle 'response' of type ComposerScenes
} catch (err) {
  if (err instanceof LiveScenes.CreateComposerSceneError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>body?</code> | <code>[LiveEventsComposerScenesRequest](src/models/live-events-composer-scenes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComposerScenes](src/models/composer-scenes.ts)</code>

**OnError**: <code>[LiveScenes.CreateComposerSceneError](src/resources/live-scenes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getComposerScenes(request: LiveScenes.GetComposerScenesRequest, options?: RequestOptions): ApiPromise&lt;ComposerScenesConnection, LiveScenes.GetComposerScenesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The method returns every scene belonging to the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveScenes.getComposerScenes({ liveEventId });
  // TODO: Handle 'response' of type ComposerScenesConnection
} catch (err) {
  if (err instanceof LiveScenes.GetComposerScenesError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComposerScenesConnection](src/models/composer-scenes-connection.ts)</code>

**OnError**: <code>[LiveScenes.GetComposerScenesError](src/resources/live-scenes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resetComposerScenes(request: LiveScenes.ResetComposerScenesRequest, options?: RequestOptions): ApiPromise&lt;ComposerScenes[], LiveScenes.ResetComposerScenesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The method resets the scenes that belong to the specified event by deleting every existing scene and then recreating the default scene.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveScenes.resetComposerScenes({ liveEventId });
  // TODO: Handle 'response' of type ComposerScenes[]
} catch (err) {
  if (err instanceof LiveScenes.ResetComposerScenesError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComposerScenes](src/models/composer-scenes.ts)[]</code>

**OnError**: <code>[LiveScenes.ResetComposerScenesError](src/resources/live-scenes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateComposerScene(request: LiveScenes.UpdateComposerSceneRequest, options?: RequestOptions): ApiPromise&lt;ComposerScenes, LiveScenes.UpdateComposerSceneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The method updates a scene belonging to the specified event.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.liveScenes.updateComposerScene({ liveEventId, sceneId });
  // TODO: Handle 'response' of type ComposerScenes
} catch (err) {
  if (err instanceof LiveScenes.UpdateComposerSceneError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>liveEventId</code> | <code>number</code> | The ID of the event. |
| <code>sceneId</code> | <code>string</code> | The ID of the scene. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComposerScenes](src/models/composer-scenes.ts)</code>

**OnError**: <code>[LiveScenes.UpdateComposerSceneError](src/resources/live-scenes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OnDemandBackgrounds

> Source: [OnDemandBackgrounds](src/resources/on-demand-backgrounds.ts)

<details>
<summary><code>createVodBackground(request: OnDemandBackgrounds.CreateVodBackgroundRequest, options?: RequestOptions): ApiPromise&lt;Picture, OnDemandBackgrounds.CreateVodBackgroundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a background image to the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandBackgrounds.createVodBackground({ ondemandId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof OnDemandBackgrounds.CreateVodBackgroundError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[OnDemandBackgrounds.CreateVodBackgroundError](src/resources/on-demand-backgrounds.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVodBackground(request: OnDemandBackgrounds.DeleteVodBackgroundRequest, options?: RequestOptions): ApiPromise&lt;undefined, OnDemandBackgrounds.DeleteVodBackgroundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified background image on an On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.onDemandBackgrounds.deleteVodBackground({ backgroundId, ondemandId });
} catch (err) {
  if (err instanceof OnDemandBackgrounds.DeleteVodBackgroundError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>backgroundId</code> | <code>number</code> | The ID of the background image. |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[OnDemandBackgrounds.DeleteVodBackgroundError](src/resources/on-demand-backgrounds.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editVodBackground(request: OnDemandBackgrounds.EditVodBackgroundRequest, options?: RequestOptions): ApiPromise&lt;Picture, OnDemandBackgrounds.EditVodBackgroundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified background image on an On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandBackgrounds.editVodBackground({ backgroundId, ondemandId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof OnDemandBackgrounds.EditVodBackgroundError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>backgroundId</code> | <code>number</code> | The ID of the background image. |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>body?</code> | <code>[OndemandPagesBackgroundsRequest](src/models/ondemand-pages-backgrounds-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[OnDemandBackgrounds.EditVodBackgroundError](src/resources/on-demand-backgrounds.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodBackground(request: OnDemandBackgrounds.GetVodBackgroundRequest, options?: RequestOptions): ApiPromise&lt;Picture, OnDemandBackgrounds.GetVodBackgroundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single background image on the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandBackgrounds.getVodBackground({ backgroundId, ondemandId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof OnDemandBackgrounds.GetVodBackgroundError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>backgroundId</code> | <code>number</code> | The ID of the background image. |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[OnDemandBackgrounds.GetVodBackgroundError](src/resources/on-demand-backgrounds.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodBackgrounds(request: OnDemandBackgrounds.GetVodBackgroundsRequest, options?: RequestOptions): ApiPromise&lt;PictureConnection, OnDemandBackgrounds.GetVodBackgroundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every background image on the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandBackgrounds.getVodBackgrounds({ ondemandId });
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  if (err instanceof OnDemandBackgrounds.GetVodBackgroundsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[OnDemandBackgrounds.GetVodBackgroundsError](src/resources/on-demand-backgrounds.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OnDemandEssentials

> Source: [OnDemandEssentials](src/resources/on-demand-essentials.ts)

<details>
<summary><code>createVod(request: OnDemandEssentials.CreateVodRequest, options?: RequestOptions): ApiPromise&lt;OnDemandPage, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new On Demand page for the specified user. To publish the page, use the [edit](https://developer.vimeo.com/api/reference/on-demand#edit_vod) method.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandEssentials.createVod({ userId, body });
  // TODO: Handle 'response' of type OnDemandPage
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersOndemandPagesRequest](src/models/users-ondemand-pages-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPage](src/models/on-demand-page.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVodAlt1(request: OnDemandEssentials.CreateVodAlt1Request, options?: RequestOptions): ApiPromise&lt;OnDemandPage, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new On Demand page for the specified user. To publish the page, use the [edit](https://developer.vimeo.com/api/reference/on-demand#edit_vod) method.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandEssentials.createVodAlt1({ body });
  // TODO: Handle 'response' of type OnDemandPage
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MeOndemandPagesRequest](src/models/me-ondemand-pages-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPage](src/models/on-demand-page.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVodDraft(request: OnDemandEssentials.DeleteVodDraftRequest, options?: RequestOptions): ApiPromise&lt;undefined, OnDemandEssentials.DeleteVodDraftError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified On Demand page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.onDemandEssentials.deleteVodDraft({ ondemandId });
} catch (err) {
  if (err instanceof OnDemandEssentials.DeleteVodDraftError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[OnDemandEssentials.DeleteVodDraftError](src/resources/on-demand-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editVod(request: OnDemandEssentials.EditVodRequest, options?: RequestOptions): ApiPromise&lt;OnDemandPage, OnDemandEssentials.EditVodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified On Demand page. Use this method to enable preorders on the page or to publish the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandEssentials.editVod({ ondemandId });
  // TODO: Handle 'response' of type OnDemandPage
} catch (err) {
  if (err instanceof OnDemandEssentials.EditVodError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>body?</code> | <code>[OndemandPagesRequest](src/models/ondemand-pages-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPage](src/models/on-demand-page.ts)</code>

**OnError**: <code>[OnDemandEssentials.EditVodError](src/resources/on-demand-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserVods(request: OnDemandEssentials.GetUserVodsRequest, options?: RequestOptions): ApiPromise&lt;OnDemandPageConnection, OnDemandEssentials.GetUserVodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every On Demand page belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandEssentials.getUserVods({ userId });
  // TODO: Handle 'response' of type OnDemandPageConnection
} catch (err) {
  if (err instanceof OnDemandEssentials.GetUserVodsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter18](src/models/filter18.ts)</code> | The type of the page to return.<br><br>Option descriptions:<br> * `film` - The page type is a film.<br> * `series` - The page type is a series. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort32](src/models/sort32.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `added` - Sort the results by most recently added page.<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `modified_time` - Sort the results by time of page modification.<br> * `name` - Sort the results by page name.<br> * `publish.time` - Sort the results by time of page publishing.<br> * `rating` - Sort the results by content rating. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPageConnection](src/models/on-demand-page-connection.ts)</code>

**OnError**: <code>[OnDemandEssentials.GetUserVodsError](src/resources/on-demand-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserVodsAlt1(request: OnDemandEssentials.GetUserVodsAlt1Request, options?: RequestOptions): ApiPromise&lt;OnDemandPageConnection, OnDemandEssentials.GetUserVodsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every On Demand page belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandEssentials.getUserVodsAlt1();
  // TODO: Handle 'response' of type OnDemandPageConnection
} catch (err) {
  if (err instanceof OnDemandEssentials.GetUserVodsAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter18](src/models/filter18.ts)</code> | The type of the page to return.<br><br>Option descriptions:<br> * `film` - The page type is a film.<br> * `series` - The page type is a series. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort32](src/models/sort32.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `added` - Sort the results by most recently added page.<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `modified_time` - Sort the results by time of page modification.<br> * `name` - Sort the results by page name.<br> * `publish.time` - Sort the results by time of page publishing.<br> * `rating` - Sort the results by content rating. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPageConnection](src/models/on-demand-page-connection.ts)</code>

**OnError**: <code>[OnDemandEssentials.GetUserVodsAlt1Error](src/resources/on-demand-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVod(request: OnDemandEssentials.GetVodRequest, options?: RequestOptions): ApiPromise&lt;OnDemandPage, OnDemandEssentials.GetVodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified On Demand page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandEssentials.getVod({ ondemandId });
  // TODO: Handle 'response' of type OnDemandPage
} catch (err) {
  if (err instanceof OnDemandEssentials.GetVodError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPage](src/models/on-demand-page.ts)</code>

**OnError**: <code>[OnDemandEssentials.GetVodError](src/resources/on-demand-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OnDemandGenres

> Source: [OnDemandGenres](src/resources/on-demand-genres.ts)

<details>
<summary><code>addVodGenre(request: OnDemandGenres.AddVodGenreRequest, options?: RequestOptions): ApiPromise&lt;OnDemandGenre, OnDemandGenres.AddVodGenreError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds the specified genre designation to an On Demand page. A page can be associated with a maximum of two genres. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandGenres.addVodGenre({ genreId, ondemandId });
  // TODO: Handle 'response' of type OnDemandGenre
} catch (err) {
  if (err instanceof OnDemandGenres.AddVodGenreError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>genreId</code> | <code>string</code> | The ID of the genre. |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandGenre](src/models/on-demand-genre.ts)</code>

**OnError**: <code>[OnDemandGenres.AddVodGenreError](src/resources/on-demand-genres.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVodGenre(request: OnDemandGenres.DeleteVodGenreRequest, options?: RequestOptions): ApiPromise&lt;undefined, OnDemandGenres.DeleteVodGenreError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a genre association from the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.onDemandGenres.deleteVodGenre({ genreId, ondemandId });
} catch (err) {
  if (err instanceof OnDemandGenres.DeleteVodGenreError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>genreId</code> | <code>string</code> | The ID of the genre. |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[OnDemandGenres.DeleteVodGenreError](src/resources/on-demand-genres.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGenreVod(request: OnDemandGenres.GetGenreVodRequest, options?: RequestOptions): ApiPromise&lt;OnDemandPage, OnDemandGenres.GetGenreVodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single On Demand page that belongs to the specified genre.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandGenres.getGenreVod({ genreId, ondemandId });
  // TODO: Handle 'response' of type OnDemandPage
} catch (err) {
  if (err instanceof OnDemandGenres.GetGenreVodError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>genreId</code> | <code>string</code> | The ID of the genre. |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPage](src/models/on-demand-page.ts)</code>

**OnError**: <code>[OnDemandGenres.GetGenreVodError](src/resources/on-demand-genres.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGenreVods(request: OnDemandGenres.GetGenreVodsRequest, options?: RequestOptions): ApiPromise&lt;OnDemandPageConnection, OnDemandGenres.GetGenreVodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every On Demand page that belongs to the specified genre.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandGenres.getGenreVods({ genreId });
  // TODO: Handle 'response' of type OnDemandPageConnection
} catch (err) {
  if (err instanceof OnDemandGenres.GetGenreVodsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>genreId</code> | <code>string</code> | The ID of the genre. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter24](src/models/filter24.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `country` - Sort the results by country.<br> * `my_region` - Sort the results by user's region. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort41](src/models/sort41.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `name` - Sort the results by name.<br> * `publish.time` - Sort the results by time of publishing.<br> * `videos` - Sort the results by video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPageConnection](src/models/on-demand-page-connection.ts)</code>

**OnError**: <code>[OnDemandGenres.GetGenreVodsError](src/resources/on-demand-genres.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodGenre(request: OnDemandGenres.GetVodGenreRequest, options?: RequestOptions): ApiPromise&lt;OnDemandGenre, OnDemandGenres.GetVodGenreError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single On Demand genre.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandGenres.getVodGenre({ genreId });
  // TODO: Handle 'response' of type OnDemandGenre
} catch (err) {
  if (err instanceof OnDemandGenres.GetVodGenreError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>genreId</code> | <code>string</code> | The ID of the genre. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandGenre](src/models/on-demand-genre.ts)</code>

**OnError**: <code>[OnDemandGenres.GetVodGenreError](src/resources/on-demand-genres.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodGenreByOndemandId(request: OnDemandGenres.GetVodGenreByOndemandIdRequest, options?: RequestOptions): ApiPromise&lt;OnDemandGenre, OnDemandGenres.GetVodGenreByOndemandIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether an On Demand page is associated with the specified genre.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandGenres.getVodGenreByOndemandId({ genreId, ondemandId });
  // TODO: Handle 'response' of type OnDemandGenre
} catch (err) {
  if (err instanceof OnDemandGenres.GetVodGenreByOndemandIdError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>genreId</code> | <code>string</code> | The ID of the genre. |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandGenre](src/models/on-demand-genre.ts)</code>

**OnError**: <code>[OnDemandGenres.GetVodGenreByOndemandIdError](src/resources/on-demand-genres.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodGenres(options?: RequestOptions): ApiPromise&lt;OnDemandGenreConnection, OnDemandGenres.GetVodGenresError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every existing On Demand genre.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandGenres.getVodGenres();
  // TODO: Handle 'response' of type OnDemandGenreConnection
} catch (err) {
  if (err instanceof OnDemandGenres.GetVodGenresError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandGenreConnection](src/models/on-demand-genre-connection.ts)</code>

**OnError**: <code>[OnDemandGenres.GetVodGenresError](src/resources/on-demand-genres.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodGenresByOndemandId(request: OnDemandGenres.GetVodGenresByOndemandIdRequest, options?: RequestOptions): ApiPromise&lt;OnDemandGenreConnection, OnDemandGenres.GetVodGenresByOndemandIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every genre associated with the specified On Demand page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandGenres.getVodGenresByOndemandId({ ondemandId });
  // TODO: Handle 'response' of type OnDemandGenreConnection
} catch (err) {
  if (err instanceof OnDemandGenres.GetVodGenresByOndemandIdError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandGenreConnection](src/models/on-demand-genre-connection.ts)</code>

**OnError**: <code>[OnDemandGenres.GetVodGenresByOndemandIdError](src/resources/on-demand-genres.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OnDemandPosters

> Source: [OnDemandPosters](src/resources/on-demand-posters.ts)

<details>
<summary><code>addVodPoster(request: OnDemandPosters.AddVodPosterRequest, options?: RequestOptions): ApiPromise&lt;Picture, OnDemandPosters.AddVodPosterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a poster image to the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandPosters.addVodPoster({ ondemandId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof OnDemandPosters.AddVodPosterError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[OnDemandPosters.AddVodPosterError](src/resources/on-demand-posters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editVodPoster(request: OnDemandPosters.EditVodPosterRequest, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits a poster image on the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandPosters.editVodPoster({ ondemandId, posterId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>posterId</code> | <code>number</code> | The ID of the poster. |
| <code>body?</code> | <code>[OndemandPagesPicturesRequest](src/models/ondemand-pages-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodPoster(request: OnDemandPosters.GetVodPosterRequest, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single poster on the specified On Demand page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandPosters.getVodPoster({ ondemandId, posterId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>posterId</code> | <code>number</code> | The ID of the poster. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodPosters(request: OnDemandPosters.GetVodPostersRequest, options?: RequestOptions): ApiPromise&lt;PictureConnection, OnDemandPosters.GetVodPostersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every poster on the specified On Demand page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandPosters.getVodPosters({ ondemandId });
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  if (err instanceof OnDemandPosters.GetVodPostersError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[OnDemandPosters.GetVodPostersError](src/resources/on-demand-posters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OnDemandPromotions

> Source: [OnDemandPromotions](src/resources/on-demand-promotions.ts)

<details>
<summary><code>createVodPromotion(request: OnDemandPromotions.CreateVodPromotionRequest, options?: RequestOptions): ApiPromise&lt;OnDemandPromotion, OnDemandPromotions.CreateVodPromotionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a promotion to the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandPromotions.createVodPromotion({ ondemandId, body });
  // TODO: Handle 'response' of type OnDemandPromotion
} catch (err) {
  if (err instanceof OnDemandPromotions.CreateVodPromotionError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>body</code> | <code>[OndemandPagesPromotionsRequest](src/models/ondemand-pages-promotions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPromotion](src/models/on-demand-promotion.ts)</code>

**OnError**: <code>[OnDemandPromotions.CreateVodPromotionError](src/resources/on-demand-promotions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVodPromotion(request: OnDemandPromotions.DeleteVodPromotionRequest, options?: RequestOptions): ApiPromise&lt;undefined, OnDemandPromotions.DeleteVodPromotionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes a promotion on the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.onDemandPromotions.deleteVodPromotion({ ondemandId, promotionId });
} catch (err) {
  if (err instanceof OnDemandPromotions.DeleteVodPromotionError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>promotionId</code> | <code>number</code> | The ID of the promotion. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[OnDemandPromotions.DeleteVodPromotionError](src/resources/on-demand-promotions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodPromotion(request: OnDemandPromotions.GetVodPromotionRequest, options?: RequestOptions): ApiPromise&lt;OnDemandPromotion, OnDemandPromotions.GetVodPromotionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single promotion on the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandPromotions.getVodPromotion({ ondemandId, promotionId });
  // TODO: Handle 'response' of type OnDemandPromotion
} catch (err) {
  if (err instanceof OnDemandPromotions.GetVodPromotionError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>promotionId</code> | <code>number</code> | The ID of the promotion. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPromotion](src/models/on-demand-promotion.ts)</code>

**OnError**: <code>[OnDemandPromotions.GetVodPromotionError](src/resources/on-demand-promotions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodPromotionCodes(request: OnDemandPromotions.GetVodPromotionCodesRequest, options?: RequestOptions): ApiPromise&lt;OnDemandPromotionCode, OnDemandPromotions.GetVodPromotionCodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every code of the specified promotion on an On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandPromotions.getVodPromotionCodes({ ondemandId, promotionId });
  // TODO: Handle 'response' of type OnDemandPromotionCode
} catch (err) {
  if (err instanceof OnDemandPromotions.GetVodPromotionCodesError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>promotionId</code> | <code>number</code> | The ID of the promotion. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPromotionCode](src/models/on-demand-promotion-code.ts)</code>

**OnError**: <code>[OnDemandPromotions.GetVodPromotionCodesError](src/resources/on-demand-promotions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodPromotions(request: OnDemandPromotions.GetVodPromotionsRequest, options?: RequestOptions): ApiPromise&lt;OnDemandPromotion, OnDemandPromotions.GetVodPromotionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every promotion on the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandPromotions.getVodPromotions({ ondemandId, filter });
  // TODO: Handle 'response' of type OnDemandPromotion
} catch (err) {
  if (err instanceof OnDemandPromotions.GetVodPromotionsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>filter</code> | <code>[Filter26](src/models/filter26.ts)</code> | The type of filter to apply to the results.<br><br>Option descriptions:<br> * `batch` - Filter the results by the `batch` promotion.<br> * `default` - Filter the results by the default promotion.<br> * `single` - Filter the results by the `single` promotion.<br> * `vip` - Filter the results by the `vip` promotion. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPromotion](src/models/on-demand-promotion.ts)</code>

**OnError**: <code>[OnDemandPromotions.GetVodPromotionsError](src/resources/on-demand-promotions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OnDemandPurchasesAndRentals

> Source: [OnDemandPurchasesAndRentals](src/resources/on-demand-purchases-and-rentals.ts)

<details>
<summary><code>checkIfVodWasPurchasedAlt1(request: OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Request, options?: RequestOptions): ApiPromise&lt;OnDemandPage, OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the authenticated user has made a purchase or rental from the specified On Demand page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandPurchasesAndRentals.checkIfVodWasPurchasedAlt1({ ondemandId });
  // TODO: Handle 'response' of type OnDemandPage
} catch (err) {
  if (
    err instanceof OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Error &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPage](src/models/on-demand-page.ts)</code>

**OnError**: <code>[OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Error](src/resources/on-demand-purchases-and-rentals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodPurchases(request: OnDemandPurchasesAndRentals.GetVodPurchasesRequest, options?: RequestOptions): ApiPromise&lt;OnDemandPageConnection, OnDemandPurchasesAndRentals.GetVodPurchasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every purchase and rental that the authenticated user has made across all On Demand pages.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandPurchasesAndRentals.getVodPurchases({ userId });
  // TODO: Handle 'response' of type OnDemandPageConnection
} catch (err) {
  if (err instanceof OnDemandPurchasesAndRentals.GetVodPurchasesError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter19](src/models/filter19.ts)</code> | The type of the On Demand video to filter on.<br><br>Option descriptions:<br> * `all` - Filter by all video types.<br> * `expiring_soon` - Filter by videos that expire soon.<br> * `film` - Filter by film.<br> * `important` - Filter by pages that are about to expire.<br> * `purchased` - Filter by purchased videos.<br> * `rented` - Filter by rented videos.<br> * `series` - Filter by series.<br> * `subscription` - Filter by video subscription.<br> * `unwatched` - Filter by unwatched videos.<br> * `watched` - Filter by watched videos. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort33](src/models/sort33.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `added` - Sort the results by most recently added video.<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `name` - Sort the results by video name.<br> * `purchase_time` - Sort the results by time of video purchase.<br> * `rating` - Sort the results by content rating.<br> * `release_date` - Sort the results by video release date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPageConnection](src/models/on-demand-page-connection.ts)</code>

**OnError**: <code>[OnDemandPurchasesAndRentals.GetVodPurchasesError](src/resources/on-demand-purchases-and-rentals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodPurchasesAlt1(request: OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Request, options?: RequestOptions): ApiPromise&lt;OnDemandPageConnection, OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every purchase and rental that the authenticated user has made across all On Demand pages.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandPurchasesAndRentals.getVodPurchasesAlt1();
  // TODO: Handle 'response' of type OnDemandPageConnection
} catch (err) {
  if (
    err instanceof OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Error && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter19](src/models/filter19.ts)</code> | The type of the On Demand video to filter on.<br><br>Option descriptions:<br> * `all` - Filter by all video types.<br> * `expiring_soon` - Filter by videos that expire soon.<br> * `film` - Filter by film.<br> * `important` - Filter by pages that are about to expire.<br> * `purchased` - Filter by purchased videos.<br> * `rented` - Filter by rented videos.<br> * `series` - Filter by series.<br> * `subscription` - Filter by video subscription.<br> * `unwatched` - Filter by unwatched videos.<br> * `watched` - Filter by watched videos. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort33](src/models/sort33.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `added` - Sort the results by most recently added video.<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date.<br> * `name` - Sort the results by video name.<br> * `purchase_time` - Sort the results by time of video purchase.<br> * `rating` - Sort the results by content rating.<br> * `release_date` - Sort the results by video release date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandPageConnection](src/models/on-demand-page-connection.ts)</code>

**OnError**: <code>[OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Error](src/resources/on-demand-purchases-and-rentals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OnDemandRegions

> Source: [OnDemandRegions](src/resources/on-demand-regions.ts)

<details>
<summary><code>addVodRegion(request: OnDemandRegions.AddVodRegionRequest, options?: RequestOptions): ApiPromise&lt;OnDemandRegion, OnDemandRegions.AddVodRegionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a single region to the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandRegions.addVodRegion({ country, ondemandId });
  // TODO: Handle 'response' of type OnDemandRegion
} catch (err) {
  if (err instanceof OnDemandRegions.AddVodRegionError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>string</code> | The country code of the region to add. |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandRegion](src/models/on-demand-region.ts)</code>

**OnError**: <code>[OnDemandRegions.AddVodRegionError](src/resources/on-demand-regions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVodRegion(request: OnDemandRegions.DeleteVodRegionRequest, options?: RequestOptions): ApiPromise&lt;undefined, OnDemandRegions.DeleteVodRegionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a single region from the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.onDemandRegions.deleteVodRegion({ country, ondemandId });
} catch (err) {
  if (err instanceof OnDemandRegions.DeleteVodRegionError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>string</code> | The country code of the region to remove. |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[OnDemandRegions.DeleteVodRegionError](src/resources/on-demand-regions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVodRegions(request: OnDemandRegions.DeleteVodRegionsRequest, options?: RequestOptions): ApiPromise&lt;OnDemandRegion[], OnDemandRegions.DeleteVodRegionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes multiple regions from the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandRegions.deleteVodRegions({ ondemandId });
  // TODO: Handle 'response' of type OnDemandRegion[]
} catch (err) {
  if (err instanceof OnDemandRegions.DeleteVodRegionsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>body?</code> | <code>[OndemandPagesRegionsRequest](src/models/ondemand-pages-regions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandRegion](src/models/on-demand-region.ts)[]</code>

**OnError**: <code>[OnDemandRegions.DeleteVodRegionsError](src/resources/on-demand-regions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRegion(request: OnDemandRegions.GetRegionRequest, options?: RequestOptions): ApiPromise&lt;OnDemandRegion, OnDemandRegions.GetRegionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single On Demand region.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandRegions.getRegion({ country });
  // TODO: Handle 'response' of type OnDemandRegion
} catch (err) {
  if (err instanceof OnDemandRegions.GetRegionError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>string</code> | The country code of the region to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandRegion](src/models/on-demand-region.ts)</code>

**OnError**: <code>[OnDemandRegions.GetRegionError](src/resources/on-demand-regions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRegions(options?: RequestOptions): ApiPromise&lt;OnDemandRegionConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every existing On Demand region.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandRegions.getRegions();
  // TODO: Handle 'response' of type OnDemandRegionConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandRegionConnection](src/models/on-demand-region-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodRegion(request: OnDemandRegions.GetVodRegionRequest, options?: RequestOptions): ApiPromise&lt;OnDemandRegion, OnDemandRegions.GetVodRegionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single region on the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandRegions.getVodRegion({ country, ondemandId });
  // TODO: Handle 'response' of type OnDemandRegion
} catch (err) {
  if (err instanceof OnDemandRegions.GetVodRegionError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>string</code> | The country code of the region to return. |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandRegion](src/models/on-demand-region.ts)</code>

**OnError**: <code>[OnDemandRegions.GetVodRegionError](src/resources/on-demand-regions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodRegions(request: OnDemandRegions.GetVodRegionsRequest, options?: RequestOptions): ApiPromise&lt;OnDemandRegionConnection, OnDemandRegions.GetVodRegionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every region on the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandRegions.getVodRegions({ ondemandId });
  // TODO: Handle 'response' of type OnDemandRegionConnection
} catch (err) {
  if (err instanceof OnDemandRegions.GetVodRegionsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandRegionConnection](src/models/on-demand-region-connection.ts)</code>

**OnError**: <code>[OnDemandRegions.GetVodRegionsError](src/resources/on-demand-regions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setVodRegions(request: OnDemandRegions.SetVodRegionsRequest, options?: RequestOptions): ApiPromise&lt;OnDemandRegion, OnDemandRegions.SetVodRegionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds multiple regions to the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandRegions.setVodRegions({ ondemandId, body });
  // TODO: Handle 'response' of type OnDemandRegion
} catch (err) {
  if (err instanceof OnDemandRegions.SetVodRegionsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>body</code> | <code>[OndemandPagesRegionsRequest1](src/models/ondemand-pages-regions-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandRegion](src/models/on-demand-region.ts)</code>

**OnError**: <code>[OnDemandRegions.SetVodRegionsError](src/resources/on-demand-regions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OnDemandSeasons

> Source: [OnDemandSeasons](src/resources/on-demand-seasons.ts)

<details>
<summary><code>getVodSeason(request: OnDemandSeasons.GetVodSeasonRequest, options?: RequestOptions): ApiPromise&lt;OnDemandSeason, OnDemandSeasons.GetVodSeasonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single season on the specified On Demand page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandSeasons.getVodSeason({ ondemandId, seasonId });
  // TODO: Handle 'response' of type OnDemandSeason
} catch (err) {
  if (err instanceof OnDemandSeasons.GetVodSeasonError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>seasonId</code> | <code>number</code> | The ID of the season. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandSeason](src/models/on-demand-season.ts)</code>

**OnError**: <code>[OnDemandSeasons.GetVodSeasonError](src/resources/on-demand-seasons.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodSeasonVideos(request: OnDemandSeasons.GetVodSeasonVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video in the specified season on an On Demand page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandSeasons.getVodSeasonVideos({ ondemandId, seasonId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>seasonId</code> | <code>number</code> | The ID of the season. |
| <code>filter?</code> | <code>[Filter27](src/models/filter27.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `viewable` - Filter by viewable videos. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort44](src/models/sort44.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `date` - Sort the results by date.<br> * `default` - Use the default sorting method.<br> * `manual` - Sort the results manually.<br> * `name` - Sort the results by name.<br> * `purchase_time` - Sort the results by time of purchase.<br> * `release_date` - Sort the results by release date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodSeasons(request: OnDemandSeasons.GetVodSeasonsRequest, options?: RequestOptions): ApiPromise&lt;OnDemandSeasonConnection, OnDemandSeasons.GetVodSeasonsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every season on the specified On Demand page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandSeasons.getVodSeasons({ ondemandId });
  // TODO: Handle 'response' of type OnDemandSeasonConnection
} catch (err) {
  if (err instanceof OnDemandSeasons.GetVodSeasonsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter27](src/models/filter27.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `viewable` - Filter by viewable seasons. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort43](src/models/sort43.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `date` - Sort the results by date.<br> * `manual` - Sort the results manually. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandSeasonConnection](src/models/on-demand-season-connection.ts)</code>

**OnError**: <code>[OnDemandSeasons.GetVodSeasonsError](src/resources/on-demand-seasons.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OnDemandVideos

> Source: [OnDemandVideos](src/resources/on-demand-videos.ts)

<details>
<summary><code>addVideoToVod(request: OnDemandVideos.AddVideoToVodRequest, options?: RequestOptions): ApiPromise&lt;OnDemandVideo, OnDemandVideos.AddVideoToVodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a video to the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandVideos.addVideoToVod({ ondemandId, videoId, body });
  // TODO: Handle 'response' of type OnDemandVideo
} catch (err) {
  if (err instanceof OnDemandVideos.AddVideoToVodError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body</code> | <code>[OndemandPagesVideosRequest](src/models/ondemand-pages-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandVideo](src/models/on-demand-video.ts)</code>

**OnError**: <code>[OnDemandVideos.AddVideoToVodError](src/resources/on-demand-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoFromVod(request: OnDemandVideos.DeleteVideoFromVodRequest, options?: RequestOptions): ApiPromise&lt;undefined, OnDemandVideos.DeleteVideoFromVodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a video from the specified On Demand page. The authenticated user must be the owner of the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.onDemandVideos.deleteVideoFromVod({ ondemandId, videoId });
} catch (err) {
  if (err instanceof OnDemandVideos.DeleteVideoFromVodError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[OnDemandVideos.DeleteVideoFromVodError](src/resources/on-demand-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodVideo(request: OnDemandVideos.GetVodVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video on the specified On Demand page. Use this method to determine whether the video is on the page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandVideos.getVodVideo({ ondemandId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVodVideos(request: OnDemandVideos.GetVodVideosRequest, options?: RequestOptions): ApiPromise&lt;OnDemandVideoConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video on the specified On Demand page.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onDemandVideos.getVodVideos({ ondemandId });
  // TODO: Handle 'response' of type OnDemandVideoConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ondemandId</code> | <code>number</code> | The ID of the On Demand page. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter29](src/models/filter29.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `all` - Filter for all videos.<br> * `buy` - Filter for purchased videos.<br> * `expiring_soon` - Filter for videos that expire soon.<br> * `extra` - Filter for extra footage videos.<br> * `main` - Filter for main videos.<br> * `main.viewable` - Filter for videos that are both the main video and are viewable.<br> * `rent` - Filter for rented videos.<br> * `trailer` - Filter for trailer videos.<br> * `unwatched` - Filter for unwatched videos.<br> * `viewable` - Filter for videos that are viewable.<br> * `watched` - Filter for watched videos. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort45](src/models/sort45.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `date` - Sort the results by date.<br> * `default` - Use the default sorting method.<br> * `episode` - Sort the results by episode.<br> * `manual` - Sort the results manually.<br> * `name` - Sort the results by name.<br> * `purchase_time` - Sort the results by time of purchase.<br> * `release_date` - Sort the results by release date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnDemandVideoConnection](src/models/on-demand-video-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentsEssentials

> Source: [PaymentsEssentials](src/resources/payments-essentials.ts)

<details>
<summary><code>deletePaymentMethod(request: PaymentsEssentials.DeletePaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentsEssentials.DeletePaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified Vimeo payments service payment method.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.paymentsEssentials.deletePaymentMethod({ paymentMethodId });
} catch (err) {
  if (err instanceof PaymentsEssentials.DeletePaymentMethodError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[PaymentsEssentials.DeletePaymentMethodError](src/resources/payments-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentMethodInfo(request: PaymentsEssentials.GetPaymentMethodInfoRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethod, PaymentsEssentials.GetPaymentMethodInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns information about the specified Vimeo payments service payment method.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsEssentials.getPaymentMethodInfo({ paymentMethodId });
  // TODO: Handle 'response' of type PaymentMethod
} catch (err) {
  if (err instanceof PaymentsEssentials.GetPaymentMethodInfoError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentMethod](src/models/payment-method.ts)</code>

**OnError**: <code>[PaymentsEssentials.GetPaymentMethodInfoError](src/resources/payments-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubscriptionInfo(request: PaymentsEssentials.GetSubscriptionInfoRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns information about the specified Vimeo payments service subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.paymentsEssentials.getSubscriptionInfo({ subscriptionId, userId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the subscription. |
| <code>userId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentMethods(request: PaymentsEssentials.ListPaymentMethodsRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethodConnection, PaymentsEssentials.ListPaymentMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a list of all Vimeo payments service payment methods that are available to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsEssentials.listPaymentMethods();
  // TODO: Handle 'response' of type PaymentMethodConnection
} catch (err) {
  if (err instanceof PaymentsEssentials.ListPaymentMethodsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cardmemberName?</code> | <code>string</code> | The name of the card member. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>showDisabled?</code> | <code>boolean</code> | Whether to return disabled payment methods. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentMethodConnection](src/models/payment-method-connection.ts)</code>

**OnError**: <code>[PaymentsEssentials.ListPaymentMethodsError](src/resources/payments-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PortfoliosEssentials

> Source: [PortfoliosEssentials](src/resources/portfolios-essentials.ts)

<details>
<summary><code>getPortfolio(request: PortfoliosEssentials.GetPortfolioRequest, options?: RequestOptions): ApiPromise&lt;Portfolio, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfoliosEssentials.getPortfolio({ portfolioId, userId });
  // TODO: Handle 'response' of type Portfolio
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioId</code> | <code>number</code> | The ID of the portfolio. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Portfolio](src/models/portfolio.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolioAlt1(request: PortfoliosEssentials.GetPortfolioAlt1Request, options?: RequestOptions): ApiPromise&lt;Portfolio, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfoliosEssentials.getPortfolioAlt1({ portfolioId });
  // TODO: Handle 'response' of type Portfolio
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioId</code> | <code>number</code> | The ID of the portfolio. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Portfolio](src/models/portfolio.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolios(request: PortfoliosEssentials.GetPortfoliosRequest, options?: RequestOptions): ApiPromise&lt;PortfolioConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfoliosEssentials.getPortfolios({ userId });
  // TODO: Handle 'response' of type PortfolioConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfolioConnection](src/models/portfolio-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfoliosAlt1(request: PortfoliosEssentials.GetPortfoliosAlt1Request, options?: RequestOptions): ApiPromise&lt;PortfolioConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfoliosEssentials.getPortfoliosAlt1();
  // TODO: Handle 'response' of type PortfolioConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfolioConnection](src/models/portfolio-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PortfoliosVideos

> Source: [PortfoliosVideos](src/resources/portfolios-videos.ts)

<details>
<summary><code>addVideoToPortfolio(request: PortfoliosVideos.AddVideoToPortfolioRequest, options?: RequestOptions): ApiPromise&lt;undefined, PortfoliosVideos.AddVideoToPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a video to the specified portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.portfoliosVideos.addVideoToPortfolio({ portfolioId, userId, videoId });
} catch (err) {
  if (err instanceof PortfoliosVideos.AddVideoToPortfolioError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioId</code> | <code>number</code> | The ID of the portfolio. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[PortfoliosVideos.AddVideoToPortfolioError](src/resources/portfolios-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideoToPortfolioAlt1(request: PortfoliosVideos.AddVideoToPortfolioAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, PortfoliosVideos.AddVideoToPortfolioAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a video to the specified portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.portfoliosVideos.addVideoToPortfolioAlt1({ portfolioId, videoId });
} catch (err) {
  if (err instanceof PortfoliosVideos.AddVideoToPortfolioAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioId</code> | <code>number</code> | The ID of the portfolio. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[PortfoliosVideos.AddVideoToPortfolioAlt1Error](src/resources/portfolios-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoFromPortfolio(request: PortfoliosVideos.DeleteVideoFromPortfolioRequest, options?: RequestOptions): ApiPromise&lt;undefined, PortfoliosVideos.DeleteVideoFromPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a video from the specified portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.portfoliosVideos.deleteVideoFromPortfolio({ portfolioId, userId, videoId });
} catch (err) {
  if (err instanceof PortfoliosVideos.DeleteVideoFromPortfolioError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioId</code> | <code>number</code> | The ID of the portfolio. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[PortfoliosVideos.DeleteVideoFromPortfolioError](src/resources/portfolios-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoFromPortfolioAlt1(request: PortfoliosVideos.DeleteVideoFromPortfolioAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, PortfoliosVideos.DeleteVideoFromPortfolioAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes a video from the specified portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.portfoliosVideos.deleteVideoFromPortfolioAlt1({ portfolioId, videoId });
} catch (err) {
  if (
    err instanceof PortfoliosVideos.DeleteVideoFromPortfolioAlt1Error && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioId</code> | <code>number</code> | The ID of the portfolio. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[PortfoliosVideos.DeleteVideoFromPortfolioAlt1Error](src/resources/portfolios-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolioVideo(request: PortfoliosVideos.GetPortfolioVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video from the specified portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfoliosVideos.getPortfolioVideo({ portfolioId, userId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioId</code> | <code>number</code> | The ID of the portfolio. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolioVideoAlt1(request: PortfoliosVideos.GetPortfolioVideoAlt1Request, options?: RequestOptions): ApiPromise&lt;Video, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video from the specified portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfoliosVideos.getPortfolioVideoAlt1({ portfolioId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioId</code> | <code>number</code> | The ID of the portfolio. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolioVideos(request: PortfoliosVideos.GetPortfolioVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video from the specified portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfoliosVideos.getPortfolioVideos({ portfolioId, userId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioId</code> | <code>number</code> | The ID of the portfolio. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>containingUri?</code> | <code>string</code> | The page that contains the video URI. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort35](src/models/sort35.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by creation date.<br> * `default` - Use the default sorting method.<br> * `likes` - Sort the results by number of likes.<br> * `manual` - Sort the results by their user-specified order.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolioVideosAlt1(request: PortfoliosVideos.GetPortfolioVideosAlt1Request, options?: RequestOptions): ApiPromise&lt;VideoConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video from the specified portfolio belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfoliosVideos.getPortfolioVideosAlt1({ portfolioId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioId</code> | <code>number</code> | The ID of the portfolio. |
| <code>containingUri?</code> | <code>string</code> | The page that contains the video URI. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort35](src/models/sort35.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by creation date.<br> * `default` - Use the default sorting method.<br> * `likes` - Sort the results by number of likes.<br> * `manual` - Sort the results by their user-specified order.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SearchFederated

> Source: [SearchFederated](src/resources/search-federated.ts)

<details>
<summary><code>federatedSearchUserItems(request: SearchFederated.FederatedSearchUserItemsRequest, options?: RequestOptions): ApiPromise&lt;FederatedSearchItemsConnection, SearchFederated.FederatedSearchUserItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the federated search results of the authenticated user's videos and folders according to a search query.

If no query is provided, the method returns items sorted by the most recent user action.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchFederated.federatedSearchUserItems({ userId });
  // TODO: Handle 'response' of type FederatedSearchItemsConnection
} catch (err) {
  if (err instanceof SearchFederated.FederatedSearchUserItemsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter30](src/models/filter30.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `video` - Return videos. |
| <code>filterPrivacy?</code> | <code>string</code> | A comma-separated list of privacy settings to filter the results by. Possible values include `unlisted` for videos that are accessible but not searchable from Vimeo, `password` for videos on Vimeo that anyone can access with the correct password, `hide-from-vimeo` for videos that don't appear on Vimeo, `private` for videos on Vimeo that only their owner can access, and `public` for videos on Vimeo that anyone can access. By default, all privacy settings are considered. |
| <code>modifiedEndDate?</code> | <code>string</code> | The inclusive end date of the range. |
| <code>modifiedStartDate?</code> | <code>string</code> | The inclusive start date of the range. This value must be earlier than the modified end date. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>queryFields?</code> | <code>string</code> | A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`. |
| <code>sort?</code> | <code>[Sort46](src/models/sort46.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date.<br> * `default` - Use the default sorting order.<br> * `duration` - Sort the results by duration, where available.<br> * `folder_path` - Sort the results by the hierarchy of folders.<br> * `last_user_action_event_date` - Sort the results by most recent user interaction. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FederatedSearchItemsConnection](src/models/federated-search-items-connection.ts)</code>

**OnError**: <code>[SearchFederated.FederatedSearchUserItemsError](src/resources/search-federated.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>federatedSearchUserItemsAlt1(request: SearchFederated.FederatedSearchUserItemsAlt1Request, options?: RequestOptions): ApiPromise&lt;FederatedSearchItemsConnection, SearchFederated.FederatedSearchUserItemsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the federated search results of the authenticated user's videos and folders according to a search query.

If no query is provided, the method returns items sorted by the most recent user action.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchFederated.federatedSearchUserItemsAlt1({ workspaceUuid });
  // TODO: Handle 'response' of type FederatedSearchItemsConnection
} catch (err) {
  if (err instanceof SearchFederated.FederatedSearchUserItemsAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceUuid</code> | <code>string</code> | The UUID of the workspace. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter30](src/models/filter30.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `video` - Return videos. |
| <code>filterPrivacy?</code> | <code>string</code> | A comma-separated list of privacy settings to filter the results by. Possible values include `unlisted` for videos that are accessible but not searchable from Vimeo, `password` for videos on Vimeo that anyone can access with the correct password, `hide-from-vimeo` for videos that don't appear on Vimeo, `private` for videos on Vimeo that only their owner can access, and `public` for videos on Vimeo that anyone can access. By default, all privacy settings are considered. |
| <code>modifiedEndDate?</code> | <code>string</code> | The inclusive end date of the range. |
| <code>modifiedStartDate?</code> | <code>string</code> | The inclusive start date of the range. This value must be earlier than the modified end date. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>queryFields?</code> | <code>string</code> | A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`. |
| <code>sort?</code> | <code>[Sort46](src/models/sort46.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date.<br> * `default` - Use the default sorting order.<br> * `duration` - Sort the results by duration, where available.<br> * `folder_path` - Sort the results by the hierarchy of folders.<br> * `last_user_action_event_date` - Sort the results by most recent user interaction. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FederatedSearchItemsConnection](src/models/federated-search-items-connection.ts)</code>

**OnError**: <code>[SearchFederated.FederatedSearchUserItemsAlt1Error](src/resources/search-federated.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ShowcasesCustomShowcaseLogos

> Source: [ShowcasesCustomShowcaseLogos](src/resources/showcases-custom-showcase-logos.ts)

<details>
<summary><code>createShowcaseLogo(request: ShowcasesCustomShowcaseLogos.CreateShowcaseLogoRequest, options?: RequestOptions): ApiPromise&lt;Picture, ShowcasesCustomShowcaseLogos.CreateShowcaseLogoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds an image file as a custom logo to the specified showcase. The authenticated user must be the owner of the showcase.

For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesCustomShowcaseLogos.createShowcaseLogo({ albumId, userId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (
    err instanceof ShowcasesCustomShowcaseLogos.CreateShowcaseLogoError && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ShowcasesCustomShowcaseLogos.CreateShowcaseLogoError](src/resources/showcases-custom-showcase-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteShowcaseLogo(request: ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified custom logo from its showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesCustomShowcaseLogos.deleteShowcaseLogo({ albumId, logoId, userId });
} catch (err) {
  if (
    err instanceof ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoError && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>logoId</code> | <code>number</code> | The ID of the custom logo. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoError](src/resources/showcases-custom-showcase-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcaseLogo(request: ShowcasesCustomShowcaseLogos.GetShowcaseLogoRequest, options?: RequestOptions): ApiPromise&lt;Picture, ShowcasesCustomShowcaseLogos.GetShowcaseLogoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single custom logo of the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesCustomShowcaseLogos.getShowcaseLogo({ albumId, logoId, userId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (
    err instanceof ShowcasesCustomShowcaseLogos.GetShowcaseLogoError && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>logoId</code> | <code>number</code> | The ID of the custom logo. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ShowcasesCustomShowcaseLogos.GetShowcaseLogoError](src/resources/showcases-custom-showcase-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcaseLogos(request: ShowcasesCustomShowcaseLogos.GetShowcaseLogosRequest, options?: RequestOptions): ApiPromise&lt;PictureConnection, ShowcasesCustomShowcaseLogos.GetShowcaseLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every custom logo of the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesCustomShowcaseLogos.getShowcaseLogos({ albumId, userId });
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  if (
    err instanceof ShowcasesCustomShowcaseLogos.GetShowcaseLogosError && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[ShowcasesCustomShowcaseLogos.GetShowcaseLogosError](src/resources/showcases-custom-showcase-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceShowcaseLogo(request: ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoRequest, options?: RequestOptions): ApiPromise&lt;Picture, ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method replaces the specified custom showcase logo with a new image file. The authenticated user must be the owner of the showcase.

For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesCustomShowcaseLogos.replaceShowcaseLogo({ albumId, logoId, userId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (
    err instanceof ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoError && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>logoId</code> | <code>number</code> | The ID of the custom logo. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersAlbumsLogosLogoIdRequest](src/models/users-albums-logos-logo-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoError](src/resources/showcases-custom-showcase-logos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ShowcasesCustomShowcaseThumbnails

> Source: [ShowcasesCustomShowcaseThumbnails](src/resources/showcases-custom-showcase-thumbnails.ts)

<details>
<summary><code>createShowcaseCustomThumb(request: ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbRequest, options?: RequestOptions): ApiPromise&lt;Picture, ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds an uploaded image file as a custom thumbnail for the specified showcase. The image doesn't need to be a still from a showcase video, unlike with the [standard thumbnail method](https://developer.vimeo.com/api/reference/showcases#set_video_as_showcase_thumbnail). The authenticated user must be the owner of the showcase.

For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide, and follow the same steps.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesCustomShowcaseThumbnails.createShowcaseCustomThumb({
    albumId,
    userId,
  });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (
    err instanceof ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbError &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbError](src/resources/showcases-custom-showcase-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteShowcaseCustomThumbnail(request: ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified custom thumbnail from its showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesCustomShowcaseThumbnails.deleteShowcaseCustomThumbnail({
    albumId,
    thumbnailId,
    userId,
  });
} catch (err) {
  if (
    err instanceof ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailError &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the custom thumbnail. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailError](src/resources/showcases-custom-showcase-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcaseCustomThumbnail(request: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailRequest, options?: RequestOptions): ApiPromise&lt;Picture, ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single custom thumbnail of the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesCustomShowcaseThumbnails.getShowcaseCustomThumbnail({
    albumId,
    thumbnailId,
    userId,
  });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (
    err instanceof ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailError &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the custom thumbnail. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailError](src/resources/showcases-custom-showcase-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcaseCustomThumbs(request: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsRequest, options?: RequestOptions): ApiPromise&lt;PictureConnection, ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every custom thumbnail of the specified showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesCustomShowcaseThumbnails.getShowcaseCustomThumbs({
    albumId,
    userId,
  });
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  if (
    err instanceof ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsError](src/resources/showcases-custom-showcase-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceShowcaseCustomThumb(request: ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbRequest, options?: RequestOptions): ApiPromise&lt;Picture, ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method replaces the specified custom showcase thumbnail with a new image file. The authenticated user must be the owner of the showcase.

For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesCustomShowcaseThumbnails.replaceShowcaseCustomThumb({
    albumId,
    thumbnailId,
    userId,
  });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (
    err instanceof ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbError &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>thumbnailId</code> | <code>number</code> | The ID of the custom thumbnail. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersAlbumsCustomThumbnailsThumbnailIdRequest](src/models/users-albums-custom-thumbnails-thumbnail-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbError](src/resources/showcases-custom-showcase-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ShowcasesEssentials

> Source: [ShowcasesEssentials](src/resources/showcases-essentials.ts)

<details>
<summary><code>addFolderToShowcases(request: ShowcasesEssentials.AddFolderToShowcasesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShowcasesEssentials.AddFolderToShowcasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds all videos and events from a specified folder to showcases.

The authenticated user must either be the owner of the showcase or have team permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesEssentials.addFolderToShowcases({ userId, albumUris, folderId });
} catch (err) {
  if (err instanceof ShowcasesEssentials.AddFolderToShowcasesError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>albumUris</code> | <code>string</code> | A comma-separated list of showcase URIs. |
| <code>folderId</code> | <code>number</code> | The ID of the folder containing videos and events to add. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ShowcasesEssentials.AddFolderToShowcasesError](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>copyShowcase(request: ShowcasesEssentials.CopyShowcaseRequest, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesEssentials.CopyShowcaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a copy of the specified showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesEssentials.copyShowcase({ albumId, userId });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (err instanceof ShowcasesEssentials.CopyShowcaseError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersAlbumsCopyRequest](src/models/users-albums-copy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesEssentials.CopyShowcaseError](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>copyShowcaseAlt2(request: ShowcasesEssentials.CopyShowcaseAlt2Request, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesEssentials.CopyShowcaseAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a copy of the specified showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesEssentials.copyShowcaseAlt2({ albumId });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (err instanceof ShowcasesEssentials.CopyShowcaseAlt2Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>body?</code> | <code>[MeAlbumsCopyRequest](src/models/me-albums-copy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesEssentials.CopyShowcaseAlt2Error](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createShowcase(request: ShowcasesEssentials.CreateShowcaseRequest, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesEssentials.CreateShowcaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new showcase for the specified user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesEssentials.createShowcase({ userId, body });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (err instanceof ShowcasesEssentials.CreateShowcaseError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersAlbumsRequest](src/models/users-albums-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesEssentials.CreateShowcaseError](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createShowcaseAlt1(request: ShowcasesEssentials.CreateShowcaseAlt1Request, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesEssentials.CreateShowcaseAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new showcase for the specified user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesEssentials.createShowcaseAlt1({ body });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (err instanceof ShowcasesEssentials.CreateShowcaseAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MeAlbumsRequest](src/models/me-albums-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesEssentials.CreateShowcaseAlt1Error](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteShowcase(request: ShowcasesEssentials.DeleteShowcaseRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShowcasesEssentials.DeleteShowcaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesEssentials.deleteShowcase({ albumId, userId });
} catch (err) {
  if (err instanceof ShowcasesEssentials.DeleteShowcaseError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ShowcasesEssentials.DeleteShowcaseError](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteShowcaseAlt2(request: ShowcasesEssentials.DeleteShowcaseAlt2Request, options?: RequestOptions): ApiPromise&lt;undefined, ShowcasesEssentials.DeleteShowcaseAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesEssentials.deleteShowcaseAlt2({ albumId });
} catch (err) {
  if (err instanceof ShowcasesEssentials.DeleteShowcaseAlt2Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ShowcasesEssentials.DeleteShowcaseAlt2Error](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editShowcase(request: ShowcasesEssentials.EditShowcaseRequest, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesEssentials.EditShowcaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesEssentials.editShowcase({ albumId, userId });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (err instanceof ShowcasesEssentials.EditShowcaseError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersAlbumsRequest1](src/models/users-albums-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesEssentials.EditShowcaseError](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editShowcaseAlt2(request: ShowcasesEssentials.EditShowcaseAlt2Request, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesEssentials.EditShowcaseAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesEssentials.editShowcaseAlt2({ albumId });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (err instanceof ShowcasesEssentials.EditShowcaseAlt2Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>body?</code> | <code>[MeAlbumsRequest1](src/models/me-albums-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesEssentials.EditShowcaseAlt2Error](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcase(request: ShowcasesEssentials.GetShowcaseRequest, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesEssentials.GetShowcaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesEssentials.getShowcase({ albumId, userId });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (err instanceof ShowcasesEssentials.GetShowcaseError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesEssentials.GetShowcaseError](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcaseAlt2(request: ShowcasesEssentials.GetShowcaseAlt2Request, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesEssentials.GetShowcaseAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesEssentials.getShowcaseAlt2({ albumId });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (err instanceof ShowcasesEssentials.GetShowcaseAlt2Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesEssentials.GetShowcaseAlt2Error](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcases(request: ShowcasesEssentials.GetShowcasesRequest, options?: RequestOptions): ApiPromise&lt;AlbumConnection, ShowcasesEssentials.GetShowcasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every showcase belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesEssentials.getShowcases({ userId });
  // TODO: Handle 'response' of type AlbumConnection
} catch (err) {
  if (err instanceof ShowcasesEssentials.GetShowcasesError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filterPrivacy?</code> | <code>string</code> | A comma-separated list of showcase privacies to include. Valid options are `anybody` for universal access, `password` for password-restricted access, `embed_only` for restricted access on Vimeo but available as an embedded showcase elsewhere, `team` for team-only access, `nobody` for owner-only access, and `unlisted` for restricted access except for those with a direct link. By default, all privacies are returned. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort18](src/models/sort18.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date of creation.<br> * `duration` - Sort the results by duration.<br> * `last_modified` - Sort the results by last modified date.<br> * `videos` - Sort the results by the number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AlbumConnection](src/models/album-connection.ts)</code>

**OnError**: <code>[ShowcasesEssentials.GetShowcasesError](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcasesAlt1(request: ShowcasesEssentials.GetShowcasesAlt1Request, options?: RequestOptions): ApiPromise&lt;AlbumConnection, ShowcasesEssentials.GetShowcasesAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every showcase belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesEssentials.getShowcasesAlt1();
  // TODO: Handle 'response' of type AlbumConnection
} catch (err) {
  if (err instanceof ShowcasesEssentials.GetShowcasesAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filterPrivacy?</code> | <code>string</code> | A comma-separated list of showcase privacies to include. Valid options are `anybody` for universal access, `password` for password-restricted access, `embed_only` for restricted access on Vimeo but available as an embedded showcase elsewhere, `team` for team-only access, `nobody` for owner-only access, and `unlisted` for restricted access except for those with a direct link. By default, all privacies are returned. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort18](src/models/sort18.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date of creation.<br> * `duration` - Sort the results by duration.<br> * `last_modified` - Sort the results by last modified date.<br> * `videos` - Sort the results by the number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AlbumConnection](src/models/album-connection.ts)</code>

**OnError**: <code>[ShowcasesEssentials.GetShowcasesAlt1Error](src/resources/showcases-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateShowcases(request: ShowcasesEssentials.UpdateShowcasesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds videos and events to the specified showcases. The authenticated user must either be the owner of the showcase or have team permissions.

The present setup permits only one event per showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesEssentials.updateShowcases({ userId, albumItemUris, albumUris });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>albumItemUris</code> | <code>string</code> | A comma-separated list of video or event URIs. |
| <code>albumUris</code> | <code>string</code> | A comma-separated list of showcase URIs. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ShowcasesShowcaseVideos

> Source: [ShowcasesShowcaseVideos](src/resources/showcases-showcase-videos.ts)

<details>
<summary><code>addVideoToShowcase(request: ShowcasesShowcaseVideos.AddVideoToShowcaseRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShowcasesShowcaseVideos.AddVideoToShowcaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a single video to the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesShowcaseVideos.addVideoToShowcase({ albumId, userId, videoId });
} catch (err) {
  if (err instanceof ShowcasesShowcaseVideos.AddVideoToShowcaseError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ShowcasesShowcaseVideos.AddVideoToShowcaseError](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideoToShowcaseAlt2(request: ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Request, options?: RequestOptions): ApiPromise&lt;undefined, ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a single video to the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesShowcaseVideos.addVideoToShowcaseAlt2({ albumId, videoId });
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Error && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Error](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAvailableShowcaseVideos(request: ShowcasesShowcaseVideos.GetAvailableShowcaseVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, ShowcasesShowcaseVideos.GetAvailableShowcaseVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video belonging to the authenticated user that can be added to or removed from the specified showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesShowcaseVideos.getAvailableShowcaseVideos({ albumId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.GetAvailableShowcaseVideosError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort2](src/models/sort2.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by date.<br> * `default` - Sort the results by the default method.<br> * `duration` - Sort the results by duration.<br> * `last_user_action_event_date` - Sort the results by most recent user interaction.<br> * `likes` - Sort the results by number of likes.<br> * `modified_time` - Sort the results by last modification.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[ShowcasesShowcaseVideos.GetAvailableShowcaseVideosError](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAvailableVideoShowcases(request: ShowcasesShowcaseVideos.GetAvailableVideoShowcasesRequest, options?: RequestOptions): ApiPromise&lt;AlbumConnection, ShowcasesShowcaseVideos.GetAvailableVideoShowcasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every showcase to which the authenticated user can add or remove the specified video. The user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesShowcaseVideos.getAvailableVideoShowcases({ videoId });
  // TODO: Handle 'response' of type AlbumConnection
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.GetAvailableVideoShowcasesError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort74](src/models/sort74.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date.<br> * `duration` - Sort the results by duration.<br> * `videos` - Sort the results by number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AlbumConnection](src/models/album-connection.ts)</code>

**OnError**: <code>[ShowcasesShowcaseVideos.GetAvailableVideoShowcasesError](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcaseVideo(request: ShowcasesShowcaseVideos.GetShowcaseVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, ShowcasesShowcaseVideos.GetShowcaseVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video belonging to the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesShowcaseVideos.getShowcaseVideo({ albumId, userId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof ShowcasesShowcaseVideos.GetShowcaseVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>password?</code> | <code>string</code> | The password of the showcase. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[ShowcasesShowcaseVideos.GetShowcaseVideoError](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcaseVideoAlt2(request: ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Request, options?: RequestOptions): ApiPromise&lt;Video, ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video belonging to the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesShowcaseVideos.getShowcaseVideoAlt2({ albumId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Error && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>password?</code> | <code>string</code> | The password of the showcase. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Error](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcaseVideos(request: ShowcasesShowcaseVideos.GetShowcaseVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, ShowcasesShowcaseVideos.GetShowcaseVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video in the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesShowcaseVideos.getShowcaseVideos({ albumId, userId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof ShowcasesShowcaseVideos.GetShowcaseVideosError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>containingUri?</code> | <code>string</code> | The page containing the video URI. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter10](src/models/filter10.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Filter the results by the **embeddable** attribute.<br> * `playable` - Filter the results by the **playable** attribute. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>password?</code> | <code>string</code> | The password of the showcase. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort21](src/models/sort21.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by date.<br> * `default` - Sort the results by the default method.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `manual` - Sort the results by their manual order.<br> * `modified_time` - Sort the results by last modification.<br> * `plays` - Sort the results by number of plays. |
| <code>weakSearch?</code> | <code>boolean</code> | Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[ShowcasesShowcaseVideos.GetShowcaseVideosError](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShowcaseVideosAlt2(request: ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Request, options?: RequestOptions): ApiPromise&lt;VideoConnection, ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video in the specified showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesShowcaseVideos.getShowcaseVideosAlt2({ albumId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Error && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>containingUri?</code> | <code>string</code> | The page containing the video URI. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter10](src/models/filter10.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Filter the results by the **embeddable** attribute.<br> * `playable` - Filter the results by the **playable** attribute. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>password?</code> | <code>string</code> | The password of the showcase. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort21](src/models/sort21.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by date.<br> * `default` - Sort the results by the default method.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `manual` - Sort the results by their manual order.<br> * `modified_time` - Sort the results by last modification.<br> * `plays` - Sort the results by number of plays. |
| <code>weakSearch?</code> | <code>boolean</code> | Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Error](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeVideoFromShowcase(request: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShowcasesShowcaseVideos.RemoveVideoFromShowcaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the specified video from its showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesShowcaseVideos.removeVideoFromShowcase({ albumId, userId, videoId });
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.RemoveVideoFromShowcaseError && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ShowcasesShowcaseVideos.RemoveVideoFromShowcaseError](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeVideoFromShowcaseAlt2(request: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Request, options?: RequestOptions): ApiPromise&lt;undefined, ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the specified video from its showcase. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesShowcaseVideos.removeVideoFromShowcaseAlt2({ albumId, videoId });
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Error &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Error](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceVideosInShowcase(request: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShowcasesShowcaseVideos.ReplaceVideosInShowcaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method replaces all the videos in the specified showcase with a new set of one or more videos. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesShowcaseVideos.replaceVideosInShowcase({ albumId, userId, body });
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.ReplaceVideosInShowcaseError && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersAlbumsVideosRequest](src/models/users-albums-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ShowcasesShowcaseVideos.ReplaceVideosInShowcaseError](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceVideosInShowcaseAlt2(request: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Request, options?: RequestOptions): ApiPromise&lt;undefined, ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method replaces all the videos in the specified showcase with a new set of one or more videos. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.showcasesShowcaseVideos.replaceVideosInShowcaseAlt2({ albumId, body });
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Error &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>body</code> | <code>[MeAlbumsVideosRequest](src/models/me-albums-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Error](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setVideoAsShowcaseFeatured(request: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedRequest, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method sets the featured video of the specified showcase. The authenticated user must be the owner of the showcase, and the featured video must belong to it.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesShowcaseVideos.setVideoAsShowcaseFeatured({
    albumId,
    userId,
    videoId,
  });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedError](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setVideoAsShowcaseFeaturedAlt2(request: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Request, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method sets the featured video of the specified showcase. The authenticated user must be the owner of the showcase, and the featured video must belong to it.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesShowcaseVideos.setVideoAsShowcaseFeaturedAlt2({ albumId, videoId });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Error && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Error](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setVideoAsShowcaseThumbnail(request: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailRequest, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a thumbnail image for a showcase from the specified frame of a showcase video. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesShowcaseVideos.setVideoAsShowcaseThumbnail({
    albumId,
    userId,
    videoId,
  });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest](src/models/users-albums-videos-video-id-set-album-thumbnail-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailError](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setVideoAsShowcaseThumbnailAlt2(request: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Request, options?: RequestOptions): ApiPromise&lt;Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a thumbnail image for a showcase from the specified frame of a showcase video. The authenticated user must be the owner of the showcase.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.showcasesShowcaseVideos.setVideoAsShowcaseThumbnailAlt2({ albumId, videoId });
  // TODO: Handle 'response' of type Album
} catch (err) {
  if (
    err instanceof ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Error &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[MeAlbumsVideosSetAlbumThumbnailRequest](src/models/me-albums-videos-set-album-thumbnail-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)</code>

**OnError**: <code>[ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Error](src/resources/showcases-showcase-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionPlansEssentials

> Source: [SubscriptionPlansEssentials](src/resources/subscription-plans-essentials.ts)

<details>
<summary><code>getPlan(request: SubscriptionPlansEssentials.GetPlanRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified subscription plan.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionPlansEssentials.getPlan({ tier });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tier</code> | <code>[Tier1](src/models/tier1.ts)</code> | The type of subscription plan.<br><br>Option descriptions:<br> * `advanced` - The plan type is Vimeo Advanced.<br> * `business` - The plan type is Vimeo Business.<br> * `free` - The plan type is Vimeo Free.<br> * `live_premium` - The plan type is Vimeo Premium.<br> * `plus` - The plan type is Vimeo Plus.<br> * `pro` - The plan type is Vimeo Pro.<br> * `pro_unlimited` - The plan type is Vimeo Pro Unlimited.<br> * `standard` - The plan type is Vimeo Standard.<br> * `starter` - The plan type is Vimeo Starter. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TagsEssentials

> Source: [TagsEssentials](src/resources/tags-essentials.ts)

<details>
<summary><code>getTag(request: TagsEssentials.GetTagRequest, options?: RequestOptions): ApiPromise&lt;Tag, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified tag.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tagsEssentials.getTag({ word });
  // TODO: Handle 'response' of type Tag
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>string</code> | The tag to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tag](src/models/tag.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TeamsEssentials

> Source: [TeamsEssentials](src/resources/teams-essentials.ts)

<details>
<summary><code>backfillTeamCustomMetadata(request: TeamsEssentials.BackfillTeamCustomMetadataRequest, options?: RequestOptions): ApiPromise&lt;undefined, TeamsEssentials.BackfillTeamCustomMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method applies a custom metadata value across every existing video owned by the
team. Use it to populate a newly created field, fix a typo across a library, or align
a large catalog after a workflow change.

The backfill runs **asynchronously**. The response is returned as soon as the job is
accepted, but the values themselves are propagated in the background and may take
several minutes for large libraries. The `total_videos` count in the response is a
snapshot of how many videos match the request at the moment it's accepted; videos
uploaded after that point aren't included and need a separate backfill.

By default, only videos that don't already have a value for the field are updated.
Set `override_existing` to `true` to replace existing values as well.

The value provided must match the field's data type. For example, a `date` field
requires `YYYY-MM-DD`, a `select` field requires one of its allowed values, and a
`multi-select` field requires a JSON-encoded array of allowed values.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.teamsEssentials.backfillTeamCustomMetadata({ userId, body });
} catch (err) {
  if (err instanceof TeamsEssentials.BackfillTeamCustomMetadataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the team owner. |
| <code>body</code> | <code>[TeamsCustomMetadataBackfillRequest](src/models/teams-custom-metadata-backfill-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[TeamsEssentials.BackfillTeamCustomMetadataError](src/resources/teams-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeamCustomMetadataIncompleteVideos(request: TeamsEssentials.GetTeamCustomMetadataIncompleteVideosRequest, options?: RequestOptions): ApiPromise&lt;undefined, TeamsEssentials.GetTeamCustomMetadataIncompleteVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the team's videos that are missing one or more values for
**mandatory** custom metadata fields. Use it to power dashboards that surface incomplete
videos, drive curation workflows, or generate reports of catalog completeness.

Each item in the response includes the video's title and identifier, a link to the
video's management page, a thumbnail, the last modified timestamp, and the list of
mandatory fields that still need a value (each with its `field_id` and `name`).

Only fields marked `mandatory: true` (see `POST /teams/{user_id}/custom_metadata`) are
considered. Teams with no mandatory fields receive an empty result set.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.teamsEssentials.getTeamCustomMetadataIncompleteVideos({ userId });
} catch (err) {
  if (
    err instanceof TeamsEssentials.GetTeamCustomMetadataIncompleteVideosError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the team owner. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. Defaults to `1`. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page, up to a maximum of `100`. Defaults to `25`. |
| <code>sort?</code> | <code>[Sort48](src/models/sort48.ts)</code> | The order in which to return the results. Defaults to `title_asc`.<br><br>Option descriptions:<br> * `modified_asc` - Sort by last modified time, oldest first.<br> * `modified_desc` - Sort by last modified time, newest first.<br> * `title_asc` - Sort by video title, ascending.<br> * `title_desc` - Sort by video title, descending. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[TeamsEssentials.GetTeamCustomMetadataIncompleteVideosError](src/resources/teams-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeamCustomMetadataSettings(request: TeamsEssentials.GetTeamCustomMetadataSettingsRequest, options?: RequestOptions): ApiPromise&lt;CustomMetadataSettingsConnection, TeamsEssentials.GetTeamCustomMetadataSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every custom metadata field defined for the specified team.

Custom metadata fields let teams attach structured, queryable information to videos
(for example, a department selector, a release date, or a freeform note). Once a field
is defined here, you can assign per-video values via
`PUT /videos/{video_id}/custom_metadata`.

The response contains the field definitions only; per-video values are returned by
the video endpoints. Use this method to populate a UI that lets users fill in metadata,
or to discover the field IDs you need for backfills and value updates.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamsEssentials.getTeamCustomMetadataSettings({ userId });
  // TODO: Handle 'response' of type CustomMetadataSettingsConnection
} catch (err) {
  if (
    err instanceof TeamsEssentials.GetTeamCustomMetadataSettingsError && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the team owner. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomMetadataSettingsConnection](src/models/custom-metadata-settings-connection.ts)</code>

**OnError**: <code>[TeamsEssentials.GetTeamCustomMetadataSettingsError](src/resources/teams-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomMetadataFieldOptions(request: TeamsEssentials.UpdateCustomMetadataFieldOptionsRequest, options?: RequestOptions): ApiPromise&lt;CustomMetadataSettings, TeamsEssentials.UpdateCustomMetadataFieldOptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method modifies the allowed value list of a `select` or `multi-select` custom
metadata field. Use it to rename an option, remove an option, or add a new option
without recreating the field.

Each entry in the `options` array describes one atomic change, defined by combining
`old_value` and `new_value`:

| `old_value`     | `new_value`     | Operation                      |
| --------------- | --------------- | ------------------------------ |
| string          | string          | Rename `old_value` to `new_value` |
| string          | `null` / omitted | Delete `old_value` from the field |
| `null` / omitted | string          | Add `new_value` to the field   |

Renames are propagated to every existing video that uses the option, so the change
is visible across the team's library. Deletes also remove the option from every
video that had it set. Propagation runs in the background; the field's option list
itself is updated synchronously and returned in the response.

A few rules to be aware of:

- The field must be of type `select` or `multi-select`. Other types reject the request.
- Cascading renames (renaming `A` to `B`, then `B` to `C` in the same call) are not
  allowed; submit them as separate requests if you need that effect.
- The resulting option list must not contain duplicates.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamsEssentials.updateCustomMetadataFieldOptions({ userId, body });
  // TODO: Handle 'response' of type CustomMetadataSettings
} catch (err) {
  if (err instanceof TeamsEssentials.UpdateCustomMetadataFieldOptionsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the team owner. |
| <code>body</code> | <code>[TeamsCustomMetadataOptionsRequest](src/models/teams-custom-metadata-options-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomMetadataSettings](src/models/custom-metadata-settings.ts)</code>

**OnError**: <code>[TeamsEssentials.UpdateCustomMetadataFieldOptionsError](src/resources/teams-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertCustomMetadataSettings(request: TeamsEssentials.UpsertCustomMetadataSettingsRequest, options?: RequestOptions): ApiPromise&lt;CustomMetadataSettings[], TeamsEssentials.UpsertCustomMetadataSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates, updates, or deletes custom metadata fields for a team in a single
request. Each entry in the `fields` array is treated independently:

- To **create** a new field, omit `id` and provide `name`, `type`, and `mandatory`.
- To **update** an existing field, provide `id` along with the values you want to change.
  Other values are left untouched.
- To **delete** an existing field, provide `id` and set `delete: true`. Deleting a field
  also removes every value assigned to it across the team's videos.

Some constraints are worth knowing up front:

- A team can have a maximum of 20 custom metadata fields. Requests that would exceed
  that limit after deletes are applied are rejected.
- The `type` of an existing field can't be changed once the field is created.
- A field that was created as optional can't be made `mandatory` later.
- All operations in the request are applied as a single batch; if any one fails the
  whole request is rejected and no changes are saved.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamsEssentials.upsertCustomMetadataSettings({ userId });
  // TODO: Handle 'response' of type CustomMetadataSettings[]
} catch (err) {
  if (err instanceof TeamsEssentials.UpsertCustomMetadataSettingsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the team owner. |
| <code>body?</code> | <code>[TeamsCustomMetadataRequest](src/models/teams-custom-metadata-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomMetadataSettings](src/models/custom-metadata-settings.ts)[]</code>

**OnError**: <code>[TeamsEssentials.UpsertCustomMetadataSettingsError](src/resources/teams-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TeamsMembers

> Source: [TeamsMembers](src/resources/teams-members.ts)

<details>
<summary><code>getTeamInformation(request: TeamsMembers.GetTeamInformationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns information about the membership of the specified team. Usage is currently limited to the team join forms.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.teamsMembers.getTeamInformation({ code });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>string</code> | The code corresponding to the desired team. This value appears under `TeamUser` > `code`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeamInformation2(request: TeamsMembers.GetTeamInformation2Request, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns information about the membership of the specified team. Usage is currently limited to the team join forms.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.teamsMembers.getTeamInformation2({ teamUserId, userId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamUserId</code> | <code>number</code> | The ID of the team user. |
| <code>userId</code> | <code>number</code> | The ID of the team owner. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeamRoleInformation(request: TeamsMembers.GetTeamRoleInformationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns information about the authenticated user's role on the specified team owner's team.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.teamsMembers.getTeamRoleInformation({ userId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the team owner. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TutorialEssentials

> Source: [TutorialEssentials](src/resources/tutorial-essentials.ts)

<details>
<summary><code>developerTutorial(options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method tests whether users who are working through the [Getting Started](https://developer.vimeo.com/api/guides/start) guides have set up their configurations correctly.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.tutorialEssentials.developerTutorial();
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsersAnalytics

> Source: [UsersAnalytics](src/resources/users-analytics.ts)

<details>
<summary><code>getUserAnalytics(request: UsersAnalytics.GetUserAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns video analytics for the authenticated user's Vimeo account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersAnalytics.getUserAnalytics({ userId, dimension, from, to });
  // TODO: Handle 'response' of type AnalyticsConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>dimension</code> | <code>[Dimension](src/models/dimension.ts)</code> | The data dimension by which to group the results.<br><br>Option descriptions:<br> * `browser` - Group the results by browser.<br> * `city` - Group the results by city.<br> * `country` - Group the results by country.<br> * `device_type` - Group the results by device type.<br> * `embed_domain` - Group the results by embed domain.<br> * `embed_domain_path` - Group the results by embed domain path.<br> * `os` - Group the results by operating system.<br> * `region` - Group the results by region.<br> * `streaming_type` - Group the results by streaming type.<br> * `total` - Group the results by the time range provided.<br> * `video` - Group the results by video. |
| <code>from</code> | <code>string</code> | The start date of the range of results in ISO 8601 format. |
| <code>to</code> | <code>string</code> | The end date of the range of results in ISO 8601 format. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filterContent?</code> | <code>string</code> | A comma-separated list of video, folder, or event URIs to filter. |
| <code>filterCountries?</code> | <code>string[]</code> | A comma-separated list of country codes in ISO-3166 format to filter on. |
| <code>filterCustomMetadata?</code> | <code>string</code> | A JSON-encoded custom-metadata filter. Accepts either a bare list of clauses (combined with `and`) or an envelope `{"logic":"and"\|"or","clauses":[...]}`. Each clause is an object with `field_id` (integer; matches one of the owning team's `CustomMetadataSettings` fields), `operator` (one of `eq`, `ne`, `gt`, `lt`, `contains`, `not_contains`, `empty`, `not_empty`; the allowed operators depend on the field type), and optional `value` (string; required for every operator except `empty`/`not_empty`). The matching videos are resolved via the search index and intersected with `filter_content` before being passed to the analytics service. |
| <code>filterDeviceTypes?</code> | <code>string[]</code> | A comma-separated list of device types to filter on. |
| <code>filterEmbedDomains?</code> | <code>string[]</code> | A comma-separated list of domain names to filter on. |
| <code>filterRegions?</code> | <code>string[]</code> | A comma-separated list of combined country and region codes in ISO-3166 format to filter on. |
| <code>filterStreamingTypes?</code> | <code>string[]</code> | A comma-separated list of streaming types to filter on. |
| <code>filterWorkspaces?</code> | <code>string</code> | A comma-separated list of workspace IDs to filter for. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The maximum number of items returned from the request, up to a limit of 1000 items. The default value is `50`. |
| <code>sort?</code> | <code>[Sort22](src/models/sort22.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `comments` - Sort the results by the number of comments.<br> * `completions` - Sort the results by number of completions.<br> * `country` - Sort the results by country.<br> * `default` - Sort the results by the values of both the **dimension** and **time_interval** fields.<br> * `device_type` - Sort the results by device type.<br> * `downloads` - Sort the results by the number of downloads.<br> * `drm_licenses_used` - Sort the results by the number of DRM licenses used. _This option is available only to users with the DRM feature._<br> * `embed_domain` - Sort the results by embed domain.<br> * `finishes` - Sort the results by the number of complete plays.<br> * `five_star_clicks` - Sort the results by the number of five-star ranking clicks.<br> * `four_star_clicks` - Sort the results by the number of four-star ranking clicks.<br> * `impressions` - Sort the results by the number of impressions.<br> * `like` - Sort the results by the number of likes.<br> * `mean_percent_watched` - Sort the results by mean percentage played.<br> * `mean_seconds_watched` - Sort the results by mean seconds played.<br> * `one_star_clicks` - Sort the results by the number of one-star ranking clicks.<br> * `ranking_widget_average_rating` - Sort the results by the average ranking widget rating.<br> * `ranking_widget_clicks` - Sort the results by the number of ranking widget clicks.<br> * `third_party_impressions` - Sort the results by the number of impressions from all non-Vimeo players.<br> * `three_star_clicks` - Sort the results by the number of three-star ranking clicks.<br> * `thumbs_down_clicks` - Sort the results by the number of thumbs-down clicks.<br> * `thumbs_up_clicks` - Sort the results by the number of thumbs-up clicks.<br> * `thumbs_widget_average_rating` - Sort the results by the average thumbs widget rating.<br> * `thumbs_widget_clicks` - Sort the results by the number of thumbs widget clicks.<br> * `time` - Sort the results by the value of the **start_date** field. This option is available only when the value of **time_interval** isn't `none`.<br> * `total_seconds_watched` - Sort the results by total seconds played.<br> * `two_star_clicks` - Sort the results by the number of two-star ranking clicks.<br> * `unique_impressions` - Sort the results by unique impressions.<br> * `unique_viewers` - Sort the results by unique viewers.<br> * `video` - Sort the results by video ID.<br> * `views` - Sort the results by the number of views. |
| <code>timeInterval?</code> | <code>[TimeInterval](src/models/time-interval.ts)</code> | The interval by which to aggregate the data according to the specified data dimension. The default value is `none`. This parameter works only when the value of **dimension** is `video`, `country`, `embed_domain`, `device_type`, or `streaming_type`.<br><br>Option descriptions:<br> * `day` - Aggregate the results by day according to the specified data dimension.<br> * `month` - Aggregate the results by month according to the specified data dimension.<br> * `none` - The results are not aggregated by time interval.<br> * `week` - Aggregate the results by week according to the specified data dimension.<br> * `year` - Aggregate the results by year according to the specified data dimension. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsConnection](src/models/analytics-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserAnalyticsAlt1(request: UsersAnalytics.GetUserAnalyticsAlt1Request, options?: RequestOptions): ApiPromise&lt;AnalyticsConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns video analytics for the authenticated user's Vimeo account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersAnalytics.getUserAnalyticsAlt1({ dimension, from, to });
  // TODO: Handle 'response' of type AnalyticsConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dimension</code> | <code>[Dimension](src/models/dimension.ts)</code> | The data dimension by which to group the results.<br><br>Option descriptions:<br> * `browser` - Group the results by browser.<br> * `city` - Group the results by city.<br> * `country` - Group the results by country.<br> * `device_type` - Group the results by device type.<br> * `embed_domain` - Group the results by embed domain.<br> * `embed_domain_path` - Group the results by embed domain path.<br> * `os` - Group the results by operating system.<br> * `region` - Group the results by region.<br> * `streaming_type` - Group the results by streaming type.<br> * `total` - Group the results by the time range provided.<br> * `video` - Group the results by video. |
| <code>from</code> | <code>string</code> | The start date of the range of results in ISO 8601 format. |
| <code>to</code> | <code>string</code> | The end date of the range of results in ISO 8601 format. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filterContent?</code> | <code>string</code> | A comma-separated list of video, folder, or event URIs to filter. |
| <code>filterCountries?</code> | <code>string[]</code> | A comma-separated list of country codes in ISO-3166 format to filter on. |
| <code>filterCustomMetadata?</code> | <code>string</code> | A JSON-encoded custom-metadata filter. Accepts either a bare list of clauses (combined with `and`) or an envelope `{"logic":"and"\|"or","clauses":[...]}`. Each clause is an object with `field_id` (integer; matches one of the owning team's `CustomMetadataSettings` fields), `operator` (one of `eq`, `ne`, `gt`, `lt`, `contains`, `not_contains`, `empty`, `not_empty`; the allowed operators depend on the field type), and optional `value` (string; required for every operator except `empty`/`not_empty`). The matching videos are resolved via the search index and intersected with `filter_content` before being passed to the analytics service. |
| <code>filterDeviceTypes?</code> | <code>string[]</code> | A comma-separated list of device types to filter on. |
| <code>filterEmbedDomains?</code> | <code>string[]</code> | A comma-separated list of domain names to filter on. |
| <code>filterRegions?</code> | <code>string[]</code> | A comma-separated list of combined country and region codes in ISO-3166 format to filter on. |
| <code>filterStreamingTypes?</code> | <code>string[]</code> | A comma-separated list of streaming types to filter on. |
| <code>filterWorkspaces?</code> | <code>string</code> | A comma-separated list of workspace IDs to filter for. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The maximum number of items returned from the request, up to a limit of 1000 items. The default value is `50`. |
| <code>sort?</code> | <code>[Sort22](src/models/sort22.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `comments` - Sort the results by the number of comments.<br> * `completions` - Sort the results by number of completions.<br> * `country` - Sort the results by country.<br> * `default` - Sort the results by the values of both the **dimension** and **time_interval** fields.<br> * `device_type` - Sort the results by device type.<br> * `downloads` - Sort the results by the number of downloads.<br> * `drm_licenses_used` - Sort the results by the number of DRM licenses used. _This option is available only to users with the DRM feature._<br> * `embed_domain` - Sort the results by embed domain.<br> * `finishes` - Sort the results by the number of complete plays.<br> * `five_star_clicks` - Sort the results by the number of five-star ranking clicks.<br> * `four_star_clicks` - Sort the results by the number of four-star ranking clicks.<br> * `impressions` - Sort the results by the number of impressions.<br> * `like` - Sort the results by the number of likes.<br> * `mean_percent_watched` - Sort the results by mean percentage played.<br> * `mean_seconds_watched` - Sort the results by mean seconds played.<br> * `one_star_clicks` - Sort the results by the number of one-star ranking clicks.<br> * `ranking_widget_average_rating` - Sort the results by the average ranking widget rating.<br> * `ranking_widget_clicks` - Sort the results by the number of ranking widget clicks.<br> * `third_party_impressions` - Sort the results by the number of impressions from all non-Vimeo players.<br> * `three_star_clicks` - Sort the results by the number of three-star ranking clicks.<br> * `thumbs_down_clicks` - Sort the results by the number of thumbs-down clicks.<br> * `thumbs_up_clicks` - Sort the results by the number of thumbs-up clicks.<br> * `thumbs_widget_average_rating` - Sort the results by the average thumbs widget rating.<br> * `thumbs_widget_clicks` - Sort the results by the number of thumbs widget clicks.<br> * `time` - Sort the results by the value of the **start_date** field. This option is available only when the value of **time_interval** isn't `none`.<br> * `total_seconds_watched` - Sort the results by total seconds played.<br> * `two_star_clicks` - Sort the results by the number of two-star ranking clicks.<br> * `unique_impressions` - Sort the results by unique impressions.<br> * `unique_viewers` - Sort the results by unique viewers.<br> * `video` - Sort the results by video ID.<br> * `views` - Sort the results by the number of views. |
| <code>timeInterval?</code> | <code>[TimeInterval](src/models/time-interval.ts)</code> | The interval by which to aggregate the data according to the specified data dimension. The default value is `none`. This parameter works only when the value of **dimension** is `video`, `country`, `embed_domain`, `device_type`, or `streaming_type`.<br><br>Option descriptions:<br> * `day` - Aggregate the results by day according to the specified data dimension.<br> * `month` - Aggregate the results by month according to the specified data dimension.<br> * `none` - The results are not aggregated by time interval.<br> * `week` - Aggregate the results by week according to the specified data dimension.<br> * `year` - Aggregate the results by year according to the specified data dimension. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsConnection](src/models/analytics-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsersEssentials

> Source: [UsersEssentials](src/resources/users-essentials.ts)

<details>
<summary><code>editUser(request: UsersEssentials.EditUserRequest, options?: RequestOptions): ApiPromise&lt;User, UsersEssentials.EditUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the Vimeo account of the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersEssentials.editUser({ userId });
  // TODO: Handle 'response' of type User
} catch (err) {
  if (err instanceof UsersEssentials.EditUserError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersRequest](src/models/users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)</code>

**OnError**: <code>[UsersEssentials.EditUserError](src/resources/users-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editUserAlt1(request: UsersEssentials.EditUserAlt1Request, options?: RequestOptions): ApiPromise&lt;User, UsersEssentials.EditUserAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the Vimeo account of the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersEssentials.editUserAlt1();
  // TODO: Handle 'response' of type User
} catch (err) {
  if (err instanceof UsersEssentials.EditUserAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[MeRequest](src/models/me-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)</code>

**OnError**: <code>[UsersEssentials.EditUserAlt1Error](src/resources/users-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUser(request: UsersEssentials.GetUserRequest, options?: RequestOptions): ApiPromise&lt;User, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersEssentials.getUser({ userId });
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserAlt1(options?: RequestOptions): ApiPromise&lt;User, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersEssentials.getUserAlt1();
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsersFeeds

> Source: [UsersFeeds](src/resources/users-feeds.ts)

<details>
<summary><code>getFeed(request: UsersFeeds.GetFeedRequest, options?: RequestOptions): ApiPromise&lt;Activity31Connection, UsersFeeds.GetFeedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video in the authenticated user's feed.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersFeeds.getFeed({ userId });
  // TODO: Handle 'response' of type Activity31Connection
} catch (err) {
  if (err instanceof UsersFeeds.GetFeedError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>offset?</code> | <code>string</code> | The pagination offset. We recommend that you use the pagination links in the feed response instead of working with this value directly. For more details, see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter). |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>type?</code> | <code>[Type33](src/models/type33.ts)</code> | The feed type.<br><br>Option descriptions:<br> * `appears` - Videos in which the user appears.<br> * `category_featured` - Featured videos.<br> * `channel` - Channel videos.<br> * `facebook_feed` - Videos from the user's Facebook feed.<br> * `following` - Videos from accounts that the user follows.<br> * `group` - Group videos.<br> * `likes` - Liked videos.<br> * `ondemand_publish` - On Demand videos.<br> * `share` - Shared videos.<br> * `tagged_with` - Tagged videos.<br> * `twitter_timeline` - Videos from the user's Twitter timeline.<br> * `uploads` - Uploaded videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Activity31Connection](src/models/activity31-connection.ts)</code>

**OnError**: <code>[UsersFeeds.GetFeedError](src/resources/users-feeds.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFeedAlt1(request: UsersFeeds.GetFeedAlt1Request, options?: RequestOptions): ApiPromise&lt;Activity31Connection, UsersFeeds.GetFeedAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video in the authenticated user's feed.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersFeeds.getFeedAlt1();
  // TODO: Handle 'response' of type Activity31Connection
} catch (err) {
  if (err instanceof UsersFeeds.GetFeedAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offset?</code> | <code>string</code> | The pagination offset. We recommend that you use the pagination links in the feed response instead of working with this value directly. For more details, see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter). |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>type?</code> | <code>[Type33](src/models/type33.ts)</code> | The feed type.<br><br>Option descriptions:<br> * `appears` - Videos in which the user appears.<br> * `category_featured` - Featured videos.<br> * `channel` - Channel videos.<br> * `facebook_feed` - Videos from the user's Facebook feed.<br> * `following` - Videos from accounts that the user follows.<br> * `group` - Group videos.<br> * `likes` - Liked videos.<br> * `ondemand_publish` - On Demand videos.<br> * `share` - Shared videos.<br> * `tagged_with` - Tagged videos.<br> * `twitter_timeline` - Videos from the user's Twitter timeline.<br> * `uploads` - Uploaded videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Activity31Connection](src/models/activity31-connection.ts)</code>

**OnError**: <code>[UsersFeeds.GetFeedAlt1Error](src/resources/users-feeds.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsersFollowers

> Source: [UsersFollowers](src/resources/users-followers.ts)

<details>
<summary><code>checkIfUserIsFollowing(request: UsersFollowers.CheckIfUserIsFollowingRequest, options?: RequestOptions): ApiPromise&lt;undefined, UsersFollowers.CheckIfUserIsFollowingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the authenticated user is a follower of the specified user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersFollowers.checkIfUserIsFollowing({ followUserId, userId });
} catch (err) {
  if (err instanceof UsersFollowers.CheckIfUserIsFollowingError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>followUserId</code> | <code>number</code> | The ID of the user to follow. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[UsersFollowers.CheckIfUserIsFollowingError](src/resources/users-followers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkIfUserIsFollowingAlt1(request: UsersFollowers.CheckIfUserIsFollowingAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, UsersFollowers.CheckIfUserIsFollowingAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the authenticated user is a follower of the specified user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersFollowers.checkIfUserIsFollowingAlt1({ followUserId });
} catch (err) {
  if (err instanceof UsersFollowers.CheckIfUserIsFollowingAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>followUserId</code> | <code>number</code> | The ID of the user to follow. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[UsersFollowers.CheckIfUserIsFollowingAlt1Error](src/resources/users-followers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followUser(request: UsersFollowers.FollowUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, UsersFollowers.FollowUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to become the follower of the specified user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersFollowers.followUser({ followUserId, userId });
} catch (err) {
  if (err instanceof UsersFollowers.FollowUserError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>followUserId</code> | <code>number</code> | The ID of the user to follow. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[UsersFollowers.FollowUserError](src/resources/users-followers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followUserAlt1(request: UsersFollowers.FollowUserAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, UsersFollowers.FollowUserAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to become the follower of the specified user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersFollowers.followUserAlt1({ followUserId });
} catch (err) {
  if (err instanceof UsersFollowers.FollowUserAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>followUserId</code> | <code>number</code> | The ID of the user to follow. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[UsersFollowers.FollowUserAlt1Error](src/resources/users-followers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followUsers(request: UsersFollowers.FollowUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, UsersFollowers.FollowUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to become a follower of multiple users. In the body of the request, specify the list of users to follow as
an array of URIs, where `user01_id`, `user02_id`, `user03_id`, and so on, are the user IDs of the users in question:

```
{
 [
     {"uri" : "/users/{user01_id}"},
     {"uri" : "/users/{user02_id}"},
     {"uri" : "/users/{user03_id}"}
 ]
}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersFollowers.followUsers({ userId, body });
} catch (err) {
  if (err instanceof UsersFollowers.FollowUsersError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersFollowingRequest](src/models/users-following-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[UsersFollowers.FollowUsersError](src/resources/users-followers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followUsersAlt1(request: UsersFollowers.FollowUsersAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, UsersFollowers.FollowUsersAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to become a follower of multiple users. In the body of the request, specify the list of users to follow as
an array of URIs, where `user01_id`, `user02_id`, `user03_id`, and so on, are the user IDs of the users in question:

```
{
 [
     {"uri" : "/users/{user01_id}"},
     {"uri" : "/users/{user02_id}"},
     {"uri" : "/users/{user03_id}"}
 ]
}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersFollowers.followUsersAlt1({ body });
} catch (err) {
  if (err instanceof UsersFollowers.FollowUsersAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MeFollowingRequest](src/models/me-following-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[UsersFollowers.FollowUsersAlt1Error](src/resources/users-followers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFollowers(request: UsersFollowers.GetFollowersRequest, options?: RequestOptions): ApiPromise&lt;UserConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every follower of the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersFollowers.getFollowers({ userId });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date followed. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFollowersAlt1(request: UsersFollowers.GetFollowersAlt1Request, options?: RequestOptions): ApiPromise&lt;UserConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every follower of the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersFollowers.getFollowersAlt1();
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date followed. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserFollowing(request: UsersFollowers.GetUserFollowingRequest, options?: RequestOptions): ApiPromise&lt;UserConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every user who is followed by the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersFollowers.getUserFollowing({ userId });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter13](src/models/filter13.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `online` - Return users who are currently online. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date followed. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserFollowingAlt1(request: UsersFollowers.GetUserFollowingAlt1Request, options?: RequestOptions): ApiPromise&lt;UserConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every user who is followed by the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersFollowers.getUserFollowingAlt1();
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter13](src/models/filter13.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `online` - Return users who are currently online. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date followed. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowUser(request: UsersFollowers.UnfollowUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to stop following another user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersFollowers.unfollowUser({ followUserId, userId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>followUserId</code> | <code>number</code> | The ID of the user to unfollow. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowUserAlt1(request: UsersFollowers.UnfollowUserAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method causes the authenticated user to stop following another user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersFollowers.unfollowUserAlt1({ followUserId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>followUserId</code> | <code>number</code> | The ID of the user to unfollow. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsersLms

> Source: [UsersLms](src/resources/users-lms.ts)

<details>
<summary><code>downloadLmsPackage(request: UsersLms.DownloadLmsPackageRequest, options?: RequestOptions): ApiPromise&lt;undefined, UsersLms.DownloadLmsPackageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates and returns a zipped proxy package of the course associated with the specified video. This package is suitable for direct upload to a learning management system.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersLms.downloadLmsPackage({ userId, videoId });
} catch (err) {
  if (err instanceof UsersLms.DownloadLmsPackageError && err.payload.kind === "error400") {
    // TODO: Handle 'err.payload' — the "error400" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the team owner. |
| <code>videoId</code> | <code>number</code> | The ID of the course video. |
| <code>completionThreshold?</code> | <code>number</code> | The completion threshold for the course. |
| <code>courseTitle?</code> | <code>string</code> | The title of the course. |
| <code>passingScore?</code> | <code>number</code> | The passing score for the course. |
| <code>scoringAlgorithm?</code> | <code>[ScoringAlgorithm](src/models/scoring-algorithm.ts)</code> | The scoring algorithm for the course.<br><br>Option descriptions:<br> * `passfail` - The score is based on a pass or fail.<br> * `percentage` - The score is based on a percentage.<br> * `quiz` - The score is based on the course quiz. |
| <code>standard?</code> | <code>[Standard](src/models/standard.ts)</code> | The learning management system standard used to create the proxy package.<br><br>Option descriptions:<br> * `aicc` - The standard is AICC.<br> * `cmi5` - The standard is cmi5.<br> * `scorm12` - The standard is SCORM 1.2.<br> * `scorm2004_3rd` - The standard is SCORM 2004 3rd Edition.<br> * `tincan` - The standard is Tin Can or xAPI. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[UsersLms.DownloadLmsPackageError](src/resources/users-lms.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsersPictures

> Source: [UsersPictures](src/resources/users-pictures.ts)

<details>
<summary><code>createPicture(request: UsersPictures.CreatePictureRequest, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a portrait image to the authenticated user's Vimeo account. Send the binary data of the image file to the location that you receive
from the **link** field in the response. For step-by-step instructions, see
[Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail-step-3).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersPictures.createPicture({ userId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPictureAlt1(options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a portrait image to the authenticated user's Vimeo account. Send the binary data of the image file to the location that you receive
from the **link** field in the response. For step-by-step instructions, see
[Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail-step-3).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersPictures.createPictureAlt1();
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePicture(request: UsersPictures.DeletePictureRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the specified portrait image from the authenticated user's Vimeo account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersPictures.deletePicture({ portraitsetId, userId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portraitsetId</code> | <code>number</code> | The ID of the picture. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePictureAlt1(request: UsersPictures.DeletePictureAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the specified portrait image from the authenticated user's Vimeo account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersPictures.deletePictureAlt1({ portraitsetId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portraitsetId</code> | <code>number</code> | The ID of the picture. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editPicture(request: UsersPictures.EditPictureRequest, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified portrait image belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersPictures.editPicture({ portraitsetId, userId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portraitsetId</code> | <code>number</code> | The ID of the picture. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body?</code> | <code>[UsersPicturesRequest](src/models/users-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editPictureAlt1(request: UsersPictures.EditPictureAlt1Request, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified portrait image belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersPictures.editPictureAlt1({ portraitsetId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portraitsetId</code> | <code>number</code> | The ID of the picture. |
| <code>body?</code> | <code>[MePicturesRequest](src/models/me-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPicture(request: UsersPictures.GetPictureRequest, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single portrait image belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersPictures.getPicture({ portraitsetId, userId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portraitsetId</code> | <code>number</code> | The ID of the picture. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPictureAlt1(request: UsersPictures.GetPictureAlt1Request, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single portrait image belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersPictures.getPictureAlt1({ portraitsetId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portraitsetId</code> | <code>number</code> | The ID of the picture. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPictures(request: UsersPictures.GetPicturesRequest, options?: RequestOptions): ApiPromise&lt;PictureConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every portrait image belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersPictures.getPictures({ userId });
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPicturesAlt1(request: UsersPictures.GetPicturesAlt1Request, options?: RequestOptions): ApiPromise&lt;PictureConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every portrait image belonging to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersPictures.getPicturesAlt1();
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsersSearch

> Source: [UsersSearch](src/resources/users-search.ts)

<details>
<summary><code>searchUsers(request: UsersSearch.SearchUsersRequest, options?: RequestOptions): ApiPromise&lt;UserConnection, UsersSearch.SearchUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns user search results.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersSearch.searchUsers();
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  if (err instanceof UsersSearch.SearchUsersError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort13](src/models/sort13.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by creation date.<br> * `followers` - Sort the results by number of followers.<br> * `relevant` - Sort the results by relevance.<br> * `videos` - Sort the results by number of videos. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[UsersSearch.SearchUsersError](src/resources/users-search.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsersWatchHistory

> Source: [UsersWatchHistory](src/resources/users-watch-history.ts)

<details>
<summary><code>deleteFromWatchHistory(request: UsersWatchHistory.DeleteFromWatchHistoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified video from the authenticated user's watch history.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersWatchHistory.deleteFromWatchHistory({ videoId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWatchHistory(options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the entire watch history of the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.usersWatchHistory.deleteWatchHistory();
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWatchHistory(request: UsersWatchHistory.GetWatchHistoryRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, UsersWatchHistory.GetWatchHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video on the authenticated user's watch history. _This endpoint is deprecated. Any request to it returns empty data with HTTP status code 200._

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersWatchHistory.getWatchHistory();
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof UsersWatchHistory.GetWatchHistoryError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[UsersWatchHistory.GetWatchHistoryError](src/resources/users-watch-history.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosAi

> Source: [VideosAi](src/resources/videos-ai.ts)

<details>
<summary><code>askAiQuestion(request: VideosAi.AskAiQuestionRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAi.AskAiQuestionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method asks a question about a video and returns an AI-generated answer with relevant
quotes and timecodes. Answering questions requires generating artifacts from the video, so
the first request for a new video may return a `202` response — simply retry until a `200`
is returned with the answer.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAi.askAiQuestion({ videoId });
} catch (err) {
  if (err instanceof VideosAi.AskAiQuestionError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosAiAskRequest](src/models/videos-ai-ask-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAi.AskAiQuestionError](src/resources/videos-ai.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editAiTexttrack(request: VideosAi.EditAiTexttrackRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAi.EditAiTexttrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits transcript segments on the specified text track and automatically
triggers the appropriate downstream actions based on the track type:

- **Source transcript**: saves edits, then re-translates all subtitle children
  for the edited text segments. Timestamp and speaker changes are synced to children
  directly (no re-translation for speaker-only edits).
- **Dubbed track**: saves edits and triggers audio re-synthesis for the edited segments.
  Re-synthesis fires on text edits and on speaker reassignment (the dub is regenerated
  under the new speaker's voice).
- **Subtitle child**: saves text edits to this track only. Timestamp and speaker changes
  are synced to the parent track and all sibling subtitle tracks.

To retrieve the `texttrack_id`, use the GET endpoints for
[transcription](#get_ai_transcribe_status),
[subtitle translation](#get_ai_translate_subtitles_status), or
[dubbing](#get_ai_translate_dubbing_status).
To retrieve segment UUIDs and their current text and timecodes, use
`GET /videos/{video_id}/transcripts/{texttrack_id}`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAi.editAiTexttrack({ texttrackId, videoId });
} catch (err) {
  if (err instanceof VideosAi.EditAiTexttrackError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>texttrackId</code> | <code>number</code> | The ID of the text track. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosAiTexttracksRequest](src/models/videos-ai-texttracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAi.EditAiTexttrackError](src/resources/videos-ai.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAiLanguages(request: VideosAi.GetAiLanguagesRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAi.GetAiLanguagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the list of supported languages for AI features. Use the `type` query parameter to
filter by feature: `transcription` for speech-to-text languages, `subtitling` for subtitle translation
languages, or `dubbing` for audio dubbing languages (includes available accents per language).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAi.getAiLanguages();
} catch (err) {
  if (err instanceof VideosAi.GetAiLanguagesError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type?</code> | <code>[Type52](src/models/type52.ts)</code> | The AI feature type to list languages for.<br><br>Option descriptions:<br> * `dubbing` - Languages supported for AI audio dubbing. Includes available accents per language.<br> * `subtitling` - Languages supported for AI subtitle translation.<br> * `transcription` - Languages supported for AI transcription (speech-to-text). |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAi.GetAiLanguagesError](src/resources/videos-ai.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAiMetadata(request: VideosAi.GetAiMetadataRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAi.GetAiMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns AI-generated metadata for the specified video, including a suggested
title, description, and tags based on the video's content. The first request for a new
video may return a `202` response while the video is being processed — retry until ready.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAi.getAiMetadata({ videoId });
} catch (err) {
  if (err instanceof VideosAi.GetAiMetadataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAi.GetAiMetadataError](src/resources/videos-ai.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAiQuestions(request: VideosAi.GetAiQuestionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAi.GetAiQuestionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns pre-generated questions and answers about a video. These are
automatically created when the video is processed and provide a starting point for
exploring the video's content. The first request for a new video may return a `202`
response while artifacts are being generated — retry until ready.

Questions are available in `en`, `fr`, `es`, `de`, `it`, `pt`, `ja`, and `ko`.
English is returned by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAi.getAiQuestions({ videoId });
} catch (err) {
  if (err instanceof VideosAi.GetAiQuestionsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>language?</code> | <code>string</code> | The language for suggested questions. Defaults to `en`. Available: `en`, `fr`, `es`, `de`, `it`, `pt`, `ja`, `ko`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAi.GetAiQuestionsError](src/resources/videos-ai.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAiTranscribeStatus(request: VideosAi.GetAiTranscribeStatusRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAi.GetAiTranscribeStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the current transcription status for a video. The response includes the `video_id`,
`status`, and `language`. When the status is `completed`, the response also includes the `texttrack_id`
which can be used to read the transcript via `GET /videos/{video_id}/transcripts/{texttrack_id}`.

Possible status values: `none` (no transcription requested), `not_started` (queued, awaiting processing),
`in_progress`, `completed`, `failed`, `language_not_supported`, `no_speech`, `exceeds_maximum_duration`,
`blocked`, `unknown`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAi.getAiTranscribeStatus({ videoId });
} catch (err) {
  if (err instanceof VideosAi.GetAiTranscribeStatusError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAi.GetAiTranscribeStatusError](src/resources/videos-ai.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAiTranslateDubbingStatus(request: VideosAi.GetAiTranslateDubbingStatusRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAi.GetAiTranslateDubbingStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the audio dubbing jobs for a video. Each entry includes the language, current status,
and — when completed — the `texttrack_id` of the dubbed subtitles and the `audiotrack_uri` of the dubbed
audio. Only completed jobs whose text track still exists are included; deleted tracks are omitted.

Possible status values: `processing`, `completed`, `completed_with_deleted_texttrack`, `completed_with_deleted_audiotrack`, `failed`, `invalid_input` (the source content was not suitable for dubbing), `not_found`, `unknown`. Jobs where both the text track and audio track have been deleted are omitted entirely.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAi.getAiTranslateDubbingStatus({ videoId });
} catch (err) {
  if (err instanceof VideosAi.GetAiTranslateDubbingStatusError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>language?</code> | <code>string</code> | Filter results to a specific target language code. When omitted, all dubbing jobs are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAi.GetAiTranslateDubbingStatusError](src/resources/videos-ai.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAiTranslateSubtitlesStatus(request: VideosAi.GetAiTranslateSubtitlesStatusRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAi.GetAiTranslateSubtitlesStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the subtitle translation jobs for a video. Each entry includes the language,
current status, and — when completed — the `texttrack_id` of the resulting text track. Only completed
translations whose text track still exists are included; deleted tracks are omitted.

Possible status values: `processing`, `completed`, `failed`, `invalid_input` (the source content was not suitable for translation), `not_found`, `unknown`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAi.getAiTranslateSubtitlesStatus({ videoId });
} catch (err) {
  if (err instanceof VideosAi.GetAiTranslateSubtitlesStatusError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>language?</code> | <code>string</code> | Filter results to a specific target language code. When omitted, all subtitle translation jobs are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAi.GetAiTranslateSubtitlesStatusError](src/resources/videos-ai.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startAiTranscribe(request: VideosAi.StartAiTranscribeRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAi.StartAiTranscribeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method generates a transcript from the video's audio using AI speech-to-text. The video must not already
have a transcript — delete the existing one first if you need to regenerate. Transcription is asynchronous;
use `GET /videos/{video_id}/ai/transcribe` to poll for completion. Once complete, read the transcript via
`GET /videos/{video_id}/transcripts/{texttrack_id}`.

When no language is provided, the system attempts to auto-detect the spoken language from the video's audio.
If detection fails or confidence is too low, it falls back to the video's locale, then the user's locale
preference, then English (`en`).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAi.startAiTranscribe({ videoId });
} catch (err) {
  if (err instanceof VideosAi.StartAiTranscribeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosAiTranscribeRequest](src/models/videos-ai-transcribe-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAi.StartAiTranscribeError](src/resources/videos-ai.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startAiTranslateDubbing(request: VideosAi.StartAiTranslateDubbingRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAi.StartAiTranslateDubbingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method starts an audio dubbing job for a video. By calling this endpoint, you confirm that you, and
your end users, have met all legal requirements to use the voices of the people in the source video to
create synthetic audio. This may include obtaining written consent.

The video must have finished transcoding, have a completed transcript, and be under 150 minutes in
duration. Dubbing is asynchronous; use `GET /videos/{video_id}/ai/translate/dubbing` to poll for
completion. Once complete, the dubbed audio appears as an alternate audio track and translated subtitles
appear as a new text track.

AI credits are deducted from the enterprise account's balance. Dubbing costs more credits than subtitling.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAi.startAiTranslateDubbing({ videoId });
} catch (err) {
  if (err instanceof VideosAi.StartAiTranslateDubbingError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosAiTranslateDubbingRequest](src/models/videos-ai-translate-dubbing-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAi.StartAiTranslateDubbingError](src/resources/videos-ai.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startAiTranslateSubtitles(request: VideosAi.StartAiTranslateSubtitlesRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAi.StartAiTranslateSubtitlesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method starts a subtitle translation job for a video. The video must have finished transcoding and have
a completed transcript. Translation is asynchronous; use `GET /videos/{video_id}/ai/translate/subtitles` to
poll for completion. Once complete, the translated subtitles appear as a new text track accessible via
`GET /videos/{video_id}/texttracks`.

AI credits are deducted from the enterprise account's balance.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAi.startAiTranslateSubtitles({ videoId });
} catch (err) {
  if (err instanceof VideosAi.StartAiTranslateSubtitlesError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosAiTranslateSubtitlesRequest](src/models/videos-ai-translate-subtitles-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAi.StartAiTranslateSubtitlesError](src/resources/videos-ai.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosAnimatedThumbnails

> Source: [VideosAnimatedThumbnails](src/resources/videos-animated-thumbnails.ts)

<details>
<summary><code>createAnimatedThumbset(request: VideosAnimatedThumbnails.CreateAnimatedThumbsetRequest, options?: RequestOptions): ApiPromise&lt;AnimatedThumbset, VideosAnimatedThumbnails.CreateAnimatedThumbsetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a set of animated thumbnails for the specified video. Please note that you can't create more than four sets of animated thumbnails for the same video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosAnimatedThumbnails.createAnimatedThumbset({ videoId, body });
  // TODO: Handle 'response' of type AnimatedThumbset
} catch (err) {
  if (err instanceof VideosAnimatedThumbnails.CreateAnimatedThumbsetError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body</code> | <code>[VideosAnimatedThumbsetsRequest](src/models/videos-animated-thumbsets-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnimatedThumbset](src/models/animated-thumbset.ts)</code>

**OnError**: <code>[VideosAnimatedThumbnails.CreateAnimatedThumbsetError](src/resources/videos-animated-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAnimatedThumbset(request: VideosAnimatedThumbnails.DeleteAnimatedThumbsetRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosAnimatedThumbnails.DeleteAnimatedThumbsetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes a set of animated thumbnails for the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosAnimatedThumbnails.deleteAnimatedThumbset({ pictureId, videoId });
} catch (err) {
  if (err instanceof VideosAnimatedThumbnails.DeleteAnimatedThumbsetError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pictureId</code> | <code>string</code> | The UUID of the set of animated thumbnails. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosAnimatedThumbnails.DeleteAnimatedThumbsetError](src/resources/videos-animated-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllAnimatedThumbset(request: VideosAnimatedThumbnails.GetAllAnimatedThumbsetRequest, options?: RequestOptions): ApiPromise&lt;AnimatedThumbsetConnection, VideosAnimatedThumbnails.GetAllAnimatedThumbsetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the sets of animated thumbnails associated with the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosAnimatedThumbnails.getAllAnimatedThumbset({ videoId });
  // TODO: Handle 'response' of type AnimatedThumbsetConnection
} catch (err) {
  if (err instanceof VideosAnimatedThumbnails.GetAllAnimatedThumbsetError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnimatedThumbsetConnection](src/models/animated-thumbset-connection.ts)</code>

**OnError**: <code>[VideosAnimatedThumbnails.GetAllAnimatedThumbsetError](src/resources/videos-animated-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnimatedThumbset(request: VideosAnimatedThumbnails.GetAnimatedThumbsetRequest, options?: RequestOptions): ApiPromise&lt;AnimatedThumbset, VideosAnimatedThumbnails.GetAnimatedThumbsetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a particular set of animated thumbnails associated with the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosAnimatedThumbnails.getAnimatedThumbset({ pictureId, videoId });
  // TODO: Handle 'response' of type AnimatedThumbset
} catch (err) {
  if (err instanceof VideosAnimatedThumbnails.GetAnimatedThumbsetError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pictureId</code> | <code>string</code> | The UUID of the set of animated thumbnails. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnimatedThumbset](src/models/animated-thumbset.ts)</code>

**OnError**: <code>[VideosAnimatedThumbnails.GetAnimatedThumbsetError](src/resources/videos-animated-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnimatedThumbsetStatus(request: VideosAnimatedThumbnails.GetAnimatedThumbsetStatusRequest, options?: RequestOptions): ApiPromise&lt;AnimatedThumbset, VideosAnimatedThumbnails.GetAnimatedThumbsetStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the status of a particular set of animated thumbnails associated with the specified video. The status indicates whether the thumbnails are ready to use. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosAnimatedThumbnails.getAnimatedThumbsetStatus({ pictureId, videoId });
  // TODO: Handle 'response' of type AnimatedThumbset
} catch (err) {
  if (
    err instanceof VideosAnimatedThumbnails.GetAnimatedThumbsetStatusError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pictureId</code> | <code>string</code> | The UUID of the set of animated thumbnails. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnimatedThumbset](src/models/animated-thumbset.ts)</code>

**OnError**: <code>[VideosAnimatedThumbnails.GetAnimatedThumbsetStatusError](src/resources/videos-animated-thumbnails.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosChapters

> Source: [VideosChapters](src/resources/videos-chapters.ts)

<details>
<summary><code>createChapter(request: VideosChapters.CreateChapterRequest, options?: RequestOptions): ApiPromise&lt;Chapter, VideosChapters.CreateChapterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a chapter to the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosChapters.createChapter({ videoId });
  // TODO: Handle 'response' of type Chapter
} catch (err) {
  if (err instanceof VideosChapters.CreateChapterError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosChaptersRequest](src/models/videos-chapters-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Chapter](src/models/chapter.ts)</code>

**OnError**: <code>[VideosChapters.CreateChapterError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createChapterThumbnailOrUploadLink(request: VideosChapters.CreateChapterThumbnailOrUploadLinkRequest, options?: RequestOptions): ApiPromise&lt;Picture, VideosChapters.CreateChapterThumbnailOrUploadLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method generates either an upload link or a timecode-based thumbnail for the specified saved video chapter. To generate the upload link, which enables the authenticated user to upload a chapter thumbnail image manually, leave the body of the request empty. To generate an automatic timecode-based thumbnail, include the **timecode** parameter in the body of the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosChapters.createChapterThumbnailOrUploadLink({ chapterId, videoId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (
    err instanceof VideosChapters.CreateChapterThumbnailOrUploadLinkError &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>chapterId</code> | <code>number</code> | The ID of the chapter. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosChaptersPicturesRequest](src/models/videos-chapters-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[VideosChapters.CreateChapterThumbnailOrUploadLinkError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUnsavedChapterThumbnailOrUploadLink(request: VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkRequest, options?: RequestOptions): ApiPromise&lt;Picture, VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method generates either an upload link or a timecode-based thumbnail for an unsaved video chapter. To generate the upload link, which enables the authenticated user to upload a chapter thumbnail image manually, leave the body of the request empty. To generate an automatic timecode-based thumbnail, specify the **timecode** parameter in the body of the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosChapters.createUnsavedChapterThumbnailOrUploadLink({ videoId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (
    err instanceof VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkError &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosChaptersTemporaryPicturesRequest](src/models/videos-chapters-temporary-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteChapter(request: VideosChapters.DeleteChapterRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosChapters.DeleteChapterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified chapter from a video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosChapters.deleteChapter({ chapterId, videoId });
} catch (err) {
  if (err instanceof VideosChapters.DeleteChapterError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>chapterId</code> | <code>number</code> | The ID of the chapter. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosChapters.DeleteChapterError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteChapterThumbnail(request: VideosChapters.DeleteChapterThumbnailRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosChapters.DeleteChapterThumbnailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified chapter thumbnail from a video.

The authenticated user must be the owner of the video that the chapter belongs to.
This method deletes both timecode-generated and custom-uploaded thumbnails.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosChapters.deleteChapterThumbnail({ chapterId, uid, videoId });
} catch (err) {
  if (err instanceof VideosChapters.DeleteChapterThumbnailError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>chapterId</code> | <code>number</code> | The ID of the chapter. |
| <code>uid</code> | <code>string</code> | The unique ID of the thumbnail. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosChapters.DeleteChapterThumbnailError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editChapter(request: VideosChapters.EditChapterRequest, options?: RequestOptions): ApiPromise&lt;Chapter, VideosChapters.EditChapterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified chapter of a video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosChapters.editChapter({ chapterId, videoId });
  // TODO: Handle 'response' of type Chapter
} catch (err) {
  if (err instanceof VideosChapters.EditChapterError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>chapterId</code> | <code>number</code> | The ID of the chapter. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosChaptersRequest1](src/models/videos-chapters-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Chapter](src/models/chapter.ts)</code>

**OnError**: <code>[VideosChapters.EditChapterError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChapter(request: VideosChapters.GetChapterRequest, options?: RequestOptions): ApiPromise&lt;Chapter, VideosChapters.GetChapterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single chapter of the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosChapters.getChapter({ chapterId, videoId });
  // TODO: Handle 'response' of type Chapter
} catch (err) {
  if (err instanceof VideosChapters.GetChapterError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>chapterId</code> | <code>number</code> | The ID of the chapter. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Chapter](src/models/chapter.ts)</code>

**OnError**: <code>[VideosChapters.GetChapterError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChapterThumbnail(request: VideosChapters.GetChapterThumbnailRequest, options?: RequestOptions): ApiPromise&lt;Picture, VideosChapters.GetChapterThumbnailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified thumbnail associated with a saved video chapter.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosChapters.getChapterThumbnail({ chapterId, videoId, uid });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof VideosChapters.GetChapterThumbnailError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>chapterId</code> | <code>number</code> | The ID of the chapter. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>uid</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[VideosChapters.GetChapterThumbnailError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChapterThumbnails(request: VideosChapters.GetChapterThumbnailsRequest, options?: RequestOptions): ApiPromise&lt;Picture, VideosChapters.GetChapterThumbnailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every thumbnail associated with the specified saved video chapter.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosChapters.getChapterThumbnails({ chapterId, videoId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof VideosChapters.GetChapterThumbnailsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>chapterId</code> | <code>number</code> | The ID of the chapter. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[VideosChapters.GetChapterThumbnailsError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChapters(request: VideosChapters.GetChaptersRequest, options?: RequestOptions): ApiPromise&lt;ChapterConnection, VideosChapters.GetChaptersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every chapter of the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosChapters.getChapters({ videoId });
  // TODO: Handle 'response' of type ChapterConnection
} catch (err) {
  if (err instanceof VideosChapters.GetChaptersError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChapterConnection](src/models/chapter-connection.ts)</code>

**OnError**: <code>[VideosChapters.GetChaptersError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUnsavedChapterThumbnail(request: VideosChapters.GetUnsavedChapterThumbnailRequest, options?: RequestOptions): ApiPromise&lt;Picture, VideosChapters.GetUnsavedChapterThumbnailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified thumbnail associated with an unsaved video chapter.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosChapters.getUnsavedChapterThumbnail({ videoId, uid });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof VideosChapters.GetUnsavedChapterThumbnailError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>uid</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[VideosChapters.GetUnsavedChapterThumbnailError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setChapterThumbnailActive(request: VideosChapters.SetChapterThumbnailActiveRequest, options?: RequestOptions): ApiPromise&lt;Picture, VideosChapters.SetChapterThumbnailActiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method sets the specified chapter thumbnail for a video as active.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosChapters.setChapterThumbnailActive({ chapterId, videoId, uid });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  if (err instanceof VideosChapters.SetChapterThumbnailActiveError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>chapterId</code> | <code>number</code> | The ID of the chapter. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>uid</code> | <code>string</code> | - |
| <code>body?</code> | <code>[VideosChaptersPicturesUidRequest](src/models/videos-chapters-pictures-uid-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[VideosChapters.SetChapterThumbnailActiveError](src/resources/videos-chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosContentRatings

> Source: [VideosContentRatings](src/resources/videos-content-ratings.ts)

<details>
<summary><code>getContentRatings(options?: RequestOptions): ApiPromise&lt;ContentRatingConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all available content ratings.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosContentRatings.getContentRatings();
  // TODO: Handle 'response' of type ContentRatingConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContentRatingConnection](src/models/content-rating-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosCreativeCommons

> Source: [VideosCreativeCommons](src/resources/videos-creative-commons.ts)

<details>
<summary><code>getCcLicenses(request: VideosCreativeCommons.GetCcLicensesRequest, options?: RequestOptions): ApiPromise&lt;CreativeCommonsConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all available Creative Commons licenses.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosCreativeCommons.getCcLicenses();
  // TODO: Handle 'response' of type CreativeCommonsConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreativeCommonsConnection](src/models/creative-commons-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosCredits

> Source: [VideosCredits](src/resources/videos-credits.ts)

<details>
<summary><code>addVideoCredit(request: VideosCredits.AddVideoCreditRequest, options?: RequestOptions): ApiPromise&lt;Credit, VideosCredits.AddVideoCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a user credit to the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosCredits.addVideoCredit({ videoId, body });
  // TODO: Handle 'response' of type Credit
} catch (err) {
  if (err instanceof VideosCredits.AddVideoCreditError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body</code> | <code>[VideosCreditsRequest](src/models/videos-credits-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Credit](src/models/credit.ts)</code>

**OnError**: <code>[VideosCredits.AddVideoCreditError](src/resources/videos-credits.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideoCreditAlt1(request: VideosCredits.AddVideoCreditAlt1Request, options?: RequestOptions): ApiPromise&lt;Credit, VideosCredits.AddVideoCreditAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a user credit to the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosCredits.addVideoCreditAlt1({ channelId, videoId, body });
  // TODO: Handle 'response' of type Credit
} catch (err) {
  if (err instanceof VideosCredits.AddVideoCreditAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body</code> | <code>[ChannelsVideosCreditsRequest](src/models/channels-videos-credits-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Credit](src/models/credit.ts)</code>

**OnError**: <code>[VideosCredits.AddVideoCreditAlt1Error](src/resources/videos-credits.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>availableUsers(request: VideosCredits.AvailableUsersRequest, options?: RequestOptions): ApiPromise&lt;UserConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the users who can be credited on the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosCredits.availableUsers({ videoId });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date followed. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoCredit(request: VideosCredits.DeleteVideoCreditRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosCredits.DeleteVideoCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified user credit from a video. The authenticated user must be the creator of the credit or the credited user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosCredits.deleteVideoCredit({ creditId, videoId });
} catch (err) {
  if (err instanceof VideosCredits.DeleteVideoCreditError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>creditId</code> | <code>number</code> | The ID of the credit. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosCredits.DeleteVideoCreditError](src/resources/videos-credits.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editVideoCredit(request: VideosCredits.EditVideoCreditRequest, options?: RequestOptions): ApiPromise&lt;Credit, VideosCredits.EditVideoCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified user credit in a video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosCredits.editVideoCredit({ creditId, videoId });
  // TODO: Handle 'response' of type Credit
} catch (err) {
  if (err instanceof VideosCredits.EditVideoCreditError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>creditId</code> | <code>number</code> | The ID of the credit. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosCreditsRequest1](src/models/videos-credits-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Credit](src/models/credit.ts)</code>

**OnError**: <code>[VideosCredits.EditVideoCreditError](src/resources/videos-credits.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoCredit(request: VideosCredits.GetVideoCreditRequest, options?: RequestOptions): ApiPromise&lt;Credit, VideosCredits.GetVideoCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single credited user in a video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosCredits.getVideoCredit({ creditId, videoId });
  // TODO: Handle 'response' of type Credit
} catch (err) {
  if (err instanceof VideosCredits.GetVideoCreditError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>creditId</code> | <code>number</code> | The ID of the credit. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Credit](src/models/credit.ts)</code>

**OnError**: <code>[VideosCredits.GetVideoCreditError](src/resources/videos-credits.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoCredits(request: VideosCredits.GetVideoCreditsRequest, options?: RequestOptions): ApiPromise&lt;CreditConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every credited user in a video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosCredits.getVideoCredits({ videoId });
  // TODO: Handle 'response' of type CreditConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditConnection](src/models/credit-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoCreditsAlt1(request: VideosCredits.GetVideoCreditsAlt1Request, options?: RequestOptions): ApiPromise&lt;CreditConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every credited user in a video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosCredits.getVideoCreditsAlt1({ channelId, videoId });
  // TODO: Handle 'response' of type CreditConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort8](src/models/sort8.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `date` - Sort the results by date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditConnection](src/models/credit-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosEmbedPrivacy

> Source: [VideosEmbedPrivacy](src/resources/videos-embed-privacy.ts)

<details>
<summary><code>addVideoPrivacyDomain(request: VideosEmbedPrivacy.AddVideoPrivacyDomainRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosEmbedPrivacy.AddVideoPrivacyDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds the specified domain to a video's allowlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosEmbedPrivacy.addVideoPrivacyDomain({ domain, videoId });
} catch (err) {
  if (err instanceof VideosEmbedPrivacy.AddVideoPrivacyDomainError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>string</code> | The domain name. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosEmbedPrivacy.AddVideoPrivacyDomainError](src/resources/videos-embed-privacy.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoPrivacyDomain(request: VideosEmbedPrivacy.DeleteVideoPrivacyDomainRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosEmbedPrivacy.DeleteVideoPrivacyDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the specified domain from a video's allowlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosEmbedPrivacy.deleteVideoPrivacyDomain({ domain, videoId });
} catch (err) {
  if (err instanceof VideosEmbedPrivacy.DeleteVideoPrivacyDomainError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>string</code> | The domain name. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosEmbedPrivacy.DeleteVideoPrivacyDomainError](src/resources/videos-embed-privacy.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoPrivacyDomains(request: VideosEmbedPrivacy.GetVideoPrivacyDomainsRequest, options?: RequestOptions): ApiPromise&lt;DomainConnection, VideosEmbedPrivacy.GetVideoPrivacyDomainsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every domain on the specified video's allowlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEmbedPrivacy.getVideoPrivacyDomains({ videoId });
  // TODO: Handle 'response' of type DomainConnection
} catch (err) {
  if (err instanceof VideosEmbedPrivacy.GetVideoPrivacyDomainsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort78](src/models/sort78.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `default` - Sort the results by the video's allowlist ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DomainConnection](src/models/domain-connection.ts)</code>

**OnError**: <code>[VideosEmbedPrivacy.GetVideoPrivacyDomainsError](src/resources/videos-embed-privacy.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosEssentials

> Source: [VideosEssentials](src/resources/videos-essentials.ts)

<details>
<summary><code>checkIfUserOwnsVideo(request: VideosEssentials.CheckIfUserOwnsVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, VideosEssentials.CheckIfUserOwnsVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the authenticated user is the owner of the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.checkIfUserOwnsVideo({ userId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof VideosEssentials.CheckIfUserOwnsVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[VideosEssentials.CheckIfUserOwnsVideoError](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkIfUserOwnsVideoAlt1(request: VideosEssentials.CheckIfUserOwnsVideoAlt1Request, options?: RequestOptions): ApiPromise&lt;Video, VideosEssentials.CheckIfUserOwnsVideoAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the authenticated user is the owner of the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.checkIfUserOwnsVideoAlt1({ videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof VideosEssentials.CheckIfUserOwnsVideoAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[VideosEssentials.CheckIfUserOwnsVideoAlt1Error](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>copyVideo(request: VideosEssentials.CopyVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, VideosEssentials.CopyVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a copy of the specified video. Only the source's
current version is copied; prior version history is not carried over.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.copyVideo({ userId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof VideosEssentials.CopyVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[UsersVideosCopyRequest](src/models/users-videos-copy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[VideosEssentials.CopyVideoError](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>copyVideoAlt2(request: VideosEssentials.CopyVideoAlt2Request, options?: RequestOptions): ApiPromise&lt;Video, VideosEssentials.CopyVideoAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a copy of the specified video. Only the source's
current version is copied; prior version history is not carried over.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.copyVideoAlt2({ videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof VideosEssentials.CopyVideoAlt2Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[MeVideosCopyRequest](src/models/me-videos-copy-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[VideosEssentials.CopyVideoAlt2Error](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideo(request: VideosEssentials.DeleteVideoRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosEssentials.DeleteVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosEssentials.deleteVideo({ videoId });
} catch (err) {
  if (err instanceof VideosEssentials.DeleteVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosRequest](src/models/videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosEssentials.DeleteVideoError](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideos(request: VideosEssentials.DeleteVideosRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosEssentials.DeleteVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes one or more videos belonging to the specified user. The authenticated user must have permission to delete the videos.

Specify the videos to delete in a comma-separated list by URI using the **uris** query parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosEssentials.deleteVideos({ userId, uris });
} catch (err) {
  if (err instanceof VideosEssentials.DeleteVideosError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>uris</code> | <code>string</code> | A comma-separated list of the video URIs to delete. |
| <code>body?</code> | <code>[UsersVideosRequest](src/models/users-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosEssentials.DeleteVideosError](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideosAlt1(request: VideosEssentials.DeleteVideosAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, VideosEssentials.DeleteVideosAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes one or more videos belonging to the specified user. The authenticated user must have permission to delete the videos.

Specify the videos to delete in a comma-separated list by URI using the **uris** query parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosEssentials.deleteVideosAlt1({ uris });
} catch (err) {
  if (err instanceof VideosEssentials.DeleteVideosAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uris</code> | <code>string</code> | A comma-separated list of the video URIs to delete. |
| <code>body?</code> | <code>[MeVideosRequest](src/models/me-videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosEssentials.DeleteVideosAlt1Error](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editVideo(request: VideosEssentials.EditVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, VideosEssentials.EditVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.editVideo({ videoId, body });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof VideosEssentials.EditVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body</code> | <code>[VideosRequest1](src/models/videos-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[VideosEssentials.EditVideoError](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAppearances(request: VideosEssentials.GetAppearancesRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, VideosEssentials.GetAppearancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the videos in which the authenticated user has a credited appearance.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.getAppearances({ userId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof VideosEssentials.GetAppearancesError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort15](src/models/sort15.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by date.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[VideosEssentials.GetAppearancesError](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAppearancesAlt1(request: VideosEssentials.GetAppearancesAlt1Request, options?: RequestOptions): ApiPromise&lt;VideoConnection, VideosEssentials.GetAppearancesAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the videos in which the authenticated user has a credited appearance.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.getAppearancesAlt1();
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof VideosEssentials.GetAppearancesAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort15](src/models/sort15.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by date.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[VideosEssentials.GetAppearancesAlt1Error](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideo(request: VideosEssentials.GetVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, VideosEssentials.GetVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.getVideo({ videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof VideosEssentials.GetVideoError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>timeLinks?</code> | <code>boolean</code> | Whether to return timestamps in the description as links. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[VideosEssentials.GetVideoError](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideos(request: VideosEssentials.GetVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, VideosEssentials.GetVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the videos that the authenticated user has uploaded.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.getVideos({ userId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof VideosEssentials.GetVideosError && err.payload.kind === "error304") {
    // TODO: Handle 'err.payload' — the "error304" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>containingUri?</code> | <code>string</code> | The page that contains the video URI. The field is available only when not paired with **query**. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter22](src/models/filter22.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `app_only` - Return app-only videos.<br> * `cold_privacy` - Return the owner's active videos whose privacy is suppressed because their plan no longer supports it (cold privacy).<br> * `cold_storage` - Return cold storage videos.<br> * `embeddable` - Return embeddable videos.<br> * `featured` - Return featured videos.<br> * `live` - Return only live videos.<br> * `no_placeholder` - Return no placeholder videos.<br> * `nolive` - Return no live videos.<br> * `playable` - Return playable videos.<br> * `screen_recorded` - Return screen-recorded videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>filterPlayable?</code> | <code>boolean</code> | Whether to filter the results by playable videos (`true`) or non-playable videos (`false`). |
| <code>filterScreenRecorded?</code> | <code>boolean</code> | Whether to filter the results by screen-recorded videos (`true`) or non-screen-recorded videos (`false`). |
| <code>filterTag?</code> | <code>string</code> | A comma-separated list of tags to filter on. All results must include at least one of these tags. |
| <code>filterTagAllOf?</code> | <code>string</code> | A comma-separated list of tags to filter on. All results must include all of these tags. |
| <code>filterTagExclude?</code> | <code>string</code> | A comma-separated list of tags to exclude. All results must exclude all of these tags. |
| <code>filterUploader?</code> | <code>number</code> | The ID of the team member or team owner uploader to filter for. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>queryFields?</code> | <code>[QueryFields](src/models/query-fields.ts)</code> | A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`.<br><br>Option descriptions:<br> * `chapters` - Query by chapter titles that have been added to the video.<br> * `description` - Query by the description of the video.<br> * `tags` - Query by tag names that have been added to the video.<br> * `title` - Query by the title of the video. |
| <code>sort?</code> | <code>[Sort39](src/models/sort39.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically by title.<br> * `date` - Sort the results by date.<br> * `default` - Use the default sorting method.<br> * `duration` - Sort the results by duration.<br> * `last_user_action_event_date` - Sort the results by last user interaction. If a result hasn't had an interaction, the upload date is used instead.<br> * `likes` - Sort the results by number of likes. To use this option, **direction** must be `desc`.<br> * `modified_time` - Sort the results by last modification.<br> * `plays` - Sort the results by number of plays. To use this option, **direction** must be `desc`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[VideosEssentials.GetVideosError](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideosAlt1(request: VideosEssentials.GetVideosAlt1Request, options?: RequestOptions): ApiPromise&lt;VideoConnection, VideosEssentials.GetVideosAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the videos that the authenticated user has uploaded.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.getVideosAlt1();
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof VideosEssentials.GetVideosAlt1Error && err.payload.kind === "error304") {
    // TODO: Handle 'err.payload' — the "error304" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>containingUri?</code> | <code>string</code> | The page that contains the video URI. The field is available only when not paired with **query**. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter22](src/models/filter22.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `app_only` - Return app-only videos.<br> * `cold_privacy` - Return the owner's active videos whose privacy is suppressed because their plan no longer supports it (cold privacy).<br> * `cold_storage` - Return cold storage videos.<br> * `embeddable` - Return embeddable videos.<br> * `featured` - Return featured videos.<br> * `live` - Return only live videos.<br> * `no_placeholder` - Return no placeholder videos.<br> * `nolive` - Return no live videos.<br> * `playable` - Return playable videos.<br> * `screen_recorded` - Return screen-recorded videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>filterPlayable?</code> | <code>boolean</code> | Whether to filter the results by playable videos (`true`) or non-playable videos (`false`). |
| <code>filterScreenRecorded?</code> | <code>boolean</code> | Whether to filter the results by screen-recorded videos (`true`) or non-screen-recorded videos (`false`). |
| <code>filterTag?</code> | <code>string</code> | A comma-separated list of tags to filter on. All results must include at least one of these tags. |
| <code>filterTagAllOf?</code> | <code>string</code> | A comma-separated list of tags to filter on. All results must include all of these tags. |
| <code>filterTagExclude?</code> | <code>string</code> | A comma-separated list of tags to exclude. All results must exclude all of these tags. |
| <code>filterUploader?</code> | <code>number</code> | The ID of the team member or team owner uploader to filter for. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>queryFields?</code> | <code>[QueryFields](src/models/query-fields.ts)</code> | A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`.<br><br>Option descriptions:<br> * `chapters` - Query by chapter titles that have been added to the video.<br> * `description` - Query by the description of the video.<br> * `tags` - Query by tag names that have been added to the video.<br> * `title` - Query by the title of the video. |
| <code>sort?</code> | <code>[Sort39](src/models/sort39.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically by title.<br> * `date` - Sort the results by date.<br> * `default` - Use the default sorting method.<br> * `duration` - Sort the results by duration.<br> * `last_user_action_event_date` - Sort the results by last user interaction. If a result hasn't had an interaction, the upload date is used instead.<br> * `likes` - Sort the results by number of likes. To use this option, **direction** must be `desc`.<br> * `modified_time` - Sort the results by last modification.<br> * `plays` - Sort the results by number of plays. To use this option, **direction** must be `desc`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[VideosEssentials.GetVideosAlt1Error](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchVideos(request: VideosEssentials.SearchVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, VideosEssentials.SearchVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the videos that match custom search criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.searchVideos();
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof VideosEssentials.SearchVideosError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter45](src/models/filter45.ts)</code> | The attribute by which to filter the results. `CC` and related filters target videos with the corresponding Creative Commons licenses. For more information, see our [Creative Commons](https://vimeo.com/creativecommons) page.<br><br>Option descriptions:<br> * `CC` - Return videos under any Creative Commons license.<br> * `CC-BY` - Return CC BY, or attribution-only, videos.<br> * `CC-BY-NC` - Return CC BY-NC, or Attribution-NonCommercial, videos.<br> * `CC-BY-NC-ND` - Return CC BY-NC-ND, or Attribution-NonCommercial-NoDerivs, videos.<br> * `CC-BY-NC-SA` - Return CC BY-NC-SA, or Attribution-NonCommercial-ShareAlike, videos.<br> * `CC-BY-ND` - Return CC BY-ND, or Attribution-NoDerivs, videos.<br> * `CC-BY-SA` - Return CC BY-SA, or Attribution-ShareAlike, videos.<br> * `CC0` - Return CC0, or public domain, videos.<br> * `categories` - Filter by categories.<br> * `duration` - Filter by duration.<br> * `in-progress` - Return in-progress videos.<br> * `minimum_likes` - Filter by minimum likes.<br> * `trending` - Return trending videos.<br> * `upload_date` - Filter by upload date. |
| <code>links?</code> | <code>string</code> | A comma-separated list of video URLs to find. Querying, filtering, and sorting aren't supported when using this field. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query. |
| <code>sort?</code> | <code>[Sort73](src/models/sort73.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by date.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays.<br> * `relevant` - Sort the results by relevance. |
| <code>uris?</code> | <code>string</code> | A comma-separated list of video URIs to find. Querying, filtering, and sorting aren't supported when using this field. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[VideosEssentials.SearchVideosError](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVideoCustomMetadata(request: VideosEssentials.UpdateVideoCustomMetadataRequest, options?: RequestOptions): ApiPromise&lt;CustomMetadataValues[], VideosEssentials.UpdateVideoCustomMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method sets, updates, or clears custom metadata values on a single video.

The authenticated user must own the video or have team permission to edit it.

Send each value as a `{field_id, field_value}` pair under the `fields` array.
The value's data type is validated against the field's definition (set via
`POST /teams/{user_id}/custom_metadata`):

| Type           | Accepted format                                         |
| -------------- | ------------------------------------------------------- |
| `str`          | A non-empty string of up to 50 characters               |
| `int`          | An integer, optionally negative (for example, `42`)     |
| `date`         | `YYYY-MM-DD`                                            |
| `bool`         | `"true"`, `"false"`, `"1"`, or `"0"`                    |
| `select`       | One of the values defined for the field                 |
| `multi-select` | A JSON-encoded array of allowed values                  |

To clear an existing value, send `field_value: null`. The field will return to
its default value (if one is defined) or become unset.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosEssentials.updateVideoCustomMetadata({ videoId });
  // TODO: Handle 'response' of type CustomMetadataValues[]
} catch (err) {
  if (err instanceof VideosEssentials.UpdateVideoCustomMetadataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosCustomMetadataRequest](src/models/videos-custom-metadata-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomMetadataValues](src/models/custom-metadata-values.ts)[]</code>

**OnError**: <code>[VideosEssentials.UpdateVideoCustomMetadataError](src/resources/videos-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosFragments

> Source: [VideosFragments](src/resources/videos-fragments.ts)

<details>
<summary><code>deleteFragments(request: VideosFragments.DeleteFragmentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes all fragments for the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosFragments.deleteFragments({ videoId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFragments(request: VideosFragments.GetFragmentsRequest, options?: RequestOptions): ApiPromise&lt;Fragments, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all of the fragments associated with the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosFragments.getFragments({ videoId });
  // TODO: Handle 'response' of type Fragments
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Fragments](src/models/fragments.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putFragments(request: VideosFragments.PutFragmentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method updates the specified video with new fragments.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosFragments.putFragments({ videoId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosLanguages

> Source: [VideosLanguages](src/resources/videos-languages.ts)

<details>
<summary><code>getLanguages(request: VideosLanguages.GetLanguagesRequest, options?: RequestOptions): ApiPromise&lt;LanguageConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all available video languages.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosLanguages.getLanguages();
  // TODO: Handle 'response' of type LanguageConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>[Filter7](src/models/filter7.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `audiotracks` - Return languages that can be used for audio tracks.<br> * `texttracks` - Return languages that can be used for text tracks. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LanguageConnection](src/models/language-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosLiveM3U8Playback

> Source: [VideosLiveM3U8Playback](src/resources/videos-live-m3-u8-playback.ts)

<details>
<summary><code>getOneTimeEventM3U8Playback(request: VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our [HLS guide](https://developer.vimeo.com/api/live/playback).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosLiveM3U8Playback.getOneTimeEventM3U8Playback({ userId, videoId });
} catch (err) {
  if (
    err instanceof VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackError](src/resources/videos-live-m3-u8-playback.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOneTimeEventM3U8PlaybackAlt1(request: VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our [HLS guide](https://developer.vimeo.com/api/live/playback).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosLiveM3U8Playback.getOneTimeEventM3U8PlaybackAlt1({ videoId });
} catch (err) {
  if (
    err instanceof VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Error && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Error](src/resources/videos-live-m3-u8-playback.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosModeration

> Source: [VideosModeration](src/resources/videos-moderation.ts)

<details>
<summary><code>getVideoReportingReasons(options?: RequestOptions): ApiPromise&lt;VideoReportReason, VideosModeration.GetVideoReportingReasonsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a list of valid reasons for reporting inappropriate videos on Vimeo.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosModeration.getVideoReportingReasons();
  // TODO: Handle 'response' of type VideoReportReason
} catch (err) {
  if (err instanceof VideosModeration.GetVideoReportingReasonsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoReportReason](src/models/video-report-reason.ts)</code>

**OnError**: <code>[VideosModeration.GetVideoReportingReasonsError](src/resources/videos-moderation.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosNondestructiveTrimming

> Source: [VideosNondestructiveTrimming](src/resources/videos-nondestructive-trimming.ts)

<details>
<summary><code>clipTrim(request: VideosNondestructiveTrimming.ClipTrimRequest, options?: RequestOptions): ApiPromise&lt;TrimmedVideo, VideosNondestructiveTrimming.ClipTrimError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method starts a trim operation for the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosNondestructiveTrimming.clipTrim({ videoId });
  // TODO: Handle 'response' of type TrimmedVideo
} catch (err) {
  if (err instanceof VideosNondestructiveTrimming.ClipTrimError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosTrimRequest](src/models/videos-trim-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrimmedVideo](src/models/trimmed-video.ts)</code>

**OnError**: <code>[VideosNondestructiveTrimming.ClipTrimError](src/resources/videos-nondestructive-trimming.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosRecommendations

> Source: [VideosRecommendations](src/resources/videos-recommendations.ts)

<details>
<summary><code>getRelatedVideos(request: VideosRecommendations.GetRelatedVideosRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, VideosRecommendations.GetRelatedVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every related video of the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosRecommendations.getRelatedVideos({ videoId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof VideosRecommendations.GetRelatedVideosError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>filter?</code> | <code>[Filter46](src/models/filter46.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `related` - Return related videos. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[VideosRecommendations.GetRelatedVideosError](src/resources/videos-recommendations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosShowcases

> Source: [VideosShowcases](src/resources/videos-showcases.ts)

<details>
<summary><code>addOrRemoveMultipleAlbums(request: VideosShowcases.AddOrRemoveMultipleAlbumsRequest, options?: RequestOptions): ApiPromise&lt;Album[], VideosShowcases.AddOrRemoveMultipleAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds or removes the specified video to or from multiple showcases.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosShowcases.addOrRemoveMultipleAlbums({ videoId });
  // TODO: Handle 'response' of type Album[]
} catch (err) {
  if (err instanceof VideosShowcases.AddOrRemoveMultipleAlbumsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosAlbumsRequest](src/models/videos-albums-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Album](src/models/album.ts)[]</code>

**OnError**: <code>[VideosShowcases.AddOrRemoveMultipleAlbumsError](src/resources/videos-showcases.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoAlbums(request: VideosShowcases.GetVideoAlbumsRequest, options?: RequestOptions): ApiPromise&lt;AlbumConnection, VideosShowcases.GetVideoAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the showcases that contain the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosShowcases.getVideoAlbums({ videoId });
  // TODO: Handle 'response' of type AlbumConnection
} catch (err) {
  if (err instanceof VideosShowcases.GetVideoAlbumsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AlbumConnection](src/models/album-connection.ts)</code>

**OnError**: <code>[VideosShowcases.GetVideoAlbumsError](src/resources/videos-showcases.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosTags

> Source: [VideosTags](src/resources/videos-tags.ts)

<details>
<summary><code>addVideoTag(request: VideosTags.AddVideoTagRequest, options?: RequestOptions): ApiPromise&lt;Tag, VideosTags.AddVideoTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a single tag to the specified video. The authenticated user must have edit access to the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTags.addVideoTag({ videoId, word });
  // TODO: Handle 'response' of type Tag
} catch (err) {
  if (err instanceof VideosTags.AddVideoTagError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>word</code> | <code>string</code> | The tag word. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tag](src/models/tag.ts)</code>

**OnError**: <code>[VideosTags.AddVideoTagError](src/resources/videos-tags.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideoTags(request: VideosTags.AddVideoTagsRequest, options?: RequestOptions): ApiPromise&lt;Tag[], VideosTags.AddVideoTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds multiple tags to the specified video. Include the tags as a JSON array  as the body of the request with the  **name** field, like this: `[{ "name": "funny"}, {"name": "concert" }]`. The authenticated user must have edit access to the video. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTags.addVideoTags({ videoId });
  // TODO: Handle 'response' of type Tag[]
} catch (err) {
  if (err instanceof VideosTags.AddVideoTagsError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tag](src/models/tag.ts)[]</code>

**OnError**: <code>[VideosTags.AddVideoTagsError](src/resources/videos-tags.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkVideoForTag(request: VideosTags.CheckVideoForTagRequest, options?: RequestOptions): ApiPromise&lt;Tag, VideosTags.CheckVideoForTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method determines whether the specified tag has been added to a video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTags.checkVideoForTag({ videoId, word });
  // TODO: Handle 'response' of type Tag
} catch (err) {
  if (err instanceof VideosTags.CheckVideoForTagError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>word</code> | <code>string</code> | The tag word. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tag](src/models/tag.ts)</code>

**OnError**: <code>[VideosTags.CheckVideoForTagError](src/resources/videos-tags.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoTag(request: VideosTags.DeleteVideoTagRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosTags.DeleteVideoTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the specified tag from a video. The authenticated user must have edit access to the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosTags.deleteVideoTag({ videoId, word });
} catch (err) {
  if (err instanceof VideosTags.DeleteVideoTagError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>word</code> | <code>string</code> | The tag word. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosTags.DeleteVideoTagError](src/resources/videos-tags.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoTags(request: VideosTags.GetVideoTagsRequest, options?: RequestOptions): ApiPromise&lt;TagConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the tags associated with the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTags.getVideoTags({ videoId });
  // TODO: Handle 'response' of type TagConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagConnection](src/models/tag-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideosWithTag(request: VideosTags.GetVideosWithTagRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, VideosTags.GetVideosWithTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all the public videos associated with the specified tag.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTags.getVideosWithTag({ word });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof VideosTags.GetVideosWithTagError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>string</code> | The tag word. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>sort?</code> | <code>[Sort47](src/models/sort47.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `created_time` - Sort the results by creation time.<br> * `duration` - Sort the results by duration.<br> * `name` - Sort the results by name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[VideosTags.GetVideosWithTagError](src/resources/videos-tags.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosTextTracks

> Source: [VideosTextTracks](src/resources/videos-text-tracks.ts)

<details>
<summary><code>createTextTrack(request: VideosTextTracks.CreateTextTrackRequest, options?: RequestOptions): ApiPromise&lt;TextTrack, VideosTextTracks.CreateTextTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a text track to the specified video. For more information, see [Working with Text Track Uploads](https://developer.vimeo.com/api/upload/texttracks).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTextTracks.createTextTrack({ videoId, body });
  // TODO: Handle 'response' of type TextTrack
} catch (err) {
  if (err instanceof VideosTextTracks.CreateTextTrackError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body</code> | <code>[VideosTexttracksRequest](src/models/videos-texttracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TextTrack](src/models/text-track.ts)</code>

**OnError**: <code>[VideosTextTracks.CreateTextTrackError](src/resources/videos-text-tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTextTrackAlt1(request: VideosTextTracks.CreateTextTrackAlt1Request, options?: RequestOptions): ApiPromise&lt;TextTrack, VideosTextTracks.CreateTextTrackAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a text track to the specified video. For more information, see [Working with Text Track Uploads](https://developer.vimeo.com/api/upload/texttracks).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTextTracks.createTextTrackAlt1({ channelId, videoId, body });
  // TODO: Handle 'response' of type TextTrack
} catch (err) {
  if (err instanceof VideosTextTracks.CreateTextTrackAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body</code> | <code>[ChannelsVideosTexttracksRequest](src/models/channels-videos-texttracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TextTrack](src/models/text-track.ts)</code>

**OnError**: <code>[VideosTextTracks.CreateTextTrackAlt1Error](src/resources/videos-text-tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTextTrack(request: VideosTextTracks.DeleteTextTrackRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosTextTracks.DeleteTextTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified text track from a video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosTextTracks.deleteTextTrack({ texttrackId, videoId });
} catch (err) {
  if (err instanceof VideosTextTracks.DeleteTextTrackError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>texttrackId</code> | <code>number</code> | The ID of the text track. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosTextTracks.DeleteTextTrackError](src/resources/videos-text-tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editTextTrack(request: VideosTextTracks.EditTextTrackRequest, options?: RequestOptions): ApiPromise&lt;TextTrack, VideosTextTracks.EditTextTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified text track of a video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTextTracks.editTextTrack({ texttrackId, videoId });
  // TODO: Handle 'response' of type TextTrack
} catch (err) {
  if (err instanceof VideosTextTracks.EditTextTrackError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>texttrackId</code> | <code>number</code> | The ID of the text track. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosTexttracksRequest1](src/models/videos-texttracks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TextTrack](src/models/text-track.ts)</code>

**OnError**: <code>[VideosTextTracks.EditTextTrackError](src/resources/videos-text-tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTextTrack(request: VideosTextTracks.GetTextTrackRequest, options?: RequestOptions): ApiPromise&lt;TextTrack, VideosTextTracks.GetTextTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single text track of the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTextTracks.getTextTrack({ texttrackId, videoId });
  // TODO: Handle 'response' of type TextTrack
} catch (err) {
  if (err instanceof VideosTextTracks.GetTextTrackError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>texttrackId</code> | <code>number</code> | The ID of the text track. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TextTrack](src/models/text-track.ts)</code>

**OnError**: <code>[VideosTextTracks.GetTextTrackError](src/resources/videos-text-tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTextTracks(request: VideosTextTracks.GetTextTracksRequest, options?: RequestOptions): ApiPromise&lt;TextTrackConnection, VideosTextTracks.GetTextTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every text track of the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTextTracks.getTextTracks({ videoId });
  // TODO: Handle 'response' of type TextTrackConnection
} catch (err) {
  if (err instanceof VideosTextTracks.GetTextTracksError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TextTrackConnection](src/models/text-track-connection.ts)</code>

**OnError**: <code>[VideosTextTracks.GetTextTracksError](src/resources/videos-text-tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTextTracksAlt1(request: VideosTextTracks.GetTextTracksAlt1Request, options?: RequestOptions): ApiPromise&lt;TextTrackConnection, VideosTextTracks.GetTextTracksAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every text track of the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTextTracks.getTextTracksAlt1({ videoId, versionId });
  // TODO: Handle 'response' of type TextTrackConnection
} catch (err) {
  if (err instanceof VideosTextTracks.GetTextTracksAlt1Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>versionId</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TextTrackConnection](src/models/text-track-connection.ts)</code>

**OnError**: <code>[VideosTextTracks.GetTextTracksAlt1Error](src/resources/videos-text-tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTextTracksAlt2(request: VideosTextTracks.GetTextTracksAlt2Request, options?: RequestOptions): ApiPromise&lt;TextTrackConnection, VideosTextTracks.GetTextTracksAlt2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every text track of the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTextTracks.getTextTracksAlt2({ channelId, videoId });
  // TODO: Handle 'response' of type TextTrackConnection
} catch (err) {
  if (err instanceof VideosTextTracks.GetTextTracksAlt2Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TextTrackConnection](src/models/text-track-connection.ts)</code>

**OnError**: <code>[VideosTextTracks.GetTextTracksAlt2Error](src/resources/videos-text-tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTextTracksAlt3(request: VideosTextTracks.GetTextTracksAlt3Request, options?: RequestOptions): ApiPromise&lt;TextTrackConnection, VideosTextTracks.GetTextTracksAlt3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every text track of the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTextTracks.getTextTracksAlt3({ albumId, videoId });
  // TODO: Handle 'response' of type TextTrackConnection
} catch (err) {
  if (err instanceof VideosTextTracks.GetTextTracksAlt3Error && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>albumId</code> | <code>number</code> | The ID of the showcase. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TextTrackConnection](src/models/text-track-connection.ts)</code>

**OnError**: <code>[VideosTextTracks.GetTextTracksAlt3Error](src/resources/videos-text-tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosThumbnails

> Source: [VideosThumbnails](src/resources/videos-thumbnails.ts)

<details>
<summary><code>createVideoThumbnail(request: VideosThumbnails.CreateVideoThumbnailRequest, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a thumbnail image to the specified video. The authenticated user must have team permissions for the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosThumbnails.createVideoThumbnail({ videoId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosPicturesRequest](src/models/videos-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVideoThumbnailAlt1(request: VideosThumbnails.CreateVideoThumbnailAlt1Request, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a thumbnail image to the specified video. The authenticated user must have team permissions for the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosThumbnails.createVideoThumbnailAlt1({ channelId, videoId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[ChannelsVideosPicturesRequest](src/models/channels-videos-pictures-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoThumbnail(request: VideosThumbnails.DeleteVideoThumbnailRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified thumbnail image from a video. The authenticated user must have team permissions for the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosThumbnails.deleteVideoThumbnail({ pictureId, videoId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pictureId</code> | <code>number</code> | The ID of the thumbnail. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editVideoThumbnail(request: VideosThumbnails.EditVideoThumbnailRequest, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified video thumbnail image. The authenticated user must be the owner of the thumbnail.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosThumbnails.editVideoThumbnail({ pictureId, videoId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pictureId</code> | <code>number</code> | The ID of the thumbnail. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosPicturesRequest1](src/models/videos-pictures-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoThumbnail(request: VideosThumbnails.GetVideoThumbnailRequest, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single thumbnail image from the specified video. The authenticated user must have team permissions for the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosThumbnails.getVideoThumbnail({ pictureId, videoId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pictureId</code> | <code>number</code> | The ID of the thumbnail. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoThumbnails(request: VideosThumbnails.GetVideoThumbnailsRequest, options?: RequestOptions): ApiPromise&lt;PictureConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all thumbnail images of the specified video. The authenticated user must have team permissions for the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosThumbnails.getVideoThumbnails({ videoId });
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoThumbnailsAlt1(request: VideosThumbnails.GetVideoThumbnailsAlt1Request, options?: RequestOptions): ApiPromise&lt;PictureConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all thumbnail images of the specified video. The authenticated user must have team permissions for the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosThumbnails.getVideoThumbnailsAlt1({ channelId, videoId });
  // TODO: Handle 'response' of type PictureConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PictureConnection](src/models/picture-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosTranscripts

> Source: [VideosTranscripts](src/resources/videos-transcripts.ts)

<details>
<summary><code>getTranscript(request: VideosTranscripts.GetTranscriptRequest, options?: RequestOptions): ApiPromise&lt;SegmentConnection, VideosTranscripts.GetTranscriptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the transcript segments of the specified text track.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTranscripts.getTranscript({ texttrackId, videoId });
  // TODO: Handle 'response' of type SegmentConnection
} catch (err) {
  if (err instanceof VideosTranscripts.GetTranscriptError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>texttrackId</code> | <code>number</code> | The ID of the text track. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentConnection](src/models/segment-connection.ts)</code>

**OnError**: <code>[VideosTranscripts.GetTranscriptError](src/resources/videos-transcripts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTranscriptMetadata(request: VideosTranscripts.GetTranscriptMetadataRequest, options?: RequestOptions): ApiPromise&lt;TranscriptMetadata, VideosTranscripts.GetTranscriptMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the transcript metadata of the specified text track.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosTranscripts.getTranscriptMetadata({ containerUuid, texttrackId });
  // TODO: Handle 'response' of type TranscriptMetadata
} catch (err) {
  if (err instanceof VideosTranscripts.GetTranscriptMetadataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>containerUuid</code> | <code>string</code> | The UUID of the video container. |
| <code>texttrackId</code> | <code>number</code> | The ID of the text track. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TranscriptMetadata](src/models/transcript-metadata.ts)</code>

**OnError**: <code>[VideosTranscripts.GetTranscriptMetadataError](src/resources/videos-transcripts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosUnlistedVideos

> Source: [VideosUnlistedVideos](src/resources/videos-unlisted-videos.ts)

<details>
<summary><code>addVideoPrivacyUser(request: VideosUnlistedVideos.AddVideoPrivacyUserRequest, options?: RequestOptions): ApiPromise&lt;User, VideosUnlistedVideos.AddVideoPrivacyUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method gives a single user permission to access the specified unlisted video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosUnlistedVideos.addVideoPrivacyUser({ userId, videoId });
  // TODO: Handle 'response' of type User
} catch (err) {
  if (err instanceof VideosUnlistedVideos.AddVideoPrivacyUserError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)</code>

**OnError**: <code>[VideosUnlistedVideos.AddVideoPrivacyUserError](src/resources/videos-unlisted-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideoPrivacyUsers(request: VideosUnlistedVideos.AddVideoPrivacyUsersRequest, options?: RequestOptions): ApiPromise&lt;User[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method gives multiple users permission to access the specified unlisted video. The authenticated user must be the owner of the video. The body of the request should follow our [batch request format](https://developer.vimeo.com/api/common-formats#working-with-batch-requests): each object must contain a single **uri** field whose value is the URI of the user who can access the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosUnlistedVideos.addVideoPrivacyUsers({ videoId });
  // TODO: Handle 'response' of type User[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideoPrivacyUsersAlt1(request: VideosUnlistedVideos.AddVideoPrivacyUsersAlt1Request, options?: RequestOptions): ApiPromise&lt;User[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method gives multiple users permission to access the specified unlisted video. The authenticated user must be the owner of the video. The body of the request should follow our [batch request format](https://developer.vimeo.com/api/common-formats#working-with-batch-requests): each object must contain a single **uri** field whose value is the URI of the user who can access the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosUnlistedVideos.addVideoPrivacyUsersAlt1({ channelId, videoId });
  // TODO: Handle 'response' of type User[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoPrivacyUser(request: VideosUnlistedVideos.DeleteVideoPrivacyUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosUnlistedVideos.DeleteVideoPrivacyUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method prevents a user from being able to view the specified unlisted video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosUnlistedVideos.deleteVideoPrivacyUser({ userId, videoId });
} catch (err) {
  if (err instanceof VideosUnlistedVideos.DeleteVideoPrivacyUserError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosUnlistedVideos.DeleteVideoPrivacyUserError](src/resources/videos-unlisted-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoPrivacyUsers(request: VideosUnlistedVideos.GetVideoPrivacyUsersRequest, options?: RequestOptions): ApiPromise&lt;UserConnection, VideosUnlistedVideos.GetVideoPrivacyUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every user who has access to the specified unlisted video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosUnlistedVideos.getVideoPrivacyUsers({ videoId });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  if (err instanceof VideosUnlistedVideos.GetVideoPrivacyUsersError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[VideosUnlistedVideos.GetVideoPrivacyUsersError](src/resources/videos-unlisted-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoPrivacyUsersAlt1(request: VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Request, options?: RequestOptions): ApiPromise&lt;UserConnection, VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every user who has access to the specified unlisted video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosUnlistedVideos.getVideoPrivacyUsersAlt1({ channelId, videoId });
  // TODO: Handle 'response' of type UserConnection
} catch (err) {
  if (
    err instanceof VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Error && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserConnection](src/models/user-connection.ts)</code>

**OnError**: <code>[VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Error](src/resources/videos-unlisted-videos.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosUploads

> Source: [VideosUploads](src/resources/videos-uploads.ts)

<details>
<summary><code>completeStreamingUpload(request: VideosUploads.CompleteStreamingUploadRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosUploads.CompleteStreamingUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method completes the specified streaming upload of the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosUploads.completeStreamingUpload({ uploadId, userId, signature, videoFileId });
} catch (err) {
  if (err instanceof VideosUploads.CompleteStreamingUploadError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uploadId</code> | <code>number</code> | The ID of the streaming upload. |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>signature</code> | <code>string</code> | The crypto signature of the completed upload. |
| <code>videoFileId</code> | <code>number</code> | The ID of the uploaded file. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosUploads.CompleteStreamingUploadError](src/resources/videos-uploads.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUploadAttempt(request: VideosUploads.GetUploadAttemptRequest, options?: RequestOptions): ApiPromise&lt;UploadAttempt, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified upload attempt of the authenticated user. _This method has been deprecated. For information on our currently supported upload approaches, see our [Working with Video Uploads](https://developer.vimeo.com/api/upload/videos) guide._

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosUploads.getUploadAttempt({ uploadId, userId });
  // TODO: Handle 'response' of type UploadAttempt
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uploadId</code> | <code>number</code> | The ID of the upload attempt. |
| <code>userId</code> | <code>number</code> | The ID of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadAttempt](src/models/upload-attempt.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadVideo(request: VideosUploads.UploadVideoRequest, options?: RequestOptions): ApiPromise&lt;Video, VideosUploads.UploadVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method begins the video upload process for the authenticated user. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosUploads.uploadVideo({ userId, body });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof VideosUploads.UploadVideoError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>body</code> | <code>[UsersVideosRequest1](src/models/users-videos-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[VideosUploads.UploadVideoError](src/resources/videos-uploads.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadVideoAlt1(request: VideosUploads.UploadVideoAlt1Request, options?: RequestOptions): ApiPromise&lt;Video, VideosUploads.UploadVideoAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method begins the video upload process for the authenticated user. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosUploads.uploadVideoAlt1({ body });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (err instanceof VideosUploads.UploadVideoAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MeVideosRequest1](src/models/me-videos-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[VideosUploads.UploadVideoAlt1Error](src/resources/videos-uploads.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosVersions

> Source: [VideosVersions](src/resources/videos-versions.ts)

<details>
<summary><code>createAudioTrack(request: VideosVersions.CreateAudioTrackRequest, options?: RequestOptions): ApiPromise&lt;AlternateAudioTrack, VideosVersions.CreateAudioTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a new audio track for a video version.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVersions.createAudioTrack({ versionId, videoId, body });
  // TODO: Handle 'response' of type AlternateAudioTrack
} catch (err) {
  if (err instanceof VideosVersions.CreateAudioTrackError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>versionId</code> | <code>number</code> | The ID of the video version. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body</code> | <code>[VideosVersionsAudiotracksRequest](src/models/videos-versions-audiotracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AlternateAudioTrack](src/models/alternate-audio-track.ts)</code>

**OnError**: <code>[VideosVersions.CreateAudioTrackError](src/resources/videos-versions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVideoVersion(request: VideosVersions.CreateVideoVersionRequest, options?: RequestOptions): ApiPromise&lt;VideoVersion, VideosVersions.CreateVideoVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a version to the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVersions.createVideoVersion({ videoId, body });
  // TODO: Handle 'response' of type VideoVersion
} catch (err) {
  if (err instanceof VideosVersions.CreateVideoVersionError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body</code> | <code>[VideosVersionsRequest](src/models/videos-versions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoVersion](src/models/video-version.ts)</code>

**OnError**: <code>[VideosVersions.CreateVideoVersionError](src/resources/videos-versions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAudioTrack(request: VideosVersions.DeleteAudioTrackRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosVersions.DeleteAudioTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes an audio track from the specified video version.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosVersions.deleteAudioTrack({ audiotrackId, versionId, videoId });
} catch (err) {
  if (err instanceof VideosVersions.DeleteAudioTrackError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>audiotrackId</code> | <code>string</code> | The ID of the audio track. |
| <code>versionId</code> | <code>number</code> | The ID of the video version. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosVersions.DeleteAudioTrackError](src/resources/videos-versions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoVersion(request: VideosVersions.DeleteVideoVersionRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosVersions.DeleteVideoVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified version from a video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosVersions.deleteVideoVersion({ versionId, videoId });
} catch (err) {
  if (err instanceof VideosVersions.DeleteVideoVersionError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>versionId</code> | <code>number</code> | The ID of the video version. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosVersions.DeleteVideoVersionError](src/resources/videos-versions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editAudioTrack(request: VideosVersions.EditAudioTrackRequest, options?: RequestOptions): ApiPromise&lt;AlternateAudioTrack, VideosVersions.EditAudioTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the metadata for the specified audio track.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVersions.editAudioTrack({ audiotrackId, versionId, videoId });
  // TODO: Handle 'response' of type AlternateAudioTrack
} catch (err) {
  if (err instanceof VideosVersions.EditAudioTrackError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>audiotrackId</code> | <code>string</code> | The ID of the audio track. |
| <code>versionId</code> | <code>number</code> | The ID of the video version. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosVersionsAudiotracksAudiotrackIdRequest](src/models/videos-versions-audiotracks-audiotrack-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AlternateAudioTrack](src/models/alternate-audio-track.ts)</code>

**OnError**: <code>[VideosVersions.EditAudioTrackError](src/resources/videos-versions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editVideoVersion(request: VideosVersions.EditVideoVersionRequest, options?: RequestOptions): ApiPromise&lt;VideoVersion, VideosVersions.EditVideoVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified version of a video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVersions.editVideoVersion({ versionId, videoId });
  // TODO: Handle 'response' of type VideoVersion
} catch (err) {
  if (err instanceof VideosVersions.EditVideoVersionError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>versionId</code> | <code>number</code> | The ID of the video version. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosVersionsRequest1](src/models/videos-versions-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoVersion](src/models/video-version.ts)</code>

**OnError**: <code>[VideosVersions.EditVideoVersionError](src/resources/videos-versions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudioTrack(request: VideosVersions.GetAudioTrackRequest, options?: RequestOptions): ApiPromise&lt;AlternateAudioTrack, VideosVersions.GetAudioTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified audio track that is associated with a video version.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVersions.getAudioTrack({ audiotrackId, versionId, videoId });
  // TODO: Handle 'response' of type AlternateAudioTrack
} catch (err) {
  if (err instanceof VideosVersions.GetAudioTrackError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>audiotrackId</code> | <code>string</code> | The ID of the audio track. |
| <code>versionId</code> | <code>number</code> | The ID of the video version. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AlternateAudioTrack](src/models/alternate-audio-track.ts)</code>

**OnError**: <code>[VideosVersions.GetAudioTrackError](src/resources/videos-versions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudioTracks(request: VideosVersions.GetAudioTracksRequest, options?: RequestOptions): ApiPromise&lt;AlternateAudioTrackConnection, VideosVersions.GetAudioTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns all audio tracks that are associated with the specified video version.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVersions.getAudioTracks({ versionId, videoId });
  // TODO: Handle 'response' of type AlternateAudioTrackConnection
} catch (err) {
  if (err instanceof VideosVersions.GetAudioTracksError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>versionId</code> | <code>number</code> | The ID of the video version. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AlternateAudioTrackConnection](src/models/alternate-audio-track-connection.ts)</code>

**OnError**: <code>[VideosVersions.GetAudioTracksError](src/resources/videos-versions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudiotrackDownloads(request: VideosVersions.GetAudiotrackDownloadsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a list of downloadable file links for a version of a video that contains the specified alternate audio track.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosVersions.getAudiotrackDownloads({ versionId, videoId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>versionId</code> | <code>number</code> | The ID of the video version. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVersionThumbnail(request: VideosVersions.GetVersionThumbnailRequest, options?: RequestOptions): ApiPromise&lt;Picture, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the thumbnail associated with the specified version of a video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVersions.getVersionThumbnail({ versionId, videoId });
  // TODO: Handle 'response' of type Picture
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>versionId</code> | <code>number</code> | The ID of the version. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Picture](src/models/picture.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoVersion(request: VideosVersions.GetVideoVersionRequest, options?: RequestOptions): ApiPromise&lt;VideoVersion, VideosVersions.GetVideoVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns a single version of the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVersions.getVideoVersion({ versionId, videoId });
  // TODO: Handle 'response' of type VideoVersion
} catch (err) {
  if (err instanceof VideosVersions.GetVideoVersionError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>versionId</code> | <code>number</code> | The ID of the video version. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoVersion](src/models/video-version.ts)</code>

**OnError**: <code>[VideosVersions.GetVideoVersionError](src/resources/videos-versions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoVersions(request: VideosVersions.GetVideoVersionsRequest, options?: RequestOptions): ApiPromise&lt;VideoVersionConnection, VideosVersions.GetVideoVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every version of the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVersions.getVideoVersions({ videoId });
  // TODO: Handle 'response' of type VideoVersionConnection
} catch (err) {
  if (err instanceof VideosVersions.GetVideoVersionsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoVersionConnection](src/models/video-version-connection.ts)</code>

**OnError**: <code>[VideosVersions.GetVideoVersionsError](src/resources/videos-versions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVideoVersionsAlt1(request: VideosVersions.GetVideoVersionsAlt1Request, options?: RequestOptions): ApiPromise&lt;VideoVersionConnection, VideosVersions.GetVideoVersionsAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every version of the specified video. The authenticated user must be the owner of the video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVersions.getVideoVersionsAlt1({ channelId, videoId });
  // TODO: Handle 'response' of type VideoVersionConnection
} catch (err) {
  if (err instanceof VideosVersions.GetVideoVersionsAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoVersionConnection](src/models/video-version-connection.ts)</code>

**OnError**: <code>[VideosVersions.GetVideoVersionsAlt1Error](src/resources/videos-versions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VideosVideoComments

> Source: [VideosVideoComments](src/resources/videos-video-comments.ts)

<details>
<summary><code>createComment(request: VideosVideoComments.CreateCommentRequest, options?: RequestOptions): ApiPromise&lt;Comment, VideosVideoComments.CreateCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a video comment to the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVideoComments.createComment({ videoId });
  // TODO: Handle 'response' of type Comment
} catch (err) {
  if (err instanceof VideosVideoComments.CreateCommentError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosCommentsRequest](src/models/videos-comments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Comment](src/models/comment.ts)</code>

**OnError**: <code>[VideosVideoComments.CreateCommentError](src/resources/videos-video-comments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCommentAlt1(request: VideosVideoComments.CreateCommentAlt1Request, options?: RequestOptions): ApiPromise&lt;Comment, VideosVideoComments.CreateCommentAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a video comment to the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVideoComments.createCommentAlt1({ channelId, videoId });
  // TODO: Handle 'response' of type Comment
} catch (err) {
  if (err instanceof VideosVideoComments.CreateCommentAlt1Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[ChannelsVideosCommentsRequest](src/models/channels-videos-comments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Comment](src/models/comment.ts)</code>

**OnError**: <code>[VideosVideoComments.CreateCommentAlt1Error](src/resources/videos-video-comments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCommentReply(request: VideosVideoComments.CreateCommentReplyRequest, options?: RequestOptions): ApiPromise&lt;Comment, VideosVideoComments.CreateCommentReplyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds a reply to the specified video comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVideoComments.createCommentReply({ commentId, videoId, body });
  // TODO: Handle 'response' of type Comment
} catch (err) {
  if (err instanceof VideosVideoComments.CreateCommentReplyError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>number</code> | The ID of the comment. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body</code> | <code>[VideosCommentsRepliesRequest](src/models/videos-comments-replies-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Comment](src/models/comment.ts)</code>

**OnError**: <code>[VideosVideoComments.CreateCommentReplyError](src/resources/videos-video-comments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteComment(request: VideosVideoComments.DeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;undefined, VideosVideoComments.DeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method deletes the specified video comment. The authenticated user must be the owner of the comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.videosVideoComments.deleteComment({ commentId, videoId });
} catch (err) {
  if (err instanceof VideosVideoComments.DeleteCommentError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>number</code> | The ID of the comment. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[VideosVideoComments.DeleteCommentError](src/resources/videos-video-comments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editComment(request: VideosVideoComments.EditCommentRequest, options?: RequestOptions): ApiPromise&lt;Comment, VideosVideoComments.EditCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method edits the specified video comment. The authenticated user must be the owner of the comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVideoComments.editComment({ commentId, videoId });
  // TODO: Handle 'response' of type Comment
} catch (err) {
  if (err instanceof VideosVideoComments.EditCommentError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>number</code> | The ID of the comment. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>body?</code> | <code>[VideosCommentsRequest](src/models/videos-comments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Comment](src/models/comment.ts)</code>

**OnError**: <code>[VideosVideoComments.EditCommentError](src/resources/videos-video-comments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getComment(request: VideosVideoComments.GetCommentRequest, options?: RequestOptions): ApiPromise&lt;Comment, VideosVideoComments.GetCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns the specified video comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVideoComments.getComment({ commentId, videoId });
  // TODO: Handle 'response' of type Comment
} catch (err) {
  if (err instanceof VideosVideoComments.GetCommentError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>number</code> | The ID of the comment. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Comment](src/models/comment.ts)</code>

**OnError**: <code>[VideosVideoComments.GetCommentError](src/resources/videos-video-comments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCommentReplies(request: VideosVideoComments.GetCommentRepliesRequest, options?: RequestOptions): ApiPromise&lt;CommentConnection, VideosVideoComments.GetCommentRepliesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every reply to the specified video comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVideoComments.getCommentReplies({ commentId, videoId });
  // TODO: Handle 'response' of type CommentConnection
} catch (err) {
  if (err instanceof VideosVideoComments.GetCommentRepliesError && err.payload.kind === "legacyError") {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>number</code> | The ID of the comment. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentConnection](src/models/comment-connection.ts)</code>

**OnError**: <code>[VideosVideoComments.GetCommentRepliesError](src/resources/videos-video-comments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getComments(request: VideosVideoComments.GetCommentsRequest, options?: RequestOptions): ApiPromise&lt;CommentConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video comment on the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVideoComments.getComments({ videoId });
  // TODO: Handle 'response' of type CommentConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentConnection](src/models/comment-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCommentsAlt1(request: VideosVideoComments.GetCommentsAlt1Request, options?: RequestOptions): ApiPromise&lt;CommentConnection, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video comment on the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.videosVideoComments.getCommentsAlt1({ channelId, videoId });
  // TODO: Handle 'response' of type CommentConnection
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>number</code> | The ID of the channel. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentConnection](src/models/comment-connection.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WatchLaterQueueEssentials

> Source: [WatchLaterQueueEssentials](src/resources/watch-later-queue-essentials.ts)

<details>
<summary><code>addVideoToWatchLater(request: WatchLaterQueueEssentials.AddVideoToWatchLaterRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds the specified video to the authenticated user's Watch Later queue.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.watchLaterQueueEssentials.addVideoToWatchLater({ userId, videoId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVideoToWatchLaterAlt1(request: WatchLaterQueueEssentials.AddVideoToWatchLaterAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method adds the specified video to the authenticated user's Watch Later queue.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.watchLaterQueueEssentials.addVideoToWatchLaterAlt1({ videoId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkWatchLaterQueue(request: WatchLaterQueueEssentials.CheckWatchLaterQueueRequest, options?: RequestOptions): ApiPromise&lt;Video, WatchLaterQueueEssentials.CheckWatchLaterQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method checks the authenticated user's Watch Later queue for the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchLaterQueueEssentials.checkWatchLaterQueue({ userId, videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (
    err instanceof WatchLaterQueueEssentials.CheckWatchLaterQueueError && err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[WatchLaterQueueEssentials.CheckWatchLaterQueueError](src/resources/watch-later-queue-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkWatchLaterQueueAlt1(request: WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Request, options?: RequestOptions): ApiPromise&lt;Video, WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method checks the authenticated user's Watch Later queue for the specified video.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchLaterQueueEssentials.checkWatchLaterQueueAlt1({ videoId });
  // TODO: Handle 'response' of type Video
} catch (err) {
  if (
    err instanceof WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Error &&
      err.payload.kind === "legacyError"
  ) {
    // TODO: Handle 'err.payload.body' of type LegacyError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Video](src/models/video.ts)</code>

**OnError**: <code>[WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Error](src/resources/watch-later-queue-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoFromWatchLater(request: WatchLaterQueueEssentials.DeleteVideoFromWatchLaterRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the specified video from the authenticated user's Watch Later queue.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.watchLaterQueueEssentials.deleteVideoFromWatchLater({ userId, videoId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVideoFromWatchLaterAlt1(request: WatchLaterQueueEssentials.DeleteVideoFromWatchLaterAlt1Request, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method removes the specified video from the authenticated user's Watch Later queue.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.watchLaterQueueEssentials.deleteVideoFromWatchLaterAlt1({ videoId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>videoId</code> | <code>number</code> | The ID of the video. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWatchLaterQueue(request: WatchLaterQueueEssentials.GetWatchLaterQueueRequest, options?: RequestOptions): ApiPromise&lt;VideoConnection, WatchLaterQueueEssentials.GetWatchLaterQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video from the authenticated user's Watch Later queue.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchLaterQueueEssentials.getWatchLaterQueue({ userId });
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (err instanceof WatchLaterQueueEssentials.GetWatchLaterQueueError && err.payload.kind === "error304") {
    // TODO: Handle 'err.payload' — the "error304" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | The ID of the user. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort15](src/models/sort15.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by date added.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[WatchLaterQueueEssentials.GetWatchLaterQueueError](src/resources/watch-later-queue-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWatchLaterQueueAlt1(request: WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Request, options?: RequestOptions): ApiPromise&lt;VideoConnection, WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method returns every video from the authenticated user's Watch Later queue.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchLaterQueueEssentials.getWatchLaterQueueAlt1();
  // TODO: Handle 'response' of type VideoConnection
} catch (err) {
  if (
    err instanceof WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Error && err.payload.kind === "error304"
  ) {
    // TODO: Handle 'err.payload' — the "error304" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the results.<br><br>Option descriptions:<br> * `asc` - Sort the results in ascending order.<br> * `desc` - Sort the results in descending order. |
| <code>filter?</code> | <code>[Filter3](src/models/filter3.ts)</code> | The attribute by which to filter the results.<br><br>Option descriptions:<br> * `embeddable` - Return embeddable videos. |
| <code>filterEmbeddable?</code> | <code>boolean</code> | Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`. |
| <code>page?</code> | <code>number</code> | The page number of the results to show. |
| <code>perPage?</code> | <code>number</code> | The number of items to show on each page of results, up to a maximum of 100. |
| <code>query?</code> | <code>string</code> | The search query to use to filter the results. |
| <code>sort?</code> | <code>[Sort15](src/models/sort15.ts)</code> | The way to sort the results.<br><br>Option descriptions:<br> * `alphabetical` - Sort the results alphabetically.<br> * `comments` - Sort the results by number of comments.<br> * `date` - Sort the results by date added.<br> * `duration` - Sort the results by duration.<br> * `likes` - Sort the results by number of likes.<br> * `plays` - Sort the results by number of plays. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VideoConnection](src/models/video-connection.ts)</code>

**OnError**: <code>[WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Error](src/resources/watch-later-queue-essentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>


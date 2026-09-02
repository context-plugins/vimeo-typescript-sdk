<!-- Generated file — do not edit; regenerated with the SDK. -->

# TutorialEssentials — operations

Accessor: `client.tutorialEssentials` · Source: `src/resources/tutorial-essentials.ts` · 1 operation · Request types: namespace `TutorialEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### developerTutorial

- **Signature**: `developerTutorial(options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /tutorial`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`


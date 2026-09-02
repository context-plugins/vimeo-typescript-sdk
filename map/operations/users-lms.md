<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersLms — operations

Accessor: `client.usersLms` · Source: `src/resources/users-lms.ts` · 1 operation · Request and error types: namespace `UsersLms`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### downloadLmsPackage

- **Signature**: `downloadLmsPackage(request: UsersLms.DownloadLmsPackageRequest, options?: RequestOptions): ApiPromise<undefined, UsersLms.DownloadLmsPackageError>`
- **Wire**: `GET /users/{user_id}/lms/download/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UsersLms.DownloadLmsPackageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersLms.DownloadLmsPackageRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `completionThreshold` | `query` | `completion_threshold` | `number` | no |
| `courseTitle` | `query` | `course_title` | `string` | no |
| `passingScore` | `query` | `passing_score` | `number` | no |
| `scoringAlgorithm` | `query` | `scoring_algorithm` | `ScoringAlgorithm` | no |
| `standard` | `query` | — | `Standard` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScoringAlgorithm` | `scoringAlgorithmSchema` | `src/models/scoring-algorithm.ts` |
| `Standard` | `standardSchema` | `src/models/standard.ts` |


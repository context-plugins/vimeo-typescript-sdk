import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { colors2Schema, type Colors2 } from "./colors2.js";
import { episodesSchema, type Episodes } from "./episodes.js";
import { metadata9Schema, type Metadata9 } from "./metadata9.js";
import { onDemandGenreSchema, type OnDemandGenre } from "./on-demand-genre.js";
import { pictureSchema, type Picture } from "./picture.js";
import { preorderSchema, type Preorder } from "./preorder.js";
import { publishedSchema, type Published } from "./published.js";
import { subscription1Schema, type Subscription1 } from "./subscription1.js";
import { type9Schema, type Type9 } from "./type9.js";
import { userSchema, type User } from "./user.js";
import { videoSchema, type Video } from "./video.js";

export type OnDemandPage = {
  background: Picture | null;
  colors: Colors2;
  contentRating: string[];
  createdTime?: string;
  description: string | null;
  domainLink: string | null;
  episodes: Episodes;
  film?: Video;
  genres: OnDemandGenre[];
  link: string;
  metadata: Metadata9;
  modifiedTime?: string;
  name: string;
  pictures: Picture | null;
  preorder: Preorder;
  published: Published;
  rating: number | null;
  resourceKey: string;
  sku?: string | null;
  subscription: Subscription1 | null;
  theme: string;
  thumbnail: Picture | null;
  trailer: Video | null;
  type: Type9;
  uri: string;
  user: User | null;
};

export const onDemandPageSchema: Schema<OnDemandPage> = s.object<OnDemandPage>({
  background: s.nullable(s.lazy(() => pictureSchema)),
  colors: colors2Schema,
  contentRating: s.array(s.string()),
  createdTime: s.optional(s.string()),
  description: s.nullable(s.string()),
  domainLink: s.nullable(s.string()),
  episodes: episodesSchema,
  film: s.optional(s.lazy(() => videoSchema)),
  genres: s.array(s.lazy(() => onDemandGenreSchema)),
  link: s.string(),
  metadata: metadata9Schema,
  modifiedTime: s.optional(s.string()),
  name: s.string(),
  pictures: s.nullable(s.lazy(() => pictureSchema)),
  preorder: preorderSchema,
  published: publishedSchema,
  rating: s.nullable(s.number()),
  resourceKey: s.string(),
  sku: s.optionalNullable(s.string()),
  subscription: s.nullable(s.lazy(() => subscription1Schema)),
  theme: s.string(),
  thumbnail: s.nullable(s.lazy(() => pictureSchema)),
  trailer: s.nullable(s.lazy(() => videoSchema)),
  type: type9Schema,
  uri: s.string(),
  user: s.nullable(s.lazy(() => userSchema)),
  _keysMap: {
    contentRating: "content_rating",
    createdTime: "created_time",
    domainLink: "domain_link",
    modifiedTime: "modified_time",
    resourceKey: "resource_key",
  },
});

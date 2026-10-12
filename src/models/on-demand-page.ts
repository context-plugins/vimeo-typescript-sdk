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
  /** The background image for the On Demand page. */
  background: Picture | null;
  /** The first and second colors of the On Demand page. */
  colors: Colors2;
  /** An array of the On Demand page's content ratings. */
  contentRating: string[];
  /** The time in ISO 8601 format when the On Demand page was created. */
  createdTime?: string;
  /** The description of the On Demand page. */
  description: string | null;
  /** The link to the On Demand page on its own domain. */
  domainLink: string | null;
  /** Information about the On Demand page's episodes, if the page is for a series. */
  episodes: Episodes;
  /** The On Demand page's film, if the page is for a film. */
  film?: Video;
  /** An array of the genres assigned to the On Demand page. */
  genres: OnDemandGenre[];
  /** The link to the On Demand page. */
  link: string;
  /** Metadata about the On Demand page. */
  metadata: Metadata9;
  /** The time in ISO 8601 format when the On Demand page was last modified. */
  modifiedTime?: string;
  /** The descriptive title of the On Demand page. */
  name: string;
  /** The active poster for the On Demand page. */
  pictures: Picture | null;
  preorder: Preorder;
  published: Published;
  /** The rating of the On Demand page. */
  rating: number | null;
  /** The On Demand resource key. */
  resourceKey: string;
  /** The creator-designated SKU for the On Demand page. */
  sku?: string | null;
  /** Information about subscribing to the On Demand page, if subscription is enabled. */
  subscription: Subscription1 | null;
  /** The graphical theme for the On Demand page. */
  theme: string;
  /** The thumbnail image for the On Demand page. */
  thumbnail: Picture | null;
  /** The trailer for the On Demand page. */
  trailer: Video | null;
  /**
   * The type of the On Demand page.
   *
   * Option descriptions:
   *  * `film` - The On Demand page is for a film.
   *  * `series` - The On Demand page is for a series.
   */
  type: Type9;
  /** The relative URI of the On Demand page. */
  uri: string;
  /** The user who created the On Demand page. */
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
  rating: s.nullable(s.float64()),
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

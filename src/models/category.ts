import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadataSchema, type Metadata } from "./metadata.js";
import { parentSchema, type Parent } from "./parent.js";
import { pictureSchema, type Picture } from "./picture.js";
import { subcategorySchema, type Subcategory } from "./subcategory.js";

export type Category = {
  /** The active icon for the category. */
  icon?: Picture;
  /** Whether the category is deprecated and should not be used for new categorization. */
  isDeprecated: boolean;
  /** The most recent time in ISO 8601 format when the video was featured. */
  lastVideoFeaturedTime: string;
  /** The URL to access the category in a browser. */
  link: string;
  /** Metadata about the category. */
  metadata: Metadata;
  /** The display name that identifies the category. */
  name: string;
  /** The container of the category's parent category, if the current category is a subcategory. */
  parent: Parent | null;
  /** The active picture for this category. The default shows vertical color bars. */
  pictures: Picture;
  /** The resource key of the category. */
  resourceKey: string;
  /**
   * All the subcategories that belong to the category, if the current category is a top-level
   * parent.
   */
  subcategories?: Subcategory[];
  /** Whether the category isn't a subcategory of another category. */
  topLevel: boolean;
  /** The unique identifier to access the category resource. */
  uri: string;
};

export const categorySchema: Schema<Category> = s.object<Category>({
  icon: s.optional(s.lazy(() => pictureSchema)),
  isDeprecated: s.boolean(),
  lastVideoFeaturedTime: s.string(),
  link: s.string(),
  metadata: metadataSchema,
  name: s.string(),
  parent: s.nullable(s.lazy(() => parentSchema)),
  pictures: pictureSchema,
  resourceKey: s.string(),
  subcategories: s.optional(s.array(s.lazy(() => subcategorySchema))),
  topLevel: s.boolean(),
  uri: s.string(),
  _keysMap: {
    isDeprecated: "is_deprecated",
    lastVideoFeaturedTime: "last_video_featured_time",
    resourceKey: "resource_key",
    topLevel: "top_level",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadataSchema, type Metadata } from "./metadata.js";
import { parentSchema, type Parent } from "./parent.js";
import { pictureSchema, type Picture } from "./picture.js";
import { subcategorySchema, type Subcategory } from "./subcategory.js";

export type Category = {
  icon?: Picture;
  isDeprecated: boolean;
  lastVideoFeaturedTime: string;
  link: string;
  metadata: Metadata;
  name: string;
  parent: Parent | null;
  pictures: Picture;
  resourceKey: string;
  subcategories?: Subcategory[];
  topLevel: boolean;
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

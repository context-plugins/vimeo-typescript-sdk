import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The container of the category's parent category, if the current category is a subcategory. */
export type Parent = {
  /** The URL to access the parent category in a browser. */
  link: string;
  /** The display name that identifies the parent category. */
  name: string;
  /** The unique identifier to access the parent of the category resource. */
  uri: string;
};

export const parentSchema: Schema<Parent> = s.object<Parent>({
  link: s.string(),
  name: s.string(),
  uri: s.string(),
});

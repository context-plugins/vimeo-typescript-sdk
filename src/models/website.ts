import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Website = {
  /** The website's description. */
  description?: string;
  /** The URL of the website. */
  link: string;
  /** The name of the website. */
  name?: string;
  /** The URL type of the website. */
  type: string;
  /** The URI of the custom website or social media page belonging to the user. */
  uri: string;
};

export const websiteSchema: Schema<Website> = s.object<Website>({
  description: s.optional(s.string()),
  link: s.string(),
  name: s.optional(s.string()),
  type: s.string(),
  uri: s.string(),
});

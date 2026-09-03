import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Website = {
  description?: string;
  link: string;
  name?: string;
  type: string;
  uri: string;
};

export const websiteSchema: Schema<Website> = s.object<Website>({
  description: s.optional(s.string()),
  link: s.string(),
  name: s.optional(s.string()),
  type: s.string(),
  uri: s.string(),
});

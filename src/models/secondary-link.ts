import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SecondaryLink = {
  label?: string;
  link?: string;
};

export const secondaryLinkSchema: Schema<SecondaryLink> = s.object<SecondaryLink>({
  label: s.optional(s.string()),
  link: s.optional(s.string()),
});

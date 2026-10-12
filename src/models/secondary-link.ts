import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The attributes of the secondary link. */
export type SecondaryLink = {
  /** The text of the secondary link. */
  label?: string;
  /** The URL of the secondary link. */
  link?: string;
};

export const secondaryLinkSchema: Schema<SecondaryLink> = s.object<SecondaryLink>({
  label: s.optional(s.string()),
  link: s.optional(s.string()),
});

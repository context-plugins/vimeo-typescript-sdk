import { s, type Schema } from "../core/index.js";

export type SecondaryLink = {
  label?: string;
  link?: string;
};

export const secondaryLinkSchema: Schema<SecondaryLink> = s.object<SecondaryLink>({
  label: s.optional(s.string()),
  link: s.optional(s.string()),
});

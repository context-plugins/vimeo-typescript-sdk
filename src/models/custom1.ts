import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A collection of information relating to custom logos in the onsite player. */
export type Custom1 = {
  /** Whether the custom logo appears in the video page player. */
  active?: boolean;
  /** The URL that loads upon clicking the custom logo. */
  link?: string | null;
  /** Whether the custom logo appears even when the player interface is hidden. */
  sticky?: boolean;
  /** The URL of the selected custom logo. */
  url?: string | null;
  /** Whether the custom logo should use the URL link. */
  useLink?: boolean;
};

export const custom1Schema: Schema<Custom1> = s.object<Custom1>({
  active: s.optional(s.boolean()),
  link: s.optionalNullable(s.string()),
  sticky: s.optional(s.boolean()),
  url: s.optionalNullable(s.string()),
  useLink: s.optional(s.boolean()),
  _keysMap: {
    useLink: "use_link",
  },
});

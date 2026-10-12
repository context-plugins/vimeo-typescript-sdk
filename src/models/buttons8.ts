import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Buttons8 = {
  /** Whether to show the button for embeds on the embeddable player. */
  embed?: boolean;
  /** Whether to show the button for fullscreen mode on the embeddable player. */
  fullscreen?: boolean;
  /** Whether to show the button for HD video on the embeddable player. */
  hd?: boolean;
  /** Whether to show the button for likes on the embeddable player. */
  like?: boolean;
  /** Whether to show the button for scaling on the embeddable player in fullscreen mode. */
  scaling?: boolean;
  /** Whether to show the button for shares on the embeddable player. */
  share?: boolean;
  /** Whether to show the button for watching later on the embeddable player. */
  watchlater?: boolean;
};

export const buttons8Schema: Schema<Buttons8> = s.object<Buttons8>({
  embed: s.optional(s.boolean()),
  fullscreen: s.optional(s.boolean()),
  hd: s.optional(s.boolean()),
  like: s.optional(s.boolean()),
  scaling: s.optional(s.boolean()),
  share: s.optional(s.boolean()),
  watchlater: s.optional(s.boolean()),
});

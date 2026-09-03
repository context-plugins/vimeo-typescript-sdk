import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Buttons8 = {
  embed?: boolean;
  fullscreen?: boolean;
  hd?: boolean;
  like?: boolean;
  scaling?: boolean;
  share?: boolean;
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

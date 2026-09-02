import { s, type Schema } from "../core/index.js";

export type Buttons2 = {
  embed?: boolean;
  fullscreen?: boolean;
  hd?: boolean;
  like?: boolean;
  scaling?: boolean;
  share?: boolean;
  watchlater?: boolean;
};

export const buttons2Schema: Schema<Buttons2> = s.object<Buttons2>({
  embed: s.optional(s.boolean()),
  fullscreen: s.optional(s.boolean()),
  hd: s.optional(s.boolean()),
  like: s.optional(s.boolean()),
  scaling: s.optional(s.boolean()),
  share: s.optional(s.boolean()),
  watchlater: s.optional(s.boolean()),
});

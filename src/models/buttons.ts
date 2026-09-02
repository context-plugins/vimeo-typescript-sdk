import { s, type Schema } from "../core/index.js";

export type Buttons = {
  embed: boolean;
  fullscreen: boolean;
  hd: boolean;
  like: boolean;
  reaction?: boolean;
  scaling: boolean;
  share: boolean;
  watchlater: boolean;
};

export const buttonsSchema: Schema<Buttons> = s.object<Buttons>({
  embed: s.boolean(),
  fullscreen: s.boolean(),
  hd: s.boolean(),
  like: s.boolean(),
  reaction: s.optional(s.boolean()),
  scaling: s.boolean(),
  share: s.boolean(),
  watchlater: s.boolean(),
});

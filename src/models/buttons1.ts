import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Buttons1 = {
  embed: boolean;
  fullscreen: boolean;
  hd: boolean;
  like: boolean;
  reaction?: boolean | null;
  share: boolean;
  vote: boolean;
  watchlater: boolean;
};

export const buttons1Schema: Schema<Buttons1> = s.object<Buttons1>({
  embed: s.boolean(),
  fullscreen: s.boolean(),
  hd: s.boolean(),
  like: s.boolean(),
  reaction: s.optionalNullable(s.boolean()),
  share: s.boolean(),
  vote: s.boolean(),
  watchlater: s.boolean(),
});

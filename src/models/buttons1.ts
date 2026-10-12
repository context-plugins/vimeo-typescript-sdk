import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Buttons1 = {
  /** Whether the preset includes settings for the embed button. */
  embed: boolean;
  /** Whether the preset includes settings for the fullscreen button. */
  fullscreen: boolean;
  /** Whether the preset includes settings for the HD button. */
  hd: boolean;
  /** Whether the preset includes settings for the like button. */
  like: boolean;
  /** Whether the preset includes settings for the reaction button. */
  reaction?: boolean | null;
  /** Whether the preset includes settings for the share button. */
  share: boolean;
  /** Whether the preset includes settings for the vote button. */
  vote: boolean;
  /** Whether the preset includes settings for the watch later button. */
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

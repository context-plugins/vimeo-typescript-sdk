import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { likes3Schema, type Likes3 } from "./likes3.js";
import { watchlater2Schema, type Watchlater2 } from "./watchlater2.js";

export type Interactions14 = {
  /** Information about the authenticated user's interaction to like the video. */
  likes: Likes3;
  /** Information about the authenticated user's interaction to watch the video later. */
  watchlater: Watchlater2;
};

export const interactions14Schema: Schema<Interactions14> = s.object<Interactions14>({
  likes: likes3Schema,
  watchlater: watchlater2Schema,
});

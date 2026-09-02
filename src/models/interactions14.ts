import { s, type Schema } from "../core/index.js";
import { likes3Schema, type Likes3 } from "./likes3.js";
import { watchlater2Schema, type Watchlater2 } from "./watchlater2.js";

export type Interactions14 = {
  likes: Likes3;
  watchlater: Watchlater2;
};

export const interactions14Schema: Schema<Interactions14> = s.object<Interactions14>({
  likes: likes3Schema,
  watchlater: watchlater2Schema,
});

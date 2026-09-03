import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { privacy10Schema, type Privacy10 } from "./privacy10.js";
import { rating1Schema, type Rating1 } from "./rating1.js";

export type Videos18 = {
  privacy?: Privacy10;
  rating?: Rating1;
};

export const videos18Schema: Schema<Videos18> = s.object<Videos18>({
  privacy: s.optional(s.lazy(() => privacy10Schema)),
  rating: s.optional(s.lazy(() => rating1Schema)),
});

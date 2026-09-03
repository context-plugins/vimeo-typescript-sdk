import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { purchaseSchema, type Purchase } from "./purchase.js";

export type Interactions15 = {
  purchase: Purchase;
};

export const interactions15Schema: Schema<Interactions15> = s.object<Interactions15>({
  purchase: purchaseSchema,
});

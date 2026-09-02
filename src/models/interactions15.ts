import { s, type Schema } from "../core/index.js";
import { purchaseSchema, type Purchase } from "./purchase.js";

export type Interactions15 = {
  purchase: Purchase;
};

export const interactions15Schema: Schema<Interactions15> = s.object<Interactions15>({
  purchase: purchaseSchema,
});

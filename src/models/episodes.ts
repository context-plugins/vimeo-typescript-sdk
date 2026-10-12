import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buy1Schema, type Buy1 } from "./buy1.js";
import { rent1Schema, type Rent1 } from "./rent1.js";

/** Information about the On Demand page's episodes, if the page is for a series. */
export type Episodes = {
  buy: Buy1;
  rent: Rent1;
};

export const episodesSchema: Schema<Episodes> = s.object<Episodes>({
  buy: buy1Schema,
  rent: rent1Schema,
});

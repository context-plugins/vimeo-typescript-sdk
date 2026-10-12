import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pageSchema, type Page } from "./page.js";

export type Interactions6 = {
  /** Interactions for On Demand pages that belong to the genre. */
  page: Page;
};

export const interactions6Schema: Schema<Interactions6> = s.object<Interactions6>({
  page: pageSchema,
});

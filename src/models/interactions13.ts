import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { page1Schema, type Page1 } from "./page1.js";

export type Interactions13 = {
  page: Page1;
};

export const interactions13Schema: Schema<Interactions13> = s.object<Interactions13>({
  page: page1Schema,
});

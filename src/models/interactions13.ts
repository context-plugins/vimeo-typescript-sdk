import { s, type Schema } from "../core/index.js";
import { page1Schema, type Page1 } from "./page1.js";

export type Interactions13 = {
  page: Page1;
};

export const interactions13Schema: Schema<Interactions13> = s.object<Interactions13>({
  page: page1Schema,
});

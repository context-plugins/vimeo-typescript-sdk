import { s, type Schema } from "../core/index.js";
import { pageSchema, type Page } from "./page.js";

export type Interactions6 = {
  page: Page;
};

export const interactions6Schema: Schema<Interactions6> = s.object<Interactions6>({
  page: pageSchema,
});

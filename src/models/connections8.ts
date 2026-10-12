import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagesSchema, type Pages } from "./pages.js";

/** A collection of information connected to this resource. */
export type Connections8 = {
  /** Information about the On Demand pages related to this group. */
  pages: Pages;
};

export const connections8Schema: Schema<Connections8> = s.object<Connections8>({
  pages: pagesSchema,
});

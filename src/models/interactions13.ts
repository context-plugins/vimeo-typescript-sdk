import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { page1Schema, type Page1 } from "./page1.js";

/**
 * An object containing information about how the authenticated user can interact with the video's
 * On Demand page.
 */
export type Interactions13 = {
  /**
   * Information about how the authenticated user can interact with the connection to the video's On
   * Demand page.
   */
  page: Page1;
};

export const interactions13Schema: Schema<Interactions13> = s.object<Interactions13>({
  page: page1Schema,
});

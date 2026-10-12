import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about how the authenticated user can interact with the connection to the video's On
 * Demand page.
 */
export type Page1 = {
  /** Whether the On Demand page was added. */
  added: boolean;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The URI to access the On Demand page. */
  uri: string;
};

export const page1Schema: Schema<Page1> = s.object<Page1>({
  added: s.boolean(),
  options: s.array(s.string()),
  uri: s.string(),
});

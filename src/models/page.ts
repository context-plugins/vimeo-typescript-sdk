import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Interactions for On Demand pages that belong to the genre. */
export type Page = {
  /** Whether the On Demand genre was added. */
  added: boolean;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The URI to access the On Demand page. */
  uri: string;
};

export const pageSchema: Schema<Page> = s.object<Page>({
  added: s.boolean(),
  options: s.array(s.string()),
  uri: s.string(),
});

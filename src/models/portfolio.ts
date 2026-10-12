import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata22Schema, type Metadata22 } from "./metadata22.js";
import { sort1Schema, type Sort1 } from "./sort1.js";

export type Portfolio = {
  /** The time in ISO 8601 format when the portfolio was created. */
  createdTime: string;
  /** The description of the portfolio. */
  description: string | null;
  /** The link to the portfolio. */
  link: string;
  /** Metadata about the portfolio. */
  metadata: Metadata22;
  /** The time in ISO 8601 format when the portfolio's data was last modified. */
  modifiedTime: string;
  /** The display name of the portfolio. */
  name: string;
  /**
   * The default video sort order of the portfolio.
   *
   * Option descriptions:
   *  * `alphabetical` - The default sort order is alphabetical by name.
   *  * `clips` - The default sort order is video creation date.
   *  * `modified` - The default sort order is the order in which the videos were modified.
   *  * `recent` - The default sort order is the order in which the videos were added.
   */
  sort: Sort1;
  /** The canonical relative URI of the portfolio. */
  uri: string;
};

export const portfolioSchema: Schema<Portfolio> = s.object<Portfolio>({
  createdTime: s.string(),
  description: s.nullable(s.string()),
  link: s.string(),
  metadata: metadata22Schema,
  modifiedTime: s.string(),
  name: s.string(),
  sort: sort1Schema,
  uri: s.string(),
  _keysMap: {
    createdTime: "created_time",
    modifiedTime: "modified_time",
  },
});

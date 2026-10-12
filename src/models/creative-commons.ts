import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { code1Schema, type Code1 } from "./code1.js";

export type CreativeCommons = {
  /**
   * The type of Creative Commons license.
   *
   * Option descriptions:
   *  * `by` - Attribution.
   *  * `by-nc` - Attribution Non-Commercial.
   *  * `by-nc-nd` - Attribution Non-Commercial No Derivatives.
   *  * `by-nc-sa` - Attribution Non-Commercial Share Alike.
   *  * `by-nd` - Attribution No Derivatives.
   *  * `by-sa` - Attribution Share Alike.
   *  * `cc0` - Public Domain Dedication.
   */
  code: Code1;
  /** The description of the Creative Commons license. */
  name: string;
  /** The canonical relative URI of the Creative Commons license. */
  uri: string | null;
};

export const creativeCommonsSchema: Schema<CreativeCommons> = s.object<CreativeCommons>({
  code: code1Schema,
  name: s.string(),
  uri: s.nullable(s.string()),
});

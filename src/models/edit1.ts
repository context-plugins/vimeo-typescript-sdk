import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The user's edit permissions information for this project. */
export type Edit1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const edit1Schema: Schema<Edit1> = s.object<Edit1>({
  options: s.array(s.string()),
  uri: s.string(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The user's view permissions information for this project. */
export type View2 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const view2Schema: Schema<View2> = s.object<View2>({
  options: s.array(s.string()),
  uri: s.string(),
});

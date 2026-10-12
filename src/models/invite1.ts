import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The user's invite permissions information for this project. */
export type Invite1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const invite1Schema: Schema<Invite1> = s.object<Invite1>({
  options: s.array(s.string()),
  uri: s.string(),
});

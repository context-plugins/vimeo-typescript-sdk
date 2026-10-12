import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { video1Schema, type Video1 } from "./video1.js";

export type Connections12 = {
  /** The associated video object. This data requires a bearer token with the `private` scope. */
  video: Video1;
};

export const connections12Schema: Schema<Connections12> = s.object<Connections12>({
  video: video1Schema,
});

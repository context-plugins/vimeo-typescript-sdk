import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the associated showcase. */
export type Album2 = {
  /** The responsive embed code for the associated showcase. */
  embedCode: string;
  /** The ID of the associated showcase. */
  id: number;
  /** The privacy setting of the associated showcase. */
  privacy: string;
  /** The title of the associated showcase. */
  title: string;
};

export const album2Schema: Schema<Album2> = s.object<Album2>({
  embedCode: s.string(),
  id: s.float64(),
  privacy: s.string(),
  title: s.string(),
  _keysMap: {
    embedCode: "embed_code",
  },
});

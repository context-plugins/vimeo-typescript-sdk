import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Album2 = {
  embedCode: string;
  id: number;
  privacy: string;
  title: string;
};

export const album2Schema: Schema<Album2> = s.object<Album2>({
  embedCode: s.string(),
  id: s.number(),
  privacy: s.string(),
  title: s.string(),
  _keysMap: {
    embedCode: "embed_code",
  },
});

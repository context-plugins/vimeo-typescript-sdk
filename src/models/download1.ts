import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Download1 = {
  expires: string;
  extension: string;
  link: string;
  rendition: "source";
};

export const download1Schema: Schema<Download1> = s.object<Download1>({
  expires: s.string(),
  extension: s.string(),
  link: s.string(),
  rendition: s.literal("source"),
});

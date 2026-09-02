import { s, type Schema } from "../core/index.js";
import { rendition2Schema, type Rendition2 } from "./rendition2.js";

export type Download1 = {
  expires: string;
  extension: string;
  link: string;
  rendition: Rendition2;
};

export const download1Schema: Schema<Download1> = s.object<Download1>({
  expires: s.string(),
  extension: s.string(),
  link: s.string(),
  rendition: rendition2Schema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comments2Schema, type Comments2 } from "./comments2.js";
import { embed1Schema, type Embed1 } from "./embed1.js";
import { view4Schema, type View4 } from "./view4.js";

export type Privacy3 = {
  add: boolean;
  allowShareLink: boolean;
  comments: Comments2;
  download: boolean;
  embed: Embed1;
  originalView?: string;
  view: View4;
};

export const privacy3Schema: Schema<Privacy3> = s.object<Privacy3>({
  add: s.boolean(),
  allowShareLink: s.boolean(),
  comments: comments2Schema,
  download: s.boolean(),
  embed: embed1Schema,
  originalView: s.optional(s.string()),
  view: view4Schema,
  _keysMap: {
    allowShareLink: "allow_share_link",
    originalView: "original_view",
  },
});

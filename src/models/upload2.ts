import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approach2Schema, type Approach2 } from "./approach2.js";

export type Upload2 = {
  approach: Approach2;
  link?: string;
  redirectUrl?: string;
  size?: string;
};

export const upload2Schema: Schema<Upload2> = s.object<Upload2>({
  approach: approach2Schema,
  link: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  size: s.optional(s.string()),
  _keysMap: {
    redirectUrl: "redirect_url",
  },
});

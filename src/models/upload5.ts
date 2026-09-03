import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approach5Schema, type Approach5 } from "./approach5.js";

export type Upload5 = {
  approach: Approach5;
  link?: string;
  redirectUrl?: string;
  size?: string;
};

export const upload5Schema: Schema<Upload5> = s.object<Upload5>({
  approach: approach5Schema,
  link: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  size: s.optional(s.string()),
  _keysMap: {
    redirectUrl: "redirect_url",
  },
});

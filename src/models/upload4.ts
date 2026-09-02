import { s, type Schema } from "../core/index.js";
import { approach4Schema, type Approach4 } from "./approach4.js";

export type Upload4 = {
  approach: Approach4;
  link?: string;
  redirectUrl?: string;
  size?: string;
};

export const upload4Schema: Schema<Upload4> = s.object<Upload4>({
  approach: approach4Schema,
  link: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  size: s.optional(s.string()),
  _keysMap: {
    redirectUrl: "redirect_url",
  },
});

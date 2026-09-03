import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Button = {
  label?: string;
  link?: string;
};

export const buttonSchema: Schema<Button> = s.object<Button>({
  label: s.optional(s.string()),
  link: s.optional(s.string()),
});

import { s, type Schema } from "../core/index.js";

export type Button = {
  label?: string;
  link?: string;
};

export const buttonSchema: Schema<Button> = s.object<Button>({
  label: s.optional(s.string()),
  link: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The attributes of the button control. */
export type Button = {
  /** The text of the button label. */
  label?: string;
  /** The URL that loads upon clicking the button. */
  link?: string;
};

export const buttonSchema: Schema<Button> = s.object<Button>({
  label: s.optional(s.string()),
  link: s.optional(s.string()),
});

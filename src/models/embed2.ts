import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Embed data for the showcase. */
export type Embed2 = {
  /**
   * The responsive HTML code to embed the showcase's playlist on a website. This field appears only
   * when the showcase has embeddable videos.
   */
  html: string | null;
};

export const embed2Schema: Schema<Embed2> = s.object<Embed2>({
  html: s.nullable(s.string()),
});

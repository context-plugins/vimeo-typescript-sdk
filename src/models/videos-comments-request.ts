import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosCommentsRequest = {
  /**
   * The rich comment in JSON stringified form. Either this field or the **text** field is required.
   */
  richtext?: string;
  /** The comment as plain text. Either this field or the **richtext** field is required. */
  text?: string;
};

export const videosCommentsRequestSchema: Schema<VideosCommentsRequest> = s.object<VideosCommentsRequest>({
  richtext: s.optional(s.string()),
  text: s.optional(s.string()),
});

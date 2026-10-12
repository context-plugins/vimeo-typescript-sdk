import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addSchema, type Add } from "./add.js";
import { removeSchema, type Remove } from "./remove.js";

export type VideosAlbumsRequest = {
  /**
   * The array of showcases to add the video to. Specify these with a batch request; see our [Using
   * Common Formats and
   * Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests) guide
   * for more information.
   */
  add?: Add[];
  /**
   * The array of showcases to remove the video from. Specify these with a batch request; see our
   * [Using Common Formats and
   * Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests) guide
   * for more information.
   */
  remove?: Remove[];
};

export const videosAlbumsRequestSchema: Schema<VideosAlbumsRequest> = s.object<VideosAlbumsRequest>({
  add: s.optional(s.array(s.lazy(() => addSchema))),
  remove: s.optional(s.array(s.lazy(() => removeSchema))),
});

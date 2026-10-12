import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field1Schema, type Field1 } from "./field1.js";

export type VideosCustomMetadataRequest = {
  /** The custom metadata values to apply to the video. */
  fields?: Field1[];
};

export const videosCustomMetadataRequestSchema: Schema<VideosCustomMetadataRequest> =
  s.object<VideosCustomMetadataRequest>({
    fields: s.optional(s.array(s.lazy(() => field1Schema))),
  });

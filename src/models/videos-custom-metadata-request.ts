import { s, type Schema } from "../core/index.js";
import { field1Schema, type Field1 } from "./field1.js";

export type VideosCustomMetadataRequest = {
  fields?: Field1[];
};

export const videosCustomMetadataRequestSchema: Schema<VideosCustomMetadataRequest> =
  s.object<VideosCustomMetadataRequest>({
    fields: s.optional(s.array(s.lazy(() => field1Schema))),
  });

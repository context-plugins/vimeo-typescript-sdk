import { s, type Schema } from "../core/index.js";
import { addSchema, type Add } from "./add.js";
import { removeSchema, type Remove } from "./remove.js";

export type VideosAlbumsRequest = {
  add?: Add[];
  remove?: Remove[];
};

export const videosAlbumsRequestSchema: Schema<VideosAlbumsRequest> = s.object<VideosAlbumsRequest>({
  add: s.optional(s.array(s.lazy(() => addSchema))),
  remove: s.optional(s.array(s.lazy(() => removeSchema))),
});

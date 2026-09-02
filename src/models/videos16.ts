import { s, type Schema } from "../core/index.js";
import { video5Schema, type Video5 } from "./video5.js";

export type Videos16 = {
  video?: Video5;
};

export const videos16Schema: Schema<Videos16> = s.object<Videos16>({
  video: s.optional(s.lazy(() => video5Schema)),
});

import { s, type Schema } from "../core/index.js";
import { video6Schema, type Video6 } from "./video6.js";

export type Videos17 = {
  video?: Video6;
};

export const videos17Schema: Schema<Videos17> = s.object<Videos17>({
  video: s.optional(s.lazy(() => video6Schema)),
});

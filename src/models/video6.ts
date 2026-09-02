import { s, type Schema } from "../core/index.js";

export type Video6 = {
  uri?: string;
};

export const video6Schema: Schema<Video6> = s.object<Video6>({
  uri: s.optional(s.string()),
});

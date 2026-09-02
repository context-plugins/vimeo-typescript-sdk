import { s, type Schema } from "../core/index.js";

export type MeLiveEventsPicturesRequest = {
  active?: boolean;
};

export const meLiveEventsPicturesRequestSchema: Schema<MeLiveEventsPicturesRequest> =
  s.object<MeLiveEventsPicturesRequest>({
    active: s.optional(s.boolean()),
  });

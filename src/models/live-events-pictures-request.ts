import { s, type Schema } from "../core/index.js";

export type LiveEventsPicturesRequest = {
  active?: boolean;
};

export const liveEventsPicturesRequestSchema: Schema<LiveEventsPicturesRequest> =
  s.object<LiveEventsPicturesRequest>({
    active: s.optional(s.boolean()),
  });

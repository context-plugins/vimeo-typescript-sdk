import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiveEventsPicturesRequest = {
  active?: boolean;
};

export const liveEventsPicturesRequestSchema: Schema<LiveEventsPicturesRequest> =
  s.object<LiveEventsPicturesRequest>({
    active: s.optional(s.boolean()),
  });

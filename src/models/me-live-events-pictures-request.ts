import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeLiveEventsPicturesRequest = {
  /** Whether the thumbnail is the event's active thumbnail. */
  active?: boolean;
};

export const meLiveEventsPicturesRequestSchema: Schema<MeLiveEventsPicturesRequest> =
  s.object<MeLiveEventsPicturesRequest>({
    active: s.optional(s.boolean()),
  });

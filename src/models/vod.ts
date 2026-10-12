import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The video's Vimeo On Demand information. */
export type Vod = {
  /** The video's Vimeo On Demand ID. */
  id?: number;
  /** The video's Vimeo On Demand link. */
  link: string;
};

export const vodSchema: Schema<Vod> = s.object<Vod>({
  id: s.optional(s.float64()),
  link: s.string(),
});

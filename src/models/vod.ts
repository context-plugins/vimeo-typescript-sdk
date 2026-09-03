import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Vod = {
  id?: number;
  link: string;
};

export const vodSchema: Schema<Vod> = s.object<Vod>({
  id: s.optional(s.number()),
  link: s.string(),
});

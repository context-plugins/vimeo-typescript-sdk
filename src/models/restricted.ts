import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Restricted = {
  free: number | null;
  max: number | null;
  unit: "video_size";
  used: number;
};

export const restrictedSchema: Schema<Restricted> = s.object<Restricted>({
  free: s.nullable(s.number()),
  max: s.nullable(s.number()),
  unit: s.literal("video_size"),
  used: s.number(),
});

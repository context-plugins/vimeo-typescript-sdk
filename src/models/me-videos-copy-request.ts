import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeVideosCopyRequest = {
  /** The copied video name. By default, this becomes the source video name with (Copy) appended. */
  name?: string;
};

export const meVideosCopyRequestSchema: Schema<MeVideosCopyRequest> = s.object<MeVideosCopyRequest>({
  name: s.optional(s.string()),
});

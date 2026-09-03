import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeVideosCopyRequest = {
  name?: string;
};

export const meVideosCopyRequestSchema: Schema<MeVideosCopyRequest> = s.object<MeVideosCopyRequest>({
  name: s.optional(s.string()),
});

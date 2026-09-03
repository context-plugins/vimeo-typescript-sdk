import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MePicturesRequest = {
  active?: boolean;
};

export const mePicturesRequestSchema: Schema<MePicturesRequest> = s.object<MePicturesRequest>({
  active: s.optional(s.boolean()),
});

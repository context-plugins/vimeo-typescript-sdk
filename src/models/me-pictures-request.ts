import { s, type Schema } from "../core/index.js";

export type MePicturesRequest = {
  active?: boolean;
};

export const mePicturesRequestSchema: Schema<MePicturesRequest> = s.object<MePicturesRequest>({
  active: s.optional(s.boolean()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OndemandPagesPicturesRequest = {
  active?: boolean;
};

export const ondemandPagesPicturesRequestSchema: Schema<OndemandPagesPicturesRequest> =
  s.object<OndemandPagesPicturesRequest>({
    active: s.optional(s.boolean()),
  });

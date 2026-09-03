import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReviewPage = {
  active?: boolean;
};

export const reviewPageSchema: Schema<ReviewPage> = s.object<ReviewPage>({
  active: s.optional(s.boolean()),
});

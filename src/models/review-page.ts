import { s, type Schema } from "../core/index.js";

export type ReviewPage = {
  active?: boolean;
};

export const reviewPageSchema: Schema<ReviewPage> = s.object<ReviewPage>({
  active: s.optional(s.boolean()),
});

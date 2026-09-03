import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OndemandPagesBackgroundsRequest = {
  active?: boolean;
};

export const ondemandPagesBackgroundsRequestSchema: Schema<OndemandPagesBackgroundsRequest> =
  s.object<OndemandPagesBackgroundsRequest>({
    active: s.optional(s.boolean()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OndemandPagesBackgroundsRequest = {
  /** Whether this background image is the one that appears on the On Demand page. */
  active?: boolean;
};

export const ondemandPagesBackgroundsRequestSchema: Schema<OndemandPagesBackgroundsRequest> =
  s.object<OndemandPagesBackgroundsRequest>({
    active: s.optional(s.boolean()),
  });

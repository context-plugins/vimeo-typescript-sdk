import { s, type Schema } from "../core/index.js";

export type OndemandPagesBackgroundsRequest = {
  active?: boolean;
};

export const ondemandPagesBackgroundsRequestSchema: Schema<OndemandPagesBackgroundsRequest> =
  s.object<OndemandPagesBackgroundsRequest>({
    active: s.optional(s.boolean()),
  });

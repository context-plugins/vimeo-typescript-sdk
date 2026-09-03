import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OndemandPagesRegionsRequest = {
  countries?: string[];
};

export const ondemandPagesRegionsRequestSchema: Schema<OndemandPagesRegionsRequest> =
  s.object<OndemandPagesRegionsRequest>({
    countries: s.optional(s.array(s.string())),
  });

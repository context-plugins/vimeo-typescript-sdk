import { s, type Schema } from "../core/index.js";

export type OndemandPagesRegionsRequest = {
  countries?: string[];
};

export const ondemandPagesRegionsRequestSchema: Schema<OndemandPagesRegionsRequest> =
  s.object<OndemandPagesRegionsRequest>({
    countries: s.optional(s.array(s.string())),
  });

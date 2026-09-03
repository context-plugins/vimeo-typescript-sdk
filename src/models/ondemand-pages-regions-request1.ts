import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OndemandPagesRegionsRequest1 = {
  countries: string[];
};

export const ondemandPagesRegionsRequest1Schema: Schema<OndemandPagesRegionsRequest1> =
  s.object<OndemandPagesRegionsRequest1>({
    countries: s.array(s.string()),
  });

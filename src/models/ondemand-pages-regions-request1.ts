import { s, type Schema } from "../core/index.js";

export type OndemandPagesRegionsRequest1 = {
  countries: string[];
};

export const ondemandPagesRegionsRequest1Schema: Schema<OndemandPagesRegionsRequest1> =
  s.object<OndemandPagesRegionsRequest1>({
    countries: s.array(s.string()),
  });

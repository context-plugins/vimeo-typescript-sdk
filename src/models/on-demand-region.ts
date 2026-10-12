import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OnDemandRegion = {
  /** The ISO 3166-1 alpha-2 code for this country. */
  countryCode: string;
  /** The descriptive name of this country. */
  countryName: string;
  /** The region container's relative URI. */
  uri: string;
};

export const onDemandRegionSchema: Schema<OnDemandRegion> = s.object<OnDemandRegion>({
  countryCode: s.string(),
  countryName: s.string(),
  uri: s.string(),
  _keysMap: {
    countryCode: "country_code",
    countryName: "country_name",
  },
});

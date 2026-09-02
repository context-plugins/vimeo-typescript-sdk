import { s, type Schema } from "../core/index.js";

export type OnDemandRegion = {
  countryCode: string;
  countryName: string;
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

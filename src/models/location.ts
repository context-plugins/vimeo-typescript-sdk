import { s, type Schema } from "../core/index.js";

export type Location = {
  city: string | null;
  country: string | null;
  countryIsoCode: string;
  formattedAddress: string;
  latitude: number;
  longitude: number;
  neighborhood: string | null;
  state: string | null;
  stateIsoCode: string | null;
  subLocality: string | null;
};

export const locationSchema: Schema<Location> = s.object<Location>({
  city: s.nullable(s.string()),
  country: s.nullable(s.string()),
  countryIsoCode: s.string(),
  formattedAddress: s.string(),
  latitude: s.number(),
  longitude: s.number(),
  neighborhood: s.nullable(s.string()),
  state: s.nullable(s.string()),
  stateIsoCode: s.nullable(s.string()),
  subLocality: s.nullable(s.string()),
  _keysMap: {
    countryIsoCode: "country_iso_code",
    formattedAddress: "formatted_address",
    stateIsoCode: "state_iso_code",
    subLocality: "sub_locality",
  },
});

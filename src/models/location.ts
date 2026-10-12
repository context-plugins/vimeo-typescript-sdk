import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Location = {
  /** The authenticated user's city. */
  city: string | null;
  /** The authenticated user's country. */
  country: string | null;
  /** The ISO code of the authenticated user's country. */
  countryIsoCode: string;
  /** The authenticated user's formatted address string. */
  formattedAddress: string;
  /** The authenticated user's latitude. */
  latitude: number;
  /** The authenticated user's longitude. */
  longitude: number;
  /** The authenticated user's neighborhood. */
  neighborhood: string | null;
  /** The authenticated user's state. */
  state: string | null;
  /** The ISO code of the authenticated user's state. */
  stateIsoCode: string | null;
  /** The authenticated user's sub-locality. */
  subLocality: string | null;
};

export const locationSchema: Schema<Location> = s.object<Location>({
  city: s.nullable(s.string()),
  country: s.nullable(s.string()),
  countryIsoCode: s.string(),
  formattedAddress: s.string(),
  latitude: s.float64(),
  longitude: s.float64(),
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

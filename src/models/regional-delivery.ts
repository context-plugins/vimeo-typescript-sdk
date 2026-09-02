import { s, type Schema } from "../core/index.js";

export type RegionalDelivery = {
  displayDescription: string;
  displayName: string;
  name: string;
};

export const regionalDeliverySchema: Schema<RegionalDelivery> = s.object<RegionalDelivery>({
  displayDescription: s.string(),
  displayName: s.string(),
  name: s.string(),
  _keysMap: {
    displayDescription: "display_description",
    displayName: "display_name",
  },
});

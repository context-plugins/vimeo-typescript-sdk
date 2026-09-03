import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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

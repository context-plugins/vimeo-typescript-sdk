import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { regionalDeliverySchema, type RegionalDelivery } from "./regional-delivery.js";

export type ApplicablePermissionPolicies1 = {
  folder?: string[];
  regionalDelivery?: RegionalDelivery[];
  video?: string[];
};

export const applicablePermissionPolicies1Schema: Schema<ApplicablePermissionPolicies1> =
  s.object<ApplicablePermissionPolicies1>({
    folder: s.optional(s.array(s.string())),
    regionalDelivery: s.optional(s.array(s.lazy(() => regionalDeliverySchema))),
    video: s.optional(s.array(s.string())),
    _keysMap: {
      regionalDelivery: "regional_delivery",
    },
  });

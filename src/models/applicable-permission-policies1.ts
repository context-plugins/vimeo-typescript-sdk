import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { regionalDeliverySchema, type RegionalDelivery } from "./regional-delivery.js";

/** The applicable permission policies for the role. */
export type ApplicablePermissionPolicies1 = {
  /** The applicable folder-related permission policies for the role. */
  folder?: string[];
  /** The applicable permission policies related to regional delivery for the role. */
  regionalDelivery?: RegionalDelivery[];
  /** The applicable video-related permission policies for the role. */
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

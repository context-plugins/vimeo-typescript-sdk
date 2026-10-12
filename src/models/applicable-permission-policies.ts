import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permissionPolicySchema, type PermissionPolicy } from "./permission-policy.js";

/** Information about permission policies that can apply to the team member. */
export type ApplicablePermissionPolicies = {
  /** An array of folder permission policies that can apply to the team member. */
  folder: PermissionPolicy[];
  /** An array of regional delivery permission policies that can apply to the team member. */
  regionalDelivery: PermissionPolicy[];
  /** An array of video permission policies that can apply to the team member. */
  video: PermissionPolicy[];
};

export const applicablePermissionPoliciesSchema: Schema<ApplicablePermissionPolicies> =
  s.object<ApplicablePermissionPolicies>({
    folder: s.array(s.lazy(() => permissionPolicySchema)),
    regionalDelivery: s.array(s.lazy(() => permissionPolicySchema)),
    video: s.array(s.lazy(() => permissionPolicySchema)),
    _keysMap: {
      regionalDelivery: "regional_delivery",
    },
  });

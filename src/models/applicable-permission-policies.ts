import { s, type Schema } from "../core/index.js";
import { permissionPolicySchema, type PermissionPolicy } from "./permission-policy.js";

export type ApplicablePermissionPolicies = {
  folder: PermissionPolicy[];
  regionalDelivery: PermissionPolicy[];
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

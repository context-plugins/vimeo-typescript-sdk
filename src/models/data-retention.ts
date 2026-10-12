import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { policySchema, type Policy } from "./policy.js";

export type DataRetention = {
  /**
   * Information about the folder's data retention policy. This data requires a bearer token with
   * the `private` scope.
   */
  policy: Policy;
};

export const dataRetentionSchema: Schema<DataRetention> = s.object<DataRetention>({
  policy: policySchema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { policySchema, type Policy } from "./policy.js";

export type DataRetention = {
  policy: Policy;
};

export const dataRetentionSchema: Schema<DataRetention> = s.object<DataRetention>({
  policy: policySchema,
});

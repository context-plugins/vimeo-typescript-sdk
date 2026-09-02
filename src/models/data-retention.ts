import { s, type Schema } from "../core/index.js";
import { policySchema, type Policy } from "./policy.js";

export type DataRetention = {
  policy: Policy;
};

export const dataRetentionSchema: Schema<DataRetention> = s.object<DataRetention>({
  policy: policySchema,
});

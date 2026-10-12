import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paramsSchema, type Params } from "./params.js";

/** The URLs and entitlements of the associated products in the store. */
export type Entitlements = {
  /** The entitlement plan ID. */
  id: number | null;
  /** The list of entitlement parameters corresponding to the tier. */
  params: Params;
};

export const entitlementsSchema: Schema<Entitlements> = s.object<Entitlements>({
  id: s.nullable(s.float64()),
  params: paramsSchema,
});

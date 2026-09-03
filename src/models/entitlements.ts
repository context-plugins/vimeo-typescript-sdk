import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paramsSchema, type Params } from "./params.js";

export type Entitlements = {
  id: number | null;
  params: Params;
};

export const entitlementsSchema: Schema<Entitlements> = s.object<Entitlements>({
  id: s.nullable(s.number()),
  params: paramsSchema,
});

import { s, type Schema } from "../core/index.js";
import { paramsSchema, type Params } from "./params.js";

export type Entitlements = {
  id: number | null;
  params: Params;
};

export const entitlementsSchema: Schema<Entitlements> = s.object<Entitlements>({
  id: s.nullable(s.number()),
  params: paramsSchema,
});

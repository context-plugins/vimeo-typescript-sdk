import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Tier1 = {
  Advanced: "advanced",
  Business: "business",
  Free: "free",
  LivePremium: "live_premium",
  Plus: "plus",
  Pro: "pro",
  ProUnlimited: "pro_unlimited",
  Standard: "standard",
  Starter: "starter",
} as const;
export type Tier1 = (typeof Tier1)[keyof typeof Tier1] | (string & {});

export const tier1Schema: EnumSchema<Tier1> = s.enumOf<Tier1>(Tier1);

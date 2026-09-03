import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type2 = {
  Advanced: "advanced",
  Basic: "basic",
  Business: "business",
  Creator: "creator",
  Custom: "custom",
  Enterprise: "enterprise",
  Free: "free",
  LiveBusiness: "live_business",
  LivePremium: "live_premium",
  LivePro: "live_pro",
  OttCustom: "ott_custom",
  Plus: "plus",
  Pro: "pro",
  ProUnlimited: "pro_unlimited",
  Producer: "producer",
  Production: "production",
  Professional: "professional",
  Standard: "standard",
  Starter: "starter",
  Studio: "studio",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);

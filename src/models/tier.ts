import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Tier = {
  Advanced: "advanced",
  Basic: "basic",
  Business: "business",
  Core: "core",
  Creator: "creator",
  CustomSelfServe: "customSelfServe",
  Enterprise: "enterprise",
  Free: "free",
  LivePremium: "livePremium",
  Ott: "ott",
  Plus: "plus",
  Pro: "pro",
  ProSolution: "proSolution",
  ProUnlimited: "proUnlimited",
  Production: "production",
  Professional: "professional",
  Standard: "standard",
  Starter: "starter",
  Studio: "studio",
  Team: "team",
  TeamLive: "teamLive",
} as const;
export type Tier = (typeof Tier)[keyof typeof Tier] | (string & {});

export const tierSchema: EnumSchema<Tier> = s.enumOf<Tier>(Tier);

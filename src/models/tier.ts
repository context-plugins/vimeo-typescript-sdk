import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The plan type.
 *
 * Option descriptions:
 *  * `advanced` - The plan type is Vimeo Advanced.
 *  * `basic` - The plan type is Vimeo Basic.
 *  * `business` - The plan type is Vimeo Business.
 *  * `core` - The plan type is Vimeo Core.
 *  * `creator` - The plan type is Vimeo Creator.
 *  * `customSelfServe` - The plan type is Vimeo Custom.
 *  * `enterprise` - The plan type is Vimeo Enterprise.
 *  * `free` - The plan type is Vimeo Free.
 *  * `livePremium` - The plan type is Vimeo Premium.
 *  * `ott` - The plan type is Vimeo OTT.
 *  * `plus` - The plan type is Vimeo Plus.
 *  * `pro` - The plan type is Vimeo Pro.
 *  * `proSolution` - The plan type is Vimeo Pro Solution.
 *  * `proUnlimited` - The plan type is Vimeo Pro Unlimited.
 *  * `production` - The plan type is Vimeo Production.
 *  * `professional` - The plan type is Vimeo Professional.
 *  * `standard` - The plan type is Vimeo Standard.
 *  * `starter` - The plan type is Vimeo Starter.
 *  * `studio` - The plan type is Vimeo Studio.
 *  * `team` - The plan type is Vimeo Team.
 *  * `teamLive` - The plan type is Vimeo Team Live.
 */
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

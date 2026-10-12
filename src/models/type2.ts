import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The authenticated user's account type.
 *
 * Option descriptions:
 *  * `advanced` - The user has a Vimeo Advanced account.
 *  * `basic` - The user has a Vimeo Basic account.
 *  * `business` - The user has a Vimeo Business account.
 *  * `creator` - The user has a Vimeo Creator account.
 *  * `custom` - The user has a Vimeo Custom account.
 *  * `enterprise` - The user has a Vimeo Enterprise account.
 *  * `free` - The user has a Vimeo Free account.
 *  * `live_business` - The user has a Vimeo Business Live account.
 *  * `live_premium` - The user has a Vimeo Premium account.
 *  * `live_pro` - The user has a Vimeo Pro Live account.
 *  * `ott_custom` - The user has a Vimeo OTT Custom account.
 *  * `plus` - The user has a Vimeo Plus account.
 *  * `pro` - The user has a Vimeo Pro account.
 *  * `pro_unlimited` - The user has a Vimeo Pro Unlimited account.
 *  * `producer` - The user has a Vimeo Producer account.
 *  * `production` - The user has a Vimeo Production account.
 *  * `professional` - The user has a Vimeo Professional account.
 *  * `standard` - The user has a Vimeo Standard account.
 *  * `starter` - The user has a Vimeo Starter account.
 *  * `studio` - The user has a Vimeo Studio account.
 */
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

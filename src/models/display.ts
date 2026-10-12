import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The authenticated user's membership level.
 *
 * Option descriptions:
 *  * `Advanced` - The user has an Advanced subscription.
 *  * `Basic` - The user has a Vimeo Basic subscription.
 *  * `Business` - The user has a Vimeo Business subscription.
 *  * `Business Live` - The user has a Vimeo Business Live subscription.
 *  * `Creator` - The user has a Vimeo Creator subscription.
 *  * `Custom` - The user has a Vimeo Custom subscription.
 *  * `Free` - The user has a Free subscription.
 *  * `Ott Custom` - The user has a Vimeo OTT Custom subscription.
 *  * `Plus` - The user has a Vimeo Plus subscription.
 *  * `Premium` - The user has a Vimeo Premium subscription.
 *  * `Pro` - The user has a Vimeo Pro subscription.
 *  * `Pro Live` - The user has a Vimeo Pro Live subscription.
 *  * `Pro Unlimited` - The user has a Vimeo Pro Unlimited subscription.
 *  * `Producer` - The user has a Vimeo Producer subscription.
 *  * `Production` - The user has a Vimeo Production subscription.
 *  * `Professional` - The user has a Vimeo Professional subscription.
 *  * `Standard` - The user has a Vimeo Standard subscription.
 *  * `Starter` - The user has a Vimeo Starter subscription.
 *  * `Studio` - The user has a Vimeo Studio subscription.
 */
export const Display = {
  Advanced: "Advanced",
  Basic: "Basic",
  Business: "Business",
  BusinessLive: "Business Live",
  Creator: "Creator",
  Custom: "Custom",
  Free: "Free",
  OttCustom: "Ott Custom",
  Plus: "Plus",
  Premium: "Premium",
  Pro: "Pro",
  ProLive: "Pro Live",
  ProUnlimited: "Pro Unlimited",
  Producer: "Producer",
  Production: "Production",
  Professional: "Professional",
  Standard: "Standard",
  Starter: "Starter",
  Studio: "Studio",
} as const;
export type Display = (typeof Display)[keyof typeof Display] | (string & {});

export const displaySchema: EnumSchema<Display> = s.enumOf<Display>(Display);

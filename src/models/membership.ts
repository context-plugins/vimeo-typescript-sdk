import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displaySchema, type Display } from "./display.js";
import { subscription3Schema, type Subscription3 } from "./subscription3.js";
import { type2Schema, type Type2 } from "./type2.js";

export type Membership = {
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
  display: Display;
  /** Information about the authenticated user's Vimeo subscription. */
  subscription: Subscription3;
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
  type: Type2;
};

export const membershipSchema: Schema<Membership> = s.object<Membership>({
  display: displaySchema,
  subscription: subscription3Schema,
  type: type2Schema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingSchema, type Billing } from "./billing.js";
import { renewalSchema, type Renewal } from "./renewal.js";
import { trialSchema, type Trial } from "./trial.js";

/** Information about the authenticated user's Vimeo subscription. */
export type Subscription3 = {
  /** Information about the authenticated user's subscription billing. */
  billing: Billing;
  /** Information about the authenticated user's next renewal. */
  renewal: Renewal;
  /** Information about the authenticated user's trial. */
  trial: Trial;
};

export const subscription3Schema: Schema<Subscription3> = s.object<Subscription3>({
  billing: billingSchema,
  renewal: renewalSchema,
  trial: trialSchema,
});

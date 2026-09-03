import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displaySchema, type Display } from "./display.js";
import { subscription3Schema, type Subscription3 } from "./subscription3.js";
import { type2Schema, type Type2 } from "./type2.js";

export type Membership = {
  display: Display;
  subscription: Subscription3;
  type: Type2;
};

export const membershipSchema: Schema<Membership> = s.object<Membership>({
  display: displaySchema,
  subscription: subscription3Schema,
  type: type2Schema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type Billing = {
  status: Status;
};

export const billingSchema: Schema<Billing> = s.object<Billing>({
  status: statusSchema,
});

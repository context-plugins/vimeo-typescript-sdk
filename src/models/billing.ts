import { s, type Schema } from "../core/index.js";
import { statusSchema, type Status } from "./status.js";

export type Billing = {
  status: Status;
};

export const billingSchema: Schema<Billing> = s.object<Billing>({
  status: statusSchema,
});

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status = {
  Active: "active",
  Cancelled: "cancelled",
  GracePeriod: "grace_period",
  None: "none",
  OnHold: "on_hold",
  Pending: "pending",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);

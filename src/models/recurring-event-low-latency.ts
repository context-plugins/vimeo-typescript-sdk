import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RecurringEventLowLatency = {
  lowLatency: boolean;
};

export const recurringEventLowLatencySchema: Schema<RecurringEventLowLatency> =
  s.object<RecurringEventLowLatency>({
    lowLatency: s.boolean(),
  });

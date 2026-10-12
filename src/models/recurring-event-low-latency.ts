import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RecurringEventLowLatency = {
  /** Whether the low-latency option is enabled. */
  lowLatency: boolean;
};

export const recurringEventLowLatencySchema: Schema<RecurringEventLowLatency> =
  s.object<RecurringEventLowLatency>({
    lowLatency: s.boolean(),
  });

import { s, type Schema } from "../core/index.js";

export type RecurringEventLowLatency = {
  lowLatency: boolean;
};

export const recurringEventLowLatencySchema: Schema<RecurringEventLowLatency> =
  s.object<RecurringEventLowLatency>({
    lowLatency: s.boolean(),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Subscription1 = {
  active: boolean;
  link: string | null;
  period?: string;
  price: Record<string, unknown>;
};

export const subscription1Schema: Schema<Subscription1> = s.object<Subscription1>({
  active: s.boolean(),
  link: s.nullable(s.string()),
  period: s.optional(s.string()),
  price: s.record(s.string(), s.unknown()),
});

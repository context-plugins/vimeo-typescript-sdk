import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { endScreenSchema, type EndScreen } from "../end-screen.js";

export type EndScreen3 = EndScreen | Record<string, unknown>[];

export const endScreen3Schema: Schema<EndScreen3> = s.of<EndScreen3>(
  s.union([s.lazy(() => endScreenSchema), s.array(s.record(s.string(), s.unknown()))]),
);

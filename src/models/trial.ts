import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type Trial = {
  hasBeenInFreeTrial: boolean;
  isReverseFreeTrial: boolean;
  status: Status1 | null;
};

export const trialSchema: Schema<Trial> = s.object<Trial>({
  hasBeenInFreeTrial: s.boolean(),
  isReverseFreeTrial: s.boolean(),
  status: s.nullable(s.lazy(() => status1Schema)),
  _keysMap: {
    hasBeenInFreeTrial: "has_been_in_free_trial",
    isReverseFreeTrial: "is_reverse_free_trial",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Trial = {
  hasBeenInFreeTrial: boolean;
  isReverseFreeTrial: boolean;
  status: "free_trial";
};

export const trialSchema: Schema<Trial> = s.object<Trial>({
  hasBeenInFreeTrial: s.boolean(),
  isReverseFreeTrial: s.boolean(),
  status: s.literal("free_trial"),
  _keysMap: {
    hasBeenInFreeTrial: "has_been_in_free_trial",
    isReverseFreeTrial: "is_reverse_free_trial",
  },
});

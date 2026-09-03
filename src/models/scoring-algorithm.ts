import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScoringAlgorithm = {
  Passfail: "passfail",
  Percentage: "percentage",
  Quiz: "quiz",
} as const;
export type ScoringAlgorithm = (typeof ScoringAlgorithm)[keyof typeof ScoringAlgorithm] | (string & {});

export const scoringAlgorithmSchema: EnumSchema<ScoringAlgorithm> =
  s.enumOf<ScoringAlgorithm>(ScoringAlgorithm);

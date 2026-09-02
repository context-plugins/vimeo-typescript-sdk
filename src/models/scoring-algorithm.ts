import { s, type EnumSchema } from "../core/index.js";

export const ScoringAlgorithm = {
  Passfail: "passfail",
  Percentage: "percentage",
  Quiz: "quiz",
} as const;
export type ScoringAlgorithm = (typeof ScoringAlgorithm)[keyof typeof ScoringAlgorithm] | (string & {});

export const scoringAlgorithmSchema: EnumSchema<ScoringAlgorithm> =
  s.enumOf<ScoringAlgorithm>(ScoringAlgorithm);

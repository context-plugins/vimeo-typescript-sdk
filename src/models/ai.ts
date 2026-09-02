import { s, type Schema } from "../core/index.js";
import { creditsPeriodSchema, type CreditsPeriod } from "./credits-period.js";

export type Ai = {
  creditsPeriod: CreditsPeriod;
  periodicCredits: number | null;
};

export const aiSchema: Schema<Ai> = s.object<Ai>({
  creditsPeriod: creditsPeriodSchema,
  periodicCredits: s.nullable(s.number()),
  _keysMap: {
    creditsPeriod: "credits_period",
    periodicCredits: "periodic_credits",
  },
});

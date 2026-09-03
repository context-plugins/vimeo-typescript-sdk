import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StaffPick = {
  bestOfTheMonth: boolean;
  bestOfTheYear: boolean;
  normal: boolean;
  premiere: boolean;
};

export const staffPickSchema: Schema<StaffPick> = s.object<StaffPick>({
  bestOfTheMonth: s.boolean(),
  bestOfTheYear: s.boolean(),
  normal: s.boolean(),
  premiere: s.boolean(),
  _keysMap: {
    bestOfTheMonth: "best_of_the_month",
    bestOfTheYear: "best_of_the_year",
  },
});

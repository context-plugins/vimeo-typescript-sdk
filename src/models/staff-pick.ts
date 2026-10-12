import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StaffPick = {
  /** Whether the video is a Vimeo Staff Pick Best of the Month. */
  bestOfTheMonth: boolean;
  /** Whether the video is a Vimeo Staff Pick Best of the Year. */
  bestOfTheYear: boolean;
  /** Whether the video is a Vimeo Staff Pick. */
  normal: boolean;
  /** Whether the video is a Vimeo Staff Pick Premiere. */
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

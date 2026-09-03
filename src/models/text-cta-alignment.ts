import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TextCtaAlignment = {
  isUpgrade: boolean;
  value: string;
};

export const textCtaAlignmentSchema: Schema<TextCtaAlignment> = s.object<TextCtaAlignment>({
  isUpgrade: s.boolean(),
  value: s.string(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

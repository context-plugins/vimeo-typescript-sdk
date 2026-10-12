import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the section names. */
export type ShowGridSectionName = {
  /** Whether an upgrade is required to show the section names. */
  isUpgrade: boolean;
  /** Whether to show the section names. */
  value: boolean;
};

export const showGridSectionNameSchema: Schema<ShowGridSectionName> = s.object<ShowGridSectionName>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

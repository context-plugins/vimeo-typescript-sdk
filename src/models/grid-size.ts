import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the grid size configuration. */
export type GridSize = {
  /** Whether an upgrade is required to configure the grid size. */
  isUpgrade: boolean;
  /**
   * The grid size configuration. Possible values include `s` for small, `m` for medium, `l` for
   * large, and `xl` for extra large.
   */
  value: string;
};

export const gridSizeSchema: Schema<GridSize> = s.object<GridSize>({
  isUpgrade: s.boolean(),
  value: s.string(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

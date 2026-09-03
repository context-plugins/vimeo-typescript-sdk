import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GridSize = {
  isUpgrade: boolean;
  value: string;
};

export const gridSizeSchema: Schema<GridSize> = s.object<GridSize>({
  isUpgrade: s.boolean(),
  value: s.string(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

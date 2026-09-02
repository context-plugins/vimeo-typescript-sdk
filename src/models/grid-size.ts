import { s, type Schema } from "../core/index.js";

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

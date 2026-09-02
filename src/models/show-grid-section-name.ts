import { s, type Schema } from "../core/index.js";

export type ShowGridSectionName = {
  isUpgrade: boolean;
  value: boolean;
};

export const showGridSectionNameSchema: Schema<ShowGridSectionName> = s.object<ShowGridSectionName>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

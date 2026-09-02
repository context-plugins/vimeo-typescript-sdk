import { s, type Schema } from "../core/index.js";

export type ShowGridVideoTitles = {
  isUpgrade: boolean;
  value: boolean;
};

export const showGridVideoTitlesSchema: Schema<ShowGridVideoTitles> = s.object<ShowGridVideoTitles>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

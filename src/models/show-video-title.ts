import { s, type Schema } from "../core/index.js";

export type ShowVideoTitle = {
  isUpgrade: boolean;
  value: boolean;
};

export const showVideoTitleSchema: Schema<ShowVideoTitle> = s.object<ShowVideoTitle>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

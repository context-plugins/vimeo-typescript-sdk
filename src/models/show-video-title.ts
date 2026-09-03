import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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

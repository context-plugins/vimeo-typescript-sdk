import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowGridProfileImage = {
  isUpgrade: boolean;
  value: boolean;
};

export const showGridProfileImageSchema: Schema<ShowGridProfileImage> = s.object<ShowGridProfileImage>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

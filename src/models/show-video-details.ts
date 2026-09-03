import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowVideoDetails = {
  isUpgrade: boolean;
  value: boolean;
};

export const showVideoDetailsSchema: Schema<ShowVideoDetails> = s.object<ShowVideoDetails>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

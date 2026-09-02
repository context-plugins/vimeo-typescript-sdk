import { s, type Schema } from "../core/index.js";

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

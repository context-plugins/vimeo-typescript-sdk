import { s, type Schema } from "../core/index.js";

export type ShowVideoPlayerCards = {
  isUpgrade: boolean;
  value: boolean;
};

export const showVideoPlayerCardsSchema: Schema<ShowVideoPlayerCards> = s.object<ShowVideoPlayerCards>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

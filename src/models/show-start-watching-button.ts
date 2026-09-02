import { s, type Schema } from "../core/index.js";

export type ShowStartWatchingButton = {
  isUpgrade: boolean;
  value: boolean;
};

export const showStartWatchingButtonSchema: Schema<ShowStartWatchingButton> =
  s.object<ShowStartWatchingButton>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });

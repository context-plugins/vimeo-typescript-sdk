import { s, type Schema } from "../core/index.js";

export type ShowVideoDescription = {
  isUpgrade: boolean;
  value: boolean;
};

export const showVideoDescriptionSchema: Schema<ShowVideoDescription> = s.object<ShowVideoDescription>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

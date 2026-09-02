import { s, type Schema } from "../core/index.js";

export type ShowAccountName = {
  isUpgrade: boolean;
  value: boolean;
};

export const showAccountNameSchema: Schema<ShowAccountName> = s.object<ShowAccountName>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

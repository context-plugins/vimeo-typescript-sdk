import { s, type Schema } from "../core/index.js";

export type EnableAskAi = {
  isUpgrade: boolean;
  value: boolean;
};

export const enableAskAiSchema: Schema<EnableAskAi> = s.object<EnableAskAi>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

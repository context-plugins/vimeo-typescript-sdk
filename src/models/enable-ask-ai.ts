import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about enabling the Ask AI functionality during playback. */
export type EnableAskAi = {
  /** Whether an upgrade is required to enable the Ask AI functionality during playback. */
  isUpgrade: boolean;
  /** Whether to enable the Ask AI functionality during playback. */
  value: boolean;
};

export const enableAskAiSchema: Schema<EnableAskAi> = s.object<EnableAskAi>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the title on the showcase page. */
export type ShowVideoTitle = {
  /** Whether an upgrade is required to show the title on the showcase page. */
  isUpgrade: boolean;
  /** Whether to show the title on the showcase page. */
  value: boolean;
};

export const showVideoTitleSchema: Schema<ShowVideoTitle> = s.object<ShowVideoTitle>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

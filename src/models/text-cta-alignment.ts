import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the alignment of the call-to-action text on the showcase page. */
export type TextCtaAlignment = {
  /** Whether an upgrade is required to align the call-to-action text on the showcase page. */
  isUpgrade: boolean;
  /**
   * The alignment of the call-to-action text on the showcase page. Possible values include `center`
   * for center alignment, `left` for left alignment, and `right` for right alignment.
   */
  value: string;
};

export const textCtaAlignmentSchema: Schema<TextCtaAlignment> = s.object<TextCtaAlignment>({
  isUpgrade: s.boolean(),
  value: s.string(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

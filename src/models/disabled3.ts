import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason2Schema, type Reason2 } from "./reason2.js";

/** Whether the publish-to-social feature is disabled. */
export type Disabled3 = {
  /** The link to re-enable the publish-to-social feature. */
  enableLink?: string;
  /** The reasons why publish-to-social presets are disabled for the video. */
  reasons?: Reason2[];
};

export const disabled3Schema: Schema<Disabled3> = s.object<Disabled3>({
  enableLink: s.optional(s.string()),
  reasons: s.optional(s.array(s.lazy(() => reason2Schema))),
  _keysMap: {
    enableLink: "enable_link",
  },
});

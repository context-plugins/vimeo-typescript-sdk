import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason1Schema, type Reason1 } from "./reason1.js";

export type Disabled2 = {
  /**
   * The link to re-enable the available showcase presets feature. This data requires a bearer token
   * with the `private` scope.
   */
  enableLink?: string;
  /**
   * The reasons why available showcase presets are disabled for the video. This data requires a
   * bearer token with the `private` scope.
   */
  reasons?: Reason1[];
};

export const disabled2Schema: Schema<Disabled2> = s.object<Disabled2>({
  enableLink: s.optional(s.string()),
  reasons: s.optional(s.array(s.lazy(() => reason1Schema))),
  _keysMap: {
    enableLink: "enable_link",
  },
});

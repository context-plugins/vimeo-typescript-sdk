import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type Disabled1 = {
  /**
   * The link to re-enable the showcase presets feature. This data requires a bearer token with the
   * `private` scope.
   */
  enableLink?: string;
  /**
   * The reasons why showcase presets are disabled for the video. This data requires a bearer token
   * with the `private` scope.
   */
  reasons?: Reason[];
};

export const disabled1Schema: Schema<Disabled1> = s.object<Disabled1>({
  enableLink: s.optional(s.string()),
  reasons: s.optional(s.array(s.lazy(() => reasonSchema))),
  _keysMap: {
    enableLink: "enable_link",
  },
});

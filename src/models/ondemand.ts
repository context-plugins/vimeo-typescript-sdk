import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the video's On Demand data. */
export type Ondemand = {
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The On Demand connection resource key. */
  resourceKey?: string;
  /** The API URI that resolves to the connection data. */
  uri?: string;
};

export const ondemandSchema: Schema<Ondemand> = s.object<Ondemand>({
  options: s.optional(s.array(s.string())),
  resourceKey: s.optional(s.string()),
  uri: s.optional(s.string()),
  _keysMap: {
    resourceKey: "resource_key",
  },
});

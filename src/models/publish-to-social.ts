import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disabled3Schema, type Disabled3 } from "./disabled3.js";

/** Information about the user's publish-to-social history for the video. */
export type PublishToSocial = {
  /** Whether the publish-to-social feature is disabled. */
  disabled?: Disabled3;
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** Information about the publish blockers of the video. */
  publishBlockers?: Record<string, unknown>;
  /** Information about the publish constraints of the video. */
  publishConstraints?: Record<string, unknown>;
  /** The API URI that resolves to the connection data. */
  uri?: string;
};

export const publishToSocialSchema: Schema<PublishToSocial> = s.object<PublishToSocial>({
  disabled: s.optional(s.lazy(() => disabled3Schema)),
  options: s.optional(s.array(s.string())),
  publishBlockers: s.optional(s.record(s.string(), s.unknown())),
  publishConstraints: s.optional(s.record(s.string(), s.unknown())),
  uri: s.optional(s.string()),
  _keysMap: {
    publishBlockers: "publish_blockers",
    publishConstraints: "publish_constraints",
  },
});

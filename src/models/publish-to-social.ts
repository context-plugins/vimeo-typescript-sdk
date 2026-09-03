import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disabled3Schema, type Disabled3 } from "./disabled3.js";

export type PublishToSocial = {
  disabled?: Disabled3;
  options?: string[];
  publishBlockers?: Record<string, unknown>;
  publishConstraints?: Record<string, unknown>;
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

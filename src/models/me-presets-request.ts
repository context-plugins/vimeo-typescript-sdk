import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embed16Schema, type Embed16 } from "./embed16.js";

export type MePresetsRequest = {
  applyToAll?: boolean;
  embed?: Embed16;
  name?: string;
};

export const mePresetsRequestSchema: Schema<MePresetsRequest> = s.object<MePresetsRequest>({
  applyToAll: s.optional(s.boolean()),
  embed: s.optional(s.lazy(() => embed16Schema)),
  name: s.optional(s.string()),
  _keysMap: {
    applyToAll: "apply_to_all",
  },
});

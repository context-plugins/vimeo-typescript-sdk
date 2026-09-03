import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embed17Schema, type Embed17 } from "./embed17.js";
import { outro1Schema, type Outro1 } from "./outro1.js";

export type MePresetsRequest1 = {
  embed?: Embed17;
  name?: string;
  outro?: Outro1;
};

export const mePresetsRequest1Schema: Schema<MePresetsRequest1> = s.object<MePresetsRequest1>({
  embed: s.optional(s.lazy(() => embed17Schema)),
  name: s.optional(s.string()),
  outro: s.optional(s.lazy(() => outro1Schema)),
});

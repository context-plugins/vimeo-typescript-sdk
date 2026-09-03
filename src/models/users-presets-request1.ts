import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embed17Schema, type Embed17 } from "./embed17.js";
import { outro1Schema, type Outro1 } from "./outro1.js";

export type UsersPresetsRequest1 = {
  embed?: Embed17;
  name?: string;
  outro?: Outro1;
};

export const usersPresetsRequest1Schema: Schema<UsersPresetsRequest1> = s.object<UsersPresetsRequest1>({
  embed: s.optional(s.lazy(() => embed17Schema)),
  name: s.optional(s.string()),
  outro: s.optional(s.lazy(() => outro1Schema)),
});

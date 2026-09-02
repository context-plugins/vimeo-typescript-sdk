import { s, type Schema } from "../core/index.js";
import { activateSchema, type Activate } from "./activate.js";
import { delete3Schema, type Delete3 } from "./delete3.js";
import { edit3Schema, type Edit3 } from "./edit3.js";

export type Interactions10 = {
  activate: Activate | null;
  delete: Delete3 | null;
  edit: Edit3 | null;
};

export const interactions10Schema: Schema<Interactions10> = s.object<Interactions10>({
  activate: s.nullable(s.lazy(() => activateSchema)),
  delete: s.nullable(s.lazy(() => delete3Schema)),
  edit: s.nullable(s.lazy(() => edit3Schema)),
});

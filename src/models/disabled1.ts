import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type Disabled1 = {
  enableLink?: string;
  reasons?: Reason[];
};

export const disabled1Schema: Schema<Disabled1> = s.object<Disabled1>({
  enableLink: s.optional(s.string()),
  reasons: s.optional(s.array(s.lazy(() => reasonSchema))),
  _keysMap: {
    enableLink: "enable_link",
  },
});

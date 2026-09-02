import { s, type Schema } from "../core/index.js";
import { reason2Schema, type Reason2 } from "./reason2.js";

export type Disabled3 = {
  enableLink?: string;
  reasons?: Reason2[];
};

export const disabled3Schema: Schema<Disabled3> = s.object<Disabled3>({
  enableLink: s.optional(s.string()),
  reasons: s.optional(s.array(s.lazy(() => reason2Schema))),
  _keysMap: {
    enableLink: "enable_link",
  },
});

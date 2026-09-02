import { s, type Schema } from "../core/index.js";
import { reason1Schema, type Reason1 } from "./reason1.js";

export type Disabled2 = {
  enableLink?: string;
  reasons?: Reason1[];
};

export const disabled2Schema: Schema<Disabled2> = s.object<Disabled2>({
  enableLink: s.optional(s.string()),
  reasons: s.optional(s.array(s.lazy(() => reason1Schema))),
  _keysMap: {
    enableLink: "enable_link",
  },
});

import { s, type Schema } from "../core/index.js";
import { icon2Schema, type Icon2 } from "./icon2.js";

export type Reason2 = {
  icon?: Icon2;
  message?: string;
};

export const reason2Schema: Schema<Reason2> = s.object<Reason2>({
  icon: s.optional(s.lazy(() => icon2Schema)),
  message: s.optional(s.string()),
});

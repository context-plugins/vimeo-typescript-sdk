import { s, type Schema } from "../core/index.js";
import { custom10Schema, type Custom10 } from "./custom10.js";

export type Logos10 = {
  custom?: Custom10;
  vimeo?: boolean;
};

export const logos10Schema: Schema<Logos10> = s.object<Logos10>({
  custom: s.optional(s.lazy(() => custom10Schema)),
  vimeo: s.optional(s.boolean()),
});

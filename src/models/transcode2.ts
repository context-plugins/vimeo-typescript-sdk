import { s, type Schema } from "../core/index.js";
import { status23Schema, type Status23 } from "./status23.js";

export type Transcode2 = {
  status?: Status23;
};

export const transcode2Schema: Schema<Transcode2> = s.object<Transcode2>({
  status: s.optional(s.lazy(() => status23Schema)),
});

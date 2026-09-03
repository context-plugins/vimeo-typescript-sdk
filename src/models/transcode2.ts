import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status20Schema, type Status20 } from "./status20.js";

export type Transcode2 = {
  status?: Status20;
};

export const transcode2Schema: Schema<Transcode2> = s.object<Transcode2>({
  status: s.optional(s.lazy(() => status20Schema)),
});

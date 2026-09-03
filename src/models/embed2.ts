import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Embed2 = {
  html: string | null;
};

export const embed2Schema: Schema<Embed2> = s.object<Embed2>({
  html: s.nullable(s.string()),
});

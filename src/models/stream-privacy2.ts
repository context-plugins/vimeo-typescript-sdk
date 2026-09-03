import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { view9Schema, type View9 } from "./view9.js";

export type StreamPrivacy2 = {
  view?: View9;
};

export const streamPrivacy2Schema: Schema<StreamPrivacy2> = s.object<StreamPrivacy2>({
  view: s.optional(s.lazy(() => view9Schema)),
});

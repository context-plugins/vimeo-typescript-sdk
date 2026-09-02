import { s, type Schema } from "../core/index.js";
import { view9Schema, type View9 } from "./view9.js";

export type StreamPrivacy2 = {
  view?: View9;
};

export const streamPrivacy2Schema: Schema<StreamPrivacy2> = s.object<StreamPrivacy2>({
  view: s.optional(s.lazy(() => view9Schema)),
});

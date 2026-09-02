import { s, type Schema } from "../core/index.js";
import { viewSchema, type View } from "./view.js";

export type Privacy = {
  view: View;
};

export const privacySchema: Schema<Privacy> = s.object<Privacy>({
  view: viewSchema,
});

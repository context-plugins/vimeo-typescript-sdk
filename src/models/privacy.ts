import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewSchema, type View } from "./view.js";

export type Privacy = {
  view: View;
};

export const privacySchema: Schema<Privacy> = s.object<Privacy>({
  view: viewSchema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LeadCaptureForm = {
  options?: string[];
};

export const leadCaptureFormSchema: Schema<LeadCaptureForm> = s.object<LeadCaptureForm>({
  options: s.optional(s.array(s.string())),
});

import { s, type Schema } from "../core/index.js";

export type LeadCaptureForm = {
  options?: string[];
};

export const leadCaptureFormSchema: Schema<LeadCaptureForm> = s.object<LeadCaptureForm>({
  options: s.optional(s.array(s.string())),
});

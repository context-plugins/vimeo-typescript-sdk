import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the authenticated user's lead capture form. This data requires a bearer token
 * with the `private` scope.
 */
export type LeadCaptureForm = {
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options?: string[];
};

export const leadCaptureFormSchema: Schema<LeadCaptureForm> = s.object<LeadCaptureForm>({
  options: s.optional(s.array(s.string())),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object containing data on the value of **status** and whether it's required for the
 * interaction.
 */
export type Status3 = {
  /** Whether the status of the role upgrade request must be sent to achieve the desired action. */
  required: boolean;
  /** The status of the role upgrade request to which the team member should have access. */
  value: string;
};

export const status3Schema: Schema<Status3> = s.object<Status3>({
  required: s.boolean(),
  value: s.string(),
});

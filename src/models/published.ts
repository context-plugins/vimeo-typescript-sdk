import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Published = {
  /** Whether the On Demand page has been published. */
  enabled: boolean;
  /** The time in ISO 8601 format when this page was published. */
  time: string;
};

export const publishedSchema: Schema<Published> = s.object<Published>({
  enabled: s.boolean(),
  time: s.string(),
});

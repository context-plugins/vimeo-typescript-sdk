import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { followSchema, type Follow } from "./follow.js";

/** The permissible actions related to the category. */
export type Interactions = {
  /** An action indicating if the authenticated user has followed the category. */
  follow: Follow;
};

export const interactionsSchema: Schema<Interactions> = s.object<Interactions>({
  follow: followSchema,
});

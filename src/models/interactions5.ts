import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { joinSchema, type Join } from "./join.js";

/**
 * User actions that have involved the group. This data requires a bearer token with the `private`
 * scope.
 */
export type Interactions5 = {
  /**
   * An action indicating that someone has joined the group. This data requires a bearer token with
   * the `private` scope.
   */
  join: Join;
};

export const interactions5Schema: Schema<Interactions5> = s.object<Interactions5>({
  join: joinSchema,
});

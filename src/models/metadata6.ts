import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections6Schema, type Connections6 } from "./connections6.js";
import { interactions5Schema, type Interactions5 } from "./interactions5.js";

/** Metadata about the group. */
export type Metadata6 = {
  /** A collection of information that is connected to this resource. */
  connections: Connections6;
  /**
   * User actions that have involved the group. This data requires a bearer token with the `private`
   * scope.
   */
  interactions: Interactions5;
};

export const metadata6Schema: Schema<Metadata6> = s.object<Metadata6>({
  connections: connections6Schema,
  interactions: interactions5Schema,
});

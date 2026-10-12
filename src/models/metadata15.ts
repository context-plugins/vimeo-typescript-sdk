import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections15Schema, type Connections15 } from "./connections15.js";
import { interactions10Schema, type Interactions10 } from "./interactions10.js";

/** Metadata about the event. */
export type Metadata15 = {
  /** A collection of information that is connected to this resource. */
  connections: Connections15;
  /** A list of resource URIs related to the event. */
  interactions: Interactions10;
};

export const metadata15Schema: Schema<Metadata15> = s.object<Metadata15>({
  connections: connections15Schema,
  interactions: interactions10Schema,
});

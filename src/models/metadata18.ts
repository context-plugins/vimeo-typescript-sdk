import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections17Schema, type Connections17 } from "./connections17.js";

/** Metadata about the fragments. */
export type Metadata18 = {
  /** A collection of information that is connected to this resource. */
  connections: Connections17;
};

export const metadata18Schema: Schema<Metadata18> = s.object<Metadata18>({
  connections: connections17Schema,
});

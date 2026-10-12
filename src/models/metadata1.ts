import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections1Schema, type Connections1 } from "./connections1.js";
import { interactions1Schema, type Interactions1 } from "./interactions1.js";

/** Metadata about the channel. */
export type Metadata1 = {
  /** A collection of information that is connected to this resource. */
  connections: Connections1;
  /** A list of resource URIs related to the channel. */
  interactions: Interactions1 | null;
};

export const metadata1Schema: Schema<Metadata1> = s.object<Metadata1>({
  connections: connections1Schema,
  interactions: s.nullable(s.lazy(() => interactions1Schema)),
});

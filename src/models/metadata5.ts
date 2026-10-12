import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections5Schema, type Connections5 } from "./connections5.js";
import { interactions4Schema, type Interactions4 } from "./interactions4.js";

/** Information about the folders's metadata. */
export type Metadata5 = {
  /** A list of resource URIs related to the folder. */
  connections: Connections5;
  /** A list of permitted interactions related to the folder. */
  interactions: Interactions4;
};

export const metadata5Schema: Schema<Metadata5> = s.object<Metadata5>({
  connections: connections5Schema,
  interactions: interactions4Schema,
});

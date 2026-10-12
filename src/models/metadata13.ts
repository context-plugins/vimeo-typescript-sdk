import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections13Schema, type Connections13 } from "./connections13.js";
import { interactions8Schema, type Interactions8 } from "./interactions8.js";

export type Metadata13 = {
  connections: Connections13;
  /** An object containing the actions that the user can perform on the comment. */
  interactions: Interactions8;
};

export const metadata13Schema: Schema<Metadata13> = s.object<Metadata13>({
  connections: connections13Schema,
  interactions: interactions8Schema,
});

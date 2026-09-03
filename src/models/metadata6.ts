import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections6Schema, type Connections6 } from "./connections6.js";
import { interactions5Schema, type Interactions5 } from "./interactions5.js";

export type Metadata6 = {
  connections: Connections6;
  interactions: Interactions5;
};

export const metadata6Schema: Schema<Metadata6> = s.object<Metadata6>({
  connections: connections6Schema,
  interactions: interactions5Schema,
});

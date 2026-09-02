import { s, type Schema } from "../core/index.js";
import { connections20Schema, type Connections20 } from "./connections20.js";
import { interactions14Schema, type Interactions14 } from "./interactions14.js";

export type Metadata21 = {
  connections: Connections20;
  interactions: Interactions14;
};

export const metadata21Schema: Schema<Metadata21> = s.object<Metadata21>({
  connections: connections20Schema,
  interactions: interactions14Schema,
});

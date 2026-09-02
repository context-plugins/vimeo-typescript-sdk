import { s, type Schema } from "../core/index.js";
import { connections13Schema, type Connections13 } from "./connections13.js";
import { interactions8Schema, type Interactions8 } from "./interactions8.js";

export type Metadata13 = {
  connections: Connections13;
  interactions: Interactions8;
};

export const metadata13Schema: Schema<Metadata13> = s.object<Metadata13>({
  connections: connections13Schema,
  interactions: interactions8Schema,
});

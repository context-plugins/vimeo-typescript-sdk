import { s, type Schema } from "../core/index.js";
import { connections15Schema, type Connections15 } from "./connections15.js";
import { interactions10Schema, type Interactions10 } from "./interactions10.js";

export type Metadata15 = {
  connections: Connections15;
  interactions: Interactions10;
};

export const metadata15Schema: Schema<Metadata15> = s.object<Metadata15>({
  connections: connections15Schema,
  interactions: interactions10Schema,
});

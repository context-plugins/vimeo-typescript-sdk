import { s, type Schema } from "../core/index.js";
import { connections19Schema, type Connections19 } from "./connections19.js";

export type Metadata20 = {
  connections: Connections19;
};

export const metadata20Schema: Schema<Metadata20> = s.object<Metadata20>({
  connections: connections19Schema,
});

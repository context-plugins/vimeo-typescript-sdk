import { s, type Schema } from "../core/index.js";
import { connections11Schema, type Connections11 } from "./connections11.js";
import { interactions7Schema, type Interactions7 } from "./interactions7.js";

export type Metadata11 = {
  connections: Connections11;
  interactions: Interactions7 | null;
};

export const metadata11Schema: Schema<Metadata11> = s.object<Metadata11>({
  connections: connections11Schema,
  interactions: s.nullable(s.lazy(() => interactions7Schema)),
});

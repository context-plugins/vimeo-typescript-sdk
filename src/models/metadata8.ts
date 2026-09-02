import { s, type Schema } from "../core/index.js";
import { connections8Schema, type Connections8 } from "./connections8.js";

export type Metadata8 = {
  connections: Connections8;
};

export const metadata8Schema: Schema<Metadata8> = s.object<Metadata8>({
  connections: connections8Schema,
});

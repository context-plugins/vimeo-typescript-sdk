import { s, type Schema } from "../core/index.js";
import { connections12Schema, type Connections12 } from "./connections12.js";

export type Metadata12 = {
  connections: Connections12;
};

export const metadata12Schema: Schema<Metadata12> = s.object<Metadata12>({
  connections: connections12Schema,
});

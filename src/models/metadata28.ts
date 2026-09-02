import { s, type Schema } from "../core/index.js";
import { connections26Schema, type Connections26 } from "./connections26.js";

export type Metadata28 = {
  connections: Connections26;
};

export const metadata28Schema: Schema<Metadata28> = s.object<Metadata28>({
  connections: connections26Schema,
});

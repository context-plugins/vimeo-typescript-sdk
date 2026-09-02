import { s, type Schema } from "../core/index.js";
import { connections7Schema, type Connections7 } from "./connections7.js";

export type Metadata7 = {
  connections: Connections7;
};

export const metadata7Schema: Schema<Metadata7> = s.object<Metadata7>({
  connections: connections7Schema,
});

import { s, type Schema } from "../core/index.js";
import { connections27Schema, type Connections27 } from "./connections27.js";

export type Metadata29 = {
  connections: Connections27;
};

export const metadata29Schema: Schema<Metadata29> = s.object<Metadata29>({
  connections: connections27Schema,
});

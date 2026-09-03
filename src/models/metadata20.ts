import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections19Schema, type Connections19 } from "./connections19.js";

export type Metadata20 = {
  connections: Connections19;
};

export const metadata20Schema: Schema<Metadata20> = s.object<Metadata20>({
  connections: connections19Schema,
});

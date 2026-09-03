import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections10Schema, type Connections10 } from "./connections10.js";

export type Metadata10 = {
  connections: Connections10;
};

export const metadata10Schema: Schema<Metadata10> = s.object<Metadata10>({
  connections: connections10Schema,
});

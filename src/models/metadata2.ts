import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections2Schema, type Connections2 } from "./connections2.js";

export type Metadata2 = {
  connections: Connections2;
};

export const metadata2Schema: Schema<Metadata2> = s.object<Metadata2>({
  connections: connections2Schema,
});

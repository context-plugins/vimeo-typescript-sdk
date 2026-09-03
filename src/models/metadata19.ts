import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections18Schema, type Connections18 } from "./connections18.js";

export type Metadata19 = {
  connections: Connections18;
};

export const metadata19Schema: Schema<Metadata19> = s.object<Metadata19>({
  connections: connections18Schema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections14Schema, type Connections14 } from "./connections14.js";

export type Metadata14 = {
  connections: Connections14;
};

export const metadata14Schema: Schema<Metadata14> = s.object<Metadata14>({
  connections: connections14Schema,
});

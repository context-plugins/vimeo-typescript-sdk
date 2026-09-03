import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections26Schema, type Connections26 } from "./connections26.js";

export type Metadata28 = {
  connections: Connections26;
};

export const metadata28Schema: Schema<Metadata28> = s.object<Metadata28>({
  connections: connections26Schema,
});

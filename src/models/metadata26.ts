import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections24Schema, type Connections24 } from "./connections24.js";

export type Metadata26 = {
  connections: Connections24;
};

export const metadata26Schema: Schema<Metadata26> = s.object<Metadata26>({
  connections: connections24Schema,
});

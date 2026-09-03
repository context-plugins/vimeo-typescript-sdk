import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections12Schema, type Connections12 } from "./connections12.js";

export type Metadata12 = {
  connections: Connections12;
};

export const metadata12Schema: Schema<Metadata12> = s.object<Metadata12>({
  connections: connections12Schema,
});

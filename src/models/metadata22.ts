import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections21Schema, type Connections21 } from "./connections21.js";

export type Metadata22 = {
  connections: Connections21;
};

export const metadata22Schema: Schema<Metadata22> = s.object<Metadata22>({
  connections: connections21Schema,
});

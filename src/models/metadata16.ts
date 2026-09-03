import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { interactions11Schema, type Interactions11 } from "./interactions11.js";

export type Metadata16 = {
  connectionStatus: Record<string, unknown>;
  interactions: Interactions11;
};

export const metadata16Schema: Schema<Metadata16> = s.object<Metadata16>({
  connectionStatus: s.record(s.string(), s.unknown()),
  interactions: interactions11Schema,
  _keysMap: {
    connectionStatus: "connection_status",
  },
});

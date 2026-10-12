import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { interactions11Schema, type Interactions11 } from "./interactions11.js";

/** Metadata about the event destination. */
export type Metadata16 = {
  /** Information about the connection status of the destination's user. */
  connectionStatus: Record<string, unknown>;
  /** A list of resource URIs related to the event destination. */
  interactions: Interactions11;
};

export const metadata16Schema: Schema<Metadata16> = s.object<Metadata16>({
  connectionStatus: s.record(s.string(), s.unknown()),
  interactions: interactions11Schema,
  _keysMap: {
    connectionStatus: "connection_status",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata10Schema, type Metadata10 } from "./metadata10.js";

/**
 * A collection of information that is connected to this resource, including videos, genres, and
 * pictures connections.
 */
export type Connections9 = {
  metadata: Metadata10;
};

export const connections9Schema: Schema<Connections9> = s.object<Connections9>({
  metadata: metadata10Schema,
});

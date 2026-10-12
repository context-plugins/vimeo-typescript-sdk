import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections18Schema, type Connections18 } from "./connections18.js";

/** The video's metadata. */
export type Metadata19 = {
  /** A list of resource URIs related to the promotion. */
  connections: Connections18;
};

export const metadata19Schema: Schema<Metadata19> = s.object<Metadata19>({
  connections: connections18Schema,
});

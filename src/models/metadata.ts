import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectionsSchema, type Connections } from "./connections.js";
import { interactionsSchema, type Interactions } from "./interactions.js";

/** Metadata about the category. */
export type Metadata = {
  /** A collection of information that is connected to this resource. */
  connections: Connections;
  /** The permissible actions related to the category. */
  interactions: Interactions;
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>({
  connections: connectionsSchema,
  interactions: interactionsSchema,
});

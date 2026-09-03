import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectionsSchema, type Connections } from "./connections.js";
import { interactionsSchema, type Interactions } from "./interactions.js";

export type Metadata = {
  connections: Connections;
  interactions: Interactions;
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>({
  connections: connectionsSchema,
  interactions: interactionsSchema,
});

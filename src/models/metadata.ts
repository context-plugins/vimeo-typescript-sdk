import { s, type Schema } from "../core/index.js";
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

import { s, type Schema } from "../core/index.js";
import { connections9Schema, type Connections9 } from "./connections9.js";
import { purchaseInteractionSchema, type PurchaseInteraction } from "./purchase-interaction.js";

export type Metadata9 = {
  connections: Connections9;
  interactions: PurchaseInteraction;
};

export const metadata9Schema: Schema<Metadata9> = s.object<Metadata9>({
  connections: connections9Schema,
  interactions: purchaseInteractionSchema,
});

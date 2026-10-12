import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections9Schema, type Connections9 } from "./connections9.js";
import { purchaseInteractionSchema, type PurchaseInteraction } from "./purchase-interaction.js";

/** Metadata about the On Demand page. */
export type Metadata9 = {
  /**
   * A collection of information that is connected to this resource, including videos, genres, and
   * pictures connections.
   */
  connections: Connections9;
  /** The user's available purchase interactions. */
  interactions: PurchaseInteraction;
};

export const metadata9Schema: Schema<Metadata9> = s.object<Metadata9>({
  connections: connections9Schema,
  interactions: purchaseInteractionSchema,
});

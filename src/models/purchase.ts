import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status20Schema, type Status20 } from "./status20.js";
import { uriSchema, type Uri } from "./uri.js";

export type Purchase = {
  status: Status20;
  uri: Uri;
};

export const purchaseSchema: Schema<Purchase> = s.object<Purchase>({
  status: status20Schema,
  uri: uriSchema,
});

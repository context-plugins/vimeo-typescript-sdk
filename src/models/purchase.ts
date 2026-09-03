import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status17Schema, type Status17 } from "./status17.js";
import { uriSchema, type Uri } from "./uri.js";

export type Purchase = {
  status: Status17;
  uri: Uri;
};

export const purchaseSchema: Schema<Purchase> = s.object<Purchase>({
  status: status17Schema,
  uri: uriSchema,
});

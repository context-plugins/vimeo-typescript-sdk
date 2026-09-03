import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { card1Schema, type Card1 } from "./card1.js";
import { type24Schema, type Type24 } from "./type24.js";

export type PaymentMethod = {
  accountId: string;
  card?: Card1;
  createdAt: string;
  disabledAt: string;
  id: string;
  isDefault: boolean;
  type: Type24;
  updatedAt: string;
};

export const paymentMethodSchema: Schema<PaymentMethod> = s.object<PaymentMethod>({
  accountId: s.string(),
  card: s.optional(s.lazy(() => card1Schema)),
  createdAt: s.string(),
  disabledAt: s.string(),
  id: s.string(),
  isDefault: s.boolean(),
  type: type24Schema,
  updatedAt: s.string(),
  _keysMap: {
    accountId: "account_id",
    createdAt: "created_at",
    disabledAt: "disabled_at",
    isDefault: "is_default",
    updatedAt: "updated_at",
  },
});

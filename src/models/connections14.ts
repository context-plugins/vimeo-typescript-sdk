import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { guestUserSchema, type GuestUser } from "./guest-user.js";
import { user2Schema, type User2 } from "./user2.js";

export type Connections14 = {
  guestUser: GuestUser;
  user: User2;
};

export const connections14Schema: Schema<Connections14> = s.object<Connections14>({
  guestUser: guestUserSchema,
  user: user2Schema,
  _keysMap: {
    guestUser: "guest_user",
  },
});

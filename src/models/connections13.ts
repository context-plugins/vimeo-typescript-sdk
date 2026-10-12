import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { guestUserSchema, type GuestUser } from "./guest-user.js";
import { repliesSchema, type Replies } from "./replies.js";
import { user1Schema, type User1 } from "./user1.js";

export type Connections13 = {
  /** Information about the guest user who posted the comment. */
  guestUser: GuestUser;
  /** Information about the replies to the comment. */
  replies: Replies;
  /** Information about the user who posted the comment. */
  user: User1;
};

export const connections13Schema: Schema<Connections13> = s.object<Connections13>({
  guestUser: guestUserSchema,
  replies: repliesSchema,
  user: user1Schema,
  _keysMap: {
    guestUser: "guest_user",
  },
});

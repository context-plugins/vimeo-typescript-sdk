import { s, type Schema } from "../core/index.js";
import { guestUserSchema, type GuestUser } from "./guest-user.js";
import { repliesSchema, type Replies } from "./replies.js";
import { user1Schema, type User1 } from "./user1.js";

export type Connections13 = {
  guestUser: GuestUser;
  replies: Replies;
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

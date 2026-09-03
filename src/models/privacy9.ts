import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Privacy9 = {
  Connections: "CONNECTIONS",
  Public: "PUBLIC",
  AllFriends: "all_friends",
  Everyone: "everyone",
  Private: "private",
  Public2: "public",
  Self: "self",
  Unlisted: "unlisted",
} as const;
export type Privacy9 = (typeof Privacy9)[keyof typeof Privacy9] | (string & {});

export const privacy9Schema: EnumSchema<Privacy9> = s.enumOf<Privacy9>(Privacy9);

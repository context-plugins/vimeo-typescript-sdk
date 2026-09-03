import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Privacy6 = {
  Connections: "CONNECTIONS",
  Public: "PUBLIC",
  AllFriends: "all_friends",
  Everyone: "everyone",
  Private: "private",
  Public2: "public",
  Self: "self",
  Unlisted: "unlisted",
} as const;
export type Privacy6 = (typeof Privacy6)[keyof typeof Privacy6] | (string & {});

export const privacy6Schema: EnumSchema<Privacy6> = s.enumOf<Privacy6>(Privacy6);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Invite2 = {
  All: "all",
  Members: "members",
} as const;
export type Invite2 = (typeof Invite2)[keyof typeof Invite2] | (string & {});

export const invite2Schema: EnumSchema<Invite2> = s.enumOf<Invite2>(Invite2);

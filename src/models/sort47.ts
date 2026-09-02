import { s, type EnumSchema } from "../core/index.js";

export const Sort47 = {
  CreatedTime: "created_time",
  Duration: "duration",
  Name: "name",
} as const;
export type Sort47 = (typeof Sort47)[keyof typeof Sort47] | (string & {});

export const sort47Schema: EnumSchema<Sort47> = s.enumOf<Sort47>(Sort47);

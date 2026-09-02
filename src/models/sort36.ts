import { s, type EnumSchema } from "../core/index.js";

export const Sort36 = {
  Date: "date",
  Default: "default",
  ModifiedTime: "modified_time",
  Name: "name",
  PinnedOn: "pinned_on",
} as const;
export type Sort36 = (typeof Sort36)[keyof typeof Sort36] | (string & {});

export const sort36Schema: EnumSchema<Sort36> = s.enumOf<Sort36>(Sort36);

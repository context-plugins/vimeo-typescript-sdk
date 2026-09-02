import { s, type EnumSchema } from "../core/index.js";

export const View7 = {
  Anybody: "anybody",
  EmbedOnly: "embed_only",
  Nobody: "nobody",
  Password: "password",
  Team: "team",
  Unlisted: "unlisted",
} as const;
export type View7 = (typeof View7)[keyof typeof View7] | (string & {});

export const view7Schema: EnumSchema<View7> = s.enumOf<View7>(View7);

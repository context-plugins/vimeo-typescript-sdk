import { s, type EnumSchema } from "../core/index.js";

export const View6 = {
  Anybody: "anybody",
  EmbedOnly: "embed_only",
  Nobody: "nobody",
  Password: "password",
  Team: "team",
  Unlisted: "unlisted",
} as const;
export type View6 = (typeof View6)[keyof typeof View6] | (string & {});

export const view6Schema: EnumSchema<View6> = s.enumOf<View6>(View6);

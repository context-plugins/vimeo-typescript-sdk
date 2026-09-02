import { s, type EnumSchema } from "../core/index.js";

export const View9 = {
  Anybody: "anybody",
  EmbedOnly: "embed_only",
  Nobody: "nobody",
  Password: "password",
  Team: "team",
  Unlisted: "unlisted",
} as const;
export type View9 = (typeof View9)[keyof typeof View9] | (string & {});

export const view9Schema: EnumSchema<View9> = s.enumOf<View9>(View9);

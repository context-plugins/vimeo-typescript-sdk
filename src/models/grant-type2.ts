import { s, type EnumSchema } from "../core/index.js";

export const GrantType2 = {
  VimeoOauth1: "vimeo_oauth1",
} as const;
export type GrantType2 = (typeof GrantType2)[keyof typeof GrantType2] | (string & {});

export const grantType2Schema: EnumSchema<GrantType2> = s.enumOf<GrantType2>(GrantType2);

import { s, type EnumSchema } from "../core/index.js";

export const TokenType = {
  Bearer: "bearer",
} as const;
export type TokenType = (typeof TokenType)[keyof typeof TokenType] | (string & {});

export const tokenTypeSchema: EnumSchema<TokenType> = s.enumOf<TokenType>(TokenType);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { link1Schema, type Link1 } from "./link1.js";
import { type22Schema, type Type22 } from "./type22.js";

export type Outro = {
  clips?: string | null;
  link?: Link1 | null;
  text?: string | null;
  type: Type22;
  videos?: string | null;
};

export const outroSchema: Schema<Outro> = s.object<Outro>({
  clips: s.optionalNullable(s.string()),
  link: s.optionalNullable(s.lazy(() => link1Schema)),
  text: s.optionalNullable(s.string()),
  type: type22Schema,
  videos: s.optionalNullable(s.string()),
});

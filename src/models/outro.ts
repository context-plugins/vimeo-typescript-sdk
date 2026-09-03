import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { link1Schema, type Link1 } from "./link1.js";
import { type26Schema, type Type26 } from "./type26.js";

export type Outro = {
  clips?: string | null;
  link?: Link1 | null;
  text?: string | null;
  type: Type26;
  videos?: string | null;
};

export const outroSchema: Schema<Outro> = s.object<Outro>({
  clips: s.optionalNullable(s.string()),
  link: s.optionalNullable(s.lazy(() => link1Schema)),
  text: s.optionalNullable(s.string()),
  type: type26Schema,
  videos: s.optionalNullable(s.string()),
});

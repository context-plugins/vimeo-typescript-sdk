import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type16Schema, type Type16 } from "./type16.js";

export type Graphic = {
  id: string;
  type: Type16;
};

export const graphicSchema: Schema<Graphic> = s.object<Graphic>({
  id: s.string(),
  type: type16Schema,
});

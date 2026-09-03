import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type12Schema, type Type12 } from "./type12.js";

export type Graphic = {
  id: string;
  type: Type12;
};

export const graphicSchema: Schema<Graphic> = s.object<Graphic>({
  id: s.string(),
  type: type12Schema,
});

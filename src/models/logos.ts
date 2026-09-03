import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customSchema, type Custom } from "./custom.js";

export type Logos = {
  custom: Custom;
  vimeo: boolean;
};

export const logosSchema: Schema<Logos> = s.object<Logos>({
  custom: customSchema,
  vimeo: s.boolean(),
});

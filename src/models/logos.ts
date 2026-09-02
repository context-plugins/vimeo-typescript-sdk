import { s, type Schema } from "../core/index.js";
import { customSchema, type Custom } from "./custom.js";

export type Logos = {
  custom: Custom;
  vimeo: boolean;
};

export const logosSchema: Schema<Logos> = s.object<Logos>({
  custom: customSchema,
  vimeo: s.boolean(),
});

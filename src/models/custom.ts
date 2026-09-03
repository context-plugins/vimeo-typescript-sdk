import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Custom = {
  active: boolean;
  link: string | null;
  sticky: boolean;
  url: string | null;
  useLink: boolean;
};

export const customSchema: Schema<Custom> = s.object<Custom>({
  active: s.boolean(),
  link: s.nullable(s.string()),
  sticky: s.boolean(),
  url: s.nullable(s.string()),
  useLink: s.boolean(),
  _keysMap: {
    useLink: "use_link",
  },
});

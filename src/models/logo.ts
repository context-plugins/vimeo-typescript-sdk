import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { position1Schema, type Position1 } from "./position1.js";

export type Logo = {
  customLogoUrl?: string | null;
  enabled?: boolean;
  position?: Position1 | null;
};

export const logoSchema: Schema<Logo> = s.object<Logo>({
  customLogoUrl: s.optionalNullable(s.string()),
  enabled: s.optional(s.boolean()),
  position: s.optionalNullable(s.lazy(() => position1Schema)),
  _keysMap: {
    customLogoUrl: "custom_logo_url",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type14Schema, type Type14 } from "./type14.js";

export type LandingPageLogo = {
  type: Type14;
  uri: string | null;
  url: string | null;
};

export const landingPageLogoSchema: Schema<LandingPageLogo> = s.object<LandingPageLogo>({
  type: type14Schema,
  uri: s.nullable(s.string()),
  url: s.nullable(s.string()),
});

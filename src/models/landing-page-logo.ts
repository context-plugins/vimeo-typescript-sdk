import { s, type Schema } from "../core/index.js";
import { type18Schema, type Type18 } from "./type18.js";

export type LandingPageLogo = {
  type: Type18;
  uri: string | null;
  url: string | null;
};

export const landingPageLogoSchema: Schema<LandingPageLogo> = s.object<LandingPageLogo>({
  type: type18Schema,
  uri: s.nullable(s.string()),
  url: s.nullable(s.string()),
});

import { s, type Schema } from "../core/index.js";
import { type32Schema, type Type32 } from "./type32.js";

export type LandingPageLogo2 = {
  type?: Type32;
  uri?: string;
};

export const landingPageLogo2Schema: Schema<LandingPageLogo2> = s.object<LandingPageLogo2>({
  type: s.optional(s.lazy(() => type32Schema)),
  uri: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type28Schema, type Type28 } from "./type28.js";

export type LandingPageLogo2 = {
  type?: Type28;
  uri?: string;
};

export const landingPageLogo2Schema: Schema<LandingPageLogo2> = s.object<LandingPageLogo2>({
  type: s.optional(s.lazy(() => type28Schema)),
  uri: s.optional(s.string()),
});

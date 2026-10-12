import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The redirect URIs associated with the plan. */
export type Uri = {
  /** The redirect URI for the annual plan in the user's cart. */
  annual: string | null;
  /** The redirect URI for the free trial in the user's cart. */
  freeTrial: string | null;
  /** The redirect URI for the monthly plan in the user's cart. */
  monthly: string | null;
};

export const uriSchema: Schema<Uri> = s.object<Uri>({
  annual: s.nullable(s.string()),
  freeTrial: s.nullable(s.string()),
  monthly: s.nullable(s.string()),
  _keysMap: {
    freeTrial: "free_trial",
  },
});

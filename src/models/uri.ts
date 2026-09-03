import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Uri = {
  annual: string | null;
  freeTrial: string | null;
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

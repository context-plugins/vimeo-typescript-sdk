import { s, type Schema } from "../core/index.js";

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

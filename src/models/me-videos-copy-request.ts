import { s, type Schema } from "../core/index.js";

export type MeVideosCopyRequest = {
  name?: string;
};

export const meVideosCopyRequestSchema: Schema<MeVideosCopyRequest> = s.object<MeVideosCopyRequest>({
  name: s.optional(s.string()),
});

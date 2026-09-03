import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HlsDashVideoFile = {
  link: string | null;
  linkExpirationTime: string;
  log?: string | null;
};

export const hlsDashVideoFileSchema: Schema<HlsDashVideoFile> = s.object<HlsDashVideoFile>({
  link: s.nullable(s.string()),
  linkExpirationTime: s.string(),
  log: s.optionalNullable(s.string()),
  _keysMap: {
    linkExpirationTime: "link_expiration_time",
  },
});

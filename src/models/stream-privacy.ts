import { s, type Schema } from "../core/index.js";
import { embed4Schema, type Embed4 } from "./embed4.js";
import { view7Schema, type View7 } from "./view7.js";

export type StreamPrivacy = {
  embed: Embed4;
  unlistedHash: string | null;
  view: View7;
};

export const streamPrivacySchema: Schema<StreamPrivacy> = s.object<StreamPrivacy>({
  embed: embed4Schema,
  unlistedHash: s.nullable(s.string()),
  view: view7Schema,
  _keysMap: {
    unlistedHash: "unlisted_hash",
  },
});

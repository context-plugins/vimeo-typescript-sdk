import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AncestorPath1 = {
  canUpload: boolean;
  name: string;
  uri: string;
};

export const ancestorPath1Schema: Schema<AncestorPath1> = s.object<AncestorPath1>({
  canUpload: s.boolean(),
  name: s.string(),
  uri: s.string(),
  _keysMap: {
    canUpload: "can_upload",
  },
});

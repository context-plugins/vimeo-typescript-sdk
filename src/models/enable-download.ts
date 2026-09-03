import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EnableDownload = {
  isUpgrade: boolean;
  value: boolean;
};

export const enableDownloadSchema: Schema<EnableDownload> = s.object<EnableDownload>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

import { s, type Schema } from "../core/index.js";

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

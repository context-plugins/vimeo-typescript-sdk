import { s, type Schema } from "../core/index.js";

export type EnableComments = {
  isUpgrade: boolean;
  value: boolean;
};

export const enableCommentsSchema: Schema<EnableComments> = s.object<EnableComments>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});

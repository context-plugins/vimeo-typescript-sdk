import { s, type Schema } from "../core/index.js";

export type Meta = {
  isScheduled: boolean;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  isScheduled: s.boolean(),
  _keysMap: {
    isScheduled: "is_scheduled",
  },
});

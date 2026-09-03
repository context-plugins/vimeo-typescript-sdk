import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta = {
  isScheduled: boolean;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  isScheduled: s.boolean(),
  _keysMap: {
    isScheduled: "is_scheduled",
  },
});

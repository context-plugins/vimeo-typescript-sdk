import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The additional information about the scene. */
export type Meta = {
  /** If the scene is scheduled to play automatically when stream starts. */
  isScheduled: boolean;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  isScheduled: s.boolean(),
  _keysMap: {
    isScheduled: "is_scheduled",
  },
});

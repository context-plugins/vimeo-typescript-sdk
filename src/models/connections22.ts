import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videos14Schema, type Videos14 } from "./videos14.js";

/** A list of resource URIs related to the preset. */
export type Connections22 = {
  /** Information about the videos in the preset. */
  videos: Videos14;
};

export const connections22Schema: Schema<Connections22> = s.object<Connections22>({
  videos: videos14Schema,
});

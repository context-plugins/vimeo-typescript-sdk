import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videos14Schema, type Videos14 } from "./videos14.js";

export type Connections22 = {
  videos: Videos14;
};

export const connections22Schema: Schema<Connections22> = s.object<Connections22>({
  videos: videos14Schema,
});

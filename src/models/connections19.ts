import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videos12Schema, type Videos12 } from "./videos12.js";

export type Connections19 = {
  videos: Videos12;
};

export const connections19Schema: Schema<Connections19> = s.object<Connections19>({
  videos: videos12Schema,
});

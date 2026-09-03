import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videos13Schema, type Videos13 } from "./videos13.js";

export type Connections21 = {
  videos: Videos13;
};

export const connections21Schema: Schema<Connections21> = s.object<Connections21>({
  videos: videos13Schema,
});

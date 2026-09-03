import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videos2Schema, type Videos2 } from "./videos2.js";

export type Connections2 = {
  videos: Videos2;
};

export const connections2Schema: Schema<Connections2> = s.object<Connections2>({
  videos: videos2Schema,
});

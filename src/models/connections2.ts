import { s, type Schema } from "../core/index.js";
import { videos2Schema, type Videos2 } from "./videos2.js";

export type Connections2 = {
  videos: Videos2;
};

export const connections2Schema: Schema<Connections2> = s.object<Connections2>({
  videos: videos2Schema,
});

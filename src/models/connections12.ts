import { s, type Schema } from "../core/index.js";
import { video1Schema, type Video1 } from "./video1.js";

export type Connections12 = {
  video: Video1;
};

export const connections12Schema: Schema<Connections12> = s.object<Connections12>({
  video: video1Schema,
});

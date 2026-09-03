import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { video3Schema, type Video3 } from "./video3.js";

export type Connections27 = {
  video: Video3;
};

export const connections27Schema: Schema<Connections27> = s.object<Connections27>({
  video: video3Schema,
});

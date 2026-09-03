import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videos4Schema, type Videos4 } from "./videos4.js";

export type Preferences = {
  videos: Videos4;
};

export const preferencesSchema: Schema<Preferences> = s.object<Preferences>({
  videos: videos4Schema,
});

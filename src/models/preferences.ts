import { s, type Schema } from "../core/index.js";
import { videos4Schema, type Videos4 } from "./videos4.js";

export type Preferences = {
  videos: Videos4;
};

export const preferencesSchema: Schema<Preferences> = s.object<Preferences>({
  videos: videos4Schema,
});

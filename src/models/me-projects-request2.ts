import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeProjectsRequest2 = {
  /** The name of the folder. */
  name: string;
};

export const meProjectsRequest2Schema: Schema<MeProjectsRequest2> = s.object<MeProjectsRequest2>({
  name: s.string(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createdVersionSchema, type CreatedVersion } from "./created-version.js";
import { rootVersionSchema, type RootVersion } from "./root-version.js";
import { video2Schema, type Video2 } from "./video2.js";

export type Connections26 = {
  /** Information about the video version that is created from the trim operation. */
  createdVersion: CreatedVersion;
  /** Information about the video version that is the source of the trimmed video. */
  rootVersion: RootVersion;
  /** Information about the video associated with the trim. */
  video: Video2;
};

export const connections26Schema: Schema<Connections26> = s.object<Connections26>({
  createdVersion: createdVersionSchema,
  rootVersion: rootVersionSchema,
  video: video2Schema,
  _keysMap: {
    createdVersion: "created_version",
    rootVersion: "root_version",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createdVersionSchema, type CreatedVersion } from "./created-version.js";
import { rootVersionSchema, type RootVersion } from "./root-version.js";
import { video2Schema, type Video2 } from "./video2.js";

export type Connections26 = {
  createdVersion: CreatedVersion;
  rootVersion: RootVersion;
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

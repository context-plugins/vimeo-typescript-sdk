import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codecSchema, type Codec } from "./codec.js";
import { logSchema, type Log } from "./log.js";
import { qualitySchema, type Quality } from "./quality.js";
import { renditionSchema, type Rendition } from "./rendition.js";
import { type3Schema, type Type3 } from "./type3.js";

export type VideoFile = {
  codec: Codec | null;
  createdTime: string;
  expires?: string;
  fps: number;
  height: number;
  link: string;
  log?: Log;
  md5: string;
  publicName: string;
  quality: Quality;
  rendition: Rendition;
  size: number;
  sizeShort: string;
  sourceLink?: string;
  type: Type3 | null;
  width: number;
};

export const videoFileSchema: Schema<VideoFile> = s.object<VideoFile>({
  codec: s.nullable(s.lazy(() => codecSchema)),
  createdTime: s.string(),
  expires: s.optional(s.string()),
  fps: s.number(),
  height: s.number(),
  link: s.string(),
  log: s.optional(s.lazy(() => logSchema)),
  md5: s.string(),
  publicName: s.string(),
  quality: qualitySchema,
  rendition: renditionSchema,
  size: s.number(),
  sizeShort: s.string(),
  sourceLink: s.optional(s.string()),
  type: s.nullable(s.lazy(() => type3Schema)),
  width: s.number(),
  _keysMap: {
    createdTime: "created_time",
    publicName: "public_name",
    sizeShort: "size_short",
    sourceLink: "source_link",
  },
});

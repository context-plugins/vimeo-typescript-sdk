import { s, type Schema } from "../core/index.js";
import { codec1Schema, type Codec1 } from "./codec1.js";
import { rendition1Schema, type Rendition1 } from "./rendition1.js";
import { type6Schema, type Type6 } from "./type6.js";

export type Progressive = {
  codec: Codec1 | null;
  createdTime: string;
  fps: number;
  height: number | null;
  link: string;
  linkExpirationTime: string;
  log?: Record<string, unknown>;
  md5: string;
  rendition: Rendition1;
  size: number | null;
  type: Type6 | null;
  width: number | null;
};

export const progressiveSchema: Schema<Progressive> = s.object<Progressive>({
  codec: s.nullable(s.lazy(() => codec1Schema)),
  createdTime: s.string(),
  fps: s.number(),
  height: s.nullable(s.number()),
  link: s.string(),
  linkExpirationTime: s.string(),
  log: s.optional(s.record(s.string(), s.unknown())),
  md5: s.string(),
  rendition: rendition1Schema,
  size: s.nullable(s.number()),
  type: s.nullable(s.lazy(() => type6Schema)),
  width: s.nullable(s.number()),
  _keysMap: {
    createdTime: "created_time",
    linkExpirationTime: "link_expiration_time",
  },
});

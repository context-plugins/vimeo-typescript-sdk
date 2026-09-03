import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imageSchema, type Image } from "./image.js";
import { linkSchema, type Link } from "./link.js";
import { shareSchema, type Share } from "./share.js";
import { textSchema, type Text } from "./text.js";
import { type21Schema, type Type21 } from "./type21.js";
import { videos15Schema, type Videos15 } from "./videos15.js";

export type EndScreen1 = {
  image?: Image;
  link?: Link;
  share?: Share;
  text?: Text;
  type: Type21;
  videos?: Videos15;
};

export const endScreen1Schema: Schema<EndScreen1> = s.object<EndScreen1>({
  image: s.optional(s.lazy(() => imageSchema)),
  link: s.optional(s.lazy(() => linkSchema)),
  share: s.optional(s.lazy(() => shareSchema)),
  text: s.optional(s.lazy(() => textSchema)),
  type: type21Schema,
  videos: s.optional(s.lazy(() => videos15Schema)),
});

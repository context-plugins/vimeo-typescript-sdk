import { s, type Schema } from "../core/index.js";
import { imageSchema, type Image } from "./image.js";
import { linkSchema, type Link } from "./link.js";
import { shareSchema, type Share } from "./share.js";
import { textSchema, type Text } from "./text.js";
import { type25Schema, type Type25 } from "./type25.js";
import { videos15Schema, type Videos15 } from "./videos15.js";

export type EndScreen1 = {
  image?: Image;
  link?: Link;
  share?: Share;
  text?: Text;
  type: Type25;
  videos?: Videos15;
};

export const endScreen1Schema: Schema<EndScreen1> = s.object<EndScreen1>({
  image: s.optional(s.lazy(() => imageSchema)),
  link: s.optional(s.lazy(() => linkSchema)),
  share: s.optional(s.lazy(() => shareSchema)),
  text: s.optional(s.lazy(() => textSchema)),
  type: type25Schema,
  videos: s.optional(s.lazy(() => videos15Schema)),
});

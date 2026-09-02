import { s, type Schema } from "../core/index.js";
import { commentsSchema, type Comments } from "./comments.js";
import { embedSchema, type Embed } from "./embed.js";
import { view1Schema, type View1 } from "./view1.js";

export type Privacy1 = {
  add?: boolean;
  allowShareLink?: boolean;
  clipEmbedAllowedDomains?: string[];
  comments?: Comments;
  download?: boolean;
  embed?: Embed;
  password?: string;
  view?: View1;
};

export const privacy1Schema: Schema<Privacy1> = s.object<Privacy1>({
  add: s.optional(s.boolean()),
  allowShareLink: s.optional(s.boolean()),
  clipEmbedAllowedDomains: s.optional(s.array(s.string())),
  comments: s.optional(s.lazy(() => commentsSchema)),
  download: s.optional(s.boolean()),
  embed: s.optional(s.lazy(() => embedSchema)),
  password: s.optional(s.string()),
  view: s.optional(s.lazy(() => view1Schema)),
  _keysMap: {
    allowShareLink: "allow_share_link",
    clipEmbedAllowedDomains: "clip_embed_allowed_domains",
  },
});

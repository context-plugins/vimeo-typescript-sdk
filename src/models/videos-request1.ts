import { s, type Schema } from "../core/index.js";
import { embed29Schema, type Embed29 } from "./embed29.js";
import { license4Schema, type License4 } from "./license4.js";
import { privacy20Schema, type Privacy20 } from "./privacy20.js";
import { reviewPageSchema, type ReviewPage } from "./review-page.js";
import { spatial3Schema, type Spatial3 } from "./spatial3.js";

export type VideosRequest1 = {
  contentRating?: string[];
  customUrl?: string;
  description?: string;
  embed?: Embed29;
  embedDomains?: string[];
  embedDomainsAdd?: string[];
  embedDomainsDelete?: string[];
  hideFromVimeo?: boolean;
  license?: License4;
  locale?: string;
  name?: string;
  password?: string;
  privacy?: Privacy20;
  reviewPage?: ReviewPage;
  spatial?: Spatial3;
};

export const videosRequest1Schema: Schema<VideosRequest1> = s.object<VideosRequest1>({
  contentRating: s.optional(s.array(s.string())),
  customUrl: s.optional(s.string()),
  description: s.optional(s.string()),
  embed: s.optional(s.lazy(() => embed29Schema)),
  embedDomains: s.optional(s.array(s.string())),
  embedDomainsAdd: s.optional(s.array(s.string())),
  embedDomainsDelete: s.optional(s.array(s.string())),
  hideFromVimeo: s.optional(s.boolean()),
  license: s.optional(s.lazy(() => license4Schema)),
  locale: s.optional(s.string()),
  name: s.optional(s.string()),
  password: s.optional(s.string()),
  privacy: s.optional(s.lazy(() => privacy20Schema)),
  reviewPage: s.optional(s.lazy(() => reviewPageSchema)),
  spatial: s.optional(s.lazy(() => spatial3Schema)),
  _keysMap: {
    contentRating: "content_rating",
    customUrl: "custom_url",
    embedDomains: "embed_domains",
    embedDomainsAdd: "embed_domains_add",
    embedDomainsDelete: "embed_domains_delete",
    hideFromVimeo: "hide_from_vimeo",
    reviewPage: "review_page",
  },
});

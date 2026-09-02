import { s, type Schema } from "../core/index.js";
import { embed18Schema, type Embed18 } from "./embed18.js";
import { license2Schema, type License2 } from "./license2.js";
import { privacy14Schema, type Privacy14 } from "./privacy14.js";
import { reviewPageSchema, type ReviewPage } from "./review-page.js";
import { spatial1Schema, type Spatial1 } from "./spatial1.js";
import { upload2Schema, type Upload2 } from "./upload2.js";

export type MeVideosRequest1 = {
  contentRating?: string[];
  description?: string;
  embed?: Embed18;
  embedDomains?: string[];
  folderUri?: string;
  hideFromVimeo?: boolean;
  license?: License2;
  locale?: string;
  name?: string;
  password?: string;
  privacy?: Privacy14;
  reviewPage?: ReviewPage;
  spatial?: Spatial1;
  upload: Upload2;
};

export const meVideosRequest1Schema: Schema<MeVideosRequest1> = s.object<MeVideosRequest1>({
  contentRating: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  embed: s.optional(s.lazy(() => embed18Schema)),
  embedDomains: s.optional(s.array(s.string())),
  folderUri: s.optional(s.string()),
  hideFromVimeo: s.optional(s.boolean()),
  license: s.optional(s.lazy(() => license2Schema)),
  locale: s.optional(s.string()),
  name: s.optional(s.string()),
  password: s.optional(s.string()),
  privacy: s.optional(s.lazy(() => privacy14Schema)),
  reviewPage: s.optional(s.lazy(() => reviewPageSchema)),
  spatial: s.optional(s.lazy(() => spatial1Schema)),
  upload: upload2Schema,
  _keysMap: {
    contentRating: "content_rating",
    embedDomains: "embed_domains",
    folderUri: "folder_uri",
    hideFromVimeo: "hide_from_vimeo",
    reviewPage: "review_page",
  },
});

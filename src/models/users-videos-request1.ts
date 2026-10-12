import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embed18Schema, type Embed18 } from "./embed18.js";
import { license2Schema, type License2 } from "./license2.js";
import { privacy14Schema, type Privacy14 } from "./privacy14.js";
import { reviewPageSchema, type ReviewPage } from "./review-page.js";
import { spatial1Schema, type Spatial1 } from "./spatial1.js";
import { upload2Schema, type Upload2 } from "./upload2.js";

export type UsersVideosRequest1 = {
  /**
   * A list of values describing the content in this video. For a full list of values, use the
   * [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings)
   * endpoint.
   */
  contentRating?: string[];
  /** The description of the video. */
  description?: string;
  embed?: Embed18;
  /**
   * The complete list of domains the video can be embedded on. This field requires that
   * **privacy_embed** have the value `whitelist`.
   */
  embedDomains?: string[];
  /** The URI of the folder to which the video is uploaded. */
  folderUri?: string;
  /**
   * Whether to hide the video from everyone except the video's owner. When the value is `true`,
   * unlisted video links work only for the video's owner.
   */
  hideFromVimeo?: boolean;
  /**
   * The Creative Commons license under which the video is offered.
   *
   * Option descriptions:
   *  * `by` - The video is offered under CC BY, or the attibution-only license.
   *  * `by-nc` - The video is offered under CC BY-NC, or the Attribution-NonCommercial license.
   *  * `by-nc-nd` - The video is offered under CC BY-NC-ND, or the
   *    Attribution-NonCommercian-NoDerivs license.
   *  * `by-nc-sa` - The video is offered under CC BY-NC-SA, or the
   *    Attribution-NonCommercial-ShareAlike licence.
   *  * `by-nd` - The video is offered under CC BY-ND, or the Attribution-NoDerivs license.
   *  * `by-sa` - The video is offered under CC BY-SA, or the Attribution-ShareAlike license.
   *  * `cc0` - The video is offered under CC0, or the public domain license.
   */
  license?: License2;
  /**
   * The video's default language. For a full list of supported languages, use the
   * [`/languages?filter=texttracks`](https://developer.vimeo.com/api/reference/videos#get_languages)
   * endpoint.
   */
  locale?: string;
  /** The title of the video. */
  name?: string;
  /** The password. This field is required when **privacy.view** is `password`. */
  password?: string;
  privacy?: Privacy14;
  reviewPage?: ReviewPage;
  spatial?: Spatial1;
  upload: Upload2;
};

export const usersVideosRequest1Schema: Schema<UsersVideosRequest1> = s.object<UsersVideosRequest1>({
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

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embed29Schema, type Embed29 } from "./embed29.js";
import { license4Schema, type License4 } from "./license4.js";
import { privacy20Schema, type Privacy20 } from "./privacy20.js";
import { reviewPageSchema, type ReviewPage } from "./review-page.js";
import { spatial3Schema, type Spatial3 } from "./spatial3.js";

export type VideosRequest1 = {
  /**
   * A list of values describing the content in this video. For a full list of values, use the
   * [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings)
   * endpoint.
   */
  contentRating?: string[];
  /**
   * The custom link of the video. This link doesn't include the base URL and the username or user
   * ID of the video's owner.
   */
  customUrl?: string;
  /** The description of the video. This field can hold a maximum of 5000 characters. */
  description?: string;
  embed?: Embed29;
  /**
   * The complete list of domains the video can be embedded on. This field overwrites existing
   * domains and requires that **privacy_embed** have the value `whitelist`.
   */
  embedDomains?: string[];
  /**
   * A list of domains intended to be added to an existing set of domains. This field requires that
   * **privacy_embed** have the value `whitelist`.
   */
  embedDomainsAdd?: string[];
  /**
   * A list of domains intended to be removed from an existing set of domains. This field requires
   * that **privacy_embed** have the value `whitelist`.
   */
  embedDomainsDelete?: string[];
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
   *  * `cc0` - The video is offered under CC0, or public domain, videos.
   */
  license?: License4;
  /**
   * The video's default language. For a full list of supported languages, use the
   * [`/languages?filter=texttracks`](https://developer.vimeo.com/api/reference/videos#get_languages)
   * endpoint.
   */
  locale?: string;
  /** The title of the video. This field can hold a maximum of 128 characters. */
  name?: string;
  /**
   * The password. When you set **privacy.view** to `password`, you must provide the password as an
   * additional parameter. This field can hold a maximum of 32 characters.
   */
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

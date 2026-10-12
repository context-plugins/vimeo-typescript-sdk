import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { acceptedCurrenciesSchema, type AcceptedCurrencies } from "./accepted-currencies.js";
import { buy3Schema, type Buy3 } from "./buy3.js";
import { contentRating1Schema, type ContentRating1 } from "./content-rating1.js";
import { episodes1Schema, type Episodes1 } from "./episodes1.js";
import { rent4Schema, type Rent4 } from "./rent4.js";
import { subscription2Schema, type Subscription2 } from "./subscription2.js";
import { type37Schema, type Type37 } from "./type37.js";

export type UsersOndemandPagesRequest = {
  /**
   * An array of accepted currencies.
   *
   * Option descriptions:
   *  * `AUD` - The currency is in Australian dollars.
   *  * `CAD` - The currency is in Canadian dollars.
   *  * `CHF` - The currency is in Swiss francs.
   *  * `DKK` - The currency is in Danish krone.
   *  * `EUR` - The currency is in euros.
   *  * `GBP` - The currency is in British pounds.
   *  * `JPY` - The currency is in Japanese yen.
   *  * `KRW` - The currency is in South Korean won.
   *  * `NOK` - The currency is in Norwegian krone.
   *  * `PLN` - The currency is in Polish zloty.
   *  * `SEK` - The currency is in Swedish krona.
   *  * `USD` - The currency is in United States dollars.
   */
  acceptedCurrencies?: AcceptedCurrencies;
  buy?: Buy3;
  /**
   * The content rating of the video, given either as a comma-separated list or as a JSON array,
   * depending on the request format.
   *
   * Option descriptions:
   *  * `drugs` - The video contains drug or alcohol use.
   *  * `language` - The video contains profanity or sexually suggestive content.
   *  * `nudity` - The video contains nudity.
   *  * `safe` - The video is suitable for all audiences.
   *  * `unrated` - The video hasn't been rated.
   *  * `violence` - The video contains violent or graphic content.
   */
  contentRating: ContentRating1;
  /** The description of the On Demand page. */
  description: string;
  /** The custom domain of the On Demand page. */
  domainLink?: string;
  episodes?: Episodes1;
  /** The custom string to use in the Vimeo URL of the On Demand page. */
  link?: string;
  /** The name of the On Demand page. */
  name: string;
  rent?: Rent4;
  subscription?: Subscription2;
  /**
   * The type of the On Demand page.
   *
   * Option descriptions:
   *  * `film` - The On Demand page is a film.
   *  * `series` - The On Demand page is a series.
   */
  type: Type37;
};

export const usersOndemandPagesRequestSchema: Schema<UsersOndemandPagesRequest> =
  s.object<UsersOndemandPagesRequest>({
    acceptedCurrencies: s.optional(s.lazy(() => acceptedCurrenciesSchema)),
    buy: s.optional(s.lazy(() => buy3Schema)),
    contentRating: contentRating1Schema,
    description: s.string(),
    domainLink: s.optional(s.string()),
    episodes: s.optional(s.lazy(() => episodes1Schema)),
    link: s.optional(s.string()),
    name: s.string(),
    rent: s.optional(s.lazy(() => rent4Schema)),
    subscription: s.optional(s.lazy(() => subscription2Schema)),
    type: type37Schema,
    _keysMap: {
      acceptedCurrencies: "accepted_currencies",
      contentRating: "content_rating",
      domainLink: "domain_link",
    },
  });

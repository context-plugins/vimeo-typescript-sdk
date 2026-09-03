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
  acceptedCurrencies?: AcceptedCurrencies;
  buy?: Buy3;
  contentRating: ContentRating1;
  description: string;
  domainLink?: string;
  episodes?: Episodes1;
  link?: string;
  name: string;
  rent?: Rent4;
  subscription?: Subscription2;
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

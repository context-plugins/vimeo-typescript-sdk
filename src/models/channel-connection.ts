import { s, type Schema } from "../core/index.js";
import { channelSchema, type Channel } from "./channel.js";
import { pagingSchema, type Paging } from "./paging.js";

export type ChannelConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Channel[];
};

export const channelConnectionSchema: Schema<ChannelConnection> = s.object<ChannelConnection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => channelSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});

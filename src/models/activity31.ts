import { s, type Schema } from "../core/index.js";
import { categorySchema, type Category } from "./category.js";
import { channelSchema, type Channel } from "./channel.js";
import { groupSchema, type Group } from "./group.js";
import { metadata7Schema, type Metadata7 } from "./metadata7.js";
import { onDemandPageSchema, type OnDemandPage } from "./on-demand-page.js";
import { tagSchema, type Tag } from "./tag.js";
import { type10Schema, type Type10 } from "./type10.js";
import { userSchema, type User } from "./user.js";
import { videoSchema, type Video } from "./video.js";

export type Activity31 = {
  category?: Category;
  channel?: Channel;
  clip: Video;
  group?: Group;
  metadata: Metadata7;
  ondemandPage?: OnDemandPage;
  tag?: Tag;
  time: string;
  type: Type10;
  user?: User;
};

export const activity31Schema: Schema<Activity31> = s.object<Activity31>({
  category: s.optional(s.lazy(() => categorySchema)),
  channel: s.optional(s.lazy(() => channelSchema)),
  clip: videoSchema,
  group: s.optional(s.lazy(() => groupSchema)),
  metadata: metadata7Schema,
  ondemandPage: s.optional(s.lazy(() => onDemandPageSchema)),
  tag: s.optional(s.lazy(() => tagSchema)),
  time: s.string(),
  type: type10Schema,
  user: s.optional(s.lazy(() => userSchema)),
  _keysMap: {
    ondemandPage: "ondemand_page",
  },
});

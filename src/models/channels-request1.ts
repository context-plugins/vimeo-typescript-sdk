import { s, type Schema } from "../core/index.js";
import { privacy8Schema, type Privacy8 } from "./privacy8.js";

export type ChannelsRequest1 = {
  description?: string;
  link?: string;
  name?: string;
  privacy?: Privacy8;
};

export const channelsRequest1Schema: Schema<ChannelsRequest1> = s.object<ChannelsRequest1>({
  description: s.optional(s.string()),
  link: s.optional(s.string()),
  name: s.optional(s.string()),
  privacy: s.optional(s.lazy(() => privacy8Schema)),
});

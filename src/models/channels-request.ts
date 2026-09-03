import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { privacy7Schema, type Privacy7 } from "./privacy7.js";

export type ChannelsRequest = {
  description?: string;
  link?: string;
  name: string;
  privacy: Privacy7;
};

export const channelsRequestSchema: Schema<ChannelsRequest> = s.object<ChannelsRequest>({
  description: s.optional(s.string()),
  link: s.optional(s.string()),
  name: s.string(),
  privacy: privacy7Schema,
});

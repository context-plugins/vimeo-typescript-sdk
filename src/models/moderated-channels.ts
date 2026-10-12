import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the channels that the authenticated user moderates. */
export type ModeratedChannels = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of channels on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const moderatedChannelsSchema: Schema<ModeratedChannels> = s.object<ModeratedChannels>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});

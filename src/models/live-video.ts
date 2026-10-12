import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status11Schema, type Status11 } from "./status11.js";

/** Information about the event's live video, where applicable. */
export type LiveVideo = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /**
   * The status of the live video's RTMP link.
   *
   * Option descriptions:
   *  * `streaming` - The stream is open and receiving content.
   */
  status: Status11;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const liveVideoSchema: Schema<LiveVideo> = s.object<LiveVideo>({
  options: s.array(s.string()),
  status: status11Schema,
  uri: s.string(),
});

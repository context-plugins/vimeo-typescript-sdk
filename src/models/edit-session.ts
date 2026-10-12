import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status22Schema, type Status22 } from "./status22.js";

/**
 * Information about the video's Vimeo Create editing session. This data requires a bearer token
 * with the `private` scope.
 */
export type EditSession = {
  /**
   * The status of the video's edit session. This data requires a bearer token with the `private`
   * scope.
   *
   * Option descriptions:
   *  * `done` - The video is finished processing.
   *  * `failed` - Video processing has failed.
   *  * `processing` - The video is still being processed.
   */
  status: Status22;
};

export const editSessionSchema: Schema<EditSession> = s.object<EditSession>({
  status: status22Schema,
});

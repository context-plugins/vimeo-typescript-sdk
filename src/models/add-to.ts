import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * When a channel appears in the context of adding or removing a video from it
 * (`/videos/{video_id}/available_channels`), include information about adding or removing the
 * video. This data requires a bearer token with the `private` scope.
 */
export type AddTo = {
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options: string[];
  /**
   * The API URI that resolves to the connection data. This data requires a bearer token with the
   * `private` scope.
   */
  uri: string;
};

export const addToSchema: Schema<AddTo> = s.object<AddTo>({
  options: s.array(s.string()),
  uri: s.string(),
});

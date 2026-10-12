import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { live1Schema, type Live1 } from "./live1.js";

/** The associated video object. This data requires a bearer token with the `private` scope. */
export type Video1 = {
  /**
   * The number of comments on the associated video. This data requires a bearer token with the
   * `private` scope.
   */
  comments: number;
  /**
   * The time in ISO 8601 format when the video was created. This data requires a bearer token with
   * the `private` scope.
   */
  createdTime: string;
  /**
   * The duration of the associated video. This data requires a bearer token with the `private`
   * scope.
   */
  duration: number;
  /**
   * The number of likes on the associated video. This data requires a bearer token with the
   * `private` scope.
   */
  likes: number;
  /**
   * The associated live stream object. This data requires a bearer token with the `private` scope.
   */
  live: Live1;
  /**
   * The link to the video management page. This data requires a bearer token with the `private`
   * scope.
   */
  manageLink: string;
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options: string[];
  /**
   * The title of the associated video. This data requires a bearer token with the `private` scope.
   */
  title: string;
  /**
   * The API URI that resolves to the connection data. This data requires a bearer token with the
   * `private` scope.
   */
  uri: string;
};

export const video1Schema: Schema<Video1> = s.object<Video1>({
  comments: s.float64(),
  createdTime: s.string(),
  duration: s.float64(),
  likes: s.float64(),
  live: live1Schema,
  manageLink: s.string(),
  options: s.array(s.string()),
  title: s.string(),
  uri: s.string(),
  _keysMap: {
    createdTime: "created_time",
    manageLink: "manage_link",
  },
});

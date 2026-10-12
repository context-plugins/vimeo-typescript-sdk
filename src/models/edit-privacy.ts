import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { properties1Schema, type Properties1 } from "./properties1.js";

/** Information about editing the privacy of the video. */
export type EditPrivacy = {
  /** A list of valid content rating flags for the video. */
  contentRating: string[];
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** An array of suggested fields to be used for this interaction. */
  properties: Properties1[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const editPrivacySchema: Schema<EditPrivacy> = s.object<EditPrivacy>({
  contentRating: s.array(s.string()),
  options: s.array(s.string()),
  properties: s.array(s.lazy(() => properties1Schema)),
  uri: s.string(),
  _keysMap: {
    contentRating: "content_rating",
  },
});

import { s, type Schema } from "../core/index.js";
import { properties1Schema, type Properties1 } from "./properties1.js";

export type EditPrivacy = {
  contentRating: string[];
  options: string[];
  properties: Properties1[];
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

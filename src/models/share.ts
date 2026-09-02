import { s, type Schema } from "../core/index.js";
import { pictureSchema, type Picture } from "./picture.js";

export type Share = {
  picture?: Picture | null;
  pictureUri?: string | null;
};

export const shareSchema: Schema<Share> = s.object<Share>({
  picture: s.optionalNullable(s.lazy(() => pictureSchema)),
  pictureUri: s.optionalNullable(s.string()),
  _keysMap: {
    pictureUri: "picture_uri",
  },
});

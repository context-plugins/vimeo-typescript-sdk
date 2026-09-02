import { s, type Schema } from "../core/index.js";
import { sizeSchema, type Size } from "./size.js";
import { typeSchema, type Type } from "./type.js";

export type Picture = {
  active: boolean;
  baseLink: string;
  defaultPicture: boolean;
  link?: string;
  resourceKey: string;
  sizes: Size[];
  type: Type;
  uri: string;
};

export const pictureSchema: Schema<Picture> = s.object<Picture>({
  active: s.boolean(),
  baseLink: s.string(),
  defaultPicture: s.boolean(),
  link: s.optional(s.string()),
  resourceKey: s.string(),
  sizes: s.array(s.lazy(() => sizeSchema)),
  type: typeSchema,
  uri: s.string(),
  _keysMap: {
    baseLink: "base_link",
    defaultPicture: "default_picture",
    resourceKey: "resource_key",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sizeSchema, type Size } from "./size.js";
import { typeSchema, type Type } from "./type.js";

export type Picture = {
  /** Whether the picture is currently active. */
  active: boolean;
  /** The base link to the image file, without any parameters. */
  baseLink: string;
  /** Whether the picture is Vimeo's default. */
  defaultPicture: boolean;
  /**
   * The upload URL of the picture. This field appears upon the initial creation of a picture
   * resource.
   */
  link?: string;
  /** The resource key string of the picture. */
  resourceKey: string;
  /** An array containing reference information about all available image files. */
  sizes: Size[];
  /**
   * The type of picture.
   *
   * Option descriptions:
   *  * `caution` - The picture isn't appropriate for all ages.
   *  * `custom` - The picture is a custom video image.
   *  * `default` - The picture is the default video image.
   */
  type: Type;
  /** The URI of the picture. */
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

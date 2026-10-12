import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buttonSchema, type Button } from "./button.js";
import { pictureSchema, type Picture } from "./picture.js";
import { secondaryLinkSchema, type SecondaryLink } from "./secondary-link.js";

/** The links that appear after the video ends. */
export type Link = {
  /** The attributes of the button control. */
  button?: Button;
  /** The text that appears beneath the link, if any. */
  description?: string;
  /** The title of the call to action. */
  name?: string;
  /** The background image to display in the area for the call to action. */
  picture?: Picture | null;
  /** The URI of the background image that appears in the area for the call to action. */
  pictureUri?: string | null;
  /** The attributes of the secondary link. */
  secondaryLink?: SecondaryLink;
};

export const linkSchema: Schema<Link> = s.object<Link>({
  button: s.optional(s.lazy(() => buttonSchema)),
  description: s.optional(s.string()),
  name: s.optional(s.string()),
  picture: s.optionalNullable(s.lazy(() => pictureSchema)),
  pictureUri: s.optionalNullable(s.string()),
  secondaryLink: s.optional(s.lazy(() => secondaryLinkSchema)),
  _keysMap: {
    pictureUri: "picture_uri",
    secondaryLink: "secondary_link",
  },
});

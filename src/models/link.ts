import { s, type Schema } from "../core/index.js";
import { buttonSchema, type Button } from "./button.js";
import { pictureSchema, type Picture } from "./picture.js";
import { secondaryLinkSchema, type SecondaryLink } from "./secondary-link.js";

export type Link = {
  button?: Button;
  description?: string;
  name?: string;
  picture?: Picture | null;
  pictureUri?: string | null;
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

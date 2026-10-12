import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { metadata1Schema, type Metadata1 } from "./metadata1.js";
import { pictureSchema, type Picture } from "./picture.js";
import { privacySchema, type Privacy } from "./privacy.js";
import { tagSchema, type Tag } from "./tag.js";
import { userSchema, type User } from "./user.js";

export type Channel = {
  /** The categories to which the channel belongs as specified by the channel moderators. */
  categories: Category[];
  /** The time in ISO 8601 format when the channel was created. */
  createdTime: string;
  /** A brief explanation of the channel's content. */
  description: string | null;
  /** The banner that appears by default at the top of the channel page. */
  header: Picture;
  /** The URL to access the channel in a browser. */
  link: string;
  /** Metadata about the channel. */
  metadata: Metadata1;
  /** The time in ISO 8601 format when the channel was last modified. */
  modifiedTime: string;
  /** The display name that identifies the channel. */
  name: string;
  /**
   * The active image for the channel. The default is the thumbnail of the last video added to the
   * channel.
   */
  pictures: Picture;
  /** The privacy settings of the channel. */
  privacy: Privacy;
  /** The channel resource key. */
  resourceKey: string;
  /** An array of all tags assigned to the channel. */
  tags: Tag[];
  /** The unique identifier to access the channel resource. */
  uri: string;
  /** The Vimeo user who owns the channel. */
  user: User;
};

export const channelSchema: Schema<Channel> = s.object<Channel>({
  categories: s.array(s.lazy(() => categorySchema)),
  createdTime: s.string(),
  description: s.nullable(s.string()),
  header: pictureSchema,
  link: s.string(),
  metadata: metadata1Schema,
  modifiedTime: s.string(),
  name: s.string(),
  pictures: pictureSchema,
  privacy: privacySchema,
  resourceKey: s.string(),
  tags: s.array(s.lazy(() => tagSchema)),
  uri: s.string(),
  user: userSchema,
  _keysMap: {
    createdTime: "created_time",
    modifiedTime: "modified_time",
    resourceKey: "resource_key",
  },
});

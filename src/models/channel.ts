import { s, type Schema } from "../core/index.js";
import { categorySchema, type Category } from "./category.js";
import { metadata1Schema, type Metadata1 } from "./metadata1.js";
import { pictureSchema, type Picture } from "./picture.js";
import { privacySchema, type Privacy } from "./privacy.js";
import { tagSchema, type Tag } from "./tag.js";
import { userSchema, type User } from "./user.js";

export type Channel = {
  categories: Category[];
  createdTime: string;
  description: string | null;
  header: Picture;
  link: string;
  metadata: Metadata1;
  modifiedTime: string;
  name: string;
  pictures: Picture;
  privacy: Privacy;
  resourceKey: string;
  tags: Tag[];
  uri: string;
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

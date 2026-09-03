import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata13Schema, type Metadata13 } from "./metadata13.js";
import { metdataSchema, type Metdata } from "./metdata.js";
import { replySchema, type Reply } from "./reply.js";
import { textDecorationSchema, type TextDecoration } from "./text-decoration.js";
import { userSchema, type User } from "./user.js";

export type Comment = {
  createdOn: string;
  deletedOn: string | null;
  lastEditedOn: string | null;
  link: string;
  metadata: Metadata13;
  metdata: Metdata;
  replies: Reply[];
  resourceKey: string;
  richtext: string | null;
  text: string;
  textDecorations: TextDecoration[];
  type: "video";
  uri: string;
  user: User | null;
};

export const commentSchema: Schema<Comment> = s.object<Comment>({
  createdOn: s.string(),
  deletedOn: s.nullable(s.string()),
  lastEditedOn: s.nullable(s.string()),
  link: s.string(),
  metadata: metadata13Schema,
  metdata: metdataSchema,
  replies: s.array(s.lazy(() => replySchema)),
  resourceKey: s.string(),
  richtext: s.nullable(s.string()),
  text: s.string(),
  textDecorations: s.array(s.lazy(() => textDecorationSchema)),
  type: s.literal("video"),
  uri: s.string(),
  user: s.nullable(s.lazy(() => userSchema)),
  _keysMap: {
    createdOn: "created_on",
    deletedOn: "deleted_on",
    lastEditedOn: "last_edited_on",
    resourceKey: "resource_key",
    textDecorations: "text_decorations",
  },
});

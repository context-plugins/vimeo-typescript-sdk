import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata13Schema, type Metadata13 } from "./metadata13.js";
import { metdataSchema, type Metdata } from "./metdata.js";
import { replySchema, type Reply } from "./reply.js";
import { textDecorationSchema, type TextDecoration } from "./text-decoration.js";
import { type15Schema, type Type15 } from "./type15.js";
import { userSchema, type User } from "./user.js";

export type Comment = {
  /** The time in ISO 8601 format when the comment was posted. */
  createdOn: string;
  /** The time in ISO 8601 format when the comment was deleted. */
  deletedOn: string | null;
  /** The time in ISO 8601 format when the comment was last edited. */
  lastEditedOn: string | null;
  /** The permalink to the comment. */
  link: string;
  metadata: Metadata13;
  metdata: Metdata;
  /** The list of replies to the comment. */
  replies: Reply[];
  /** The comment's resource key string. */
  resourceKey: string;
  /** The stringified Rich Text JSON. */
  richtext: string | null;
  /** The content of the comment. */
  text: string;
  /** An array of text decorations for the note. */
  textDecorations: TextDecoration[];
  /**
   * The Vimeo content to which the comment relates.
   *
   * Option descriptions:
   *  * `video` - The comment is about a video.
   */
  type: Type15;
  /** The unique identifier to access the comment resource. */
  uri: string;
  /**
   * The user who posted the comment. _This field is deprecated. Use the
   * **metadata.connections.user** field instead._
   *
   * @deprecated
   */
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
  type: type15Schema,
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

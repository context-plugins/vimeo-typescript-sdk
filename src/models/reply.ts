import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata14Schema, type Metadata14 } from "./metadata14.js";
import { textDecorationSchema, type TextDecoration } from "./text-decoration.js";
import { type13Schema, type Type13 } from "./type13.js";

export type Reply = {
  /** The time in ISO 8601 format when the reply was posted. */
  createdOn: string;
  /** The time in ISO 8601 format when the reply was deleted. */
  deletedOn: string | null;
  /** The time in ISO 8601 format when the reply was last edited. */
  lastEditedOn: string | null;
  /** The permalink to the reply. */
  link: string;
  metadata: Metadata14;
  /** The comment's resource key string. */
  resourceKey: string;
  /** The stringified Rich Text JSON. */
  richtext: string | null;
  /** The content of the reply. */
  text: string;
  /** An array of text decorations for the note. */
  textDecorations: TextDecoration[];
  /**
   * The Vimeo content to which the reply relates.
   *
   * Option descriptions:
   *  * `video` - The comment is about a video.
   */
  type: Type13;
  /** The unique identifier to access the reply resource. */
  uri: string;
};

export const replySchema: Schema<Reply> = s.object<Reply>({
  createdOn: s.string(),
  deletedOn: s.nullable(s.string()),
  lastEditedOn: s.nullable(s.string()),
  link: s.string(),
  metadata: metadata14Schema,
  resourceKey: s.string(),
  richtext: s.nullable(s.string()),
  text: s.string(),
  textDecorations: s.array(s.lazy(() => textDecorationSchema)),
  type: type13Schema,
  uri: s.string(),
  _keysMap: {
    createdOn: "created_on",
    deletedOn: "deleted_on",
    lastEditedOn: "last_edited_on",
    resourceKey: "resource_key",
    textDecorations: "text_decorations",
  },
});

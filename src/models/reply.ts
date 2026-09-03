import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata14Schema, type Metadata14 } from "./metadata14.js";
import { textDecorationSchema, type TextDecoration } from "./text-decoration.js";
import { type13Schema, type Type13 } from "./type13.js";

export type Reply = {
  createdOn: string;
  deletedOn: string | null;
  lastEditedOn: string | null;
  link: string;
  metadata: Metadata14;
  resourceKey: string;
  richtext: string | null;
  text: string;
  textDecorations: TextDecoration[];
  type: Type13;
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

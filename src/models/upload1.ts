import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approachSchema, type Approach } from "./approach.js";
import { error2Schema, type Error2 } from "./error2.js";
import { status8Schema, type Status8 } from "./status8.js";

export type Upload1 = {
  approach?: Approach;
  error?: Error2;
  form?: string;
  gcsUid?: string;
  link?: string;
  redirectUrl?: string;
  size?: number;
  status: Status8;
  uploadLink?: string;
};

export const upload1Schema: Schema<Upload1> = s.object<Upload1>({
  approach: s.optional(s.lazy(() => approachSchema)),
  error: s.optional(s.lazy(() => error2Schema)),
  form: s.optional(s.string()),
  gcsUid: s.optional(s.string()),
  link: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  size: s.optional(s.number()),
  status: status8Schema,
  uploadLink: s.optional(s.string()),
  _keysMap: {
    gcsUid: "gcs_uid",
    redirectUrl: "redirect_url",
    uploadLink: "upload_link",
  },
});

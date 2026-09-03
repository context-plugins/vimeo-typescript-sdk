import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata18Schema, type Metadata18 } from "./metadata18.js";

export type Fragments = {
  createdOn: string;
  metadata: Metadata18;
  modifiedOn: string;
  timecode: number;
  uri: string;
};

export const fragmentsSchema: Schema<Fragments> = s.object<Fragments>({
  createdOn: s.string(),
  metadata: metadata18Schema,
  modifiedOn: s.string(),
  timecode: s.number(),
  uri: s.string(),
  _keysMap: {
    createdOn: "created_on",
    modifiedOn: "modified_on",
  },
});

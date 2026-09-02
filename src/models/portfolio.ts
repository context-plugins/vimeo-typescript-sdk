import { s, type Schema } from "../core/index.js";
import { metadata22Schema, type Metadata22 } from "./metadata22.js";
import { sort1Schema, type Sort1 } from "./sort1.js";

export type Portfolio = {
  createdTime: string;
  description: string | null;
  link: string;
  metadata: Metadata22;
  modifiedTime: string;
  name: string;
  sort: Sort1;
  uri: string;
};

export const portfolioSchema: Schema<Portfolio> = s.object<Portfolio>({
  createdTime: s.string(),
  description: s.nullable(s.string()),
  link: s.string(),
  metadata: metadata22Schema,
  modifiedTime: s.string(),
  name: s.string(),
  sort: sort1Schema,
  uri: s.string(),
  _keysMap: {
    createdTime: "created_time",
    modifiedTime: "modified_time",
  },
});

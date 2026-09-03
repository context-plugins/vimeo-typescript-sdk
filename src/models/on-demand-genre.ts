import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { interactions6Schema, type Interactions6 } from "./interactions6.js";
import { metadata8Schema, type Metadata8 } from "./metadata8.js";

export type OnDemandGenre = {
  canonical: string;
  interactions: Interactions6;
  link: string;
  metadata: Metadata8;
  name: string;
  uri: string;
};

export const onDemandGenreSchema: Schema<OnDemandGenre> = s.object<OnDemandGenre>({
  canonical: s.string(),
  interactions: interactions6Schema,
  link: s.string(),
  metadata: metadata8Schema,
  name: s.string(),
  uri: s.string(),
});

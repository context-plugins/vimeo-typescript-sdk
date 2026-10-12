import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { interactions6Schema, type Interactions6 } from "./interactions6.js";
import { metadata8Schema, type Metadata8 } from "./metadata8.js";

export type OnDemandGenre = {
  /** The canonical name or URL slug of the genre. */
  canonical: string;
  interactions: Interactions6;
  /** The Vimeo URL for the genre. */
  link: string;
  metadata: Metadata8;
  /** The descriptive name of the genre. */
  name: string;
  /** The relative URI of the On Demand genre. */
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

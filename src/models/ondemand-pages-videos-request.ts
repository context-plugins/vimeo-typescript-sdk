import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buy5Schema, type Buy5 } from "./buy5.js";
import { rent5Schema, type Rent5 } from "./rent5.js";
import { type42Schema, type Type42 } from "./type42.js";

export type OndemandPagesVideosRequest = {
  buy?: Buy5;
  /** The position of the video in the On Demand collection. */
  position?: number;
  /** The release year of the video. */
  releaseYear?: number;
  rent?: Rent5;
  /**
   * The type of the video.
   *
   * Option descriptions:
   *  * `extra` - The video type is extra footage.
   *  * `main` - The video type is the main video.
   *  * `trailer` - The video type is a trailer.
   */
  type: Type42;
};

export const ondemandPagesVideosRequestSchema: Schema<OndemandPagesVideosRequest> =
  s.object<OndemandPagesVideosRequest>({
    buy: s.optional(s.lazy(() => buy5Schema)),
    position: s.optional(s.float64()),
    releaseYear: s.optional(s.float64()),
    rent: s.optional(s.lazy(() => rent5Schema)),
    type: type42Schema,
    _keysMap: {
      releaseYear: "release_year",
    },
  });

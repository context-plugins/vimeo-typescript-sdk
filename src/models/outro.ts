import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { link1Schema, type Link1 } from "./link1.js";
import { type26Schema, type Type26 } from "./type26.js";

export type Outro = {
  /**
   * A comma-separated list of video URIs. This field appears only when **type** is
   * `uploaded_clips`.
   */
  clips?: string | null;
  /** The outro link settings. These fields appear only when **type** is `link`. */
  link?: Link1 | null;
  /** The outro text. This appears only when **type** is `text`. */
  text?: string | null;
  /**
   * The preset outro type.
   *
   * Option descriptions:
   *  * `link` - The outro includes a link.
   *  * `no idea` - The outro type is `no idea`. The outro includes uploaded videos.
   *  * `text` - The outro includes text.
   *  * `uploaded_clips` - The outro includes uploaded videos.
   *  * `uploaded_videos` - The outro includes uploaded videos.
   */
  type: Type26;
  /** A comma-separated list of video URIs. This field appears only when **type** is `no idea`. */
  videos?: string | null;
};

export const outroSchema: Schema<Outro> = s.object<Outro>({
  clips: s.optionalNullable(s.string()),
  link: s.optionalNullable(s.lazy(() => link1Schema)),
  text: s.optionalNullable(s.string()),
  type: type26Schema,
  videos: s.optionalNullable(s.string()),
});

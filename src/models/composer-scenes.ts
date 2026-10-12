import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { graphicSchema, type Graphic } from "./graphic.js";
import { metaSchema, type Meta } from "./meta.js";

export type ComposerScenes = {
  /**
   * The collection of graphic items, such as lower thirds, polls, and images, associated with this
   * scene.
   */
  graphics: Graphic[];
  /** The unique identifier of the scene. */
  id: string;
  /** The additional information about the scene. */
  meta: Meta;
  /** The name of the scene. */
  name: string;
};

export const composerScenesSchema: Schema<ComposerScenes> = s.object<ComposerScenes>({
  graphics: s.array(s.lazy(() => graphicSchema)),
  id: s.string(),
  meta: metaSchema,
  name: s.string(),
});

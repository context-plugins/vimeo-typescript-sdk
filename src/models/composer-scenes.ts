import { s, type Schema } from "../core/index.js";
import { graphicSchema, type Graphic } from "./graphic.js";
import { metaSchema, type Meta } from "./meta.js";

export type ComposerScenes = {
  graphics: Graphic[];
  id: string;
  meta: Meta;
  name: string;
};

export const composerScenesSchema: Schema<ComposerScenes> = s.object<ComposerScenes>({
  graphics: s.array(s.lazy(() => graphicSchema)),
  id: s.string(),
  meta: metaSchema,
  name: s.string(),
});

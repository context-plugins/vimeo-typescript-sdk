import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { logos4Schema, type Logos4 } from "./logos4.js";

export type Embed7 = {
  autoplay?: boolean;
  color?: string;
  logos?: Logos4;
  loop?: boolean;
  playlist?: boolean;
  schedule?: boolean;
  showLatestArchivedClip?: boolean;
  useColor?: boolean;
};

export const embed7Schema: Schema<Embed7> = s.object<Embed7>({
  autoplay: s.optional(s.boolean()),
  color: s.optional(s.string()),
  logos: s.optional(s.lazy(() => logos4Schema)),
  loop: s.optional(s.boolean()),
  playlist: s.optional(s.boolean()),
  schedule: s.optional(s.boolean()),
  showLatestArchivedClip: s.optional(s.boolean()),
  useColor: s.optional(s.boolean()),
  _keysMap: {
    showLatestArchivedClip: "show_latest_archived_clip",
    useColor: "use_color",
  },
});

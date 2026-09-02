import { s, type Schema } from "../core/index.js";
import { logos4Schema, type Logos4 } from "./logos4.js";

export type Embed9 = {
  autoplay?: boolean;
  color?: string;
  logos?: Logos4;
  loop?: boolean;
  playlist?: boolean;
  schedule?: boolean;
  useColor?: boolean;
};

export const embed9Schema: Schema<Embed9> = s.object<Embed9>({
  autoplay: s.optional(s.boolean()),
  color: s.optional(s.string()),
  logos: s.optional(s.lazy(() => logos4Schema)),
  loop: s.optional(s.boolean()),
  playlist: s.optional(s.boolean()),
  schedule: s.optional(s.boolean()),
  useColor: s.optional(s.boolean()),
  _keysMap: {
    useColor: "use_color",
  },
});

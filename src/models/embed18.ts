import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buttons2Schema, type Buttons2 } from "./buttons2.js";
import { endScreen4Schema, type EndScreen4 } from "./end-screen4.js";
import { logos10Schema, type Logos10 } from "./logos10.js";
import { title2Schema, type Title2 } from "./title2.js";

export type Embed18 = {
  buttons?: Buttons2;
  color?: string;
  endScreen?: EndScreen4;
  logos?: Logos10;
  playbar?: boolean;
  title?: Title2;
  volume?: boolean;
};

export const embed18Schema: Schema<Embed18> = s.object<Embed18>({
  buttons: s.optional(s.lazy(() => buttons2Schema)),
  color: s.optional(s.string()),
  endScreen: s.optional(s.lazy(() => endScreen4Schema)),
  logos: s.optional(s.lazy(() => logos10Schema)),
  playbar: s.optional(s.boolean()),
  title: s.optional(s.lazy(() => title2Schema)),
  volume: s.optional(s.boolean()),
  _keysMap: {
    endScreen: "end_screen",
  },
});

import { s, type Schema } from "../core/index.js";
import { buy2Schema, type Buy2 } from "./buy2.js";
import { interactions13Schema, type Interactions13 } from "./interactions13.js";
import { metadata21Schema, type Metadata21 } from "./metadata21.js";
import { pictureSchema, type Picture } from "./picture.js";
import { rent2Schema, type Rent2 } from "./rent2.js";
import { type23Schema, type Type23 } from "./type23.js";
import { userSchema, type User } from "./user.js";

export type OnDemandVideo = {
  buy: Buy2 | null;
  description?: string;
  duration?: string;
  episode?: number;
  interactions: Interactions13;
  link: string;
  metadata: Metadata21;
  name?: string;
  options?: string[];
  pictures?: Picture;
  playProgress: number;
  position?: number;
  releaseDate?: string;
  releaseYear: number | null;
  rent: Rent2 | null;
  type: Type23;
  uri: string;
  user?: User;
};

export const onDemandVideoSchema: Schema<OnDemandVideo> = s.object<OnDemandVideo>({
  buy: s.nullable(s.lazy(() => buy2Schema)),
  description: s.optional(s.string()),
  duration: s.optional(s.string()),
  episode: s.optional(s.number()),
  interactions: interactions13Schema,
  link: s.string(),
  metadata: metadata21Schema,
  name: s.optional(s.string()),
  options: s.optional(s.array(s.string())),
  pictures: s.optional(s.lazy(() => pictureSchema)),
  playProgress: s.number(),
  position: s.optional(s.number()),
  releaseDate: s.optional(s.string()),
  releaseYear: s.nullable(s.number()),
  rent: s.nullable(s.lazy(() => rent2Schema)),
  type: type23Schema,
  uri: s.string(),
  user: s.optional(s.lazy(() => userSchema)),
  _keysMap: {
    playProgress: "play_progress",
    releaseDate: "release_date",
    releaseYear: "release_year",
  },
});

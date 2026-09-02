import { s, type Schema } from "../core/index.js";
import { comments3Schema, type Comments3 } from "./comments3.js";
import { genresSchema, type Genres } from "./genres.js";
import { likes2Schema, type Likes2 } from "./likes2.js";
import { pictures2Schema, type Pictures2 } from "./pictures2.js";
import { seasonsSchema, type Seasons } from "./seasons.js";
import { videos8Schema, type Videos8 } from "./videos8.js";

export type Connections10 = {
  comments: Comments3;
  genres: Genres;
  likes: Likes2;
  pictures: Pictures2;
  seasons: Seasons;
  videos: Videos8;
};

export const connections10Schema: Schema<Connections10> = s.object<Connections10>({
  comments: comments3Schema,
  genres: genresSchema,
  likes: likes2Schema,
  pictures: pictures2Schema,
  seasons: seasonsSchema,
  videos: videos8Schema,
});

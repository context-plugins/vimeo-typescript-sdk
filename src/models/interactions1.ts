import { s, type Schema } from "../core/index.js";
import { addModeratorsSchema, type AddModerators } from "./add-moderators.js";
import { addToSchema, type AddTo } from "./add-to.js";
import { follow1Schema, type Follow1 } from "./follow1.js";
import { moderateVideosSchema, type ModerateVideos } from "./moderate-videos.js";

export type Interactions1 = {
  addModerators: AddModerators;
  addTo: AddTo | null;
  follow: Follow1;
  moderateVideos: ModerateVideos;
};

export const interactions1Schema: Schema<Interactions1> = s.object<Interactions1>({
  addModerators: addModeratorsSchema,
  addTo: s.nullable(s.lazy(() => addToSchema)),
  follow: follow1Schema,
  moderateVideos: moderateVideosSchema,
  _keysMap: {
    addModerators: "add_moderators",
    addTo: "add_to",
    moderateVideos: "moderate_videos",
  },
});

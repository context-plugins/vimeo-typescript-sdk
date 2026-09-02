import { s, type Schema } from "../core/index.js";

export type VideosCreditsRequest = {
  email: string;
  name: string;
  role: string;
  userUri: string;
};

export const videosCreditsRequestSchema: Schema<VideosCreditsRequest> = s.object<VideosCreditsRequest>({
  email: s.string(),
  name: s.string(),
  role: s.string(),
  userUri: s.string(),
  _keysMap: {
    userUri: "user_uri",
  },
});

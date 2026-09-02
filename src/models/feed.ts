import { s, type Schema } from "../core/index.js";

export type Feed = {
  options: string[];
  uri: string;
};

export const feedSchema: Schema<Feed> = s.object<Feed>({
  options: s.array(s.string()),
  uri: s.string(),
});

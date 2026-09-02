import { s, type Schema } from "../core/index.js";

export type RootVersion = {
  options: string[];
  uri: string;
};

export const rootVersionSchema: Schema<RootVersion> = s.object<RootVersion>({
  options: s.array(s.string()),
  uri: s.string(),
});

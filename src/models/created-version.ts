import { s, type Schema } from "../core/index.js";

export type CreatedVersion = {
  options: string[];
  uri: string;
};

export const createdVersionSchema: Schema<CreatedVersion> = s.object<CreatedVersion>({
  options: s.array(s.string()),
  uri: s.string(),
});

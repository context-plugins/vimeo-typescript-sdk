import { s, type Schema } from "../core/index.js";

export type ViewPrivacy1 = {
  options: string[];
  uri: string;
};

export const viewPrivacy1Schema: Schema<ViewPrivacy1> = s.object<ViewPrivacy1>({
  options: s.array(s.string()),
  uri: s.string(),
});

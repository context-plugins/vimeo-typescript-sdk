import { s, type Schema } from "../core/index.js";

export type Parent = {
  link: string;
  name: string;
  uri: string;
};

export const parentSchema: Schema<Parent> = s.object<Parent>({
  link: s.string(),
  name: s.string(),
  uri: s.string(),
});

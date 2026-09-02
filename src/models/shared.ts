import { s, type Schema } from "../core/index.js";

export type Shared = {
  options: string[];
  total: number;
  uri: string;
};

export const sharedSchema: Schema<Shared> = s.object<Shared>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});

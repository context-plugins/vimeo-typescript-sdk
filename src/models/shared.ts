import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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

import { s, type Schema } from "../core/index.js";

export type AncestorPath = {
  link: string;
  name: string;
};

export const ancestorPathSchema: Schema<AncestorPath> = s.object<AncestorPath>({
  link: s.string(),
  name: s.string(),
});

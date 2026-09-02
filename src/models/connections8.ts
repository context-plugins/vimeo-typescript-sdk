import { s, type Schema } from "../core/index.js";
import { pagesSchema, type Pages } from "./pages.js";

export type Connections8 = {
  pages: Pages;
};

export const connections8Schema: Schema<Connections8> = s.object<Connections8>({
  pages: pagesSchema,
});

import { s, type Schema } from "../core/index.js";

export type Embed2 = {
  html: string | null;
};

export const embed2Schema: Schema<Embed2> = s.object<Embed2>({
  html: s.nullable(s.string()),
});

import { s, type Schema } from "../core/index.js";

export type Vod = {
  id?: number;
  link: string;
};

export const vodSchema: Schema<Vod> = s.object<Vod>({
  id: s.optional(s.number()),
  link: s.string(),
});

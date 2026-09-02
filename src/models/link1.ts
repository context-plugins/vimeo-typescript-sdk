import { s, type Schema } from "../core/index.js";

export type Link1 = {
  name?: string;
  url?: string;
};

export const link1Schema: Schema<Link1> = s.object<Link1>({
  name: s.optional(s.string()),
  url: s.optional(s.string()),
});

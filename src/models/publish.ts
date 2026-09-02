import { s, type Schema } from "../core/index.js";

export type Publish = {
  active?: boolean;
};

export const publishSchema: Schema<Publish> = s.object<Publish>({
  active: s.optional(s.boolean()),
});

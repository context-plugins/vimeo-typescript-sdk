import { s, type Schema } from "../core/index.js";

export type Id = {
  annual: string | null;
  monthly: string | null;
};

export const idSchema: Schema<Id> = s.object<Id>({
  annual: s.nullable(s.string()),
  monthly: s.nullable(s.string()),
});

import { s, type Schema } from "../core/index.js";

export type Published = {
  enabled: boolean;
  time: string;
};

export const publishedSchema: Schema<Published> = s.object<Published>({
  enabled: s.boolean(),
  time: s.string(),
});

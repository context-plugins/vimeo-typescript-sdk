import { s, type Schema } from "../core/index.js";

export type Log = {
  play?: string;
};

export const logSchema: Schema<Log> = s.object<Log>({
  play: s.optional(s.string()),
});

import { s, type Schema } from "../core/index.js";
import { status22Schema, type Status22 } from "./status22.js";

export type EditSession = {
  status: Status22;
};

export const editSessionSchema: Schema<EditSession> = s.object<EditSession>({
  status: status22Schema,
});

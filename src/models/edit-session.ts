import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status22Schema, type Status22 } from "./status22.js";

export type EditSession = {
  status: Status22;
};

export const editSessionSchema: Schema<EditSession> = s.object<EditSession>({
  status: status22Schema,
});

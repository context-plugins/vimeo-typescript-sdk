import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status19Schema, type Status19 } from "./status19.js";

export type EditSession = {
  status: Status19;
};

export const editSessionSchema: Schema<EditSession> = s.object<EditSession>({
  status: status19Schema,
});

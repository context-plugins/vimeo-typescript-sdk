import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

export type EndScreen = {
  type: Type4;
};

export const endScreenSchema: Schema<EndScreen> = s.object<EndScreen>({
  type: type4Schema,
});

import { s, type Schema } from "../core/index.js";
import { type4Schema, type Type4 } from "./type4.js";

export type EndScreen = {
  type: Type4;
};

export const endScreenSchema: Schema<EndScreen> = s.object<EndScreen>({
  type: type4Schema,
});

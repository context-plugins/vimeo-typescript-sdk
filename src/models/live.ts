import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Live = {
  archived: boolean;
  streaming: boolean;
};

export const liveSchema: Schema<Live> = s.object<Live>({
  archived: s.boolean(),
  streaming: s.boolean(),
});

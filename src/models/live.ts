import { s, type Schema } from "../core/index.js";

export type Live = {
  archived: boolean;
  streaming: boolean;
};

export const liveSchema: Schema<Live> = s.object<Live>({
  archived: s.boolean(),
  streaming: s.boolean(),
});

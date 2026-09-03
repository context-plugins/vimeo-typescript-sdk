import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddLiveEvents = {
  options: string[];
  uri: string;
};

export const addLiveEventsSchema: Schema<AddLiveEvents> = s.object<AddLiveEvents>({
  options: s.array(s.string()),
  uri: s.string(),
});

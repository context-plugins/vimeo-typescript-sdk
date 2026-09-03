import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EditLiveEvents = {
  options: string[];
  uri: string;
};

export const editLiveEventsSchema: Schema<EditLiveEvents> = s.object<EditLiveEvents>({
  options: s.array(s.string()),
  uri: s.string(),
});

import { s, type Schema } from "../core/index.js";

export type EditLiveEvents = {
  options: string[];
  uri: string;
};

export const editLiveEventsSchema: Schema<EditLiveEvents> = s.object<EditLiveEvents>({
  options: s.array(s.string()),
  uri: s.string(),
});

import { s, type Schema } from "../core/index.js";

export type AddLiveEvents = {
  options: string[];
  uri: string;
};

export const addLiveEventsSchema: Schema<AddLiveEvents> = s.object<AddLiveEvents>({
  options: s.array(s.string()),
  uri: s.string(),
});

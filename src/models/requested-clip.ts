import { s, type Schema } from "../core/index.js";

export type RequestedClip = {
  options: string[];
  uri: string;
};

export const requestedClipSchema: Schema<RequestedClip> = s.object<RequestedClip>({
  options: s.array(s.string()),
  uri: s.string(),
});

import { s, type Schema } from "../core/index.js";
import { status12Schema, type Status12 } from "./status12.js";

export type PreLiveVideo = {
  options: string[];
  status: Status12;
  uri: string;
};

export const preLiveVideoSchema: Schema<PreLiveVideo> = s.object<PreLiveVideo>({
  options: s.array(s.string()),
  status: status12Schema,
  uri: s.string(),
});

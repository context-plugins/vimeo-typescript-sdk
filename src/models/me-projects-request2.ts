import { s, type Schema } from "../core/index.js";

export type MeProjectsRequest2 = {
  name: string;
};

export const meProjectsRequest2Schema: Schema<MeProjectsRequest2> = s.object<MeProjectsRequest2>({
  name: s.string(),
});

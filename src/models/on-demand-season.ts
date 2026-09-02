import { s, type Schema } from "../core/index.js";
import { metadata20Schema, type Metadata20 } from "./metadata20.js";
import { userSchema, type User } from "./user.js";

export type OnDemandSeason = {
  description: string;
  metadata: Metadata20;
  name: string;
  position: number;
  resourceKey: string;
  type: string;
  uri: string;
  user: User | null;
};

export const onDemandSeasonSchema: Schema<OnDemandSeason> = s.object<OnDemandSeason>({
  description: s.string(),
  metadata: metadata20Schema,
  name: s.string(),
  position: s.number(),
  resourceKey: s.string(),
  type: s.string(),
  uri: s.string(),
  user: s.nullable(s.lazy(() => userSchema)),
  _keysMap: {
    resourceKey: "resource_key",
  },
});

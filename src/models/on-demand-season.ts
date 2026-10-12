import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata20Schema, type Metadata20 } from "./metadata20.js";
import { userSchema, type User } from "./user.js";

export type OnDemandSeason = {
  /** The description of the season. */
  description: string;
  metadata: Metadata20;
  /** The name of the season. */
  name: string;
  /** The position of the season relative to other seasons in the series. */
  position: number;
  /** The unique identifier of the On Demand season. */
  resourceKey: string;
  /** The type of the season. */
  type: string;
  /** The season container's relative URI. */
  uri: string;
  /** The creator of the season's On Demand page. */
  user: User | null;
};

export const onDemandSeasonSchema: Schema<OnDemandSeason> = s.object<OnDemandSeason>({
  description: s.string(),
  metadata: metadata20Schema,
  name: s.string(),
  position: s.float64(),
  resourceKey: s.string(),
  type: s.string(),
  uri: s.string(),
  user: s.nullable(s.lazy(() => userSchema)),
  _keysMap: {
    resourceKey: "resource_key",
  },
});

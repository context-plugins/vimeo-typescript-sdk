import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections5Schema, type Connections5 } from "./connections5.js";
import { interactions4Schema, type Interactions4 } from "./interactions4.js";

export type Metadata5 = {
  connections: Connections5;
  interactions: Interactions4;
};

export const metadata5Schema: Schema<Metadata5> = s.object<Metadata5>({
  connections: connections5Schema,
  interactions: interactions4Schema,
});

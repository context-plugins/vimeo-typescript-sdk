import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status8Schema, type Status8 } from "./status8.js";

export type Transcode1 = {
  status: Status8;
};

export const transcode1Schema: Schema<Transcode1> = s.object<Transcode1>({
  status: status8Schema,
});

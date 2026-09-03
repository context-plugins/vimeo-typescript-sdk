import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status9Schema, type Status9 } from "./status9.js";

export type Transcode1 = {
  status: Status9;
};

export const transcode1Schema: Schema<Transcode1> = s.object<Transcode1>({
  status: status9Schema,
});

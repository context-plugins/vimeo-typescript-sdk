import { s, type Schema } from "../core/index.js";
import { status9Schema, type Status9 } from "./status9.js";

export type Transcode1 = {
  status: Status9;
};

export const transcode1Schema: Schema<Transcode1> = s.object<Transcode1>({
  status: status9Schema,
});

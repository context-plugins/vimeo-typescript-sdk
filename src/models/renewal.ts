import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Renewal = {
  displayDate: string;
};

export const renewalSchema: Schema<Renewal> = s.object<Renewal>({
  displayDate: s.string(),
  _keysMap: {
    displayDate: "display_date",
  },
});

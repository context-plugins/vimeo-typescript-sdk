import { s, type Schema } from "../core/index.js";

export type Renewal = {
  displayDate: string;
};

export const renewalSchema: Schema<Renewal> = s.object<Renewal>({
  displayDate: s.string(),
  _keysMap: {
    displayDate: "display_date",
  },
});

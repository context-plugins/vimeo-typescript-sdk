import { s, type Schema } from "../core/index.js";
import { related1Schema, type Related1 } from "./related1.js";

export type Connections7 = {
  related: Related1 | null;
};

export const connections7Schema: Schema<Connections7> = s.object<Connections7>({
  related: s.nullable(s.lazy(() => related1Schema)),
});

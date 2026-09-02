import { s, type Schema } from "../core/index.js";
import { connections25Schema, type Connections25 } from "./connections25.js";

export type Metadata27 = {
  connections?: Connections25;
};

export const metadata27Schema: Schema<Metadata27> = s.object<Metadata27>({
  connections: s.optional(s.lazy(() => connections25Schema)),
});

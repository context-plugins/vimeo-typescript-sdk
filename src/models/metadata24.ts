import { s, type Schema } from "../core/index.js";
import { connections23Schema, type Connections23 } from "./connections23.js";

export type Metadata24 = {
  connections: Connections23;
};

export const metadata24Schema: Schema<Metadata24> = s.object<Metadata24>({
  connections: connections23Schema,
});

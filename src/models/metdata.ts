import { s, type Schema } from "../core/index.js";
import { interactions9Schema, type Interactions9 } from "./interactions9.js";

export type Metdata = {
  interactions: Interactions9;
};

export const metdataSchema: Schema<Metdata> = s.object<Metdata>({
  interactions: interactions9Schema,
});

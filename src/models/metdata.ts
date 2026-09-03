import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { interactions9Schema, type Interactions9 } from "./interactions9.js";

export type Metdata = {
  interactions: Interactions9;
};

export const metdataSchema: Schema<Metdata> = s.object<Metdata>({
  interactions: interactions9Schema,
});

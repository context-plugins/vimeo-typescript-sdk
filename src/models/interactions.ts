import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { followSchema, type Follow } from "./follow.js";

export type Interactions = {
  follow: Follow;
};

export const interactionsSchema: Schema<Interactions> = s.object<Interactions>({
  follow: followSchema,
});

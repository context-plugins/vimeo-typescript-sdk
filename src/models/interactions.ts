import { s, type Schema } from "../core/index.js";
import { followSchema, type Follow } from "./follow.js";

export type Interactions = {
  follow: Follow;
};

export const interactionsSchema: Schema<Interactions> = s.object<Interactions>({
  follow: followSchema,
});

import { s, type Schema } from "../core/index.js";
import { nameSchema, type Name } from "./name.js";
import { ownerSchema, type Owner } from "./owner.js";
import { portraitSchema, type Portrait } from "./portrait.js";

export type Title = {
  name: Name;
  owner: Owner;
  portrait: Portrait;
};

export const titleSchema: Schema<Title> = s.object<Title>({
  name: nameSchema,
  owner: ownerSchema,
  portrait: portraitSchema,
});

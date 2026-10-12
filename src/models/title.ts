import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";
import { ownerSchema, type Owner } from "./owner.js";
import { portraitSchema, type Portrait } from "./portrait.js";

/** A collection of information about the embeddable player's title bar. */
export type Title = {
  /**
   * How the embeddable player handles the video title.
   *
   * Option descriptions:
   *  * `hide` - The title is hidden.
   *  * `show` - The title is shown.
   *  * `user` - The title can be toggled to `show` or `hide` by the user.
   */
  name: Name;
  /**
   * How the embeddable player handles the video owner's information.
   *
   * Option descriptions:
   *  * `hide` - The owner's information is hidden.
   *  * `show` - The owner's information is shown.
   *  * `user` - The owner's information can be toggled to `show` or `hide` by the user.
   */
  owner: Owner;
  /**
   * How the embeddable player handles the video owner's portrait.
   *
   * Option descriptions:
   *  * `hide` - The owner's portrait is hidden
   *  * `show` - The owner's portrait is shown.
   *  * `user` - The owner's portrait can be toggled to `show` or `hide` by the user.
   */
  portrait: Portrait;
};

export const titleSchema: Schema<Title> = s.object<Title>({
  name: nameSchema,
  owner: ownerSchema,
  portrait: portraitSchema,
});

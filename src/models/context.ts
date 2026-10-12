import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";

/** The context of the video's subscription, if the video is part of a subscription. */
export type Context = {
  /**
   * The relevant contextual action.
   *
   * Option descriptions:
   *  * `Added to` - An Added To action.
   *  * `Appearance by` - An Appearance By action.
   *  * `Liked by` - A Liked By action.
   *  * `Uploaded by` - An Uploaded By action.
   */
  action: Action;
  /** The contextual resource: a user, group, or channel representation, or an object of a tag. */
  resource: Record<string, unknown> | null;
  /** The contextual resource type. */
  resourceType: string;
};

export const contextSchema: Schema<Context> = s.object<Context>({
  action: actionSchema,
  resource: s.nullable(s.record(s.string(), s.unknown())),
  resourceType: s.string(),
  _keysMap: {
    resourceType: "resource_type",
  },
});

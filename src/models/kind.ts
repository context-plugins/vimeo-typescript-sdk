import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The node kind.
 *
 * Option descriptions:
 *  * `category` - A grouping node; its children reference it via `parent_id`.
 *  * `external` - Handed off to a dedicated form (see `external_url`), not POST-able here.
 *  * `reason` - A submittable leaf; its `id` is the opaque reason UUID to POST.
 */
export const Kind = {
  Category: "category",
  External: "external",
  Reason: "reason",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);

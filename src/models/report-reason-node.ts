import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kindSchema, type Kind } from "./kind.js";
import {
  reportReasonGenderedVariantSchema,
  type ReportReasonGenderedVariant,
} from "./report-reason-gendered-variant.js";

export type ReportReasonNode = {
  /** A human-readable description of the category or leaf. */
  description: string;
  /** For external-handoff leaves, the dedicated form to use instead of this endpoint. */
  externalUrl?: string;
  /**
   * For reason leaves with a gender fork, the distinct variant to submit when the target is a woman
   * or girl.
   */
  gendered?: ReportReasonGenderedVariant;
  /**
   * Stable identifier for this node: the opaque reason UUID for a submittable leaf, or a slug for a
   * category or external-handoff leaf.
   */
  id: string;
  /**
   * The node kind.
   *
   * Option descriptions:
   *  * `category` - A grouping node; its children reference it via `parent_id`.
   *  * `external` - Handed off to a dedicated form (see `external_url`), not POST-able here.
   *  * `reason` - A submittable leaf; its `id` is the opaque reason UUID to POST.
   */
  kind: Kind;
  /** The display name for the category or leaf. */
  name: string;
  /** The `id` of the node this is nested under, or `null` at the top level. */
  parentId: string | null;
};

export const reportReasonNodeSchema: Schema<ReportReasonNode> = s.object<ReportReasonNode>({
  description: s.string(),
  externalUrl: s.optional(s.string()),
  gendered: s.optional(s.lazy(() => reportReasonGenderedVariantSchema)),
  id: s.string(),
  kind: kindSchema,
  name: s.string(),
  parentId: s.nullable(s.string()),
  _keysMap: {
    externalUrl: "external_url",
    parentId: "parent_id",
  },
});

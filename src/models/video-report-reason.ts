import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportReasonNodeSchema, type ReportReasonNode } from "./report-reason-node.js";

export type VideoReportReason = {
  /**
   * The DSA-aligned report reason taxonomy, flattened to a parent-referenced node list (categories,
   * submittable leaves, and external-handoff leaves). A parent always precedes its descendants, so
   * the tree rebuilds in one pass.
   */
  reasons: ReportReasonNode[];
};

export const videoReportReasonSchema: Schema<VideoReportReason> = s.object<VideoReportReason>({
  reasons: s.array(s.lazy(() => reportReasonNodeSchema)),
});

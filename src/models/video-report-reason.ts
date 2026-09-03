import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportReasonNodeSchema, type ReportReasonNode } from "./report-reason-node.js";

export type VideoReportReason = {
  reasons: ReportReasonNode[];
};

export const videoReportReasonSchema: Schema<VideoReportReason> = s.object<VideoReportReason>({
  reasons: s.array(s.lazy(() => reportReasonNodeSchema)),
});

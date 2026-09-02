import { s, type Schema } from "../core/index.js";
import { reportReasonNodeSchema, type ReportReasonNode } from "./report-reason-node.js";

export type VideoReportReason = {
  reasons: ReportReasonNode[];
};

export const videoReportReasonSchema: Schema<VideoReportReason> = s.object<VideoReportReason>({
  reasons: s.array(s.lazy(() => reportReasonNodeSchema)),
});

import { s, type Schema } from "../core/index.js";

export type ReportReasonGenderedVariant = {
  description: string;
  name: string;
  uuid: string;
};

export const reportReasonGenderedVariantSchema: Schema<ReportReasonGenderedVariant> =
  s.object<ReportReasonGenderedVariant>({
    description: s.string(),
    name: s.string(),
    uuid: s.string(),
  });

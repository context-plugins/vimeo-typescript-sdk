import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReportReasonGenderedVariant = {
  /** A human-readable description of the gendered variant. */
  description: string;
  /** The display name of the gendered variant. */
  name: string;
  /** The opaque reason UUID to submit when the target is a woman or girl. */
  uuid: string;
};

export const reportReasonGenderedVariantSchema: Schema<ReportReasonGenderedVariant> =
  s.object<ReportReasonGenderedVariant>({
    description: s.string(),
    name: s.string(),
    uuid: s.string(),
  });

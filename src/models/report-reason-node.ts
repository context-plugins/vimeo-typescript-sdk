import { s, type Schema } from "../core/index.js";
import { kindSchema, type Kind } from "./kind.js";
import {
  reportReasonGenderedVariantSchema,
  type ReportReasonGenderedVariant,
} from "./report-reason-gendered-variant.js";

export type ReportReasonNode = {
  description: string;
  externalUrl?: string;
  gendered?: ReportReasonGenderedVariant;
  id: string;
  kind: Kind;
  name: string;
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

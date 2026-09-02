import { s, type Schema } from "../core/index.js";

export type OndemandPagesPicturesRequest = {
  active?: boolean;
};

export const ondemandPagesPicturesRequestSchema: Schema<OndemandPagesPicturesRequest> =
  s.object<OndemandPagesPicturesRequest>({
    active: s.optional(s.boolean()),
  });

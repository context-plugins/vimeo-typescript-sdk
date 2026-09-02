import { s, type Schema } from "../core/index.js";
import { download1Schema, type Download1 } from "./download1.js";
import { language2Schema, type Language2 } from "./language2.js";
import { provenanceSchema, type Provenance } from "./provenance.js";
import { quotaSchema, type Quota } from "./quota.js";
import { transcode1Schema, type Transcode1 } from "./transcode1.js";
import { type11Schema, type Type11 } from "./type11.js";

export type AlternateAudioTrack = {
  active: boolean;
  download: Download1[];
  language: Language2;
  provenance: Provenance;
  quota: Quota;
  transcode: Transcode1;
  type: Type11;
  upload: Record<string, unknown>;
  uri: string;
};

export const alternateAudioTrackSchema: Schema<AlternateAudioTrack> = s.object<AlternateAudioTrack>({
  active: s.boolean(),
  download: s.array(s.lazy(() => download1Schema)),
  language: language2Schema,
  provenance: provenanceSchema,
  quota: quotaSchema,
  transcode: transcode1Schema,
  type: type11Schema,
  upload: s.record(s.string(), s.unknown()),
  uri: s.string(),
});

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Dimension = {
  Browser: "browser",
  City: "city",
  Country: "country",
  DeviceType: "device_type",
  EmbedDomain: "embed_domain",
  EmbedDomainPath: "embed_domain_path",
  Os: "os",
  Region: "region",
  StreamingType: "streaming_type",
  Total: "total",
  Video: "video",
} as const;
export type Dimension = (typeof Dimension)[keyof typeof Dimension] | (string & {});

export const dimensionSchema: EnumSchema<Dimension> = s.enumOf<Dimension>(Dimension);

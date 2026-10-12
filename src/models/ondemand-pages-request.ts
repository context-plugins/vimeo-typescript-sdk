import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { preorder1Schema, type Preorder1 } from "./preorder1.js";
import { publishSchema, type Publish } from "./publish.js";

export type OndemandPagesRequest = {
  /** The custom string to use in the Vimeo URL of the On Demand page. */
  link?: string;
  preorder?: Preorder1;
  publish?: Publish;
  /**
   * Whether to publish the On Demand page automatically after all videos have finished transcoding.
   */
  publishWhenReady?: boolean;
};

export const ondemandPagesRequestSchema: Schema<OndemandPagesRequest> = s.object<OndemandPagesRequest>({
  link: s.optional(s.string()),
  preorder: s.optional(s.lazy(() => preorder1Schema)),
  publish: s.optional(s.lazy(() => publishSchema)),
  publishWhenReady: s.optional(s.boolean()),
  _keysMap: {
    publishWhenReady: "publish_when_ready",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embed8Schema, type Embed8 } from "./embed8.js";

export type StreamEmbed = {
  /**
   * The embed permission level for the event.
   *
   * Option descriptions:
   *  * `private` - Only the user can embed the event.
   *  * `public` - Anyone can embed the event.
   *  * `whitelist` - Only specified users can embed the event.
   */
  embed?: Embed8;
};

export const streamEmbedSchema: Schema<StreamEmbed> = s.object<StreamEmbed>({
  embed: s.optional(s.lazy(() => embed8Schema)),
});

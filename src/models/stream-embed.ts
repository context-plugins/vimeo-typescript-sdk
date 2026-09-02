import { s, type Schema } from "../core/index.js";
import { embed8Schema, type Embed8 } from "./embed8.js";

export type StreamEmbed = {
  embed?: Embed8;
};

export const streamEmbedSchema: Schema<StreamEmbed> = s.object<StreamEmbed>({
  embed: s.optional(s.lazy(() => embed8Schema)),
});

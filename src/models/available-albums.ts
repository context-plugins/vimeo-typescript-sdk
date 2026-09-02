import { s, type Schema } from "../core/index.js";
import { disabled2Schema, type Disabled2 } from "./disabled2.js";

export type AvailableAlbums = {
  disabled?: Disabled2;
  options?: string[];
  total?: number;
  uri?: string;
};

export const availableAlbumsSchema: Schema<AvailableAlbums> = s.object<AvailableAlbums>({
  disabled: s.optional(s.lazy(() => disabled2Schema)),
  options: s.optional(s.array(s.string())),
  total: s.optional(s.number()),
  uri: s.optional(s.string()),
});

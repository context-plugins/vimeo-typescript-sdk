import { s, type Schema } from "../core/index.js";

export type Versions = {
  createStoryboardId?: string;
  currentUri?: string;
  hasInteractive?: boolean;
  options?: string[];
  originVariableFrameResolution?: boolean;
  resourceKey?: string;
  sequenceNumber: number | null;
  total?: number;
  totalIncludingDeleted?: number;
  uri?: string;
};

export const versionsSchema: Schema<Versions> = s.object<Versions>({
  createStoryboardId: s.optional(s.string()),
  currentUri: s.optional(s.string()),
  hasInteractive: s.optional(s.boolean()),
  options: s.optional(s.array(s.string())),
  originVariableFrameResolution: s.optional(s.boolean()),
  resourceKey: s.optional(s.string()),
  sequenceNumber: s.nullable(s.number()),
  total: s.optional(s.number()),
  totalIncludingDeleted: s.optional(s.number()),
  uri: s.optional(s.string()),
  _keysMap: {
    createStoryboardId: "create_storyboard_id",
    currentUri: "current_uri",
    hasInteractive: "has_interactive",
    originVariableFrameResolution: "origin_variable_frame_resolution",
    resourceKey: "resource_key",
    sequenceNumber: "sequence_number",
    totalIncludingDeleted: "total_including_deleted",
  },
});

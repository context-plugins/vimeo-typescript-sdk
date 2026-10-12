import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lifetimeSchema, type Lifetime } from "./lifetime.js";
import { periodicSchema, type Periodic } from "./periodic.js";
import { restrictedSchema, type Restricted } from "./restricted.js";
import { spaceSchema, type Space } from "./space.js";

/**
 * The upload quota. This information appears only when the authenticated user has upload access and
 * is looking at their own user record.
 */
export type UploadQuota = {
  /** Information about the authenticated user's lifetime upload usage. */
  lifetime: Lifetime;
  /** Information about the authenticated user's usage for the current period. */
  periodic: Periodic;
  /** The number of bytes used by videos currently in the Recently Deleted folder. */
  recentlyDeletedDiskSpace: number;
  /** The restricted video storage quota (for embeddable and private videos). */
  restricted: Restricted;
  /** Information about the authenticated user's upload space remaining for the current period. */
  space: Space;
};

export const uploadQuotaSchema: Schema<UploadQuota> = s.object<UploadQuota>({
  lifetime: lifetimeSchema,
  periodic: periodicSchema,
  recentlyDeletedDiskSpace: s.float64(),
  restricted: restrictedSchema,
  space: spaceSchema,
  _keysMap: {
    recentlyDeletedDiskSpace: "recently_deleted_disk_space",
  },
});

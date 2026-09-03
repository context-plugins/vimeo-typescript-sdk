import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lifetimeSchema, type Lifetime } from "./lifetime.js";
import { periodicSchema, type Periodic } from "./periodic.js";
import { restrictedSchema, type Restricted } from "./restricted.js";
import { spaceSchema, type Space } from "./space.js";

export type UploadQuota = {
  lifetime: Lifetime;
  periodic: Periodic;
  recentlyDeletedDiskSpace: number;
  restricted: Restricted;
  space: Space;
};

export const uploadQuotaSchema: Schema<UploadQuota> = s.object<UploadQuota>({
  lifetime: lifetimeSchema,
  periodic: periodicSchema,
  recentlyDeletedDiskSpace: s.number(),
  restricted: restrictedSchema,
  space: spaceSchema,
  _keysMap: {
    recentlyDeletedDiskSpace: "recently_deleted_disk_space",
  },
});

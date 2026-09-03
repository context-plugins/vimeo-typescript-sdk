import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDictionaryQuotaSchema, type AccountDictionaryQuota } from "./account-dictionary-quota.js";
import { ageVerificationStatusSchema, type AgeVerificationStatus } from "./age-verification-status.js";
import { aiCreditsQuotaSchema, type AiCreditsQuota } from "./ai-credits-quota.js";
import { bandwidthSchema, type Bandwidth } from "./bandwidth.js";
import { contentFilterSchema, type ContentFilter } from "./content-filter.js";
import { drmLicensesQuotaSchema, type DrmLicensesQuota } from "./drm-licenses-quota.js";
import { lmsLearnerSeatsQuotaSchema, type LmsLearnerSeatsQuota } from "./lms-learner-seats-quota.js";
import { locationSchema, type Location } from "./location.js";
import { membershipSchema, type Membership } from "./membership.js";
import { metadata3Schema, type Metadata3 } from "./metadata3.js";
import { pictureSchema, type Picture } from "./picture.js";
import { preferencesSchema, type Preferences } from "./preferences.js";
import { skillSchema, type Skill } from "./skill.js";
import { uploadQuotaSchema, type UploadQuota } from "./upload-quota.js";
import { websiteSchema, type Website } from "./website.js";

export type User = {
  accountDictionaryQuota?: AccountDictionaryQuota;
  ageVerificationStatus: AgeVerificationStatus;
  aiCreditsQuota?: AiCreditsQuota;
  availableForHire: boolean;
  bandwidth?: Bandwidth;
  bio?: string;
  canWorkRemotely: boolean;
  capabilities?: Record<string, unknown>;
  clients: string;
  contentFilter?: ContentFilter;
  createdTime: string;
  drmLicensesQuota?: DrmLicensesQuota;
  gender?: string;
  hasInvalidEmail?: boolean;
  isExpert: boolean;
  isStaffPicked: boolean;
  lastVideoUploadDate?: string;
  link: string;
  liveLocalizationTrialExpiresOn?: string;
  lmsLearnerSeatsQuota?: LmsLearnerSeatsQuota;
  location?: string;
  locationDetails?: Location;
  maxTeamMembers: number;
  membership: Membership;
  metadata: Metadata3;
  name: string;
  pictures: Picture;
  preferences: Preferences;
  profileDiscovery: boolean;
  requiresAgeVerification: boolean;
  resourceKey: string;
  shortBio?: string;
  skills?: Skill[];
  transcriptPhrasesLimit?: number;
  uploadQuota: UploadQuota;
  uri: string;
  websites: Website[];
};

export const userSchema: Schema<User> = s.object<User>({
  accountDictionaryQuota: s.optional(s.lazy(() => accountDictionaryQuotaSchema)),
  ageVerificationStatus: ageVerificationStatusSchema,
  aiCreditsQuota: s.optional(s.lazy(() => aiCreditsQuotaSchema)),
  availableForHire: s.boolean(),
  bandwidth: s.optional(s.lazy(() => bandwidthSchema)),
  bio: s.optional(s.string()),
  canWorkRemotely: s.boolean(),
  capabilities: s.optional(s.record(s.string(), s.unknown())),
  clients: s.string(),
  contentFilter: s.optional(s.lazy(() => contentFilterSchema)),
  createdTime: s.string(),
  drmLicensesQuota: s.optional(s.lazy(() => drmLicensesQuotaSchema)),
  gender: s.optional(s.string()),
  hasInvalidEmail: s.optional(s.boolean()),
  isExpert: s.boolean(),
  isStaffPicked: s.boolean(),
  lastVideoUploadDate: s.optional(s.string()),
  link: s.string(),
  liveLocalizationTrialExpiresOn: s.optional(s.string()),
  lmsLearnerSeatsQuota: s.optional(s.lazy(() => lmsLearnerSeatsQuotaSchema)),
  location: s.optional(s.string()),
  locationDetails: s.optional(s.lazy(() => locationSchema)),
  maxTeamMembers: s.number(),
  membership: membershipSchema,
  metadata: metadata3Schema,
  name: s.string(),
  pictures: pictureSchema,
  preferences: preferencesSchema,
  profileDiscovery: s.boolean(),
  requiresAgeVerification: s.boolean(),
  resourceKey: s.string(),
  shortBio: s.optional(s.string()),
  skills: s.optional(s.array(s.lazy(() => skillSchema))),
  transcriptPhrasesLimit: s.optional(s.number()),
  uploadQuota: uploadQuotaSchema,
  uri: s.string(),
  websites: s.array(s.lazy(() => websiteSchema)),
  _keysMap: {
    accountDictionaryQuota: "account_dictionary_quota",
    ageVerificationStatus: "age_verification_status",
    aiCreditsQuota: "ai_credits_quota",
    availableForHire: "available_for_hire",
    canWorkRemotely: "can_work_remotely",
    contentFilter: "content_filter",
    createdTime: "created_time",
    drmLicensesQuota: "drm_licenses_quota",
    hasInvalidEmail: "has_invalid_email",
    isExpert: "is_expert",
    isStaffPicked: "is_staff_picked",
    lastVideoUploadDate: "last_video_upload_date",
    liveLocalizationTrialExpiresOn: "live_localization_trial_expires_on",
    lmsLearnerSeatsQuota: "lms_learner_seats_quota",
    locationDetails: "location_details",
    maxTeamMembers: "max_team_members",
    profileDiscovery: "profile_discovery",
    requiresAgeVerification: "requires_age_verification",
    resourceKey: "resource_key",
    shortBio: "short_bio",
    transcriptPhrasesLimit: "transcript_phrases_limit",
    uploadQuota: "upload_quota",
  },
});

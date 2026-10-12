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
  /** Account dictionary usage and entry limits. */
  accountDictionaryQuota?: AccountDictionaryQuota;
  /**
   * The status of the user's age verification.
   *
   * Option descriptions:
   *  * `failed` - The user has failed age verification.
   *  * `passed` - The user has passed age verification.
   *  * `pending` - The user's age verification is pending.
   */
  ageVerificationStatus: AgeVerificationStatus;
  /** Information about the user's AI credits quota. */
  aiCreditsQuota?: AiCreditsQuota;
  /** Whether the authenticated user is available for hire. */
  availableForHire: boolean;
  bandwidth?: Bandwidth;
  /** The authenticated user's long biography text. */
  bio?: string;
  /** Whether the authenticated user can work remotely. */
  canWorkRemotely: boolean;
  /** The users's capabilities list. */
  capabilities?: Record<string, unknown>;
  /** The comma-separated list of clients. */
  clients: string;
  /**
   * The authenticated user's content filters.
   *
   * Option descriptions:
   *  * `drugs` - The content contains drug or alcohol use.
   *  * `language` - The content contains profanity or sexually suggestive language.
   *  * `nudity` - The content contains nudity.
   *  * `safe` - The content is suitable for all audiences.
   *  * `unrated` - The content hasn't been rated.
   *  * `violence` - The content contains violence or is graphic.
   */
  contentFilter?: ContentFilter;
  /** The time in ISO 8601 format when the user account was created. */
  createdTime: string;
  /** Information about the user's DRM usage quota. */
  drmLicensesQuota?: DrmLicensesQuota;
  /** The authenticated user's gender. */
  gender?: string;
  /** Whether the user's email is invalid. */
  hasInvalidEmail?: boolean;
  /** Whether the creator enrolled in and successfully completed the Vimeo Experts program. */
  isExpert: boolean;
  /** Whether the user has had a staff-picked video. */
  isStaffPicked: boolean;
  /**
   * The time in ISO 8601 format of the user's most recent video upload, or null if the user has no
   * videos. Backed by a lean, indexed clip lookup cached for one hour.
   */
  lastVideoUploadDate?: string;
  /** The absolute URL of the authenticated users's profile page. */
  link: string;
  /**
   * When the user's access to the exclusive live-localization features (caption translations,
   * multi-audio streams) comes from the launch free trial, the date (YYYY-MM-DD) the trial expires.
   * Null for users with permanent access (staff or a granted SKU) or no trial.
   */
  liveLocalizationTrialExpiresOn?: string;
  /** Information about the user's learning management system learner seats quota. */
  lmsLearnerSeatsQuota?: LmsLearnerSeatsQuota;
  /** The authenticated user's location. */
  location?: string;
  /** The authenticated user's location details. */
  locationDetails?: Location;
  /** The maximum number of team members the user may have. */
  maxTeamMembers: number;
  /** Information about the authenticated user's Vimeo membership. */
  membership: Membership;
  /** The authenticated user's metadata. */
  metadata: Metadata3;
  /** The authenticated user's display name. */
  name: string;
  /** The active portrait of the authenticated user. */
  pictures: Picture;
  preferences: Preferences;
  /** Whether the user has enabled profile discovery from their profile settings. */
  profileDiscovery: boolean;
  /** Whether the user is required to verify their age. */
  requiresAgeVerification: boolean;
  /** The authenticated user's resource key string. */
  resourceKey: string;
  /** The authenticated user's short biography text. */
  shortBio?: string;
  /** A list of the authenticated user's skills. */
  skills?: Skill[];
  /** The maximum number of transcript phrases permitted for the user. */
  transcriptPhrasesLimit?: number;
  /**
   * The upload quota. This information appears only when the authenticated user has upload access
   * and is looking at their own user record.
   */
  uploadQuota: UploadQuota;
  /** The authenticated user's canonical relative URI. */
  uri: string;
  /** The authenticated user's websites. */
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
  maxTeamMembers: s.float64(),
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
  transcriptPhrasesLimit: s.optional(s.float64()),
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

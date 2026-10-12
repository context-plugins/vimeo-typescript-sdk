import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { ApiAppsWebhooks } from "./resources/api-apps-webhooks.js";
import { ApiInformationEssentials } from "./resources/api-information-essentials.js";
import { AuthenticationExtrasAuthenticate } from "./resources/authentication-extras-authenticate.js";
import { AuthenticationExtrasConvert } from "./resources/authentication-extras-convert.js";
import { AuthenticationExtrasEssentials } from "./resources/authentication-extras-essentials.js";
import { AuthenticationExtrasExchange } from "./resources/authentication-extras-exchange.js";
import { CategoriesChannels } from "./resources/categories-channels.js";
import { CategoriesEssentials } from "./resources/categories-essentials.js";
import { CategoriesGroups } from "./resources/categories-groups.js";
import { CategoriesUsers } from "./resources/categories-users.js";
import { CategoriesVideos } from "./resources/categories-videos.js";
import { ChannelsCategories } from "./resources/channels-categories.js";
import { ChannelsEssentials } from "./resources/channels-essentials.js";
import { ChannelsModerators } from "./resources/channels-moderators.js";
import { ChannelsPrivateChannelMembers } from "./resources/channels-private-channel-members.js";
import { ChannelsSubscriptionsAndSubscribers } from "./resources/channels-subscriptions-and-subscribers.js";
import { ChannelsTags } from "./resources/channels-tags.js";
import { ChannelsVideos } from "./resources/channels-videos.js";
import { EmbedPresetsCustomLogos } from "./resources/embed-presets-custom-logos.js";
import { EmbedPresetsEssentials } from "./resources/embed-presets-essentials.js";
import { EmbedPresetsFolders } from "./resources/embed-presets-folders.js";
import { EmbedPresetsTimelineEvents } from "./resources/embed-presets-timeline-events.js";
import { EmbedPresetsVideos } from "./resources/embed-presets-videos.js";
import { FoldersEssentials } from "./resources/folders-essentials.js";
import { FoldersItems } from "./resources/folders-items.js";
import { FoldersVideos } from "./resources/folders-videos.js";
import { GroupsEssentials } from "./resources/groups-essentials.js";
import { GroupsSubscriptions } from "./resources/groups-subscriptions.js";
import { GroupsUsers } from "./resources/groups-users.js";
import { GroupsVideos } from "./resources/groups-videos.js";
import { LikesEssentials } from "./resources/likes-essentials.js";
import { LiveAnalytics } from "./resources/live-analytics.js";
import { LiveAudioTracks } from "./resources/live-audio-tracks.js";
import { LiveEmbedPrivacy } from "./resources/live-embed-privacy.js";
import { LiveEssentials } from "./resources/live-essentials.js";
import { LiveEventActivation } from "./resources/live-event-activation.js";
import { LiveEventAutomatedClosedCaptions } from "./resources/live-event-automated-closed-captions.js";
import { LiveEventDestinations } from "./resources/live-event-destinations.js";
import { LiveEventEnd } from "./resources/live-event-end.js";
import { LiveEventLowLatency } from "./resources/live-event-low-latency.js";
import { LiveEventM3U8Playback } from "./resources/live-event-m3-u8-playback.js";
import { LiveEventSessions } from "./resources/live-event-sessions.js";
import { LiveEventThumbnails } from "./resources/live-event-thumbnails.js";
import { LiveEventVideos } from "./resources/live-event-videos.js";
import { LiveGraphics } from "./resources/live-graphics.js";
import { LiveScenes } from "./resources/live-scenes.js";
import { OnDemandBackgrounds } from "./resources/on-demand-backgrounds.js";
import { OnDemandEssentials } from "./resources/on-demand-essentials.js";
import { OnDemandGenres } from "./resources/on-demand-genres.js";
import { OnDemandPosters } from "./resources/on-demand-posters.js";
import { OnDemandPromotions } from "./resources/on-demand-promotions.js";
import { OnDemandPurchasesAndRentals } from "./resources/on-demand-purchases-and-rentals.js";
import { OnDemandRegions } from "./resources/on-demand-regions.js";
import { OnDemandSeasons } from "./resources/on-demand-seasons.js";
import { OnDemandVideos } from "./resources/on-demand-videos.js";
import { PaymentsEssentials } from "./resources/payments-essentials.js";
import { PortfoliosEssentials } from "./resources/portfolios-essentials.js";
import { PortfoliosVideos } from "./resources/portfolios-videos.js";
import { SearchFederated } from "./resources/search-federated.js";
import { ShowcasesCustomShowcaseLogos } from "./resources/showcases-custom-showcase-logos.js";
import { ShowcasesCustomShowcaseThumbnails } from "./resources/showcases-custom-showcase-thumbnails.js";
import { ShowcasesEssentials } from "./resources/showcases-essentials.js";
import { ShowcasesShowcaseVideos } from "./resources/showcases-showcase-videos.js";
import { SubscriptionPlansEssentials } from "./resources/subscription-plans-essentials.js";
import { TagsEssentials } from "./resources/tags-essentials.js";
import { TeamsEssentials } from "./resources/teams-essentials.js";
import { TeamsMembers } from "./resources/teams-members.js";
import { TutorialEssentials } from "./resources/tutorial-essentials.js";
import { UsersAnalytics } from "./resources/users-analytics.js";
import { UsersEssentials } from "./resources/users-essentials.js";
import { UsersFeeds } from "./resources/users-feeds.js";
import { UsersFollowers } from "./resources/users-followers.js";
import { UsersLms } from "./resources/users-lms.js";
import { UsersPictures } from "./resources/users-pictures.js";
import { UsersSearch } from "./resources/users-search.js";
import { UsersWatchHistory } from "./resources/users-watch-history.js";
import { VideosAi } from "./resources/videos-ai.js";
import { VideosAnimatedThumbnails } from "./resources/videos-animated-thumbnails.js";
import { VideosChapters } from "./resources/videos-chapters.js";
import { VideosContentRatings } from "./resources/videos-content-ratings.js";
import { VideosCreativeCommons } from "./resources/videos-creative-commons.js";
import { VideosCredits } from "./resources/videos-credits.js";
import { VideosEmbedPrivacy } from "./resources/videos-embed-privacy.js";
import { VideosEssentials } from "./resources/videos-essentials.js";
import { VideosFragments } from "./resources/videos-fragments.js";
import { VideosLanguages } from "./resources/videos-languages.js";
import { VideosLiveM3U8Playback } from "./resources/videos-live-m3-u8-playback.js";
import { VideosModeration } from "./resources/videos-moderation.js";
import { VideosNondestructiveTrimming } from "./resources/videos-nondestructive-trimming.js";
import { VideosRecommendations } from "./resources/videos-recommendations.js";
import { VideosShowcases } from "./resources/videos-showcases.js";
import { VideosTags } from "./resources/videos-tags.js";
import { VideosTextTracks } from "./resources/videos-text-tracks.js";
import { VideosThumbnails } from "./resources/videos-thumbnails.js";
import { VideosTranscripts } from "./resources/videos-transcripts.js";
import { VideosUnlistedVideos } from "./resources/videos-unlisted-videos.js";
import { VideosUploads } from "./resources/videos-uploads.js";
import { VideosVersions } from "./resources/videos-versions.js";
import { VideosVideoComments } from "./resources/videos-video-comments.js";
import { WatchLaterQueueEssentials } from "./resources/watch-later-queue-essentials.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Build something great. Vimeo's API supports flexible, high-quality video integration with your
 * custom apps.
 */
export class VimeoApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #apiAppsWebhooks?: ApiAppsWebhooks;
  #apiInformationEssentials?: ApiInformationEssentials;
  #authenticationExtrasAuthenticate?: AuthenticationExtrasAuthenticate;
  #authenticationExtrasConvert?: AuthenticationExtrasConvert;
  #authenticationExtrasEssentials?: AuthenticationExtrasEssentials;
  #authenticationExtrasExchange?: AuthenticationExtrasExchange;
  #categoriesChannels?: CategoriesChannels;
  #categoriesEssentials?: CategoriesEssentials;
  #categoriesGroups?: CategoriesGroups;
  #categoriesUsers?: CategoriesUsers;
  #categoriesVideos?: CategoriesVideos;
  #channelsCategories?: ChannelsCategories;
  #channelsEssentials?: ChannelsEssentials;
  #channelsModerators?: ChannelsModerators;
  #channelsPrivateChannelMembers?: ChannelsPrivateChannelMembers;
  #channelsSubscriptionsAndSubscribers?: ChannelsSubscriptionsAndSubscribers;
  #channelsTags?: ChannelsTags;
  #channelsVideos?: ChannelsVideos;
  #embedPresetsCustomLogos?: EmbedPresetsCustomLogos;
  #embedPresetsEssentials?: EmbedPresetsEssentials;
  #embedPresetsFolders?: EmbedPresetsFolders;
  #embedPresetsTimelineEvents?: EmbedPresetsTimelineEvents;
  #embedPresetsVideos?: EmbedPresetsVideos;
  #foldersEssentials?: FoldersEssentials;
  #foldersItems?: FoldersItems;
  #foldersVideos?: FoldersVideos;
  #groupsEssentials?: GroupsEssentials;
  #groupsSubscriptions?: GroupsSubscriptions;
  #groupsUsers?: GroupsUsers;
  #groupsVideos?: GroupsVideos;
  #likesEssentials?: LikesEssentials;
  #liveAnalytics?: LiveAnalytics;
  #liveAudioTracks?: LiveAudioTracks;
  #liveEmbedPrivacy?: LiveEmbedPrivacy;
  #liveEssentials?: LiveEssentials;
  #liveEventM3U8Playback?: LiveEventM3U8Playback;
  #liveEventActivation?: LiveEventActivation;
  #liveEventAutomatedClosedCaptions?: LiveEventAutomatedClosedCaptions;
  #liveEventDestinations?: LiveEventDestinations;
  #liveEventEnd?: LiveEventEnd;
  #liveEventLowLatency?: LiveEventLowLatency;
  #liveEventSessions?: LiveEventSessions;
  #liveEventThumbnails?: LiveEventThumbnails;
  #liveEventVideos?: LiveEventVideos;
  #liveGraphics?: LiveGraphics;
  #liveScenes?: LiveScenes;
  #onDemandBackgrounds?: OnDemandBackgrounds;
  #onDemandEssentials?: OnDemandEssentials;
  #onDemandGenres?: OnDemandGenres;
  #onDemandPosters?: OnDemandPosters;
  #onDemandPromotions?: OnDemandPromotions;
  #onDemandPurchasesAndRentals?: OnDemandPurchasesAndRentals;
  #onDemandRegions?: OnDemandRegions;
  #onDemandSeasons?: OnDemandSeasons;
  #onDemandVideos?: OnDemandVideos;
  #paymentsEssentials?: PaymentsEssentials;
  #portfoliosEssentials?: PortfoliosEssentials;
  #portfoliosVideos?: PortfoliosVideos;
  #searchFederated?: SearchFederated;
  #showcasesCustomShowcaseLogos?: ShowcasesCustomShowcaseLogos;
  #showcasesCustomShowcaseThumbnails?: ShowcasesCustomShowcaseThumbnails;
  #showcasesEssentials?: ShowcasesEssentials;
  #showcasesShowcaseVideos?: ShowcasesShowcaseVideos;
  #subscriptionPlansEssentials?: SubscriptionPlansEssentials;
  #tagsEssentials?: TagsEssentials;
  #teamsEssentials?: TeamsEssentials;
  #teamsMembers?: TeamsMembers;
  #tutorialEssentials?: TutorialEssentials;
  #usersAnalytics?: UsersAnalytics;
  #usersEssentials?: UsersEssentials;
  #usersFeeds?: UsersFeeds;
  #usersFollowers?: UsersFollowers;
  #usersLms?: UsersLms;
  #usersPictures?: UsersPictures;
  #usersSearch?: UsersSearch;
  #usersWatchHistory?: UsersWatchHistory;
  #videosAi?: VideosAi;
  #videosAnimatedThumbnails?: VideosAnimatedThumbnails;
  #videosChapters?: VideosChapters;
  #videosContentRatings?: VideosContentRatings;
  #videosCreativeCommons?: VideosCreativeCommons;
  #videosCredits?: VideosCredits;
  #videosEmbedPrivacy?: VideosEmbedPrivacy;
  #videosEssentials?: VideosEssentials;
  #videosFragments?: VideosFragments;
  #videosLanguages?: VideosLanguages;
  #videosLiveM3U8Playback?: VideosLiveM3U8Playback;
  #videosModeration?: VideosModeration;
  #videosNondestructiveTrimming?: VideosNondestructiveTrimming;
  #videosRecommendations?: VideosRecommendations;
  #videosShowcases?: VideosShowcases;
  #videosTags?: VideosTags;
  #videosTextTracks?: VideosTextTracks;
  #videosThumbnails?: VideosThumbnails;
  #videosTranscripts?: VideosTranscripts;
  #videosUnlistedVideos?: VideosUnlistedVideos;
  #videosUploads?: VideosUploads;
  #videosVersions?: VideosVersions;
  #videosVideoComments?: VideosVideoComments;
  #watchLaterQueueEssentials?: WatchLaterQueueEssentials;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "VIMEO_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "VimeoApiClient/3.4.9 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "3.4.9", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Use these methods to work with webhooks for API apps.
   */
  get apiAppsWebhooks(): ApiAppsWebhooks {
    return (this.#apiAppsWebhooks ??= new ApiAppsWebhooks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for retrieving information about the Vimeo API.
   */
  get apiInformationEssentials(): ApiInformationEssentials {
    return (this.#apiInformationEssentials ??= new ApiInformationEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to perform authentication.
   */
  get authenticationExtrasAuthenticate(): AuthenticationExtrasAuthenticate {
    return (this.#authenticationExtrasAuthenticate ??= new AuthenticationExtrasAuthenticate(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to convert authentication resources.
   */
  get authenticationExtrasConvert(): AuthenticationExtrasConvert {
    return (this.#authenticationExtrasConvert ??= new AuthenticationExtrasConvert(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * These are the most common methods for working with authentication.
   */
  get authenticationExtrasEssentials(): AuthenticationExtrasEssentials {
    return (this.#authenticationExtrasEssentials ??= new AuthenticationExtrasEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to exchange authentication resources.
   */
  get authenticationExtrasExchange(): AuthenticationExtrasExchange {
    return (this.#authenticationExtrasExchange ??= new AuthenticationExtrasExchange(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with channels in a category.
   */
  get categoriesChannels(): CategoriesChannels {
    return (this.#categoriesChannels ??= new CategoriesChannels(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for working with categories.
   */
  get categoriesEssentials(): CategoriesEssentials {
    return (this.#categoriesEssentials ??= new CategoriesEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with groups in a category.
   */
  get categoriesGroups(): CategoriesGroups {
    return (this.#categoriesGroups ??= new CategoriesGroups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to manage user interactions with a category.
   */
  get categoriesUsers(): CategoriesUsers {
    return (this.#categoriesUsers ??= new CategoriesUsers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with videos in a category.
   */
  get categoriesVideos(): CategoriesVideos {
    return (this.#categoriesVideos ??= new CategoriesVideos(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with channel categories.
   */
  get channelsCategories(): ChannelsCategories {
    return (this.#channelsCategories ??= new ChannelsCategories(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for working with channels.
   */
  get channelsEssentials(): ChannelsEssentials {
    return (this.#channelsEssentials ??= new ChannelsEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with channel moderators.
   */
  get channelsModerators(): ChannelsModerators {
    return (this.#channelsModerators ??= new ChannelsModerators(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with private channel members.
   */
  get channelsPrivateChannelMembers(): ChannelsPrivateChannelMembers {
    return (this.#channelsPrivateChannelMembers ??= new ChannelsPrivateChannelMembers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with channel subscriptions.
   */
  get channelsSubscriptionsAndSubscribers(): ChannelsSubscriptionsAndSubscribers {
    return (this.#channelsSubscriptionsAndSubscribers ??= new ChannelsSubscriptionsAndSubscribers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with tags in channels.
   */
  get channelsTags(): ChannelsTags {
    return (this.#channelsTags ??= new ChannelsTags(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with videos in channels.
   */
  get channelsVideos(): ChannelsVideos {
    return (this.#channelsVideos ??= new ChannelsVideos(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Vimeo members with access to embed presets can include their own logo images in the embedded
   * player. These custom logos can be part of an embed preset.
   *
   * Use these methods to work with custom logos.
   */
  get embedPresetsCustomLogos(): EmbedPresetsCustomLogos {
    return (this.#embedPresetsCustomLogos ??= new EmbedPresetsCustomLogos(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * These are the most common methods for working with embed presets.
   */
  get embedPresetsEssentials(): EmbedPresetsEssentials {
    return (this.#embedPresetsEssentials ??= new EmbedPresetsEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with folders that have embed presets.
   */
  get embedPresetsFolders(): EmbedPresetsFolders {
    return (this.#embedPresetsFolders ??= new EmbedPresetsFolders(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with timeline events.
   */
  get embedPresetsTimelineEvents(): EmbedPresetsTimelineEvents {
    return (this.#embedPresetsTimelineEvents ??= new EmbedPresetsTimelineEvents(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with videos that have embed presets.
   */
  get embedPresetsVideos(): EmbedPresetsVideos {
    return (this.#embedPresetsVideos ??= new EmbedPresetsVideos(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for working with folders.
   */
  get foldersEssentials(): FoldersEssentials {
    return (this.#foldersEssentials ??= new FoldersEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to manage items in folders.
   */
  get foldersItems(): FoldersItems {
    return (this.#foldersItems ??= new FoldersItems(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to manage videos in folders.
   */
  get foldersVideos(): FoldersVideos {
    return (this.#foldersVideos ??= new FoldersVideos(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for working with groups.
   */
  get groupsEssentials(): GroupsEssentials {
    return (this.#groupsEssentials ??= new GroupsEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to manage group membership.
   */
  get groupsSubscriptions(): GroupsSubscriptions {
    return (this.#groupsSubscriptions ??= new GroupsSubscriptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to manage group members.
   */
  get groupsUsers(): GroupsUsers {
    return (this.#groupsUsers ??= new GroupsUsers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to manage group videos.
   */
  get groupsVideos(): GroupsVideos {
    return (this.#groupsVideos ??= new GroupsVideos(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for working with likes.
   */
  get likesEssentials(): LikesEssentials {
    return (this.#likesEssentials ??= new LikesEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with analytics for events.
   */
  get liveAnalytics(): LiveAnalytics {
    return (this.#liveAnalytics ??= new LiveAnalytics(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with event audio tracks.
   */
  get liveAudioTracks(): LiveAudioTracks {
    return (this.#liveAudioTracks ??= new LiveAudioTracks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with embed privacy for events.
   */
  get liveEmbedPrivacy(): LiveEmbedPrivacy {
    return (this.#liveEmbedPrivacy ??= new LiveEmbedPrivacy(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for working with events.
   */
  get liveEssentials(): LiveEssentials {
    return (this.#liveEssentials ??= new LiveEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with M3U8 playback URLs for event streams.
   */
  get liveEventM3U8Playback(): LiveEventM3U8Playback {
    return (this.#liveEventM3U8Playback ??= new LiveEventM3U8Playback(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with the activation of events.
   */
  get liveEventActivation(): LiveEventActivation {
    return (this.#liveEventActivation ??= new LiveEventActivation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with the automated closed captions preferences of events.
   */
  get liveEventAutomatedClosedCaptions(): LiveEventAutomatedClosedCaptions {
    return (this.#liveEventAutomatedClosedCaptions ??= new LiveEventAutomatedClosedCaptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with event destinations.
   */
  get liveEventDestinations(): LiveEventDestinations {
    return (this.#liveEventDestinations ??= new LiveEventDestinations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with the ending of events.
   */
  get liveEventEnd(): LiveEventEnd {
    return (this.#liveEventEnd ??= new LiveEventEnd(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to manage an event's low-latency option.
   */
  get liveEventLowLatency(): LiveEventLowLatency {
    return (this.#liveEventLowLatency ??= new LiveEventLowLatency(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with event sessions.
   */
  get liveEventSessions(): LiveEventSessions {
    return (this.#liveEventSessions ??= new LiveEventSessions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with the thumbnail images of events.
   */
  get liveEventThumbnails(): LiveEventThumbnails {
    return (this.#liveEventThumbnails ??= new LiveEventThumbnails(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with event videos.
   */
  get liveEventVideos(): LiveEventVideos {
    return (this.#liveEventVideos ??= new LiveEventVideos(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with event media.
   */
  get liveGraphics(): LiveGraphics {
    return (this.#liveGraphics ??= new LiveGraphics(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with event scenes.
   */
  get liveScenes(): LiveScenes {
    return (this.#liveScenes ??= new LiveScenes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with background images on an On Demand page.
   */
  get onDemandBackgrounds(): OnDemandBackgrounds {
    return (this.#onDemandBackgrounds ??= new OnDemandBackgrounds(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * These are the most common methods for working with On Demand pages.
   */
  get onDemandEssentials(): OnDemandEssentials {
    return (this.#onDemandEssentials ??= new OnDemandEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with On Demand genres.
   */
  get onDemandGenres(): OnDemandGenres {
    return (this.#onDemandGenres ??= new OnDemandGenres(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with poster images on On Demand pages.
   */
  get onDemandPosters(): OnDemandPosters {
    return (this.#onDemandPosters ??= new OnDemandPosters(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with promotions on On Demand pages.
   */
  get onDemandPromotions(): OnDemandPromotions {
    return (this.#onDemandPromotions ??= new OnDemandPromotions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with purchases and rentals on On Demand pages.
   */
  get onDemandPurchasesAndRentals(): OnDemandPurchasesAndRentals {
    return (this.#onDemandPurchasesAndRentals ??= new OnDemandPurchasesAndRentals(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with regions on On Demand pages.
   */
  get onDemandRegions(): OnDemandRegions {
    return (this.#onDemandRegions ??= new OnDemandRegions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with On Demand seasons.
   */
  get onDemandSeasons(): OnDemandSeasons {
    return (this.#onDemandSeasons ??= new OnDemandSeasons(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with videos on On Demand pages.
   */
  get onDemandVideos(): OnDemandVideos {
    return (this.#onDemandVideos ??= new OnDemandVideos(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for making product purchases.
   */
  get paymentsEssentials(): PaymentsEssentials {
    return (this.#paymentsEssentials ??= new PaymentsEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for working with portfolios.
   */
  get portfoliosEssentials(): PortfoliosEssentials {
    return (this.#portfoliosEssentials ??= new PortfoliosEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to manage portfolio videos.
   */
  get portfoliosVideos(): PortfoliosVideos {
    return (this.#portfoliosVideos ??= new PortfoliosVideos(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with federated searches.
   */
  get searchFederated(): SearchFederated {
    return (this.#searchFederated ??= new SearchFederated(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to manage custom showcase logos, or the supplementary images, usually logos,
   * that appear on a showcase's page. These images aren't the same as showcase thumbnails, or the
   * images that represent the showcase across Vimeo.
   */
  get showcasesCustomShowcaseLogos(): ShowcasesCustomShowcaseLogos {
    return (this.#showcasesCustomShowcaseLogos ??= new ShowcasesCustomShowcaseLogos(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to manage custom thumbnail images for showcases. These thumbnails come from
   * uploaded image files that aren't necessarily stills from a video.
   */
  get showcasesCustomShowcaseThumbnails(): ShowcasesCustomShowcaseThumbnails {
    return (this.#showcasesCustomShowcaseThumbnails ??= new ShowcasesCustomShowcaseThumbnails(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * These are the most common methods for working with showcases.
   */
  get showcasesEssentials(): ShowcasesEssentials {
    return (this.#showcasesEssentials ??= new ShowcasesEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to manage showcase videos.
   */
  get showcasesShowcaseVideos(): ShowcasesShowcaseVideos {
    return (this.#showcasesShowcaseVideos ??= new ShowcasesShowcaseVideos(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * These are the most common methods for working with subscription plans.
   */
  get subscriptionPlansEssentials(): SubscriptionPlansEssentials {
    return (this.#subscriptionPlansEssentials ??= new SubscriptionPlansEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * These are the most common methods for working with tags.
   */
  get tagsEssentials(): TagsEssentials {
    return (this.#tagsEssentials ??= new TagsEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for working with teams.
   */
  get teamsEssentials(): TeamsEssentials {
    return (this.#teamsEssentials ??= new TeamsEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with team members.
   */
  get teamsMembers(): TeamsMembers {
    return (this.#teamsMembers ??= new TeamsMembers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for working with the API tutorial.
   */
  get tutorialEssentials(): TutorialEssentials {
    return (this.#tutorialEssentials ??= new TutorialEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with the authenticated user's video analytics.
   */
  get usersAnalytics(): UsersAnalytics {
    return (this.#usersAnalytics ??= new UsersAnalytics(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for working with users.
   */
  get usersEssentials(): UsersEssentials {
    return (this.#usersEssentials ??= new UsersEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with user feeds.
   */
  get usersFeeds(): UsersFeeds {
    return (this.#usersFeeds ??= new UsersFeeds(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with user followers.
   */
  get usersFollowers(): UsersFollowers {
    return (this.#usersFollowers ??= new UsersFollowers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with learning management systems.
   */
  get usersLms(): UsersLms {
    return (this.#usersLms ??= new UsersLms(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with user pictures.
   */
  get usersPictures(): UsersPictures {
    return (this.#usersPictures ??= new UsersPictures(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to search for users.
   */
  get usersSearch(): UsersSearch {
    return (this.#usersSearch ??= new UsersSearch(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with a user's watch history.
   */
  get usersWatchHistory(): UsersWatchHistory {
    return (this.#usersWatchHistory ??= new UsersWatchHistory(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to access Vimeo's AI-powered video intelligence features, including automatic
   * transcription, subtitle translation, audio dubbing, and video Q&A. All endpoints require the
   * `ai` OAuth scope and are available exclusively to Enterprise accounts. POST requests are
   * subject to per-endpoint rate limits — contact your account team or Vimeo Sales to increase your
   * allotment. Vimeo AI feature use is subject to [Vimeo's AI
   * Addendum](https://vimeo.com/legal/service-terms/ai).
   */
  get videosAi(): VideosAi {
    return (this.#videosAi ??= new VideosAi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with animated thumbnails for videos.
   */
  get videosAnimatedThumbnails(): VideosAnimatedThumbnails {
    return (this.#videosAnimatedThumbnails ??= new VideosAnimatedThumbnails(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with video chapters.
   */
  get videosChapters(): VideosChapters {
    return (this.#videosChapters ??= new VideosChapters(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with video content ratings.
   */
  get videosContentRatings(): VideosContentRatings {
    return (this.#videosContentRatings ??= new VideosContentRatings(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with Creative Commons licenses.
   */
  get videosCreativeCommons(): VideosCreativeCommons {
    return (this.#videosCreativeCommons ??= new VideosCreativeCommons(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with credited users in videos.
   */
  get videosCredits(): VideosCredits {
    return (this.#videosCredits ??= new VideosCredits(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to manage the allowlist of embeddable videos.
   */
  get videosEmbedPrivacy(): VideosEmbedPrivacy {
    return (this.#videosEmbedPrivacy ??= new VideosEmbedPrivacy(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These are the most common methods for working with videos.
   */
  get videosEssentials(): VideosEssentials {
    return (this.#videosEssentials ??= new VideosEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with the video fragments for branched or segmented scrubbers.
   */
  get videosFragments(): VideosFragments {
    return (this.#videosFragments ??= new VideosFragments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with video languages.
   */
  get videosLanguages(): VideosLanguages {
    return (this.#videosLanguages ??= new VideosLanguages(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with M3U8 playback URLs for event streams.
   */
  get videosLiveM3U8Playback(): VideosLiveM3U8Playback {
    return (this.#videosLiveM3U8Playback ??= new VideosLiveM3U8Playback(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to moderate videos.
   */
  get videosModeration(): VideosModeration {
    return (this.#videosModeration ??= new VideosModeration(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with nondestructive trimming.
   */
  get videosNondestructiveTrimming(): VideosNondestructiveTrimming {
    return (this.#videosNondestructiveTrimming ??= new VideosNondestructiveTrimming(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with recommended videos.
   */
  get videosRecommendations(): VideosRecommendations {
    return (this.#videosRecommendations ??= new VideosRecommendations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with showcase videos.
   */
  get videosShowcases(): VideosShowcases {
    return (this.#videosShowcases ??= new VideosShowcases(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with associated tags.
   */
  get videosTags(): VideosTags {
    return (this.#videosTags ??= new VideosTags(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with video text tracks.
   */
  get videosTextTracks(): VideosTextTracks {
    return (this.#videosTextTracks ??= new VideosTextTracks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with video thumbnails.
   */
  get videosThumbnails(): VideosThumbnails {
    return (this.#videosThumbnails ??= new VideosThumbnails(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with video transcripts.
   */
  get videosTranscripts(): VideosTranscripts {
    return (this.#videosTranscripts ??= new VideosTranscripts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with unlisted videos.
   */
  get videosUnlistedVideos(): VideosUnlistedVideos {
    return (this.#videosUnlistedVideos ??= new VideosUnlistedVideos(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Use these methods to work with video uploads.
   */
  get videosUploads(): VideosUploads {
    return (this.#videosUploads ??= new VideosUploads(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with video versioning.
   */
  get videosVersions(): VideosVersions {
    return (this.#videosVersions ??= new VideosVersions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these methods to work with video comments.
   */
  get videosVideoComments(): VideosVideoComments {
    return (this.#videosVideoComments ??= new VideosVideoComments(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * These are the most common methods for working with a user's Watch Later queue.
   */
  get watchLaterQueueEssentials(): WatchLaterQueueEssentials {
    return (this.#watchLaterQueueEssentials ??= new WatchLaterQueueEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }
}

import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/raw-client.js";
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

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  get apiAppsWebhooks(): ApiAppsWebhooks {
    return (this.#apiAppsWebhooks ??= new ApiAppsWebhooks(this.#rawClient, this.#servers, this.#auth));
  }

  get apiInformationEssentials(): ApiInformationEssentials {
    return (this.#apiInformationEssentials ??= new ApiInformationEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get authenticationExtrasAuthenticate(): AuthenticationExtrasAuthenticate {
    return (this.#authenticationExtrasAuthenticate ??= new AuthenticationExtrasAuthenticate(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get authenticationExtrasConvert(): AuthenticationExtrasConvert {
    return (this.#authenticationExtrasConvert ??= new AuthenticationExtrasConvert(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get authenticationExtrasEssentials(): AuthenticationExtrasEssentials {
    return (this.#authenticationExtrasEssentials ??= new AuthenticationExtrasEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get authenticationExtrasExchange(): AuthenticationExtrasExchange {
    return (this.#authenticationExtrasExchange ??= new AuthenticationExtrasExchange(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get categoriesChannels(): CategoriesChannels {
    return (this.#categoriesChannels ??= new CategoriesChannels(this.#rawClient, this.#servers, this.#auth));
  }

  get categoriesEssentials(): CategoriesEssentials {
    return (this.#categoriesEssentials ??= new CategoriesEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get categoriesGroups(): CategoriesGroups {
    return (this.#categoriesGroups ??= new CategoriesGroups(this.#rawClient, this.#servers, this.#auth));
  }

  get categoriesUsers(): CategoriesUsers {
    return (this.#categoriesUsers ??= new CategoriesUsers(this.#rawClient, this.#servers, this.#auth));
  }

  get categoriesVideos(): CategoriesVideos {
    return (this.#categoriesVideos ??= new CategoriesVideos(this.#rawClient, this.#servers, this.#auth));
  }

  get channelsCategories(): ChannelsCategories {
    return (this.#channelsCategories ??= new ChannelsCategories(this.#rawClient, this.#servers, this.#auth));
  }

  get channelsEssentials(): ChannelsEssentials {
    return (this.#channelsEssentials ??= new ChannelsEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get channelsModerators(): ChannelsModerators {
    return (this.#channelsModerators ??= new ChannelsModerators(this.#rawClient, this.#servers, this.#auth));
  }

  get channelsPrivateChannelMembers(): ChannelsPrivateChannelMembers {
    return (this.#channelsPrivateChannelMembers ??= new ChannelsPrivateChannelMembers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get channelsSubscriptionsAndSubscribers(): ChannelsSubscriptionsAndSubscribers {
    return (this.#channelsSubscriptionsAndSubscribers ??= new ChannelsSubscriptionsAndSubscribers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get channelsTags(): ChannelsTags {
    return (this.#channelsTags ??= new ChannelsTags(this.#rawClient, this.#servers, this.#auth));
  }

  get channelsVideos(): ChannelsVideos {
    return (this.#channelsVideos ??= new ChannelsVideos(this.#rawClient, this.#servers, this.#auth));
  }

  get embedPresetsCustomLogos(): EmbedPresetsCustomLogos {
    return (this.#embedPresetsCustomLogos ??= new EmbedPresetsCustomLogos(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get embedPresetsEssentials(): EmbedPresetsEssentials {
    return (this.#embedPresetsEssentials ??= new EmbedPresetsEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get embedPresetsFolders(): EmbedPresetsFolders {
    return (this.#embedPresetsFolders ??= new EmbedPresetsFolders(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get embedPresetsTimelineEvents(): EmbedPresetsTimelineEvents {
    return (this.#embedPresetsTimelineEvents ??= new EmbedPresetsTimelineEvents(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get embedPresetsVideos(): EmbedPresetsVideos {
    return (this.#embedPresetsVideos ??= new EmbedPresetsVideos(this.#rawClient, this.#servers, this.#auth));
  }

  get foldersEssentials(): FoldersEssentials {
    return (this.#foldersEssentials ??= new FoldersEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get foldersItems(): FoldersItems {
    return (this.#foldersItems ??= new FoldersItems(this.#rawClient, this.#servers, this.#auth));
  }

  get foldersVideos(): FoldersVideos {
    return (this.#foldersVideos ??= new FoldersVideos(this.#rawClient, this.#servers, this.#auth));
  }

  get groupsEssentials(): GroupsEssentials {
    return (this.#groupsEssentials ??= new GroupsEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get groupsSubscriptions(): GroupsSubscriptions {
    return (this.#groupsSubscriptions ??= new GroupsSubscriptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get groupsUsers(): GroupsUsers {
    return (this.#groupsUsers ??= new GroupsUsers(this.#rawClient, this.#servers, this.#auth));
  }

  get groupsVideos(): GroupsVideos {
    return (this.#groupsVideos ??= new GroupsVideos(this.#rawClient, this.#servers, this.#auth));
  }

  get likesEssentials(): LikesEssentials {
    return (this.#likesEssentials ??= new LikesEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get liveAnalytics(): LiveAnalytics {
    return (this.#liveAnalytics ??= new LiveAnalytics(this.#rawClient, this.#servers, this.#auth));
  }

  get liveAudioTracks(): LiveAudioTracks {
    return (this.#liveAudioTracks ??= new LiveAudioTracks(this.#rawClient, this.#servers, this.#auth));
  }

  get liveEmbedPrivacy(): LiveEmbedPrivacy {
    return (this.#liveEmbedPrivacy ??= new LiveEmbedPrivacy(this.#rawClient, this.#servers, this.#auth));
  }

  get liveEssentials(): LiveEssentials {
    return (this.#liveEssentials ??= new LiveEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get liveEventM3U8Playback(): LiveEventM3U8Playback {
    return (this.#liveEventM3U8Playback ??= new LiveEventM3U8Playback(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get liveEventActivation(): LiveEventActivation {
    return (this.#liveEventActivation ??= new LiveEventActivation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get liveEventAutomatedClosedCaptions(): LiveEventAutomatedClosedCaptions {
    return (this.#liveEventAutomatedClosedCaptions ??= new LiveEventAutomatedClosedCaptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get liveEventDestinations(): LiveEventDestinations {
    return (this.#liveEventDestinations ??= new LiveEventDestinations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get liveEventEnd(): LiveEventEnd {
    return (this.#liveEventEnd ??= new LiveEventEnd(this.#rawClient, this.#servers, this.#auth));
  }

  get liveEventLowLatency(): LiveEventLowLatency {
    return (this.#liveEventLowLatency ??= new LiveEventLowLatency(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get liveEventSessions(): LiveEventSessions {
    return (this.#liveEventSessions ??= new LiveEventSessions(this.#rawClient, this.#servers, this.#auth));
  }

  get liveEventThumbnails(): LiveEventThumbnails {
    return (this.#liveEventThumbnails ??= new LiveEventThumbnails(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get liveEventVideos(): LiveEventVideos {
    return (this.#liveEventVideos ??= new LiveEventVideos(this.#rawClient, this.#servers, this.#auth));
  }

  get liveGraphics(): LiveGraphics {
    return (this.#liveGraphics ??= new LiveGraphics(this.#rawClient, this.#servers, this.#auth));
  }

  get liveScenes(): LiveScenes {
    return (this.#liveScenes ??= new LiveScenes(this.#rawClient, this.#servers, this.#auth));
  }

  get onDemandBackgrounds(): OnDemandBackgrounds {
    return (this.#onDemandBackgrounds ??= new OnDemandBackgrounds(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get onDemandEssentials(): OnDemandEssentials {
    return (this.#onDemandEssentials ??= new OnDemandEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get onDemandGenres(): OnDemandGenres {
    return (this.#onDemandGenres ??= new OnDemandGenres(this.#rawClient, this.#servers, this.#auth));
  }

  get onDemandPosters(): OnDemandPosters {
    return (this.#onDemandPosters ??= new OnDemandPosters(this.#rawClient, this.#servers, this.#auth));
  }

  get onDemandPromotions(): OnDemandPromotions {
    return (this.#onDemandPromotions ??= new OnDemandPromotions(this.#rawClient, this.#servers, this.#auth));
  }

  get onDemandPurchasesAndRentals(): OnDemandPurchasesAndRentals {
    return (this.#onDemandPurchasesAndRentals ??= new OnDemandPurchasesAndRentals(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get onDemandRegions(): OnDemandRegions {
    return (this.#onDemandRegions ??= new OnDemandRegions(this.#rawClient, this.#servers, this.#auth));
  }

  get onDemandSeasons(): OnDemandSeasons {
    return (this.#onDemandSeasons ??= new OnDemandSeasons(this.#rawClient, this.#servers, this.#auth));
  }

  get onDemandVideos(): OnDemandVideos {
    return (this.#onDemandVideos ??= new OnDemandVideos(this.#rawClient, this.#servers, this.#auth));
  }

  get paymentsEssentials(): PaymentsEssentials {
    return (this.#paymentsEssentials ??= new PaymentsEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get portfoliosEssentials(): PortfoliosEssentials {
    return (this.#portfoliosEssentials ??= new PortfoliosEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get portfoliosVideos(): PortfoliosVideos {
    return (this.#portfoliosVideos ??= new PortfoliosVideos(this.#rawClient, this.#servers, this.#auth));
  }

  get searchFederated(): SearchFederated {
    return (this.#searchFederated ??= new SearchFederated(this.#rawClient, this.#servers, this.#auth));
  }

  get showcasesCustomShowcaseLogos(): ShowcasesCustomShowcaseLogos {
    return (this.#showcasesCustomShowcaseLogos ??= new ShowcasesCustomShowcaseLogos(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get showcasesCustomShowcaseThumbnails(): ShowcasesCustomShowcaseThumbnails {
    return (this.#showcasesCustomShowcaseThumbnails ??= new ShowcasesCustomShowcaseThumbnails(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get showcasesEssentials(): ShowcasesEssentials {
    return (this.#showcasesEssentials ??= new ShowcasesEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get showcasesShowcaseVideos(): ShowcasesShowcaseVideos {
    return (this.#showcasesShowcaseVideos ??= new ShowcasesShowcaseVideos(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get subscriptionPlansEssentials(): SubscriptionPlansEssentials {
    return (this.#subscriptionPlansEssentials ??= new SubscriptionPlansEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get tagsEssentials(): TagsEssentials {
    return (this.#tagsEssentials ??= new TagsEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get teamsEssentials(): TeamsEssentials {
    return (this.#teamsEssentials ??= new TeamsEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get teamsMembers(): TeamsMembers {
    return (this.#teamsMembers ??= new TeamsMembers(this.#rawClient, this.#servers, this.#auth));
  }

  get tutorialEssentials(): TutorialEssentials {
    return (this.#tutorialEssentials ??= new TutorialEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get usersAnalytics(): UsersAnalytics {
    return (this.#usersAnalytics ??= new UsersAnalytics(this.#rawClient, this.#servers, this.#auth));
  }

  get usersEssentials(): UsersEssentials {
    return (this.#usersEssentials ??= new UsersEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get usersFeeds(): UsersFeeds {
    return (this.#usersFeeds ??= new UsersFeeds(this.#rawClient, this.#servers, this.#auth));
  }

  get usersFollowers(): UsersFollowers {
    return (this.#usersFollowers ??= new UsersFollowers(this.#rawClient, this.#servers, this.#auth));
  }

  get usersLms(): UsersLms {
    return (this.#usersLms ??= new UsersLms(this.#rawClient, this.#servers, this.#auth));
  }

  get usersPictures(): UsersPictures {
    return (this.#usersPictures ??= new UsersPictures(this.#rawClient, this.#servers, this.#auth));
  }

  get usersSearch(): UsersSearch {
    return (this.#usersSearch ??= new UsersSearch(this.#rawClient, this.#servers, this.#auth));
  }

  get usersWatchHistory(): UsersWatchHistory {
    return (this.#usersWatchHistory ??= new UsersWatchHistory(this.#rawClient, this.#servers, this.#auth));
  }

  get videosAi(): VideosAi {
    return (this.#videosAi ??= new VideosAi(this.#rawClient, this.#servers, this.#auth));
  }

  get videosAnimatedThumbnails(): VideosAnimatedThumbnails {
    return (this.#videosAnimatedThumbnails ??= new VideosAnimatedThumbnails(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videosChapters(): VideosChapters {
    return (this.#videosChapters ??= new VideosChapters(this.#rawClient, this.#servers, this.#auth));
  }

  get videosContentRatings(): VideosContentRatings {
    return (this.#videosContentRatings ??= new VideosContentRatings(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videosCreativeCommons(): VideosCreativeCommons {
    return (this.#videosCreativeCommons ??= new VideosCreativeCommons(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videosCredits(): VideosCredits {
    return (this.#videosCredits ??= new VideosCredits(this.#rawClient, this.#servers, this.#auth));
  }

  get videosEmbedPrivacy(): VideosEmbedPrivacy {
    return (this.#videosEmbedPrivacy ??= new VideosEmbedPrivacy(this.#rawClient, this.#servers, this.#auth));
  }

  get videosEssentials(): VideosEssentials {
    return (this.#videosEssentials ??= new VideosEssentials(this.#rawClient, this.#servers, this.#auth));
  }

  get videosFragments(): VideosFragments {
    return (this.#videosFragments ??= new VideosFragments(this.#rawClient, this.#servers, this.#auth));
  }

  get videosLanguages(): VideosLanguages {
    return (this.#videosLanguages ??= new VideosLanguages(this.#rawClient, this.#servers, this.#auth));
  }

  get videosLiveM3U8Playback(): VideosLiveM3U8Playback {
    return (this.#videosLiveM3U8Playback ??= new VideosLiveM3U8Playback(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videosModeration(): VideosModeration {
    return (this.#videosModeration ??= new VideosModeration(this.#rawClient, this.#servers, this.#auth));
  }

  get videosNondestructiveTrimming(): VideosNondestructiveTrimming {
    return (this.#videosNondestructiveTrimming ??= new VideosNondestructiveTrimming(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videosRecommendations(): VideosRecommendations {
    return (this.#videosRecommendations ??= new VideosRecommendations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videosShowcases(): VideosShowcases {
    return (this.#videosShowcases ??= new VideosShowcases(this.#rawClient, this.#servers, this.#auth));
  }

  get videosTags(): VideosTags {
    return (this.#videosTags ??= new VideosTags(this.#rawClient, this.#servers, this.#auth));
  }

  get videosTextTracks(): VideosTextTracks {
    return (this.#videosTextTracks ??= new VideosTextTracks(this.#rawClient, this.#servers, this.#auth));
  }

  get videosThumbnails(): VideosThumbnails {
    return (this.#videosThumbnails ??= new VideosThumbnails(this.#rawClient, this.#servers, this.#auth));
  }

  get videosTranscripts(): VideosTranscripts {
    return (this.#videosTranscripts ??= new VideosTranscripts(this.#rawClient, this.#servers, this.#auth));
  }

  get videosUnlistedVideos(): VideosUnlistedVideos {
    return (this.#videosUnlistedVideos ??= new VideosUnlistedVideos(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videosUploads(): VideosUploads {
    return (this.#videosUploads ??= new VideosUploads(this.#rawClient, this.#servers, this.#auth));
  }

  get videosVersions(): VideosVersions {
    return (this.#videosVersions ??= new VideosVersions(this.#rawClient, this.#servers, this.#auth));
  }

  get videosVideoComments(): VideosVideoComments {
    return (this.#videosVideoComments ??= new VideosVideoComments(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get watchLaterQueueEssentials(): WatchLaterQueueEssentials {
    return (this.#watchLaterQueueEssentials ??= new WatchLaterQueueEssentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }
}

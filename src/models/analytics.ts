import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";
import { metadata12Schema, type Metadata12 } from "./metadata12.js";
import { streamingTypeSchema, type StreamingType } from "./streaming-type.js";

export type Analytics = {
  /** The language of the audio track. */
  audioTrackLanguage: string;
  /** The provenance of the audio track. */
  audioTrackProvenance: string;
  /** The type of the audio track. */
  audioTrackType: string;
  /**
   * The average percent watched in seconds of the corresponding Vimeo content.
   *
   * @deprecated
   */
  averagePercentWatched: number;
  /**
   * The average time watched in seconds of the corresponding Vimeo content.
   *
   * @deprecated
   */
  averageTimeWatched: number;
  /** The name of the browser. */
  browserName: string;
  /** The name of the city. */
  cityName: string;
  /** The number of times that more than 95 percent of a video's content was played. */
  completions: number;
  country: Country;
  /** The country code in ISO-3166 format. */
  countryCode: string;
  /** The name of the country. */
  countryName: string;
  /** The type of device. */
  deviceType: string;
  /** The number of downloads of the corresponding Vimeo content. */
  downloads: number;
  /**
   * The number of DRM licenses used. _This field is available only to users with the DRM feature._
   */
  drmLicensesUsed: number;
  /** The domain name of the website. */
  embedDomain: string;
  /** The path of the website URL. */
  embedDomainPath: string;
  /** The end time of the time interval in ISO 8601 format. */
  endDate: string;
  /** The number of finishes of the corresponding Vimeo content. */
  finishes: number;
  /** The total number of five-star ranking clicks available in each video. */
  fiveStarClicks: number;
  /** The total number of four-star ranking clicks available in each video. */
  fourStarClicks: number;
  /** The number of impressions of the corresponding Vimeo content. */
  impressions: number;
  /** The average percent watched in seconds of the corresponding Vimeo content. */
  meanPercentWatched: number;
  /** The average time watched in seconds of the corresponding Vimeo content. */
  meanSecondsWatched: number;
  metadata: Metadata12;
  /** The total number of one-star ranking clicks available in each video. */
  oneStarClicks: number;
  /** The name of the operating system. */
  osName: string;
  /** The average ranking rating for ranking widget clicks in each video. */
  rankingWidgetAverageRating: number;
  /** The total number of ranking widget clicks available in each video. */
  rankingWidgetClicks: number;
  /** The ISO 3166-2 region code. */
  regionCode: string;
  /** The name of the region. */
  regionName: string;
  /** The start time of the time interval in ISO 8601 format. */
  startDate: string;
  /**
   * The streaming type of the video.
   *
   * Option descriptions:
   *  * `live` - The video is streamed in real time.
   *  * `non-live` - The video isn't streamed in real time.
   */
  streamingType: StreamingType;
  /** The language of the text track. */
  textTrackLanguage: string;
  /** The provenance of the text track. */
  textTrackProvenance: string;
  /** The type of the text track. */
  textTrackType: string;
  /** The number of impressions from all non-Vimeo players. */
  thirdPartyImpressions: number;
  /** The total number of three-star ranking clicks available in each video. */
  threeStarClicks: number;
  /** The total number of thumbs-down clicks available in each video. */
  thumbsDownClicks: number;
  /** The total number of thumbs-up clicks available in each video. */
  thumbsUpClicks: number;
  /** The average thumbs rating for thumbs widget clicks in each video. */
  thumbsWidgetAverageRating: number;
  /** The total number of thumbs widget clicks available in each video. */
  thumbsWidgetClicks: number;
  /** The total time watched in seconds of the corresponding Vimeo content. */
  totalSecondsWatched: number;
  /** The number of seconds watched, including repeats of the corresponding Vimeo content. */
  totalSecondsWatchedIncludingRepeats: number;
  /**
   * The total time watched in seconds of the corresponding Vimeo content.
   *
   * @deprecated
   */
  totalTimeWatched: number;
  /** The total number of two-star ranking clicks available in each video. */
  twoStarClicks: number;
  /** The number of unique impressions of the corresponding Vimeo content. */
  uniqueImpressions: number;
  /** The number of unique viewers of the corresponding Vimeo content. */
  uniqueViewers: number;
  /** The number of unique views of the corresponding Vimeo content. */
  uniqueViews: number;
  /** The number of views of the corresponding Vimeo content. */
  views: number;
};

export const analyticsSchema: Schema<Analytics> = s.object<Analytics>({
  audioTrackLanguage: s.string(),
  audioTrackProvenance: s.string(),
  audioTrackType: s.string(),
  averagePercentWatched: s.float64(),
  averageTimeWatched: s.float64(),
  browserName: s.string(),
  cityName: s.string(),
  completions: s.float64(),
  country: countrySchema,
  countryCode: s.string(),
  countryName: s.string(),
  deviceType: s.string(),
  downloads: s.float64(),
  drmLicensesUsed: s.float64(),
  embedDomain: s.string(),
  embedDomainPath: s.string(),
  endDate: s.string(),
  finishes: s.float64(),
  fiveStarClicks: s.float64(),
  fourStarClicks: s.float64(),
  impressions: s.float64(),
  meanPercentWatched: s.float64(),
  meanSecondsWatched: s.float64(),
  metadata: metadata12Schema,
  oneStarClicks: s.float64(),
  osName: s.string(),
  rankingWidgetAverageRating: s.float64(),
  rankingWidgetClicks: s.float64(),
  regionCode: s.string(),
  regionName: s.string(),
  startDate: s.string(),
  streamingType: streamingTypeSchema,
  textTrackLanguage: s.string(),
  textTrackProvenance: s.string(),
  textTrackType: s.string(),
  thirdPartyImpressions: s.float64(),
  threeStarClicks: s.float64(),
  thumbsDownClicks: s.float64(),
  thumbsUpClicks: s.float64(),
  thumbsWidgetAverageRating: s.float64(),
  thumbsWidgetClicks: s.float64(),
  totalSecondsWatched: s.float64(),
  totalSecondsWatchedIncludingRepeats: s.float64(),
  totalTimeWatched: s.float64(),
  twoStarClicks: s.float64(),
  uniqueImpressions: s.float64(),
  uniqueViewers: s.float64(),
  uniqueViews: s.float64(),
  views: s.float64(),
  _keysMap: {
    audioTrackLanguage: "audio_track_language",
    audioTrackProvenance: "audio_track_provenance",
    audioTrackType: "audio_track_type",
    averagePercentWatched: "average_percent_watched",
    averageTimeWatched: "average_time_watched",
    browserName: "browser_name",
    cityName: "city_name",
    countryCode: "country_code",
    countryName: "country_name",
    deviceType: "device_type",
    drmLicensesUsed: "drm_licenses_used",
    embedDomain: "embed_domain",
    embedDomainPath: "embed_domain_path",
    endDate: "end_date",
    fiveStarClicks: "five_star_clicks",
    fourStarClicks: "four_star_clicks",
    meanPercentWatched: "mean_percent_watched",
    meanSecondsWatched: "mean_seconds_watched",
    oneStarClicks: "one_star_clicks",
    osName: "os_name",
    rankingWidgetAverageRating: "ranking_widget_average_rating",
    rankingWidgetClicks: "ranking_widget_clicks",
    regionCode: "region_code",
    regionName: "region_name",
    startDate: "start_date",
    streamingType: "streaming_type",
    textTrackLanguage: "text_track_language",
    textTrackProvenance: "text_track_provenance",
    textTrackType: "text_track_type",
    thirdPartyImpressions: "third_party_impressions",
    threeStarClicks: "three_star_clicks",
    thumbsDownClicks: "thumbs_down_clicks",
    thumbsUpClicks: "thumbs_up_clicks",
    thumbsWidgetAverageRating: "thumbs_widget_average_rating",
    thumbsWidgetClicks: "thumbs_widget_clicks",
    totalSecondsWatched: "total_seconds_watched",
    totalSecondsWatchedIncludingRepeats: "total_seconds_watched_including_repeats",
    totalTimeWatched: "total_time_watched",
    twoStarClicks: "two_star_clicks",
    uniqueImpressions: "unique_impressions",
    uniqueViewers: "unique_viewers",
    uniqueViews: "unique_views",
  },
});

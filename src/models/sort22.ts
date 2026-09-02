import { s, type EnumSchema } from "../core/index.js";

export const Sort22 = {
  Comments: "comments",
  Completions: "completions",
  Country: "country",
  Default: "default",
  DeviceType: "device_type",
  Downloads: "downloads",
  DrmLicensesUsed: "drm_licenses_used",
  EmbedDomain: "embed_domain",
  Finishes: "finishes",
  FiveStarClicks: "five_star_clicks",
  FourStarClicks: "four_star_clicks",
  Impressions: "impressions",
  Like: "like",
  MeanPercentWatched: "mean_percent_watched",
  MeanSecondsWatched: "mean_seconds_watched",
  OneStarClicks: "one_star_clicks",
  RankingWidgetAverageRating: "ranking_widget_average_rating",
  RankingWidgetClicks: "ranking_widget_clicks",
  ThirdPartyImpressions: "third_party_impressions",
  ThreeStarClicks: "three_star_clicks",
  ThumbsDownClicks: "thumbs_down_clicks",
  ThumbsUpClicks: "thumbs_up_clicks",
  ThumbsWidgetAverageRating: "thumbs_widget_average_rating",
  ThumbsWidgetClicks: "thumbs_widget_clicks",
  Time: "time",
  TotalSecondsWatched: "total_seconds_watched",
  TwoStarClicks: "two_star_clicks",
  UniqueImpressions: "unique_impressions",
  UniqueViewers: "unique_viewers",
  Video: "video",
  Views: "views",
} as const;
export type Sort22 = (typeof Sort22)[keyof typeof Sort22] | (string & {});

export const sort22Schema: EnumSchema<Sort22> = s.enumOf<Sort22>(Sort22);

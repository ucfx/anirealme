export type ScoreStats = {
  score: number;
  votes: number;
  percentage: number;
};

export type AnimeStatisticsData = {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: ScoreStats[];
};

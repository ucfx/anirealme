const animeTypes = [
  { label: "TV", value: "tv" },
  { label: "Movie", value: "movie" },
  { label: "OVA", value: "ova" },
  { label: "Special", value: "special" },
  { label: "ONA", value: "ona" },
  { label: "Music", value: "music" },
  { label: "CM", value: "cm" },
  { label: "PV", value: "pv" },
  { label: "TV Special", value: "tv_special" },
];
// "airing", "complete", "upcoming"
const animeStatus = [
  {
    label: "Airing",
    value: "airing",
  },
  {
    label: "Complete",
    value: "complete",
  },
  {
    label: "Upcoming",
    value: "upcoming",
  },
];

const rating = [
  { label: "G - All Ages", value: "g" },
  { label: "PG - Children", value: "pg" },
  { label: "PG-13 - Teens 13 or older", value: "pg-13" },
  { label: "R - 17+ (violence & profanity)", value: "r" },
  { label: "R+ - Mild Nudity", value: "r+" },
  { label: "Rx - Hentai", value: "rx" },
];
const order_by = [
  { label: "Title", value: "title" },
  { label: "Start Date", value: "start_date" },
  { label: "End Date", value: "end_date" },
  { label: "Episodes", value: "episodes" },
  { label: "Score", value: "score" },
  { label: "Scored By", value: "scored_by" },
  { label: "Rank", value: "rank" },
  { label: "Popularity", value: "popularity" },
  { label: "Members", value: "members" },
  { label: "Favorites", value: "favorites" },
];

const sort = [
  { label: "Descending", value: "desc" },
  { label: "Ascending", value: "asc" },
];

export { animeTypes, animeStatus, rating, order_by, sort };

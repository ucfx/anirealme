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
  { label: "PG-13 - Teens 13 or older", value: "pg13" },
  { label: "R - 17+ (violence & profanity)", value: "r17" },
  { label: "R+ - Mild Nudity", value: "r" },
  { label: "Rx - Hentai", value: "rx" },
];
const anime_order_by = [
  { label: "Mal ID", value: "mal_id" },
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

const mangaTypes = [
  { label: "Manga", value: "manga" },
  { label: "Novel", value: "novel" },
  { label: "Light Novel", value: "lightnovel" },
  { label: "One Shot", value: "oneshot" },
  { label: "Doujin", value: "doujin" },
  { label: "Manhwa", value: "manhwa" },
  { label: "Manhua", value: "manhua" },
];
const mangaStatus = [
  { label: "Publishing", value: "publishing" },
  { label: "Complete", value: "complete" },
  { label: "Hiatus", value: "hiatus" },
  { label: "Discontinued", value: "discontinued" },
  { label: "Upcoming", value: "upcoming" },
];
const manga_order_by = [
  { label: "Mal ID", value: "mal_id" },
  { label: "Title", value: "title" },
  { label: "Start Date", value: "start_date" },
  { label: "End Date", value: "end_date" },
  { label: "Chapters", value: "chapters" },
  { label: "Volumes", value: "volumes" },
  { label: "Score", value: "score" },
  { label: "Scored By", value: "scored_by" },
  { label: "Rank", value: "rank" },
  { label: "Popularity", value: "popularity" },
  { label: "Members", value: "members" },
  { label: "Favorites", value: "favorites" },
];

export {
  animeTypes,
  animeStatus,
  mangaStatus,
  mangaTypes,
  rating,
  anime_order_by,
  manga_order_by,
  sort,
};

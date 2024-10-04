export type FilterStateType = {
  q: string;
  page: number;
  type: string;
  status: string;
  rating: string;
  order_by: string;
  sort: string;
  genres: string;
  min_score: string;
  max_score: string;
};
export function generateSearchParams({
  q = "",
  page = 1,
  type = "",
  status = "",
  rating = "",
  order_by = "",
  sort = "",
  genres = "",
  min_score = "",
  max_score = "",
}: FilterStateType) {
  const params: string[] = [];

  if (q) {
    params.push(`q=${encodeURIComponent(q)}`);
  }

  if (page > 1) {
    params.push(`page=${encodeURIComponent(page.toString())}`);
  }

  if (type) {
    params.push(`type=${encodeURIComponent(type)}`);
  }

  if (status) {
    params.push(`status=${encodeURIComponent(status)}`);
  }

  if (rating) {
    params.push(`rating=${encodeURIComponent(rating)}`);
  }

  if (order_by) {
    params.push(`order_by=${encodeURIComponent(order_by)}`);
  }

  if (sort) {
    params.push(`sort=${encodeURIComponent(sort)}`);
  }

  if (genres.length > 0) {
    params.push(`genres=${encodeURIComponent(genres)}`);
  }

  if (min_score) {
    params.push(`min_score=${encodeURIComponent(min_score)}`);
  }

  if (max_score) {
    params.push(`max_score=${encodeURIComponent(max_score)}`);
  }

  return `${params.length > 0 ? `?${params.join("&")}` : ""}`;
}

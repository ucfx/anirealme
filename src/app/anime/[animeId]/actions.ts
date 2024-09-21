"use server";
import type { PaginationType } from "@/types/pagination";
import fetchData from "@/lib/fetchData";

import { APIResponse } from "@/types/response";
import type { Character } from "@/types/character";
import { AnimeRecommendation } from "@/types/recommendation";

type Props = {
  animeId: string;
  page?: number;
  limit?: number;
};

export async function fetchCharacters({
  animeId,
  page = 1,
  limit = 10,
}: Props): Promise<APIResponse<Character[]>> {
  const offset = (page - 1) * limit;
  const response = await fetchData<Character[]>(`anime/${animeId}/characters`);

  if (!response.ok) {
    return {
      ok: false,
      message: response.message || "Failed to fetch data",
    };
  }

  const data = response.data.slice(offset, offset + limit);

  const pagination: PaginationType = {
    last_visible_page: Math.ceil(response.data.length / limit),
    has_next_page: offset + limit < response.data.length,
    current_page: page,
    items: {
      count: data.length,
      total: response.data.length,
      per_page: limit,
    },
  };

  return {
    ok: true,
    pagination,
    data,
  };
}

export async function fetchRecommendations({
  animeId,
  page = 1,
  limit = 10,
}: Props): Promise<APIResponse<AnimeRecommendation[]>> {
  const offset = (page - 1) * limit;
  const response = await fetchData<AnimeRecommendation[]>(
    `anime/${animeId}/recommendations`
  );

  if (!response.ok) {
    return {
      ok: false,
      message: response.message || "Failed to fetch data",
    };
  }

  const data = response.data.slice(offset, offset + limit);
  const pagination: PaginationType = {
    last_visible_page: Math.ceil(response.data.length / limit),
    has_next_page: offset + limit < response.data.length,
    current_page: page,
    items: {
      count: data.length,
      total: response.data.length,
      per_page: limit,
    },
  };

  return {
    ok: true,
    pagination,
    data: data,
  };
}

import fetchData from "@/lib/fetchData";
import { Pagination } from "@/types/pagination";
import { Person } from "@/types/person";
import { APIResponse } from "@/types/response";
import { Voice } from "@/types/voice";

type Props = {
  personId: string;
  page?: number;
  limit?: number;
};

export async function fetchVoices({
  personId,
  page = 1,
  limit = 10,
}: Props): Promise<APIResponse<Voice[]>> {
  const offset = (page - 1) * limit;
  const response = await fetchData<Person>(`people/${personId}/full`);

  if (!response.ok) {
    return {
      ok: false,
      message: response.message || "Failed to fetch data",
    };
  }

  const data = response.data.voices.slice(offset, offset + limit);

  const pagination: Pagination = {
    last_visible_page: Math.ceil(response.data.voices.length / limit),
    has_next_page: offset + limit < response.data.voices.length,
    current_page: page,
    items: {
      count: data.length,
      total: response.data.voices.length,
      per_page: limit,
    },
  };

  return {
    ok: true,
    pagination,
    data,
  };
}

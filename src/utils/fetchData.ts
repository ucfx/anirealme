import Bottleneck from "bottleneck";
import { APIResponse, DataResponse } from "../types";
import { LRUCache } from "lru-cache";

const limiter = new Bottleneck({
  minTime: 1000,
  maxConcurrent: 1,
});

const options = {
  max: 500,
  ttl: 3600000, // 1 hour
};

const cache = new LRUCache<string, APIResponse<any>>(options);

export default async function fetchData<T>(
  endpoint: string
): Promise<APIResponse<T>> {
  try {
    if (cache.has(endpoint)) {
      console.log("cache:", new Date().toISOString(), endpoint);
      return cache.get(endpoint) as APIResponse<T>;
    }

    const response = await limiter.schedule(() => {
      console.log("fetch:", new Date().toISOString(), endpoint);
      return fetch(`https://api.jikan.moe/v4/${endpoint}`);
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: DataResponse<T> = await response.json();
    const apiRes: APIResponse<T> = {
      ok: true,
      pagination: data.pagination,
      data: data.data,
    };

    cache.set(endpoint, apiRes);
    return apiRes;
  } catch (error: unknown) {
    console.error("Error fetching data:", error);
    return {
      ok: false,
      message: (error as Error).message,
    };
  }
}

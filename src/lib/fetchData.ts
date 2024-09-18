import { APIResponse, DataResponse } from "@/types/response";
import Bottleneck from "bottleneck";
import { LRUCache } from "lru-cache";

const limiter = new Bottleneck({
  minTime: 500,
});

const cache = new LRUCache<string, APIResponse<any>>({
  max: 500,
  ttl: 1000 * 60 * 60 * 24,
});

const ongoingRequests = new Map<string, Promise<APIResponse<any>>>();

const checkCache = (endpoint: string): [boolean, APIResponse<any> | null] => {
  if (cache.has(endpoint)) {
    console.log("cache hit:", endpoint);
    return [true, cache.get(endpoint) as APIResponse<any>];
  }
  return [false, null];
};

export default async function fetchData<T>(
  endpoint: string,
  useCache: boolean = true
): Promise<APIResponse<T>> {
  if (useCache) {
    const [isCached, cachedData] = checkCache(endpoint);
    if (isCached && cachedData) {
      return cachedData as APIResponse<T>;
    }
  }

  if (ongoingRequests.has(endpoint)) {
    console.log("Waiting for ongoing request:", endpoint);
    return ongoingRequests.get(endpoint) as Promise<APIResponse<T>>;
  }

  const requestPromise = limiter.schedule(async () => {
    console.log("Fetching data from:", endpoint);
    const response = await fetch(`https://api.jikan.moe/v4/${endpoint}`, {
      next: {
        revalidate: 60 * 60 * 24,
      },
    });

    if (!response.ok) {
      const errorRes = await response.json();

      return {
        ok: false,
        message: errorRes.message || "Failed to fetch data",
      } as APIResponse<T>;
    }

    const res: DataResponse<T> = await response.json();
    const apiRes: APIResponse<T> = {
      ok: true,
      data: res.data,
      pagination: res.pagination,
    };

    if (useCache) {
      cache.set(endpoint, apiRes);
    }

    ongoingRequests.delete(endpoint);
    return apiRes;
  });

  ongoingRequests.set(endpoint, requestPromise);

  return requestPromise;
}

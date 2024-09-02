import Bottleneck from "bottleneck";
import { APIResponse, DataResponse } from "../types";

const limiter = new Bottleneck({
  minTime: 1000,
  maxConcurrent: 1,
});

export default async function fetchData<T>(
  endpoint: string
): Promise<APIResponse<T>> {
  try {
    const response = await limiter.schedule(() => {
      console.log("fetch:", new Date().toISOString(), endpoint);
      return fetch(`https://api.jikan.moe/v4/${endpoint}`, {
        next: {
          revalidate: 60 * 60, // 1 hour
        },
      });
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: DataResponse<T> = await response.json();
    return {
      ok: true,
      pagination: data.pagination,
      data: data.data,
    };
  } catch (error: unknown) {
    console.error("Error fetching data:", error);
    return {
      ok: false,
      message: (error as Error).message,
    };
  }
}

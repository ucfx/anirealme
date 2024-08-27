import Bottleneck from "bottleneck";

const limiter = new Bottleneck({
  minTime: 400,
  maxConcurrent: 1,
});

export default async function fetchData(endpoint: string) {
  return limiter.schedule(async () => {
    console.log(`Fetching data from: https://api.jikan.moe/v4/${endpoint}`);
    const res = await fetch(`https://api.jikan.moe/v4/${endpoint}`);

    if (!res.ok) {
      // API limit reached (3req/1s), wait for 1 second and try again
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await fetch(`https://api.jikan.moe/v4/${endpoint}`);
      if (!res.ok) {
        throw new Error("Failed to fetch data from API");
      }

      return res.json();
    }

    return res.json();
  });
}

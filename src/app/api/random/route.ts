import { AnimeData } from "@/types/anime";
import fetchData from "@/lib/fetchData";

export async function GET() {
  const response = await fetchData<AnimeData[]>(`random/anime`, false);

  if (!response.ok) {
    return Response.error();
  }
  return Response.json({
    ok: true,
    data: response.data,
  });
}

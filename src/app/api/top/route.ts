import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const type = params.get("type") || "tv";
  const filter = params.get("filter") || "bypopularity";
  const rating = params.get("rating") || null;
  const limit = params.get("limit") || "10";
  const sfw = params.get("sfw") || "false";
  const page = params.get("page") || "1";

  const res = await fetch(
    `https://api.jikan.moe/v4/top/anime?type=${type}&filter=${filter}&limit=${limit}&sfw=${sfw}&page=${page}${
      rating ? `&rating=${rating}` : ""
    }`
  );
  const anime = await res.json();

  return NextResponse.json(anime);
}

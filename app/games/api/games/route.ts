import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://api.rawg.io/api";
const API_KEY = process.env.RAWG_API_KEY;

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.toString();
  const url = `${BASE_URL}/games?key=${API_KEY}&${query}`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}

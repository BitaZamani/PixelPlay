import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://api.rawg.io/api";
const API_KEY = process.env.RAWG_API_KEY;

export async function POST(req: NextRequest) {

  const { ids } = await req.json(); 
  console.log("Received IDs:", ids);
  if (!ids || !Array.isArray(ids)) {
    return NextResponse.json({ error: "Invalid IDs" }, { status: 400 });
  }

  const promises = ids.map(async (id: number) => {
    try {
      console.log("fdfghjk",id)
      const res = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
      if (!res.ok) throw new Error(`Failed to fetch game ${id}`);
      return res.json();
    } catch (error) {
      
      return error;
    }
  });

  const games = await Promise.all(promises);

  return NextResponse.json(games);
}

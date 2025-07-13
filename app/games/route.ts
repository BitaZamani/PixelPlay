
export async function GET() {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`
    );
  
    if (!res.ok) {
      return new Response("Failed to fetch RAWG data", { status: 500 });
    }
  
    const data = await res.json();
    return Response.json(data);
  }
  
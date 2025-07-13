import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Games = async ({ params }) => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`,
    { next: { revalidate: 86400 } }
  );
  const data = await res.json();

  return (
    <div>
      <section>
        {data.results.map((game) => (
          <Link key={game.id} href={"/"}>
            <Card>
              <CardContent>
                <Image
                  src={game.background_image}
                  alt={`${game.name}`}
                  height={200}
                  width={200}
                />
                <span>{game.name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Games;

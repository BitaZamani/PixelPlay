"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import { CollectionGridProps } from "@/lib/types";
import { Button } from "../ui/button";

const CollectionGrid = ({ games, length }: CollectionGridProps) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-2 md:gap-8 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-2">
        {games.slice(0, visibleCount).map((game) => (
          <Link key={game.id} href={`games/${game.id}`}>
            <Card className="h-[200px] relative hover:scale-105 transition-all duration-300">
              <CardContent>
                <Image
                  src={game.background_image}
                  alt={`${game.name}`}
                  height={200}
                  width={200}
                  unoptimized
                  className="w-full h-32"
                />
                <CardTitle className="text-xs pt-2">{game.name}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      {visibleCount < length && (
        <div className="flex justify-center">
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
};

export default CollectionGrid;

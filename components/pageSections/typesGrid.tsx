import { TypesGridProps } from "@/lib/types";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import PaginationSection from "../section/paginationSection";

const TypesGrid = ({ data, page, name }: TypesGridProps) => {
  return (
    <div>
      <section className="grid grid-cols-2 md:gap-8 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-4">
        {data.results?.map((type) => (
          <Link key={type.id} href={`${name}/${type.id}`}>
            <Card className="h-[200px] relative hover:scale-105 transition-all duration-300">
              <CardContent>
                <Image
                  src={type.background_image || type.image_background}
                  alt={`${type.name}`}
                  height={200}
                  width={200}
                  unoptimized
                  className="w-full h-32"
                />

                <CardTitle className="text-xs pt-2">{type.name}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
      <PaginationSection count={data.count} page={page} urlBase={name} />
    </div>
  );
};

export default TypesGrid;

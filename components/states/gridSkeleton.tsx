import { SkeletonCard } from "../ui/cardSkeleton";

const GridSkeleton = ({ length }: { length: number }) => {
  return (
    <div className="grid grid-cols-2 md:gap-8 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: length }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};
export default GridSkeleton;

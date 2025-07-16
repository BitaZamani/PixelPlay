import { PropsSearch } from "@/lib/types";
import GamesClient from "./gameClient";

const Games = async ({ searchParams }: PropsSearch) => {
  const searchParam = await searchParams;
  const page = Number(searchParam.page) || 1;
  const search = searchParam.search?.toString() || "";
  return (
    <div className="my-5">
      <GamesClient page={page} search={search} />
    </div>
  );
};

export default Games;

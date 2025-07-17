import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
type Pagination = {
  page: number;
  count: number;
  urlBase: string;
  queryString?: string;
  subUrl?: string | number;
};
const PaginationSection = ({
  page,
  count,
  urlBase,
  queryString,
  subUrl,
}: Pagination) => {
  return (
    <Pagination className="mt-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={
              page === 1
                ? "#"
                : `/${urlBase}/${subUrl ? `/${subUrl}` : ""}?page=${page - 1}${
                    queryString ? `&${queryString}` : ""
                  }`
            }
            className={page === 1 ? "pointer-events-none opacity-50" : ""}
            aria-disabled={page === 1}
            tabIndex={page === 1 ? -1 : 0}
          />
        </PaginationItem>
        <PaginationItem className="text-purple-100 px-2">{page}</PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={
              page >= Math.ceil(count / 20)
                ? "#"
                : `/${urlBase}/${subUrl ? `/${subUrl}` : ""}?page=${page + 1}${
                    queryString ? `&${queryString}` : ""
                  }`
            }
            className={
              page >= Math.ceil(count / 20)
                ? "pointer-events-none opacity-50"
                : ""
            }
            aria-disabled={page >= Math.ceil(count / 20)}
            tabIndex={page >= Math.ceil(count / 20) ? -1 : 0}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;

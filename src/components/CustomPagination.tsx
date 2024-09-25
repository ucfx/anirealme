"use client";
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  //   onPageChange: (page: number) => void;
  //   generatedParams: string;
};

export default function CustomPagination({
  currentPage,
  totalPages,
}: //   onPageChange,
//   generatedParams,
PaginationProps) {
  const router = useRouter();
  const onPageChange = (p: number) => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    // check url if anime/ or manga/
    const pathname = url.pathname.split("/")[1];
    if (p === 1) {
      params.delete("page");
    } else {
      params.set("page", p.toString());
    }
    const newParams = params.toString();

    router.push(`/${pathname}${newParams ? "?" + newParams : ""}`);
  };

  const generatePageNumbers = (totalPages: number, currentPage: number) => {
    const pages = [];
    const maxPagesToShow = 3;

    // Early return for one or two pages
    if (totalPages <= 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);

    if (currentPage > maxPagesToShow) {
      pages.push("...");
    }

    if (
      currentPage > maxPagesToShow &&
      currentPage <= totalPages - maxPagesToShow
    ) {
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
    } else if (currentPage <= maxPagesToShow) {
      for (let i = 2; i <= Math.min(maxPagesToShow, totalPages); i++) {
        pages.push(i);
      }
    } else if (currentPage > totalPages - maxPagesToShow) {
      for (let i = totalPages - maxPagesToShow + 1; i < totalPages; i++) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - maxPagesToShow) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers(totalPages, currentPage);

  return (
    <Pagination className="mx-0 w-fit flex max-md:flex-col items-center gap-2">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const page = e.currentTarget.page.value;
            onPageChange(Number(page));
          }}
          className="flex items-center justify-center"
        >
          <input
            type="number"
            min="1"
            max={totalPages.toString()}
            name="page"
            placeholder={currentPage.toString()}
            className="block text-center transition-colors bg-transparent border-b-2 border-foreground/50 focus:border-primary text-foreground outline-none"
          />
        </form>
      </div>
      <PaginationContent>
        <PaginationPrevious
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          className="cursor-pointer"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Pervious</span>
        </PaginationPrevious>
        {pageNumbers.map((page, index) => (
          <PaginationLink
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            isActive={currentPage === page}
            className={
              typeof page !== "number"
                ? "hover:bg-transparent cursor-default"
                : "cursor-pointer"
            }
          >
            {page}
          </PaginationLink>
        ))}
        <PaginationNext
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          className="cursor-pointer"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRightIcon className="h-4 w-4" />
        </PaginationNext>
      </PaginationContent>
    </Pagination>
  );
}

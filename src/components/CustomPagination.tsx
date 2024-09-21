import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function CustomPagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
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
    <Pagination className="mx-0 w-fit">
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

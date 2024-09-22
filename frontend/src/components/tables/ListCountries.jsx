"use client";
import moment from "moment";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import usePagination from "@/hooks/usePagination";

export const ListCountries = ({ countries }) => {
  const { paginatedData, currentPage, setCurrentPage, totalPages } =
    usePagination(countries?.results);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Table>
        <TableCaption>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive={currentPage}>
                  {currentPage}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          Last update: {moment(countries.timestamp).fromNow()}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Country Code</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((country) => (
            <TableRow key={country.countryCode}>
              <TableCell>{country.countryCode}</TableCell>
              <TableCell>{country.name}</TableCell>
              <TableCell>
                <Button>
                  <Link href={`/country/${country.countryCode}`}>
                    View Details
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

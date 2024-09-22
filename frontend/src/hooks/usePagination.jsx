import { useState, useEffect } from "react";

const usePagination = (data, itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [currentPage, data, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return { paginatedData, currentPage, setCurrentPage, totalPages };
};

export default usePagination;

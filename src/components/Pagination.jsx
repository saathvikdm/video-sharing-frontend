import React, { useState } from 'react';

import { Pagination } from 'react-bootstrap';

export default function PaginationComponent({ data, RenderComponent, pageLimit, dataLimit }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages] = useState(Math.round(data.length / dataLimit));

  console.log(pages);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <div className="row justify-content-center justify-content-md-start align-items-start my-3 g-3">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      <div className="d-flex justify-content-end mt-5">
        <Pagination>
          <Pagination.Prev onClick={goToPreviousPage} disabled={currentPage === 1 ? true : false} />
          {getPaginationGroup().map((item, index) => (
            <Pagination.Item
              onClick={changePage}
              active={currentPage === item ? true : false}
              id={`pagination-item${currentPage === item ? '-active' : ''}`}
            >
              {item}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={goToNextPage} disabled={currentPage === pages ? true : false} />
        </Pagination>
      </div>
    </div>
  );
}

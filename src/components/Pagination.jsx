import React from 'react';

const Pagination = ({ page, totalPages, setPage }) => (
  <div className="pagination">
    <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Previous</button>
    <span>Page {page} of {totalPages}</span>
    <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</button>
  </div>
);

export default Pagination;

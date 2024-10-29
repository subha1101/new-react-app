import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, handlePagination, currentPage }) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const maxPagesToShow = 5;
    const pageNumbers = Array.from({ length: Math.min(totalPages, maxPagesToShow) }, (_, i) => i + 1);

    return (
        <nav>
            <ul className="pagination justify-content-center">
             
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button onClick={() => handlePagination(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}

                {currentPage < totalPages && (
                    <li className="page-item">
                        <button onClick={() => handlePagination(currentPage + 1)} className="page-link">
                            Next
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;

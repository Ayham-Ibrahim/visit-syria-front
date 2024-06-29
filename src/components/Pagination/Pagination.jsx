import React from 'react';
import './Pagination.css';

function Pagination({ pageCount, currentPage, handlePageChange }) {
    const pageButtons = [];

    for (let i = 1; i <= pageCount; i++) {
        const isActive = currentPage === i;
        const buttonClassName = `page-button ${isActive ? 'active' : ''}`;

        pageButtons.push(
            <li
                key={i}
                className={buttonClassName}
                onClick={() => handlePageChange(i)}
            >
            </li>
        );
    }

    return (
        <div className='BY_Pagination'>
            <div className="pagination-container">
                <ul className="pagination">
                    {pageButtons}
                </ul>
            </div>
        </div>

    );
}

export default Pagination;
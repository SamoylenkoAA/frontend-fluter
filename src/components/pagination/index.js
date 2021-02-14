import React from 'react'
import {createPagination} from './handler'

const Pagination = ({currentPage, usersPerPage, totalUsers, numberOfButtons, handlerCurrentUser}) => {
    const {pagination} = createPagination({
        currentPage,
        numberOfButtons,
        totalUsers,
        usersPerPage
    });
    if(!totalUsers) return null

    const handlerNewCurrentUser = (newCurrent) => {
        handlerCurrentUser(newCurrent)
    }
    return(
        <div className="col-12 mt-3" >
            <nav className="pagination">
                <li className={`page-item ${pagination[0] === currentPage && "disabled"}`}>
                    <a className="page-link " href="#"
                       onClick={() => handlerNewCurrentUser(currentPage - 1)}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pagination.map(number => (
                    <li key={number}  className={`page-item ${currentPage === number && "active"}`}>
                        <a
                            href="!#"
                            onClick={() => handlerNewCurrentUser(number)}
                            className="page-link"
                        >
                            {number}
                        </a>
                    </li>
                ))}
                <li className={`page-item ${pagination.reverse()[0] === currentPage && "disabled"}`}>
                    <a
                        href="!#"
                        onClick={() => handlerNewCurrentUser(currentPage + 1)}
                        className="page-link"
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </nav>
        </div>
    )
}

export default Pagination
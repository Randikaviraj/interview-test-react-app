import React from "react";

export default function Pagination({
  page_numbers,
  pagingHandler,
  current_page_no,
}) {
  return (
    <>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => pagingHandler(current_page_no - 1)}
            >
              Previous
            </a>
          </li>
          {(function () {
            let arr = [];
            for (let index = 1; index <= page_numbers; index++) {
              arr.push(
                <li className="page-item">
                  <a
                    className={
                      index == current_page_no
                        ? "active page-link"
                        : "page-link"
                    }
                    href="#"
                    onClick={() => pagingHandler(index)}
                  >
                    {index}
                  </a>
                </li>
              );
            }
            return arr;
          })()}
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => pagingHandler(current_page_no + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

let Pagination = (props) => {
  let noOfPages = [];
  for (let i = 1; i <= props.totalPages; i++) {
    noOfPages.push(i);
  }
  return (
    <>
      <nav className="mt-4">
        <ul className="pagination">
          {noOfPages.map((el) => {
            return (
              <li
                onClick={() => {
                  props.selectPage(el);
                }}
                className={`page-item ${
                  props.currentPage === el ? "active" : ""
                }`}
              >
                <a className="page-link" href="#">
                  {el}
                </a>
              </li>
            );
          })}
          {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}
          {/* <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li> */}
          {/* <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
        </ul>
      </nav>
    </>
  );
};
export default Pagination;

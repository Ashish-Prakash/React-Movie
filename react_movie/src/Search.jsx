let Search = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <div className="input-group flex-nowrap mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={props.search}
            onChange={(e) => {
              props.searchMovie(e.currentTarget.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Search;

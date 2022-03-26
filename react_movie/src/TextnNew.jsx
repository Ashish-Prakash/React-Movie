let TextnNew = (props) => {
  return (
    <>
      <p className="mt-2">
        Showing {props.totalMovies} movies from the database
      </p>
      <button type="button" className="btn btn-primary mt-2">
        New
      </button>
    </>
  );
};

export default TextnNew;

import React from "react";
import Pagination from "./Pagination";
import "./Table.css";

class Table extends React.Component {
  // constructor(props){
  //   super(props);
  state = {
    currentPage: 1,
  };
  // }
  selectPage = (value) => {
    this.setState({ currentPage: value });
  };
  // console.log(props.moviedata);
  // console.log(props);
  render = () => {
    let allmovies = this.props.moviedata;
    let currentmovie = this.props.selected;
    // console.log(allmovies);
    // console.log(currentmovie);

    let filteredMovies = allmovies.filter((el) => {
      if (currentmovie === "All Genre") {
        return el;
      } else if (el.genre.name === currentmovie) {
        return el;
      }
    });
    filteredMovies = filteredMovies.filter((el) => {
      let movietitle = el.title;
      movietitle = movietitle.toLowerCase();
      let string = this.props.search.toLowerCase();
      return movietitle.includes(string);
    });
    let totalPages = Math.ceil(filteredMovies.length / 4);
    let startIdx = (this.state.currentPage - 1) * 4;
    let endIdx = Math.min(filteredMovies.length, this.state.currentPage * 4);
    // console.log(startIdx);
    // console.log(endIdx);
    let DisplayedMovies = filteredMovies.slice(startIdx, endIdx);
    return (
      <>
        <div className="row">
          <div className="col-8 mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Fav</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {DisplayedMovies.map((el) => {
                  return (
                    <tr key={el._id}>
                      <td>{el.title}</td>
                      <td>{el.genre.name}</td>
                      <td>{el.numberInStock}</td>
                      <td>{el.dailyRentalRate}</td>
                      <td
                        onClick={() => {
                          this.props.toggleLike(el._id);
                        }}
                      >
                        {el.liked ? (
                          <span className="material-icons-outlined like">
                            favorite
                          </span>
                        ) : (
                          <span className="material-icons-outlined like">
                            favorite_border
                          </span>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.deleteMovie(el._id);
                          }}
                          className="delete-btn"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={totalPages}
          selectPage={this.selectPage}
        />
      </>
    );
  };
}

export default Table;

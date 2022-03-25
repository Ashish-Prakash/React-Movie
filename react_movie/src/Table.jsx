// import React from "react";
import Pagination from "./Pagination";

import "./Table.css";

let Table = (props) => {
  // console.log(props.moviedata);
  // console.log(props);
  let allmovies = props.moviedata;
  let currentmovie = props.selected;
  // console.log(allmovies);
  // console.log(currentmovie);

  let filteredMovies = allmovies.filter((el) => {
    if (currentmovie === "All Genre") {
      return el;
    } else if (el.genre.name === currentmovie) {
      return el;
    }else{
      // return el;
    }
  });

  let DisplayedMovies = filteredMovies.slice(0, 4);
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
                        props.toggleLike(el._id);
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
                      <button className="delete-btn">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Table;

import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter as Switch } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import List from "./List";
import Nav from "./Nav";
import Search from "./Search";
import Table from "./Table";
import TextnNew from "./TextnNew";
import Customer from "./Customer";
import Login from "./Login";
import Genre from "./Genre";

class Movie extends React.Component {
  state = {
    movies: [],
    genre: [],
    selectedGenre: "All Genre",
    search: "",
  };

  searchMovie = (val) => {
    this.setState({ search: val });
  };
  setFilter = (filter) => {
    this.setState({
      selectedGenre: filter,
    });
  };
  toggleLike = (movieId) => {
    let idx = this.state.movies.findIndex((el) => {
      return el._id === movieId;
    });
    let currentMovieArr = this.state.movies.map((el) => el);

    if (currentMovieArr[idx].liked) {
      currentMovieArr[idx].liked = false;
    } else {
      currentMovieArr[idx].liked = true;
    }
    this.setState({
      movies: currentMovieArr,
    });
  };
  deleteMovie = (movieId) => {
    let moviesAfterDel = this.state.movies.filter((el) => {
      return el._id !== movieId;
    });
    this.setState({ movies: moviesAfterDel });
  };
  componentDidMount() {
    let f = async () => {
      let movie = await fetch("/movies");
      let genre = await fetch("/genre");
      let moviejson = await movie.json();
      let genrejson = await genre.json();

      this.setState({
        movies: moviejson,
        genre: genrejson,
      });
    };
    f();
  }
  render = () => {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/customer">
              <Customer />
            </Route>
            <Route path="/genre">
              <Genre />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <div className="row">
                <List
                  handleFilter={this.setFilter}
                  genreData={this.state.genre}
                  selected={this.state.selectedGenre}
                />
                <div className="col-9 p-4">
                  <TextnNew totalMovies={this.state.movies.length} />
                  <Search
                    search={this.state.search}
                    searchMovie={this.searchMovie}
                  />
                  <Table
                    selected={this.state.selectedGenre}
                    moviedata={this.state.movies}
                    toggleLike={this.toggleLike}
                    deleteMovie={this.deleteMovie}
                    search={this.state.search}
                  />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };
}

export default Movie;

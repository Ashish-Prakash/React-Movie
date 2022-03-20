import React from "react";
import List from "./List";
import Nav from "./Nav";
import Search from "./Search";
import Table from "./Table";
import TextnNew from "./TextnNew";

class Movie extends React.Component{
    state = {
        movies:[],
        genre:[],
        selectedGenre: "All Genre"
    }
    setFilter = (filter) =>{
        this.setState({
            selectedGenre : filter
        })
    }

    componentDidMount(){
        let f = async() => {
            let movie = await fetch("/movies");
            let genre = await fetch("/genre");
            let moviejson = await movie.json();
            let genrejson = await genre.json();

            this.setState(
                {
                    movies:moviejson, 
                    genre:genrejson
                }
            );
        };
        f();
    }
    render = () => {
        return (
            <div>
                <Nav/>
                <div className="row">
                    <List handleFilter ={this.setFilter} genreData = {this.state.genre} selected={this.state.selectedGenre}/>
                    <div className = "col-9 p-4">
                        <TextnNew/>
                        <Search/>
                        <Table selected={this.state.selectedGenre} moviedata = {this.state.movies} />
                    </div>
                </div>
                {/* <div className="row">
                </div> */}
            </div>
        )
    }
}

export default Movie;
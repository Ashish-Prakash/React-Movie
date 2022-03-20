// import React from "react";
import Pagination from "./Pagination";

let Table = (props) => {
    // console.log(props.moviedata);
    // console.log(props);
    let allmovies = props.moviedata;
    let currentmovie = props.selected;
    // console.log(allmovies);
    // console.log(currentmovie);

    let filteredMovies = allmovies.filter((el)=>{
        if(currentmovie === "All Genre"){
            return el;
        }
        else if(el.genre.name === currentmovie){
            return el;
        }
    })
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
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMovies.map((el)=>{
                            return <tr key={el._id}>
                                <td>{el.title}</td>
                                <td>{el.genre.name}</td>
                                <td>{el.numberInStock}</td>
                                <td>{el.dailyRentalRate}</td>
                                <td>like</td>
                                <td><button>Delete</button></td>
                            </tr>
                        })}
                        {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr> */}
                    </tbody>
                    </table>
            </div>
        </div>
        <Pagination />
        </>
    )
}

export default Table;
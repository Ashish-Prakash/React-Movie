import React from "react";

let List =(props)=>{
    return(
        // <>
            <div className="col-3">
                <ul className="list-group m-4 p-4">
                    <li 
                    onClick={(e)=>{
                        props.handleFilter("All Genre")
                    }} 
                    className={`list-group-item ${
                        props.selected === "All Genre" ? "active" :""
                    }`}>
                    All Genre
                    </li>
                    {/* <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li> */}
                    {props.genreData.map((el) => {
                        return (
                        <li
                        onClick={(e)=>{
                            props.handleFilter(el.name)
                        }}
                        key={el._id} 
                        className={`list-group-item ${
                            props.selected === el.name ? "active" :""
                        }`}>
                        {el.name}
                        </li>
                        )
                    })}
                </ul>
            </div>
        // </> 
    )
}
export default List;
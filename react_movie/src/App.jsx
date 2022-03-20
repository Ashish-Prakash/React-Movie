import React from "react";
import Child from "./Child";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            child : true
        };
    }

    render = () => {
        return (
            <div>
                <button onClick={()=>{
                    if(this.state.child){
                        this.setState({
                            child : false
                        })
                    }
                    else{
                        this.setState({
                            child : true
                        })
                    }
                }}>Child Toggle</button>
                {/* <Child/> */}
                {this.state.child ? <Child/> : ""}
            </div>
        )
    }
}

export default App;
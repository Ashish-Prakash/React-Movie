import React from "react";

class Child extends React.Component{
    constructor(props){
        console.log("1");
        super(props);
        this.state = {
            on : true
        };
    }
    componentDidMount(){
        console.log("3");
    }
    componentDidUpdate(){
        console.log("4");
    }
    componentWillUnmount(){
        console.log("5");;
    }
    render = () => {
        console.log(2);
        return (
            <div>
                <button onClick={()=>{
                    if(this.state.on){
                        this.setState({on:false})
                    }
                    else{
                        this.setState({on:true})
                    }
                }} >Click</button>
            </div>
        )
    }
}

export default Child;
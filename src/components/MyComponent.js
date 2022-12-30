import React from "react";

class MyComponent extends React.Component{

    state = {
        name: "Nghia",
        address: "Hoi Nghia ne",
        age: 20
    };


    //JSX
    render(){
        return(
            <div>
                My name is {this.state.name} and I`m from {this.state.address}

            </div>
        );
    }
}

export default MyComponent;
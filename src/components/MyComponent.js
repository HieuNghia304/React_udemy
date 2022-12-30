import React from "react";

class MyComponent extends React.Component{

    state = {
        name: "Nghia",
        address: "Hoi Nghia ne",
        age: 20
    };

    handleClick(event){
        console.log("Click me my buttom");
        console.log("My name Nghia ", this.state.name);

    }

    handleOnMoverOver(event){
        console.log(event);
    }

    //JSX
    render(){
        return(
            <div>
                My name is {this.state.name} and I`m from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMoverOver}>Hover click</button>
            </div>
        );
    }
}

export default MyComponent;
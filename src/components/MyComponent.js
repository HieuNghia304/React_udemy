import React from "react";

class MyComponent extends React.Component{

    state = {
        name: "Nghia",
        address: "Hoi Nghia ne",
        age: 20
    };

    handleClick(event){
        console.log("Click me my buttom");


        this.setState({
           name: 'Tien',
           age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleOnMoverOver(event){
        // console.log(event);
    }

    //JSX
    render(){
        return(
            <div>
                My name is {this.state.name} and I`m {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <button onMouseOver={this.handleOnMoverOver}>Hover click</button>
            </div>
        );
    }
}

export default MyComponent;
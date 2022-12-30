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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); //lệnh không cho trang load lại khi bấm nút submit
        console.log(this.state)
    }
    //JSX
    render(){
        return(
            <div>
                My name is {this.state.name} and I`m {this.state.age}
            
               <from>
                <input type= 'nhap vao di'
                onChange={(event) => this.handleOnChangeInput(event)}
                />
                <button>Submit</button>
               </from>
            </div>
        );
    }
}

export default MyComponent;
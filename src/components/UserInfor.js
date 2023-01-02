import React from 'react';

class UserInfor extends React.Component{

    state = {
        name: "Nghia",
        address: "Hoi Nghia ne",
        age: 20
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); //lệnh không cho trang load lại khi bấm nút submit
        console.log(this.state)
    }

    handleOnChangeAge = (event) => {
        console.log(this.state)

    }

    render(){
        return(
            <div>
                My name is {this.state.name} and I`m {this.state.age}
                <br />
                <from onSubmit = {(event) => this.handleOnSubmit(event)}>
                 <label>Your name</label>
                 <input 
                     value={this.state.name}
                     text="text"
                     onChange={(event) => this.handleOnChangeInput(event)}
                 />

                 <label>Your age: </label>
                 <input 
                     value={this.state.age}
                     onChange={(event) => this.handleOnChangeAge(event)} 
                 />

                 <button>Submit</button>
                </from>

            </div>
        )
    }
}

//Để class chạy được thì phải có dòng này
export default UserInfor;
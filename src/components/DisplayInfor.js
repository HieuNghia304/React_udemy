import React from "react";

class DisplayInfor extends React.Component{
    render() {
        //destructuring array/object
        const { age, name} = this.props;
        // console.log(this.props)
        //props => viet tat properties, dung de truyen du lieu tu cha sang con
        return(
            <div>
                  <div>My name's {name}</div>
                  <div>My age's {age}</div>
            </div>
        );
    }
}

export default DisplayInfor;
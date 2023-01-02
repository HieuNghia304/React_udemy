import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component{

    //JSX
    render(){
        return(
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfor name="Hoi Nghia ne" age="20" />
            </div>
        );
    }
}

export default MyComponent;
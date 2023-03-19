import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponents extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Bự", age: "16" },
            { id: 2, name: "Hiếu", age: "22" },
            { id: 3, name: "Elly", age: "25" },
        ]
    }
    render() {
        return (
            <>

                <UserInfor />
                <br></br>
                <DisplayInfor listUser={this.state.listUser} />
            </>
        );
    }
}

export default MyComponents;
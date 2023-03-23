import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";


const MyComponents = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "Bự", age: "16" },
            { id: 2, name: "Hiếu", age: "22" },
            { id: 3, name: "Elly", age: "25" },
        ]
    );

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }


    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone)

    }

    return (
        <>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />

        </>
    )
}


export default MyComponents;
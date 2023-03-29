import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { BsPlusCircle } from 'react-icons/bs'
import { useState } from "react";


const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUSer] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title ">
                ManageUser
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-outline-secondary"
                        onClick={() => setShowModalCreateUSer(true)}>
                        <BsPlusCircle />   Add new user</button>
                </div>
                <div className="table-users-container">
                    Table Users

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUSer}
                />
            </div>

        </div >
    )
}
export default ManageUser;
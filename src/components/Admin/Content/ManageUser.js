import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { BsPlusCircle } from 'react-icons/bs'
import TableUser from "./TableUser";
import { useEffect } from "react"
import { useState } from "react"
import { getAllUser } from "../../../Services/apiServices"
const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUSer] = useState(false);
    const [listUser, setListUser] = useState([])
    useEffect(() => {
        fetchListUser()
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUser()
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }
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
                    <TableUser listUser={listUser} />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUSer}
                    fetchListUser={fetchListUser}
                />
            </div>

        </div >
    )
}
export default ManageUser;
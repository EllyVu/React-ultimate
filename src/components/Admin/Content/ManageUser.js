import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { BsPlusCircle } from 'react-icons/bs'
import TableUser from "./TableUser";
import { useEffect } from "react"
import { useState } from "react"
import { getAllUser } from "../../../Services/apiServices"
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUSer] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [listUser, setListUser] = useState([]);


    useEffect(() => {
        fetchListUser()
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUser()
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }

    const handleClickButtonUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }

    const ResetUpdateData = () => {
        setDataUpdate({});
    }

    const handleClickButtonView = (user) => {
        setShowModalViewUser(true)

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
                        <BsPlusCircle /> Add new user</button>
                </div>
                <div className="table-users-container">
                    <TableUser listUser={listUser}
                        handleClickButtonUpdate={handleClickButtonUpdate}
                        handleClickButtonView={handleClickButtonView}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUSer}
                    fetchListUser={fetchListUser}

                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    ResetUpdateData={ResetUpdateData}
                />

                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    fetchListUser={fetchListUser}

                />
            </div>

        </div >
    )
}
export default ManageUser;
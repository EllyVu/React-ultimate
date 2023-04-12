import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { BsPlusCircle } from 'react-icons/bs'
import TableUser from "./TableUser";
import { useEffect } from "react"
import { useState } from "react"
import { getAllUser, getUserWithPaginate } from "../../../Services/apiServices"
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDetleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = (props) => {

    const LIMIT_USER = 6;
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(0);
    const [showModalCreateUser, setShowModalCreateUSer] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [listUser, setListUser] = useState([]);
    const [dataUser, setDataUser] = useState({});
    const [dataDelete, setDataDelete] = useState({});


    useEffect(() => {
        // fetchListUser();
        fetchListUserWithPaginate(1)
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUser()
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }

    const fetchListUserWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER)
        if (res.EC === 0) {
            console.log("res data", res.DT);
            setListUser(res.DT.users)
            setPageCount(res.DT.totalPages)
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
        setDataUser(user)
    }

    const handleClickButtonDeleteUser = (user) => {
        console.log("check Delete ", user);
        setShowModalDeleteUser(true)
        setDataDelete(user)
    }
    return (
        <div className="manage-user-container">
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-outline-secondary"
                        onClick={() => setShowModalCreateUSer(true)}>
                        <BsPlusCircle /> Add new user</button>
                </div>
                <div className="table-users-container">
                    {/* <TableUser listUser={listUser}
                        handleClickButtonUpdate={handleClickButtonUpdate}
                        handleClickButtonView={handleClickButtonView}
                        handleClickButtonDeleteUser={handleClickButtonDeleteUser}
                    /> */}

                    <TableUserPaginate
                        listUser={listUser}
                        handleClickButtonUpdate={handleClickButtonUpdate}
                        handleClickButtonView={handleClickButtonView}
                        handleClickButtonDeleteUser={handleClickButtonDeleteUser}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUSer}
                    fetchListUser={fetchListUser}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    ResetUpdateData={ResetUpdateData}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    fetchListUser={fetchListUser}
                    dataUser={dataUser}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                />

                <ModalDetleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUser={fetchListUser}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

            </div>

        </div >
    )
}
export default ManageUser;
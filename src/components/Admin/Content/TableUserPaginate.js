import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const TableUserPaginate = (props) => {
    const { pageCount, listUser } = props

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        props.fetchListUserWithPaginate(+event.selected + 1)
        console.log(`User requested page number ${event.selected}, which is offset`);

    };

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Danh sách người dùng</h1>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th colSpan={'3'}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button
                                            className="btn btn-info"
                                            onClick={() => props.handleClickButtonView(item)}
                                        >
                                            View
                                        </button>
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => props.handleClickButtonUpdate(item)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => props.handleClickButtonDeleteUser(item)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan={'5'}>Not Found Data</td>
                        </tr>}
                </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>

        </>
    )
}

export default TableUserPaginate
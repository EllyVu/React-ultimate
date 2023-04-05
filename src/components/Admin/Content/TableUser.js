

const TableUser = (props) => {
    const listUser = props.listUser;

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
        </>
    )
}
export default TableUser
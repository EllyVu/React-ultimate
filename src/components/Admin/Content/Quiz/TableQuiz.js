import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from '../../../../Services/apiServices';
import ModalDeleteQuiz from './ModalDeleteQuiz';

const TableQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([])
    const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false)
    const [dataDelete, setDataDelete] = useState({})




    const handleDeleteQuiz = (quizID) => {
        setShowModalDeleteQuiz(true)
        setDataDelete(quizID)
    }

    useEffect(() => {
        fetchQuiz();
    }, [])

    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        setDataDelete({})
        if (res && res.EC === 0) {
            setListQuiz(res.DT)
        }
        console.log('check res :', res);
    }
    return (
        <>
            <div> Danh sách bài Test :</div>
            <table className="table table-hover table-bordered table-striped mt-2 my-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuiz && listQuiz.length > 0 && listQuiz.map((item, index) => {
                        return (
                            <tr key={`table-quiz-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.difficulty}</td>
                                <td style={{ display: 'flex', gap: '25px' }}>
                                    <button
                                        className="btn btn-warning"

                                    >
                                        Edit</button>
                                    <button
                                        className="btn btn-info"
                                        onClick={() => handleDeleteQuiz()}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                    }
                    {listQuiz && listQuiz.length === 0 &&
                        <tr>
                            <td colSpan={"5"} > Not Found Data</td>
                        </tr>
                    }
                </tbody>
            </table>
            <ModalDeleteQuiz
                show={showModalDeleteQuiz}
                setShow={setShowModalDeleteQuiz}
                dataDelete={dataDelete}
                fetchQuiz={fetchQuiz}
            />
        </>
    )
}
export default TableQuiz;
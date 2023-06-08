import React from 'react';
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { DeleteQuizForAdmin } from "../../../../Services/apiServices";
import { toast } from 'react-toastify';

const ModalDeleteQuiz = (props) => {
    const { show, setShow, dataDelete } = props;
    const handleClose = () => setShow(false)

    const handleDeleteQuiz = async () => {
        let data = await DeleteQuizForAdmin()
        console.log('check data', data);
        // if (data && data.EC === 0) {
        //     toast.success(data.EM);
        //     handleClose();
        //     await props.fetchQuiz();
        // }
        // if (data && data.EC !== 0) {
        //     toast.error(data.EM)
        //     handleClose();
        // }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete Quiz ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure delete this Quiz.ID:
                    <b>
                        {/* {dataDelete && dataDelete.id ? dataDelete.id : ""} */}
                    </b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary"
                        onClick={() => { handleDeleteQuiz() }}>Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalDeleteQuiz;
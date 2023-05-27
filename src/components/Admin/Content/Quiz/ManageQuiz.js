import { useState } from 'react';
import './ManageQuiz.scss'
import Select from 'react-select';
const ManageQuiz = (props) => {

    const options = [
        { value: 'EZ', label: 'Chocolate' },
        { value: 'Medium', label: 'Strawberry' },
        { value: 'Hard', label: 'Vanilla' },
    ];

    const [name, setName] = useState('');
    const [description, setDescription] = useState("");
    const [type, setType] = useState('Eazy');
    const [image, setImage] = useState(null);

    const handleOnChangFile = () => {

    }

    return (
        <div className="quiz-container">
            <div className="title">
                manage quiz
            </div>
            <hr />
            <div className="add-new">


                <fieldset className=" border rounded-3 p-3">
                    <legend className="float-none w-auto px-3">Add New Quiz:</legend>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder='your quiz name' />
                        <label > Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text"
                            className="form-control"
                            placeholder='descripition'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <label
                            className='form-control'
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        >
                            Description
                        </label>
                    </div>
                    <div className='my-3'>
                        <Select
                            //     value={selectedOption}
                            // onChange={this.handleChange}
                            options={options}
                            placeholder={'Quiz Type...'}
                        />
                    </div>
                    <div className='more-actions form-group'>
                        <label
                            className='mb-1'
                            onChange={(event) => handleOnChangFile(event)}
                        >
                            Upload Image
                        </label>
                        <input type='file' className='form-control' />

                    </div>
                </fieldset>
            </div>
            <div className="list-detail">

            </div>
        </div>
    )
}
export default ManageQuiz;
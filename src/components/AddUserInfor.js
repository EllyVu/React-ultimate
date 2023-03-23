
import React, { useState } from "react";

const AddUserInfor = (props) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    // const [address, setAddress] = useState('Thái Bình')

    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleONSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor(Math.random() * 1000) + 1,
            name: name,
            age: age,
        });

    }


    return (
        <div>
            <div>
                My name is {name}
            </div>
            <div>
                I'm {age} year old !
            </div>
            <br />

            <form onSubmit={(event) => handleONSubmit(event)}>
                <label> Your name: </label>
                <input
                    value={name}
                    type='text'
                    onChange={(event) => handleOnChangeInput(event)}
                />
                <label> Your age: </label>
                <input
                    value={age}
                    type='number'
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>

    )
}



export default AddUserInfor;
import React from "react";

class UserInfor extends React.Component {


    state = {
        name: "Hieu",
        age: 22,
        address: 'Tb'
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleONSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div>
                    My name is {this.state.name}
                </div>
                <div>
                    I'm {this.state.age} year old !
                </div>

                <form onSubmit={(event) => this.handleONSubmit(event)}>
                    <label> Your name: </label>
                    <input
                        value={this.state.name}
                        type='text'
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <label> Your age: </label>
                    <input
                        value={this.state.age}
                        type='number'
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default UserInfor;
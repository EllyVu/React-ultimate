// class component
// function component
import React from "react";


class MyComponents extends React.Component {
    state = {
        name: "Hieu",
        age: 22,
        address: 'Tb'
    };


    render() {
        return (
            <div>
                My name is {this.state.name}
            </div>
        );
    }
}

export default MyComponents;
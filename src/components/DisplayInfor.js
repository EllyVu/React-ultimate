import React, { useState } from "react";
import "./DisplayInfor.scss"

// class DisplayInfor extends React.Component {


//     render() {
//         const { listUser } = this.props;
//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <div>
//                         {listUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div> My name is : {user.name}</div>
//                                     <div> i'm {user.age} year old.</div>
//                                     <div>
//                                         <button onClick={() => this.props.handeleDeleteUser(user.id)}> Delete </button>
//                                     </div>
//                                     <hr />
//                                 </div>

//                             )
//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {

    const { listUsers } = props;

    const [isShowHideListUSer, setShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUSer);
    }

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUSer === true ? "hide list user" : "show list user"}
                </span>
            </div>
            {isShowHideListUSer &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div> My name is : {user.name}</div>
                                <div> i'm {user.age} year old.</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}> Delete </button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}



export default DisplayInfor;

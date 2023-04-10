import "./Register.scss"
import { useNavigate } from 'react-router-dom';
const Register = (props) => {

    return (
        <div className="register-container col-4 mx-auto">
            <div className="form-title"> Create Account</div>
            <div className='content-form  '>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        className='form-control'
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className='form-control'
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">

                    <input
                        type="password"
                        className='form-control'
                        placeholder="Password"
                    />
                </div>
                <div>
                    <button className="btn-signup">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register;
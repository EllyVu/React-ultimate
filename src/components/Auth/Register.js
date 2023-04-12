import { useState } from "react";
import "./Register.scss"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postRegister } from '../../Services/apiServices'
import { FiEye } from 'react-icons/fi';
import { VscMail, VscEyeClosed } from 'react-icons/vsc'
import { HiOutlineUser } from 'react-icons/hi'

const Register = (props) => {

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowpassword] = useState(false)

    const navigate = useNavigate();
    const handleLogIn = () => {
        navigate('/login');
    }

    const handleOnClickBackHome = () => {
        navigate('/')
    }

    const handleOnClickCreateAccount = async () => {
        //validate

        //submitApis
        let data = await postRegister(email, password, username)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM)
        }
    }


    return (
        <div className="register-container">
            <div className='header'>
                <span> Already have an account?</span>
                <button onClick={() => handleLogIn()} >Log In</button>
            </div>
            <div className="form-title  col-4 mx-auto"> Create Account</div>
            <div className='content-form  col-4 mx-auto '>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={username}
                        className='form-control'
                        onChange={(event) => setName(event.target.value)}
                    />
                    <HiOutlineUser
                        size={'1.5em'}
                        style={{
                            position: 'absolute', right: '11px',
                            bottom: ' 7px'
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        value={email}
                        className='form-control'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <VscMail
                        size={'1.5em'}
                        style={{
                            position: 'absolute', right: '11px',
                            bottom: ' 7px'
                        }}
                    />
                </div>
                <div className="form-group ">
                    <label>Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        className='form-control'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {showPassword ?
                        <FiEye
                            size={'1.5em'}
                            style={{
                                position: 'absolute', right: '11px',
                                bottom: ' 7px'
                            }}
                            onClick={() => setShowpassword(false)} />
                        :
                        <VscEyeClosed
                            size={'1.5em'}
                            style={{
                                position: 'absolute', right: '11px',
                                bottom: ' 7px'
                            }}
                            onClick={() => setShowpassword(true)}
                        />

                    }

                </div>
                <div className="checkbox" >
                    <input type="checkbox" />
                    I agree to the terms
                </div>
                <div className="test">
                    <button
                        className="btn-signup"
                        onClick={() => handleOnClickCreateAccount()}
                    >
                        Create Account
                    </button>
                </div>
                <div className=" text-center mt-3">
                    <span className="back" onClick={() => handleOnClickBackHome()}>
                        &#60;&#60;&#60; Go to Homepage
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register;
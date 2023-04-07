import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../Services/apiServices'
import { toast } from 'react-toastify';

const Login = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    const handleBackHomePage = () => {
        navigate('/');
    }
    const HandleonClickLogin = async () => {
        //validate

        //submitApis
        let data = await postLogin(email, password)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>      Don't have an account yet?</span>
                <button>Sign up</button>
            </div>
            <div className='title col-4 mx-auto'>
                EllyVu
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type={'Password'}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className='forgot-password'>

                    Forgot password ?

                </span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => HandleonClickLogin()}
                    >
                        Login with ELly
                    </button>
                </div>
                <div className='text-center' onClick={() => handleBackHomePage()}>
                    <span className='back'>
                        &#60;&#60;&#60;  Go to Homepage
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Login;
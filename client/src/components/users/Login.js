import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import modernblack from '../images/modernblack.jpg';

const Login = (props) => {
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
    }

    const loginHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', userLogin, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate('/displayPage')
            })
            .catch((err) => {
                console.log(err.response.data.message);
            })
    }


    return (
        <div className='container3' style={{
            backgroundImage: `url(${modernblack})`
        }}>
            <div className='details3'>
                <h2 style={{ color: 'greenyellow', fontWeight: 'bolder', textDecoration: 'underline' }}> Login</h2>
                <br />
                <form onSubmit={loginHandler}>
                    <label className='form-label'>Email: </label>
                    <input className='form-control' style={{ marginLeft: '50px', height: '30px', width: '200px' }} type='text' name='email' value={userLogin.email} onChange={changeHandler} />

                    <br />
                    <label className='form-label'>Password: </label>
                    <input className='form-control' style={{ marginLeft: '50px', height: '30px', width: '200px' }} type='password' name='password' value={userLogin.password} onChange={changeHandler} />

                    <br />
                    <button className='btn btn-dark mt-3'>Login</button>
                    <br /> <br />
                    <Link style={{ color: `red` }} to={'/'}>Don't have an account? Click here to sign up</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
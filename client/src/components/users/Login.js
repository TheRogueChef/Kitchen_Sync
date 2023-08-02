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
                <p className='pageTitle'> Login</p>
                <br />
                <form onSubmit={loginHandler}>
                    <label>Email </label>
                    <br/>
                    <input className='inputBox'  type='text' name='email' value={userLogin.email} onChange={changeHandler} />
                    <br/> <br/>
                    <label>Password </label>
                    <input className='inputBox' type='password' name='password' value={userLogin.password} onChange={changeHandler} />
                    <br/> <br/>
                    <button className='btn'>Login</button>
                    <br/> <br/>
                    <Link style={{ color: `red` }} to={'/'}>Click here to register</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
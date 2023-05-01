import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate()

    const [userLogin, setUserLogin] = useState({
        email:"",
        password:""
    })

    const changeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }

    const loginHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/main')
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <h2> Login</h2>
            <form onSubmit={loginHandler} className='col-4 mx-auto user-form'>
                <label className='form-label'>Email: </label>
                <input className='form-control' type='text' name='email' value={userLogin.email} onChange={changeHandler}/>

                <label className='form-label'>Password: </label>
                <input className='form-control' type='password' name='password' value={userLogin.password} onChange={changeHandler}/>

                <button className='btn btn-dark mt-3'>Login</button>
                <br/>
                <Link className='text-white' to={'/'}>Don't have an account? Click here to sign up</Link>
            </form>
        </div>
)}

export default Login;
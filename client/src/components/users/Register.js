import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = (props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    // * SubmitHandler

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
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
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={changeHandler} value={user.firstName} name='firstName' />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={changeHandler} value={user.lastName} name='lastName'/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={changeHandler} value={user.email} name='email'/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={changeHandler} value={user.password} name='password'/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={changeHandler} value={user.confirmPassword} name='confirmPassword'/>
                </div>
                <button>Register</button>
            </form>
        <Link to={'/login'}>Already have an account?</Link>
        </div>
    )}

export default Register;
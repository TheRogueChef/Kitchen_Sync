import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import modernblack from '../images/modernblack.jpg';

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
                navigate('/displayPage')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div className='container3' style={{
            backgroundImage:`url(${modernblack})`
        }}>
            <div className='details3'>
            <form onSubmit={submitHandler}>
                <h1>Register</h1>
                <br  />
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={changeHandler} value={user.firstName} name='firstName' />
                </div>
                <br  />
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={changeHandler} value={user.lastName} name='lastName'/>
                </div>
                <br  />
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={changeHandler} value={user.email} name='email'/>
                </div>
                <br  />
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={changeHandler} value={user.password} name='password'/>
                </div>
                <br  />
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={changeHandler} value={user.confirmPassword} name='confirmPassword'/>
                </div>
                <br  /> <br  />
                <button>Register</button>
                <br  />
            </form>
            <br  /> <br  />
        <Link to={'/login'} style={{ color: `red`}}>Already have an account?</Link>
        </div>
        </div>
    )}

export default Register;
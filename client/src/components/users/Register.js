import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import kitchensink2 from '../images/kitchensink2.jpg';

const Register = (props) => {
    const [errors, setErrors] = useState({})
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

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/displayPage')
            })
            .catch((err) => {
                setErrors(err.response.data.error.errors)
                console.log(err.response.data.error);
            })}
    
    return (
        <div className='container3' >
            <div className='logLeft'>
                <Image className='dashPicL' src={kitchensink2} alt='...'/>
                <p className= 'logo'>My Kitchen Sync</p>
                <br  /> <br  />
                <Link to={'/login'} style={{ color: `red`}}>Already have an account? Click here to login.</Link>
            </div>
            <div className='details3'>
            <form onSubmit={submitHandler}>
                <p className= 'pageTitle'>Register</p>
                <br  />
                <div>
                    <label>First Name </label>
                    <input className= 'inputBox' type="text" onChange={changeHandler} value={user.firstName} name='firstName' />
                    {
                    errors.firstName?
                    <p className='text-danger'>{errors.firstName.message}</p>:
                    null
                    }
                </div>
                <br  />
                <div>
                    <label>Last Name </label>
                    <input className= 'inputBox'  type="text" onChange={changeHandler} value={user.lastName} name='lastName'/>
                    {
                    errors.lastName?
                    <p className='text-danger'>{errors.lastName.message}</p>:
                    null
                    }
                </div>
                <br  />
                <div>
                    <label>Email </label>
                    <input className= 'inputBox' type="text" onChange={changeHandler} value={user.email} name='email'/>
                    {
                    errors.email?
                    <p className='text-danger'>{errors.email.message}</p>:
                    null
                    }
                </div>
                <br  />
                <div>
                    <label>Password </label>
                    <input className= 'inputBox' type="password" onChange={changeHandler} value={user.password} name='password'/>
                    {
                    errors.password?
                    <p className='text-danger'>{errors.password.message}</p>:
                    null
                    }
                </div>
                <br  />
                <div>
                    <label>Confirm Password </label>
                    <input className= 'inputBox' type="password" onChange={changeHandler} value={user.confirmPassword} name='confirmPassword'/>
                </div>
                <br  /> <br  />
                <button className='btn'>Register</button>
                <br/>
            </form>
            <br/>
        
        </div>
        </div>
    )}

export default Register;
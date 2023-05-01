import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import food1 from '../images/food1.jpg';
import rusticplankstable from '../images/rusticplankstable.jpg';
import kitchensink2 from '../images/kitchensink2.jpg';

const Dashboard = (props) => {
    const navigate = useNavigate()
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='dashShell' style={{
            backgroundImage: `url(${rusticplankstable})`} } >
            <div className='dashLeft'>
                <Image className='dashPicL' src={kitchensink2} alt='...'/>
                <h1>Kitchen Sync</h1>
            </div>
            <div className='dashCenter'>
                <Image className='dashPic' src={food1} alt='...' />
            </div>
            <div className='dashRight'>
                <button className='btn' onClick={logout}>Log out</button> 
                <hr/>
                <Link className='btn' to={'/newDish'}>New Dish</Link>    
                <hr/>
                <Link className='btn' to={'/allDishes'}>All Dishes</Link>          
            </div>
        </div>
    )
}

export default Dashboard;
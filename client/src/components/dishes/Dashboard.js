import React from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import food1 from '../images/food1.jpg';
import blacktable from '../images/digitalBlack.jpg';
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
            backgroundImage: `url(${blacktable})`} } >
            <div className='dashLeft'>
                <Image className='dashPicL' src={kitchensink2} alt='...'/>
                <p className= 'dashLogo'>My Kitchen Sync</p>
            </div>
            <div className='dashCenter'>
                <Image className='dashPic' src={food1} alt='...' />
            </div>
            <div className='dashRight'>
                <button className='btn' onClick={logout}>Log out</button> 
                <br/><br/>
                <Link className='btn' to={'/newDish'}>New Dish</Link>    
                <br/><br/>
                <Link className='btn' target='blank' to={'/searchApi'}>Search Dishes</Link>          
                <br/><br/>
                <Link className='btn' target='blank' to={'/dishApi'}>Random Dish</Link>          
            </div>
        </div>
    )
}

export default Dashboard;
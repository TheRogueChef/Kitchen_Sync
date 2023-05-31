import React from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import food4 from '../images/food4.jpg';
import blacktable from '../images/blacktable.jpg';
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
                <h1 style={{ fontSize: '60px',fontWeight: 'bolder', color: 'greenyellow', backgroundColor: 'black', borderRadius:"30%", border: 'solid 2px red'}}>My Kitchen Sync</h1>
            </div>
            <div className='dashCenter'>
                <Image className='dashPic' src={food4} alt='...' />
            </div>
            <div className='dashRight'>
                <button className='btn' onClick={logout}>Log out</button> 
                <hr/>
                <Link className='btn' to={'/newDish'}>New Dish</Link>    
                <hr/>
                <Link className='btn' target='blank' to={'/searchApi'}>Search Dishes</Link>          
                <hr/>
                <Link className='btn' target='blank' to={'/dishApi'}>Random Dish</Link>          
            </div>
        </div>
    )
}

export default Dashboard;
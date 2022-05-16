import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/image/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./MainHeader.css"
const MainHeader = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className='navbar-container'>
                <div className='logo'>
                    <img onClick={() => navigate('/')} src= {logo} alt=""/>
                </div>
                <div className='navbar'>
                <span><FontAwesomeIcon icon={faCartShopping} /></span>
                    <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/login'>Login</NavLink>
                    <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/signup'>SignUp</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default MainHeader;
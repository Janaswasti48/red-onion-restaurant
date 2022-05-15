import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/image/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./MainHeader.css"
const MainHeader = () => {
    return (
        <div>
            <nav className='navbar-container'>
                <div className='logo'>
                    <img src= {logo} alt=""/>
                </div>
                <div className='navbar'>
                <span><FontAwesomeIcon icon={faCartShopping} /></span>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>SignUp</Link>
                </div>
            </nav>
        </div>
    );
};

export default MainHeader;
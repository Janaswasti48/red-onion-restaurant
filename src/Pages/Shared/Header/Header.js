import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <nav className='header'>
            {/* <Link to='/'>Home</Link> */}
            <Link to='/breakfasts'>Breakfast</Link>
            <Link to='/lunches'>Lunch</Link>
            <Link to='/dinners'>Dinner</Link>
        </nav>
    );
};

export default Header;
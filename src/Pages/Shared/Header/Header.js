import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <nav className='header'>
            {/* <Link to='/'>Home</Link> */}
            <NavLink className={({isActive}) => isActive? 'active-link' : 'link'} to='/breakfasts'>Breakfast</NavLink>
            <NavLink className= {({isActive}) => isActive? 'active-link' : 'link'} to='/lunches'>Lunch</NavLink>
            <NavLink className= {({isActive}) => isActive? 'active-link' : 'link'} to='/dinners'>Dinner</NavLink>
        </nav>
    );
};

export default Header;
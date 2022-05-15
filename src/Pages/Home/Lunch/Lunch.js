import React from 'react';

import "./Lunch.css";

const Lunch = ({ lunch }) => {
    const { picture, name, price, description } = lunch;
    return (
        <div className='single-container'>

            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h6>${price}</h6>
            <p>{description}</p>
        </div>
    );
};

export default Lunch;
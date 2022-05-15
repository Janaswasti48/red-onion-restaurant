import React from 'react';
import "./Dinner.css"
const Dinner = ({ dinner }) => {
    const { picture, name, price, description } = dinner;
    return (
        <div className='single-container'>

            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h6>${price}</h6>
            <p>{description}</p>


        </div>
    );
};

export default Dinner;
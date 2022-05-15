import React from 'react';
import Header from '../../Shared/Header/Header';
import "./Breakfast.css"

const Breakfast = ({breakfast}) => {
    const {name,picture,price,description} = breakfast;
    return (
        
        <div className='single-container'>
            {/* <Header></Header> */}
            <img src={picture} alt=""/>
            <h4>{name}</h4>
            <h6>${price}</h6>
            <p>{description}</p>


        </div>
    );
};

export default Breakfast;
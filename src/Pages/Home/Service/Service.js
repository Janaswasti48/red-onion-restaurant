import React from 'react';
import './Service.css'
const Service = ({service}) => {
const {serviceName,picture,description} = service;
    return (
        <div>
            <div  className='single-container2'>
                <img src={picture} alt=""/>
                <h3>{serviceName}</h3>
                
                <p className='paragraph'>{description}</p>
                
                <button className='see-more-btn' type="submit">See More</button>
            </div>
        </div>
    );
};

export default Service;
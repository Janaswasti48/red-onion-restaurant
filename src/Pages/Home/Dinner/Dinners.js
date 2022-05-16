import React, { useEffect, useState } from 'react';
import MainHeader from '../../Main_Header/MainHeader';
import Header from '../../Shared/Header/Header';
import Dinner from './Dinner';
import "./Dinners.css"

const Dinners = () => {
    const [dinners, setDinners] = useState([])
    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, [])
    return (
        <div>
            <MainHeader></MainHeader>
            <Header></Header>
            <div className='container'>
                {
                    dinners.map(dinner => <Dinner
                        key={dinner.id}
                        dinner={dinner}
                    ></Dinner>)
                }

            </div>
            <div className='check-out-btn'>
                <button type="submit">Check Out Your Food</button>
            </div>
        </div>
    );
};

export default Dinners;
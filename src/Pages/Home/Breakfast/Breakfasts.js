import React, { useEffect, useState } from 'react';
import MainHeader from '../../Main_Header/MainHeader';
import Header from '../../Shared/Header/Header';
import Breakfast from './Breakfast';
import './Breakfasts.css';

const Breakfasts = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data));
    }, [])
    return (
        <div>
            
            <Header></Header>
            <div className='container'>
                {

                    breakfasts.map(breakfast =>
                        <Breakfast
                            key={breakfast.id}
                            breakfast={breakfast}
                        ></Breakfast>
                    )}

            </div>
            <div className='check-out-btn'>
                <button type="submit">Check Out Your Food</button>
            </div>
        </div>
    );
};

export default Breakfasts;
import React, { useEffect, useState } from 'react';
import MainHeader from '../../Main_Header/MainHeader';
import Header from '../../Shared/Header/Header';
import Lunch from './Lunch';
import './Lunches.css';

const Lunches = () => {
    const [lunches, setLunches] = useState([])
    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunches(data))
    }, [])
    return (
        <div>
            <MainHeader></MainHeader>
            <Header></Header>

            <div className='container'>

                {
                    lunches.map(lunch => <Lunch
                        key={lunch.id}
                        lunch={lunch}
                    ></Lunch>)
                }

            </div>
            <div className='check-out-btn'>
                <button type="submit">Check Out Your Food</button>
            </div>
        </div>
    );
};

export default Lunches;
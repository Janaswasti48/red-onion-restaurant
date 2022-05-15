import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('reputation.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <div className='title-section'>
                <h1 className='service-title'>Why You Choose Us</h1>
                <p className='service-description'>Bartoon waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at.
                    Boy prosperous increasing surrounded.
                </p>
            </div>

            <div className='container2'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
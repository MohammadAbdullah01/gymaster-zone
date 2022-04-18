import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const { services } = useServices()
    return (
        <div className='service'>
            <h1 className='text-center py-5 services-title'>HAVE A LOOK AT MY SERVICES </h1>
            <Row className='mx-auto'>
                {services?.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </Row>
        </div>
    );
};

export default Services;
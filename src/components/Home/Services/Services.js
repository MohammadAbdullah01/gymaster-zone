import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    // const services = [
    //     { id: 1, title: 'CARDIO TRAINING', img: "", price: 200, description: "Work on your abs and core with state-of-the-art equipments specially brought to you by the best gym in Patna, Mutants." },
    //     { id: 2, title: 'STRENTH TRAINING', img: "", price: 250, description: "Build your strength and get those extra few pounds in before the swimsuit season. Come train under expert personal trainers only at Mutants Gym." },
    //     { id: 3, title: 'WEIGHT LOSS', img: "", price: 180, description: "Lose extra weight and get in shape with expert personal trainers and top notch fitness equipments only at Mutants Gym, the best gym in Patna." }
    // ]
    // console.log(JSON.stringify(services))
    const { services } = useServices()
    return (
        <div className='service'>
            <h1 className='text-center py-5 services-title'>HAVE A LOOK AT OUR SERVICES </h1>
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
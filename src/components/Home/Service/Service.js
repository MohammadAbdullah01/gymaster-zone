import React, { useContext, useEffect } from 'react';
import './Service.css'
import { Col } from 'react-bootstrap';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom';
import { ContextService } from '../../../App';

const Service = ({ service }) => {
    const [, setService] = useContext(ContextService)



    const navigate = useNavigate()
    useEffect(() => {
        Aos.init()
    }, [])

    const { title, img, price, description, id } = service || {};
    const handleServiceBtn = (service) => {
        setService(service)
        navigate('/booking')
    }
    return (
        <Col sm={12} lg={4} md={6} className="mb-3" data-aos="zoom-in-up">
            <div className=' service-container mx-auto' style={{ position: "relative" }}>
                <div className='description'>{description}</div>
                <img className='service-img' src={img} alt="" />
                <div className="details-container">
                    <h1 className='title'>{title} </h1>
                    <h5 className='price'>${price}</h5>
                    <button onClick={() => handleServiceBtn(service)} className="cssbuttons-io-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                        <span>BOOK NOW</span>
                    </button>
                </div>
            </div>
        </Col>
    );
};

export default Service;
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import banner from '../../../images/banner/banner.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='banner-container'>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <div>
                            <img className='banner-img' src={banner} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div className='banner-title-container'>
                            <div className='quotee-container'>
                                <div data-aos="fade-right">
                                    <h1 className='quotee'><span className='stroked'>PERFECT</span> SHAPE</h1>
                                </div>
                                <div data-aos="fade-left">
                                    <h1 className='quotee'>PERFECT <span className='stroked'>LIFE</span></h1>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
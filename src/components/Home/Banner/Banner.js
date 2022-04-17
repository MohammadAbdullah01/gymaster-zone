import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import './Banner.css'


const Banner = () => {

    return (
        <Carousel className='banner'>
            <Carousel.Item interval={3000}>
                <img
                    className="banner-img d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="banner-img d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="banner-img d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
};

export default Banner;
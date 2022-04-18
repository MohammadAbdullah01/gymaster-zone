import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ContextService } from '../../App';
import auth from '../../Firebase/firebase.init';
import './Booking.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
    const [user, loading, error] = useAuthState(auth);
    const [service] = useContext(ContextService)
    const { title, price, description, img } = service;
    const handleSubmit = e => {
        e.preventDefault()
        toast.success("booking successful !")
    }
    return (
        <>
            <Container>
                <div className='booking-container'>
                    <Row>
                        <Col md={12} lg={6}>
                            <div className='booking-service'>
                                <div className='title-price'>
                                    <h1>{title}</h1>
                                    <h2>only ${price}</h2>
                                </div>
                                <img className='booking-img' src={img} alt="" />
                                <p className='booking-description'>{description}</p>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="booking-form">
                                <div className='form-container'>
                                    <h1 className='book-now-title'>BOOK NOW!</h1>
                                    <form onSubmit={handleSubmit}>
                                        <p className='booking-form-text'>Your name</p>
                                        <input type="text" name="name" id="name" />
                                        <p className='booking-form-text'>Your Email</p>
                                        <input readOnly placeholder={user?.email} type="email" name="email" id="email" />
                                        <p className='booking-form-text'>Your Address</p>
                                        <input type="text" name="" id="" />
                                        <p className='booking-form-text'>Your Mobile Number</p>
                                        <input type="number" name="number" id="number" />
                                        <input className='submit-btn' type="submit" value="BOOK" />
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <ToastContainer />
            </Container>
        </>
    );
};

export default Booking;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Booking = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user.email)
    return (
        <>
            <div style={{ minHeight: "81vh" }} className='login-container'>
                <div className='form-container'>
                    <h1 className='login-title'>BOOK NOW !!</h1>
                    <form>
                        <p style={{ marginBottom: "0" }}>Your Name</p>
                        <input type="text" name="name" id="name" required />
                        <p style={{ marginBottom: "0" }}>Your Email</p>
                        <input placeholder={user?.email} readOnly type="email" name="email" id="email" required />
                        <p style={{ marginBottom: "0" }}>Your Address</p>
                        <input type="text" name="address" id="address" required />
                        <p style={{ marginBottom: "0" }}>Your Phone Number</p>
                        <input type="number" name="number" id="number" required />
                        <input className='submit-btn' type="submit" value='SUBMIT' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Booking;